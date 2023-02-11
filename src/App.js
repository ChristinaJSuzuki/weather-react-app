import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <div className="vanilla-weather-app-wrapper">
          <footer className="github-link">
            <a
              href="https://github.com/ChristinaJSuzuki/weather-react-app.git"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              Open-source code
            </a>{" "}
            by Christina J Suzuki
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
