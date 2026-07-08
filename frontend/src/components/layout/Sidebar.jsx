import { NavLink } from "react-router-dom"
import {
  LayoutDashboard,
  Map,
  TrafficCone,
  Activity
} from "lucide-react"

export default function Sidebar() {
  return (
    <div className="glass-sidebar">
      <div>

          <NavLink
            to="/"
          >
        <div className="sidebar-logo">
          <Activity size={20} />
          TraffiSense
        </div></NavLink>

        <div className="sidebar-nav">

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "sidebar-active" : ""}`
            }
          >
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink
            to="/map"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "sidebar-active" : ""}`
            }
          >
            <Map size={18} />
            Live Map
          </NavLink>

          <NavLink
            to="/signals"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "sidebar-active" : ""}`
            }
          >
            <TrafficCone size={18} />
            Signals
          </NavLink>

        </div>
      </div>

    </div>
  )
}
