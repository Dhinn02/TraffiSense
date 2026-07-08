from fastapi import FastAPI
from graph import G

app = FastAPI(title="Traffic Coordination Service")

@app.post("/coordinate")
def coordinate(payload: dict):
    """
    payload:
    {
        "hotspots": [30, 174]
    }
    """
    hotspots = payload["hotspots"]
    coordinated = set(hotspots)

    for h in hotspots:
        for nbr in G.neighbors(h):
            coordinated.add(nbr)

    return {
        "affected_intersections": list(coordinated)
    }
