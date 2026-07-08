import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "./components/layout/Sidebar"
import Topbar from "./components/layout/Topbar"
import Dashboard from "./pages/Dashboard"
import TrafficMap from "./components/map/TrafficMap"
import Signals from "./pages/Signals"
import Home from "./pages/Home"
import { TrafficProvider } from "./context/TrafficContext"

export default function App() {
  return (
    <TrafficProvider>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/*"
            element={
              <div className="flex bg-black text-white">

                <Sidebar />

                <div className="flex-1 min-h-screen flex flex-col">

                  <Topbar />

                  <div className="flex-1">

                    <Routes>
                      <Route path="dashboard" element={<Dashboard />} />
                      <Route path="map" element={<TrafficMap />} />
                      <Route path="signals" element={<Signals />} />
                    </Routes>

                  </div>

                </div>
              </div>
            }
          />

        </Routes>

      </BrowserRouter>
    </TrafficProvider>
  )
}
