from fastapi import FastAPI
from policies import local_decision, risk_level

app = FastAPI(title="Autonomous Traffic Control Agent")

@app.post("/decide")
def decide(payload: dict):
    """
    payload:
    {
        "probabilities": [0.91, 0.03, ...]
    }
    """
    probs = payload["probabilities"]

    actions = {}

    for node, p in enumerate(probs):
        if p >= 0.5:
            actions[str(node)] = {
                "risk": risk_level(p),
                "action": local_decision(p)
            }

    return {"decisions": actions}
