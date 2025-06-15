import LiftingUpAddUser from "./LiftingUpAddUser";
import LiftingUpDisplayUser from "./LiftingUpDisplayUser";
import { useState } from "react";
function LiftUpStateDemo() {
  const [user, setUser] = useState("");
  return (
    <div>
      <h4>Lifting Up state demo</h4>
      <LiftingUpAddUser user={user} setUser={setUser} />
      <LiftingUpDisplayUser user={user} />
    </div>
  );
}

export default LiftUpStateDemo;
