import "./App.css";
import { useState } from "react";
import { EntrepriseDate } from "./EntrepriseData";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";

function App() {
  const [data, setData] = useState({
    labels: EntrepriseDate.map((ed) => ed.year),
    datasets: [
      {
        label: "Exports IN MAD",
        data: EntrepriseDate.map((ed) => ed.exportsInMAD),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },

      {
        label: "Imports IN MAD",
        data: EntrepriseDate.map((ed) => ed.importsInMAD),
        backgroundColor: [
          "#2a71d0",
          "#f3ba2f",
          "#ecf0f1",
          "#50AF95",
          "rgba(75,192,192,1)",
        ],
        borderColor: "red",
        borderWidth: 4,
      },
    ],
  });

  return (
    <div className="App">
      <div style={{ width: 400 }}>
        <BarChart chartData={data} />
      </div>

      <div style={{ width: 400 }}>
        <LineChart chartData={data} />
      </div>

      <div style={{ width: 400 }}>
        <PieChart chartData={data} />
      </div>
    </div>
  );
}

export default App;
