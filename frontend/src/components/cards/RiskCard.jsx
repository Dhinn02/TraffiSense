import {
  AlertTriangle,
  TrendingUp,
  ShieldAlert
} from "lucide-react"

export default function RiskCard({ node }) {
  const { id, prob, risk, action } = node

  const percent = (prob * 100).toFixed(1)

  const riskStyles = {
    HIGH: {
      color: "#ff4d6d",
      bg: "rgba(255,77,109,0.15)",
      icon: <AlertTriangle size={18} />
    },
    MEDIUM: {
      color: "#facc15",
      bg: "rgba(250,204,21,0.15)",
      icon: <TrendingUp size={18} />
    },
    LOW: {
      color: "#22c55e",
      bg: "rgba(34,197,94,0.15)",
      icon: <ShieldAlert size={18} />
    }
  }

  const style = riskStyles[risk] || riskStyles.LOW

  return (
    <div className="risk-card">

      <div className="risk-header">

        <div className="risk-id">
          {id}
        </div>

        <div
          className="risk-badge"
          style={{
            color: style.color,
            background: style.bg,
            borderColor: style.color
          }}
        >
          {style.icon}
          {risk}
        </div>

      </div>

      <div className="risk-prob">

        <span>Probability</span>
        <span>{percent}%</span>

      </div>

      <div className="risk-bar">
        <div
          className="risk-bar-fill"
          style={{
            width: `${percent}%`,
            background: style.color
          }}
        />
      </div>

      <div className="risk-action">
        Action: <strong>{action.replace("_", " ")}</strong>
      </div>

    </div>
  )
}
