import torch
import torch.nn as nn

class TrafficGRU(nn.Module):
    def __init__(self, hidden_size=64):
        super().__init__()
        self.gru = nn.GRU(
            input_size=2,        
            hidden_size=hidden_size,
            batch_first=True
        )
        self.fc = nn.Linear(hidden_size, 1)

    def forward(self, x):
        """
        x shape: (B, T, N, F=2)
        """
        B, T, N, F = x.shape

        x = x.permute(0, 2, 1, 3) 
        x = x.reshape(B * N, T, F)
        out, _ = self.gru(x)
        out = out[:, -1, :]
        out = self.fc(out)
        out = torch.sigmoid(out)

        return out.view(B, N)
