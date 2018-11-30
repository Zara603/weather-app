import React from "react";
import ReactDOM from "react-dom";
import WeatherWidget from "./containers";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <WeatherWidget />
        </header>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
