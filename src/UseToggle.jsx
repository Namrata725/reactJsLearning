import { useState } from "react";
function UseToggle() {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <h2>toggle from another component file in React js</h2>

      <button onClick={() => setDisplay(!display)}>toggle</button>
      {display ? <h2>Im toggle from another component file</h2> : null}
    </div>
  );
}

export default UseToggle;
