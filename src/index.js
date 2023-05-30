import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import ThemeSelector from "./Components/ThemeSelector/ThemeSelector.js";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ThemeSelector> */}
    <App />
    {/* </ThemeSelector> */}
  </React.StrictMode>
);
