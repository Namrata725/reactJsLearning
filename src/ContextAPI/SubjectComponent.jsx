import { useContext } from "react";
import { SubjectContext } from "./ContextData";
function SubjectComponent() {
  const subject = useContext(SubjectContext);
  return (
    <div style={{ padding: "20px", backgroundColor: "lightpink" }}>
      <h1>Subject Component</h1>
      <h3>Selected Subject:{subject}</h3>
    </div>
  );
}

export default SubjectComponent;
