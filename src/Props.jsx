import UserComponent from "./UserComponent";
import { useState } from "react";
function Props() {
  const name = "Namrata";
  const age = 23;

  const user = {
    name: "Orion",
    age: 24,
    email: "orion@gmail.com",
  };

  const user2 = {
    name: "Orion2",
    age: 24,
    email: "orion2@gmail.com",
  };

  const country = ["Nepal", "Australia", "USA", "sweden", "India"];

  const [student, setStudent] = useState();
  return (
    <div>
      <h4>Props</h4>
      <hr />
      <UserComponent
        name={name}
        age={age}
        user={user}
        user2={user2}
        country={country}
        student={student}
        setStudent={setStudent}
      />
    </div>
  );
}

export default Props;
