import "./App.css";
import BarChart from "./Component/BarChart";
import Scatter from "./Component/Scatter";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "#c3c0bb", height: "1000px" }}
    >
      <div style={{ marginBottom: "3%" }}>
        <u style={{ color: "#263238" }}>Manufac Analytics </u>
      </div>
      <Scatter />
      <BarChart />
    </div>
  );
}

export default App;
