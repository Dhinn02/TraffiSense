import { ArrowUpRight, AlertTriangle, ShieldCheck } from "lucide-react"

export default function SignalTable({ data }) {

  const getRiskClass = (risk) => {
    if (risk === "HIGH") return "risk-high"
    if (risk === "MEDIUM") return "risk-medium"
    return "risk-low"
  }

  const getRiskIcon = (risk) => {
    if (risk === "HIGH") return <AlertTriangle size={16} />
    if (risk === "MEDIUM") return <ArrowUpRight size={16} />
    return <ShieldCheck size={16} />
  }

  return (
    <div className="signal-glass">

      <div className="signal-title">
        Signal Control Actions
      </div>

      <div className="signal-table">

        <div className="signal-row signal-head">

          <div>Intersection</div>
          <div>Probability</div>
          <div>Risk Level</div>
          <div>Recommended Action</div>

        </div>

        {data.map((row) => (

          <div key={row.id} className="signal-row">

            <div className="signal-id">
              {row.id}
            </div>

            <div className="signal-prob">
              {(row.prob * 100).toFixed(1)}%
            </div>

            <div className={`signal-risk ${getRiskClass(row.risk)}`}>
              {getRiskIcon(row.risk)}
              {row.risk}
            </div>

            <div className="signal-action">
              {row.action}
            </div>

          </div>

        ))}

      </div>
    </div>
  )
}
