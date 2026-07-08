import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./styles/index.css"
import "./styles/glass.css"
import "./styles/layout-glass.css"
import "./styles/laser-hero.css"


import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)
