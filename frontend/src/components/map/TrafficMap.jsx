import { MapContainer, TileLayer, Circle, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { useTraffic } from "../../context/TrafficContext"
import sensorLocations from "../../data/sensor_locations.json"

const locationMap = Object.fromEntries(
  sensorLocations.map((s) => [
    s.index,
    { lat: s.lat ?? s.latitude, lng: s.lng ?? s.longitude }
  ])
)

export default function TrafficMap() {
  const { nodes } = useTraffic()

  if (!nodes.length) {
    return <div className="p-6">Loading traffic map...</div>
  }

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[12.9716, 77.5946]}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {nodes.map((n) => {
          const index = Number(n.id.replace("I", ""))
          const loc = locationMap[index]

          if (!loc || loc.lat == null || loc.lng == null) {
            return null
          }

          const color =
            n.risk === "HIGH"
              ? "red"
              : n.risk === "MEDIUM"
              ? "orange"
              : "green"

          return (
            <Circle
              key={n.id}
              center={[loc.lat, loc.lng]}
              radius={300 + n.prob * 1000}
              pathOptions={{ color }}
            >
              <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                <div className="text-sm">
                  <div><strong>Sensor:</strong> {n.id}</div>
                  <div><strong>Risk:</strong> {n.risk}</div>
                  <div><strong>Probability:</strong> {(n.prob * 100).toFixed(1)}%</div>
                  <div><strong>Action:</strong> {n.action}</div>
                </div>
              </Tooltip>
            </Circle>
          )
        })}
      </MapContainer>
    </div>
  )
}
