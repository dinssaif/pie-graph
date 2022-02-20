import React, { useState } from "react";
import Line from "./Line";

function LineGraph(props) {
  const [inputValue, setInputValue] = useState({
    gradeA: 100,
    gradeB: 200,
    gradeC: 300,
  });
  const gradeAValueHandler = (e) => {
    setInputValue({ ...inputValue, gradeA: e.target.value });
  };
  const gradeBValueHandler = (e) => {
    setInputValue({ ...inputValue, gradeB: e.target.value });
  };
  const gradeCValueHandler = (e) => {
    setInputValue({ ...inputValue, gradeC: e.target.value });
  };
  props.getValue(inputValue);
  const totalValue =
    +inputValue.gradeA + +inputValue.gradeB + +inputValue.gradeC;

  const getPersent = (prams) => (prams / totalValue) * 100;

  const redLine = {
    position: "absolute",
    height: "22px",
    width: `${getPersent(inputValue.gradeC)}%`,
    border: "transparant solid",
    borderRadius: "11px",
    backgroundColor: "red",
  };
  const yellowLine = {
    position: "absolute",
    height: "22px",
    width: `${
      getPersent(inputValue.gradeA) +
      getPersent(inputValue.gradeC) +
      getPersent(inputValue.gradeB)
    }%`,
    border: "transparant solid",
    borderRadius: "11px",
    backgroundColor: "rgb(221, 221, 90)",
  };
  const greenLine = {
    position: "absolute",
    height: "22px",
    width: `${getPersent(inputValue.gradeA) + getPersent(inputValue.gradeC)}%`,
    border: "transparant solid",
    borderRadius: "11px",
    backgroundColor: "rgb(47, 255, 47)",
  };
  return (
    <div>
      <div className="top-section">
        <div className="input-field A">
          <div>
            <strong>A grade</strong>
          </div>
          <div>
            <input
              value={inputValue.gradeA}
              onChange={gradeAValueHandler}
              type="number"
              min="0"
              placeholder="Type number"
            />
          </div>
        </div>
        <div className="input-field B">
          <div>
            <strong>B grade</strong>
          </div>
          <div>
            <input
              value={inputValue.gradeB}
              onChange={gradeBValueHandler}
              type="number"
              min="0"
              placeholder="Type number"
            />
          </div>
        </div>
        <div className="input-field C">
          <div>
            <strong>C grade</strong>
          </div>
          <div>
            <input
              value={inputValue.gradeC}
              onChange={gradeCValueHandler}
              type="number"
              min="0"
              placeholder="Type number"
            />
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <section>
          <h1>{totalValue}</h1>
          <p>Total</p>
        </section>
        <div className="lines-div">
          <Line styles={yellowLine} />
          <Line styles={greenLine} />
          <Line styles={redLine} />
        </div>
      </div>
    </div>
  );
}

export default LineGraph;
