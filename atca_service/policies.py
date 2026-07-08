def risk_level(p):
    if p >= 0.8:
        return "HIGH"
    elif p >= 0.5:
        return "MEDIUM"
    return "LOW"


def local_decision(p):
    risk = risk_level(p)

    if risk == "HIGH":
        return "EXTEND_GREEN"
    elif risk == "MEDIUM":
        return "ADJUST_SIGNAL"
    return "NO_ACTION"
