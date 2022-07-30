//Component Change Color
export default function ChangeColor(props) {
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
