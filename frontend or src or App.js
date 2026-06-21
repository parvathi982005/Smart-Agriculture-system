import React from "react";
import Crop from "./pages/Crop";
import Weather from "./pages/Weather";
import MarketData from "./pages/MarketData";

function App() {
  return (
    <div>
      <h1>Smart Agriculture System</h1>

      <Crop />
      <Weather />
      <MarketData />
    </div>
  );
}

export default App;
