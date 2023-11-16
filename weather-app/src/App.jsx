import { useState } from "react";
import "./assets/styles/main.scss";
import SearchBox from "./components/SearchBox.jsx";
import WeatherBox from "./components/WeatherBox.jsx";
import WeatherDetails from "./components/WeatherDetails.jsx";
import NotFound from "./components/NotFound.jsx";
function App() {
  return (
    <main className="container">
      <SearchBox />
      <WeatherBox />
      <WeatherDetails />
      <NotFound />
    </main>
  );
}

export default App;
