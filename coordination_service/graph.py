import pickle
import networkx as nx

with open("adj_mx.pkl", "rb") as f:
    data = pickle.load(f, encoding="latin1")

adj_mx = data[-1]
G = nx.from_numpy_array(adj_mx)
