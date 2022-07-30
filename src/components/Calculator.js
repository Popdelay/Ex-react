//Component Calculator
export default function Calculator(props) {
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
