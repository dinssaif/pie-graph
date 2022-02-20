import React from "react";
import Circle from "./Circle";

function PieGraph(props) {
  const inputValue = props.inputValue;
  const totalValue =
    +inputValue.gradeA + +inputValue.gradeB + +inputValue.gradeC;

  const getPersent = (prams) => (prams / totalValue) * 100;

  const circle1 = {
    position: "absolute",
    width: "150px",
    height: "150px",
    border: "transparent solid",
    borderRadius: "50%",
    backgroundImage: `conic-gradient(from 160deg,orange 0,orange ${getPersent(
      inputValue.gradeC
    )}%,red 0,red ${
      getPersent(inputValue.gradeA) + getPersent(inputValue.gradeC)
    }%,rgb(221, 221, 90) 0,rgb(221, 221, 90) ${
      getPersent(inputValue.gradeB) +
      getPersent(inputValue.gradeA) +
      getPersent(inputValue.gradeC)
    }%)`,
  };
  const circle2 = {
    position: "absolute",
    width: "120px",
    height: "120px",
    backgroundColor: "white",
    border: "transparent solid",
    borderRadius: "50%",
  };
  const circle3 = {
    position: "absolute",
    width: "150px",
    height: "150px",
    border: "white 10px solid",
    borderRadius: "50%",
  };

  return (
    <div className="pie-graph">
      <Circle styles={circle1} />
      <Circle styles={circle2} />
      <Circle styles={circle3} />
      <section>
        <h1>{totalValue}</h1>
        <p>Items</p>
      </section>
    </div>
  );
}

export default PieGraph;
