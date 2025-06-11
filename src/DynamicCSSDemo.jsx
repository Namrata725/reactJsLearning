import { useState } from "react";

function DynamicCSSDemo() {
  const [cardStyle, setCardStyle] = useState({
    padding: "20px",
    border: "2px solid green",
    width: "300px",
    margin: "20px",
  });

  const [Grid, setGrid] = useState(true);

  const updateTheme = (bg, textColor) => {
    setCardStyle({ ...cardStyle, backgroundColor: bg, color: textColor });
  };

  return (
    <div>
      <h4 style={{ textAlign: "center", color: "Green" }}>Dynamic css Demo</h4>
      <button
        onClick={() => {
          updateTheme("green", "white");
        }}
      >
        Dark theme
      </button>
      <button
        onClick={() => {
          updateTheme("white", "green");
        }}
      >
        Lite theme
      </button>
      <button
        onClick={() => {
          setGrid(!Grid);
        }}
      >
        Grid Toggle
      </button>

      <div style={{ display: Grid ? "flex" : "block", flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/022/347/007/non_2x/little-monkey-smile-photo.jpg"
            alt=""
            style={{ width: "300px" }}
          />
          <p>
            <strong>Smiling monkey</strong>
          </p>
        </div>

        <div style={cardStyle}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/022/347/007/non_2x/little-monkey-smile-photo.jpg"
            alt=""
            style={{ width: "300px" }}
          />
          <p>
            <strong>Smiling monkey</strong>
          </p>
        </div>

        <div style={cardStyle}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/022/347/007/non_2x/little-monkey-smile-photo.jpg"
            alt=""
            style={{ width: "300px" }}
          />
          <p>
            <strong>Smiling monkey</strong>
          </p>
        </div>

        <div style={cardStyle}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/022/347/007/non_2x/little-monkey-smile-photo.jpg"
            alt=""
            style={{ width: "300px" }}
          />
          <p>
            <strong>Smiling monkey</strong>
          </p>
        </div>

        <div style={cardStyle}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/022/347/007/non_2x/little-monkey-smile-photo.jpg"
            alt=""
            style={{ width: "300px" }}
          />
          <p>
            <strong>Smiling monkey</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DynamicCSSDemo;
