import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"

export default function CongestionChart({ data }) {
  return (
    <div className="chart-glass">

      <div className="chart-title">
        Highest Congestion Risk Intersections
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>

          <CartesianGrid
            stroke="rgba(255,255,255,0.08)"
            strokeDasharray="3 3"
          />

          <XAxis dataKey="id" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" domain={[0, 1]} />

          <Tooltip
            contentStyle={{
              background: "#050505",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "12px"
            }}
          />

          <Bar
            dataKey="prob"
            fill="url(#riskGradient)"
            radius={[8, 8, 0, 0]}
          />

          <defs>
            <linearGradient
              id="riskGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#FF47A3" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>

        </BarChart>
      </ResponsiveContainer>

    </div>
  )
}
