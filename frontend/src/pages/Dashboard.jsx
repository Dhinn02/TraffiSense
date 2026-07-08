import { useTraffic } from "../context/TrafficContext"
import RiskCard from "../components/cards/RiskCard"
import CongestionChart from "../components/charts/CongestionChart"
import SpeedChart from "../components/charts/SpeedChart"
import CsvUpload from "../components/upload/CsvUpload"

import LaserFlow from "../components/ui/LaserFlow"

export default function Dashboard() {
  const { nodes } = useTraffic()

  const topRisky = nodes.slice(0, 6)

  const chartData = topRisky.map((n) => ({
    id: n.id,
    prob: n.prob
  }))

  return (
    <div className="space-y-6">

      <section className="laser-hero">

        <div className="laser-bg">
          <LaserFlow
            horizontalBeamOffset={0.1}
            verticalBeamOffset={0.0}
            color="#FF47A3"
            flowSpeed={0.35}
            verticalSizing={2}
            horizontalSizing={0.5}
            fogIntensity={0.45}
            fogScale={0.3}
            wispSpeed={15}
            wispIntensity={5}
            flowStrength={0.25}
          />
        </div>

        <div className="laser-overlay" />

        <div className="laser-content">
          <h1 className="laser-title">
            DASHBOARD
          </h1>
        </div>

      </section>

<div className="glass-page">

      <div className="glass-section">
        <div className="glass-card">

          <div className="glass-title">
            Upload Traffic Dataset
          </div>

          <CsvUpload />

        </div>
      </div>

      <div className="glass-section">

        <div className="glass-grid">

          {topRisky.map((n) => (
              <RiskCard node={n} />
          ))}

        </div>

      </div>
<div className="glass-section">

  <div className="glass-card glass-chart-full">

    <div className="glass-title">
      Speed Analysis
    </div>

    <SpeedChart data={nodes.slice(0, 10)} />

  </div>

  <div className="glass-card glass-chart-full">

    <div className="glass-title">
      Congestion Probability
    </div>

    <CongestionChart data={chartData} />

  </div>

</div>



    </div>

    </div>
  )
}


