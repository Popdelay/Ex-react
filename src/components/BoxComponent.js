// Component Change Text
export default function ChangeText(props) {
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
