import { useReducer } from "react";
const emptyData = {
  name: "",
  password: "",
  email: "",
  city: "",
  address: "",
};

const reducer = (data, action) => {
  return {
    ...data,
    [action.type]: action.val,
  };
};
function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, emptyData);

  return (
    <div>
      <h4>useReducer Hook Demo</h4>
      <input
        type="text"
        placeholder="enter name"
        onChange={(event) => {
          dispatch({ val: event.target.value, type: "name" });
        }}
      />{" "}
      <br />
      <br />
      <input
        type="text"
        placeholder="enter password"
        onChange={(event) => {
          dispatch({ val: event.target.value, type: "password" });
        }}
      />{" "}
      <br />
      <br />
      <input
        type="text"
        placeholder="enter email"
        onChange={(event) => {
          dispatch({ val: event.target.value, type: "email" });
        }}
      />{" "}
      <br />
      <br />
      <input
        type="text"
        placeholder="enter city"
        onChange={(event) => {
          dispatch({ val: event.target.value, type: "city" });
        }}
      />{" "}
      <br />
      <br />
      <input
        type="text"
        placeholder="enter address"
        onChange={(event) => {
          dispatch({ val: event.target.value, type: "address" });
        }}
      />{" "}
      <br />
      <br />
      <ul>
        <li>name:{state.name}</li>
        <li>password:{state.password}</li>
        <li>email:{state.email}</li>
        <li>city:{state.city}</li>
        <li>address:{state.address}</li>
      </ul>
      <button>Submit</button>
    </div>
  );
}

export default UseReducerDemo;
