import React from "react"
import { useNavigate } from "react-router-dom"
import Beams from "../components/ui/Beams"
import "./Home.css"

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home-wrapper">

      <div className="beams-bg">
        <Beams
          beamWidth={1.9}
          beamHeight={30}
          beamNumber={20}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={31}
        />
      </div>

      <div className="navbar">
        <div className="nav-left">TraffiSense</div>

        <div className="nav-right">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
        </div>
      </div>

      <div className="home-content">

        <h1>
          Predictions for <br />
          smarter traffic systems
        </h1>

        <p>
          AI-Powered Traffic Congestion Prevention & Signal Optimization
        </p>

        <div className="button-group">

          <button
            className="btn-white"
            onClick={() => navigate("/dashboard")}
          >
            Get Started
          </button>

        </div>

      </div>
    </div>
  )
}

export default Home
