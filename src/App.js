import React, { useState } from "react";
import "./App.css";
import { Calculator, ChangeColor, ChangeText } from "./components";

function App() {
  const [color, setColor] = useState("black");
  const [text, setText] = useState("Hello World");
  const [result, setResult] = useState("");

  return (
    <div className="App">
      <ChangeText text={text} setText={setText} />
      {/* <ChangeColor color={color} setColor={setColor} />
      <Calculator result={result} setResult={setResult} /> */}
    </div>
  );
}

export default App;
