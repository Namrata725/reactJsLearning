import { useState } from "react";

import UseToggle from "./UseToggle";
function Toggle() {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <h2>Toggle In React JS</h2>
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Toggle
      </button>
      {display ? <h2>Hi, Im Namrata...</h2> : null}

      <UseToggle />
      {/* This is the component that is imported from UseToggle.jsx file */}
    </div>
  );
}

export default Toggle;

// calling the Toggle component in Toggle.jsx file
