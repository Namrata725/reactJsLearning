import styled from "styled-components";
function StyleComponentDemo() {
  const Heading = styled.h1({
    color: "blue",
    border: "1px solid blue",
    padding: "10px",
  });

  const StyleBtn = styled.button`
    color: red;
    width: 130px;
    height: 40px;
    margin: 20px;
    font-size: 20px;
  `;

  return (
    <div>
      <Heading>Welcome</Heading>
      <Heading>My name is namrata..</Heading>
      <StyleBtn
        onClick={() => {
          alert("button clicked");
        }}
      >
        click me !!
      </StyleBtn>
    </div>
  );
}

export default StyleComponentDemo;
