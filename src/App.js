import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");
  const [text, setText] = useState("Hello world");
  const [result, setResult] = useState("");

  return (
    <div className="App">
      <ChangeText text={text} setText={setText} />
      <ChangeColor color={color} setColor={setColor} />
      <Calculator result={result} setResult={setResult} />
    </div>
  );
}

//Component Calculator
function Calculator(props) {
  const { result, setResult } = props;

  const btn1 = () => {
    setResult(result.concat(1));
  };
  const btn2 = () => {
    setResult(result.concat(2));
  };
  const btn3 = () => setResult(result.concat(3));
  const plusBtn = () => setResult(result.concat("+"));
  const minusBtn = () => setResult(result.concat("-"));
  console.log(result);
  const equalBtn = () => setResult(eval(result).toString());
  const resetBtn = () => setResult("");

  return (
    <div className="my-calculator">
      <h1>Calculator</h1>
      <div className="display">{result}</div>
      <div className="number-btn">
        <button className="1-btn, black" onClick={btn1}>
          1
        </button>
        <button className="2-btn, black" onClick={btn2}>
          2
        </button>
        <button className="2-btn, black" onClick={btn3}>
          3
        </button>
      </div>
      <div className="operator-btn">
        <button className="plus-btn, black" onClick={plusBtn}>
          +
        </button>
        <button className="minus-btn, black" onClick={minusBtn}>
          -
        </button>
        <button className="equal-btn, black" onClick={equalBtn}>
          =
        </button>
        <div>
          <button className="reset-btn, red" onClick={resetBtn}>
            CE
          </button>
        </div>
      </div>
    </div>
  );
}

//Component Change Color
function ChangeColor(props) {
  const { color, setColor } = props;
  const red = () => setColor("red");
  const green = () => setColor("green");
  const pink = () => setColor("pink");
  const reset = () => setColor("black");

  return (
    <div className="color-box">
      <h1>Change color here</h1>
      <div
        className="box"
        style={{ backgroundColor: color, width: "300px", height: "100px" }}
      ></div>
      <button className="red-btn, red" onClick={red}>
        Red
      </button>
      <button className="green-btn, green" onClick={green}>
        Green
      </button>
      <button className="pink-btn, pink" onClick={pink}>
        Pink
      </button>
      <button className="reset-btn, black" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

// Component Change Text
function ChangeText(props) {
  const { text, setText } = props;
  const reverseText = () => setText(text.split("").reverse().join(""));
  const upperText = () => setText(text.toUpperCase());
  const lowerText = () => setText(text.toLowerCase());

  return (
    <div className="color-box">
      <h1>Change text style here</h1>
      <div className="text-box">{text}</div>
      <button className="reverse-btn, black" onClick={reverseText}>
        Reverse
      </button>
      <button className="upper-btn, black" onClick={upperText}>
        Uppercase
      </button>
      <button className="lower-btn, black" onClick={lowerText}>
        Lowercase
      </button>
    </div>
  );
}

export default App;
