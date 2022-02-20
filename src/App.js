import { useState } from "react";
import "./App.css";
import Background from "./components/Background";
import Card from "./components/Card";
import ItemsDetails from "./components/ItemsDetails";
import LineGraph from "./components/LineGraph";
import PieGraph from "./components/PieGraph";
function App() {
  const [data, setData] = useState({});
  const getInputValue = (params) => {
    setData(params);
  };
  const h3 = {
    position: "absolute",
    top: "-5px",
    left: "20px",
  };
  return (
    <Background>
      <Card>
        <h3 style={h3}>Shrinkage</h3>
        <PieGraph inputValue={data} />
        <ItemsDetails />
        <LineGraph getValue={getInputValue} />
      </Card>
    </Background>
  );
}

export default App;
