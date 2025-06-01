function MoreProps({ name = "New User" }) {
  return (
    <div>
      <p>Name:{name}</p>
      <Wrapper>
        <p>Wrapper no: 1</p>
      </Wrapper>

      <Wrapper>
        <p>Wrapper no: 2</p>
        <h4>Register Please </h4>
      </Wrapper>

      <Wrapper>
        <p>Wrapper no: 2</p>
        <h4 style={{ color: "red" }}>please login </h4>
      </Wrapper>

      <Wrapper color="green">
        <p>Wrapper no: 2</p>
        <h4 style={{ color: "red" }}>please login </h4>
      </Wrapper>
    </div>
  );
}

function Wrapper({ children, color = "orange" }) {
  return (
    <div
      style={{
        border: "1px solid blue",
        padding: "10px",
        color: color,
        margin: "10px",
      }}
    >
      <p>Wrapper Component</p>
      {children}
    </div>
  );
}

export default MoreProps;
