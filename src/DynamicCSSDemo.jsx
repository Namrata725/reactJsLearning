import { useState } from "react";

function DynamicCSSDemo() {
  const [styleCard, setCrdStyle] = useState({
    boxShadow: "5px 5px 5px 5px",
    margin: "20px",
    padding: "10px",
    width: "350px",
  });

  const [textColor, setColor] = useState("blue");

  const [grid, setGrid] = useState(true);

  const updateTheme = (bg, textColor) => {
    setCrdStyle({ ...styleCard, backgroundColor: bg });
    setColor(textColor);
  };

  return (
    <div>
      <h2 style={{ color: "red", textAlign: "center" }}>Dynamic css Demo</h2>

      <button
        onClick={() => {
          updateTheme("orange", "white");
        }}
      >
        Orange Theme
      </button>
      <button
        onClick={() => {
          updateTheme("white", "blue");
        }}
      >
        Default Theme
      </button>

      <button
        onClick={() => {
          setGrid(!grid);
        }}
      >
        {" "}
        Toggle Grid
      </button>

      <div style={{ display: grid ? "flex" : "block", flexWrap: "wrap" }}>
        <div style={styleCard}>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png"
              alt="img"
              style={{ width: "300px", padding: "30px" }}
            />
          </div>

          <div>
            <h4 style={{ color: textColor }}>Sunset</h4>
            <h5 style={{ color: textColor }}>The boy is Reading the book </h5>
          </div>
        </div>

        <div style={styleCard}>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png"
              alt="img"
              style={{ width: "300px", padding: "30px" }}
            />
          </div>

          <div>
            <h4 style={{ color: textColor }}>Sunset</h4>
            <h5 style={{ color: textColor }}>The boy is Reading the book </h5>
          </div>
        </div>

        <div style={styleCard}>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png"
              alt="img"
              style={{ width: "300px", padding: "30px" }}
            />
          </div>

          <div>
            <h4 style={{ color: textColor }}>Sunset</h4>
            <h5 style={{ color: textColor }}>The boy is Reading the book </h5>
          </div>
        </div>

        <div style={styleCard}>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png"
              alt="img"
              style={{ width: "300px", padding: "30px" }}
            />
          </div>

          <div>
            <h4 style={{ color: textColor }}>Sunset</h4>
            <h5 style={{ color: textColor }}>The boy is Reading the book </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DynamicCSSDemo;
