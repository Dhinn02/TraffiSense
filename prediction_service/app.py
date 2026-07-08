from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import torch
import pandas as pd

from model import TrafficGRU

app = FastAPI(title="Traffic Congestion Prediction Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = TrafficGRU()
model.load_state_dict(
    torch.load("traffic_gru_final.pt", map_location="cpu")
)
model.eval()

@app.post("/predict")
def predict(payload: dict):
    """
    Expects:
    payload["input"] shape = (B, T, N, F=2)
    """
    x = torch.tensor(payload["input"], dtype=torch.float32)

    with torch.no_grad():
        probs = model(x)

    return {"probabilities": probs.tolist()[0]}

@app.post("/predict-csv")
async def predict_from_csv(file: UploadFile = File(...)):
    """
    CSV format:
    sensor_id,t1,t2,...,t12
    """

    df = pd.read_csv(file.file)

    if "sensor_id" not in df.columns:
        return {"error": "CSV must contain sensor_id column"}

    speed_values = df.drop(columns=["sensor_id"]).values

    if speed_values.shape[1] != 12:
        return {"error": "CSV must contain exactly 12 time steps"}


    speed_tensor = torch.tensor(speed_values, dtype=torch.float32) 
    dummy_feature = torch.zeros_like(speed_tensor)           

    features = torch.stack([speed_tensor, dummy_feature], dim=-1)

    x = features.permute(1, 0, 2).unsqueeze(0)

    with torch.no_grad():
        probs = model(x)[0].tolist()

    response = [
        {
            "id": df.iloc[i]["sensor_id"],
            "prob": float(probs[i])
        }
        for i in range(len(probs))
    ]

    return response
