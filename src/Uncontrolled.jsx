import { useRef } from "react";

function Uncontrolled() {
  const userRef = useRef();
  const passwordRef = useRef();

  const handleForm = (event) => {
    event.preventDefault();
    const user = document.querySelector("#name").value;
    const password = document.querySelector("#password").value;
    console.log(user, password);
  };

  const handleFormRef = (event) => {
    event.preventDefault();
    const user = userRef.current.value;
    const password = passwordRef.current.value;
    console.log(user, password);
  };
  return (
    <div>
      <h3>Uncontrolled form</h3>

      <form action="" method="post" onSubmit={handleForm}>
        <input type="text" id="name" placeholder="enter your name" />

        <br />
        <br />
        <input
          type="password"
          name=""
          id="password"
          placeholder="enter your password"
        />
        <br />
        <br />
        <button>Submit</button>
      </form>

      <hr />
      <hr />
      <hr />

      <h3>form using useRef</h3>
      <form action="" method="post" onSubmit={handleFormRef}>
        <input type="text" ref={userRef} />
        <br />
        <br />
        <input type="password" ref={passwordRef} />
        <br />
        <br />
        <button>Submit with ref</button>
      </form>
    </div>
  );
}

export default Uncontrolled;
