from fastapi import FastAPI
from logger import log_action

app = FastAPI(title="Traffic Evidence Logger")

@app.post("/log")
def log(payload: dict):
    """
    payload:
    {
        "node": 30,
        "risk": "HIGH",
        "action": "EXTEND_GREEN",
        "prob": 0.91
    }
    """
    log_action(
        payload["node"],
        payload["risk"],
        payload["action"],
        payload["prob"]
    )

    return {"status": "logged"}
