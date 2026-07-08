import LaserFlow from "../components/ui/LaserFlow"
import { useTraffic } from "../context/TrafficContext"
import SignalTable from "../components/table/SignalTable"

export default function Signals() {
  const { nodes } = useTraffic()

  return (
    <div className="signals-page">

      <section className="signals-hero">

        <div className="signals-laser">
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
          />
        </div>

        <div className="signals-overlay" />

        <div className="signals-content">
          <h1>SIGNALS CONTROL</h1>
        </div>

      </section>

      <div className="signals-table-wrap">

        <SignalTable data={nodes.slice(0, 10)} />

      </div>

    </div>
  )
}
