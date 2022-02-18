import Stats from "./Stats";
import Search from "./Search";
import Forecast from "./Forecast";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="row">
        <Stats defaultcity="Tepoztlán" />
      </div>
      <hr />
      <div className="row">
        <Search />
      </div>
      <div className="row"></div>
      <hr />
      <Forecast />
      <hr />
      <div className="row">
        <small className="text-center">
          <a
            href="https://github.com/Ana-LanitaChan/react-weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            This app is open source,
          </a>{" "}
          coded by{" "}
          <a
            href="https://github.com/Ana-LanitaChan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ana Aguilar.
          </a>
        </small>
      </div>
    </div>
  );
}

export default App;
