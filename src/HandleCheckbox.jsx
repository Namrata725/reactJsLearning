import { useState } from "react";
function HandleCheckbox() {
  const [skills, setskills] = useState([]);
  const HandleCheckboxChange = (event) => {
    console.log(event.target.value, event.target.checked);

    if (event.target.checked) {
      setskills([...skills, event.target.value]);
    } else {
      setskills([...skills.filter((skill) => skill !== event.target.value)]);
    }
  };
  return (
    <div>
      <h3>Hnadle check box</h3>
      <h4>seelct your Skills</h4>
      <input
        type="checkbox"
        value="PHP"
        id="PHP"
        onChange={HandleCheckboxChange}
      />
      <label htmlFor="PHP">PHP</label>

      <br />
      <br />

      <input
        type="checkbox"
        value="Java"
        id="Java"
        onChange={HandleCheckboxChange}
      />
      <label htmlFor="Java">Java</label>

      <br />
      <br />

      <input
        type="checkbox"
        value="JavaScript"
        id="JavaScript"
        onChange={HandleCheckboxChange}
      />
      <label htmlFor="JavaScript">JavaScript</label>
      <br />
      <br />

      <input
        type="checkbox"
        value="Python"
        id="Python"
        onChange={HandleCheckboxChange}
      />
      <label htmlFor="Python">Python</label>
      <br />
      <br />

      <input
        type="checkbox"
        value="C++"
        id="C++"
        onChange={HandleCheckboxChange}
      />
      <label htmlFor="C++">C++</label>

      <h3>{skills.toString()}</h3>
    </div>
  );
}

export default HandleCheckbox;
