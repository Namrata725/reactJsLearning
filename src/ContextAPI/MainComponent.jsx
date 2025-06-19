import CollageComponent from "./CollageComponent";
import { SubjectContext } from "./ContextData";
import React, { useState } from "react";

function MainComponent() {
  const [subject, setSubject] = useState("");

  return (
    <div style={{ padding: "20px", backgroundColor: "lightblue" }}>
      <h1>Main Component</h1>

      <SubjectContext.Provider value={subject}>
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="">Select a subject</option>
          <option value="English">English</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
        </select>

        <button
          onClick={(event) => {
            setSubject(event.target.value);
          }}
        >
          Clear data
        </button>
        <CollageComponent />
      </SubjectContext.Provider>
    </div>
  );
}

export default MainComponent;
