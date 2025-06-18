import { useId } from "react";
function UseIDDemo() {
  return (
    <div>
      <br />
      <br />
      <UserForm />
      <br />
      <hr />
      <br />
      <UserForm />
    </div>
  );
}

function UserForm() {
  const user = useId();

  return (
    <div>
      <form action="">
        <label htmlFor={user + "name"}>enter your Name</label>
        <input type="text" id={user + "name"} />
        <br />
        <br />
        <label htmlFor={user + "password"}>enter your password</label>
        <input type="text" id={user + "password"} />
        <br />
        <br />
        <label htmlFor={user + "email"}>enter your email</label>
        <input type="text" id={user + "email"} />
      </form>
    </div>
  );
}

export default UseIDDemo;
