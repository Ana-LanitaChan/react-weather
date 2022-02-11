import Stats from "./Stats";
import City from "./City";
import Search from "./Search";
import Forecast from "./Forecast";
import "./App.css";
import ReactAnimatedWeather from "react-animated-weather";

function App() {
  return (
    <div className="App">
      <div className="row justify-content-end align-baseline">
        <div className="col-md-2 mb-3">
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="goldenrod"
            size={72}
            animate={true}
          />
        </div>
        <div className="col-md-6">
          <City />
        </div>
        <div className="col-md-4">
          <Stats />
        </div>
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
          This app is open source, coded by{" "}
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
