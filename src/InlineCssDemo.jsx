function InlineCssDemo() {
  const cardStyle = {
    display: "flex",
    flexWrap: "wrap",
    boxShadow: "5px 5px 5px 5px",
    margin: "20px",
  };
  return (
    <div>
      <div>
        <h2
          style={{
            color: "red",
            textAlign: "center",
          }}
        >
          InlineCssDemo
        </h2>

        <div style={cardStyle}>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png"
              alt="img"
              style={{ width: "300px", padding: "30px" }}
            />
          </div>

          <div>
            <h4 style={{ color: "blue" }}>Sunset</h4>
            <h5 style={{ color: "blue" }}>The boy is Reading the book </h5>
          </div>

          <div>
            <img
              src="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png"
              alt="img"
              style={{ width: "300px", padding: "30px" }}
            />
          </div>

          <div>
            <h4 style={{ color: "blue" }}>Sunset</h4>
            <h5 style={{ color: "blue" }}>The boy is Reading the book </h5>
          </div>

          <div>
            <img
              src="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png"
              alt="img"
              style={{ width: "300px", padding: "30px" }}
            />
          </div>

          <div>
            <h4 style={{ color: "blue" }}>Sunset</h4>
            <h5 style={{ color: "blue" }}>The boy is Reading the book </h5>
          </div>

          <div>
            <img
              src="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png"
              alt="img"
              style={{ width: "300px", padding: "30px" }}
            />
          </div>

          <div>
            <h4 style={{ color: "blue" }}>Sunset</h4>
            <h5 style={{ color: "blue" }}>The boy is Reading the book </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InlineCssDemo;
