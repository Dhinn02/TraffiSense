import csv
import time

LOG_FILE = "traffic_logs.csv"

def log_action(node, risk, action, prob):
    with open(LOG_FILE, "a", newline="") as f:
        writer = csv.writer(f)
        writer.writerow([
            int(time.time()),
            f"I{node}",
            risk,
            action,
            round(prob, 3)
        ])
