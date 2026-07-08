import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"
import { useTraffic } from "../../context/TrafficContext"

export default function SpeedChart() {
  const { nodes } = useTraffic()

  const data = nodes.slice(0, 6).map((n, i) => ({
    t: `T-${6 - i}`,
    speed: Math.round(70 - n.prob * 40)
  }))

  if (!data.length) {
    return (
      <div className="chart-glass p-4">
        Upload traffic CSV to view speed trend
      </div>
    )
  }

  return (
    <div className="chart-glass">

      <div className="chart-title">
        Predicted Average Speed Trend
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data}>

          <CartesianGrid
            stroke="rgba(255,255,255,0.08)"
            strokeDasharray="3 3"
          />

          <XAxis dataKey="t" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />

          <Tooltip
            contentStyle={{
              background: "#050505",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "12px"
            }}
          />

          <Line
            type="monotone"
            dataKey="speed"
            stroke="#FF47A3"
            strokeWidth={3}
            dot={{ r: 4 }}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  )
}
