import { useActionState } from "react";
function FormValidationUsingUseActionState() {
  const [data, action, pending] = useActionState(handleLogin);

  function handleLogin(prevData, formData) {
    let name = formData.get("name");
    let password = formData.get("password");
    let regex = /^[A-Z0-9]+$/i;

    if (!name || name.length > 5) {
      return {
        error:
          "Name cant be emply or name should not contain more than 5 characters",
        name,
        password,
      };
    } else if (!regex.test(password)) {
      return {
        error: "only number and alphabets are allowed in password",
        name,
        password,
      };
    } else {
      return { message: "login succesfully", name, password };
    }
  }

  return (
    <div>
      {data?.message && <span style={{ color: "green" }}>{data?.message}</span>}
      {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
      <form action={action}>
        <input
          defaultValue={data?.name}
          type="text"
          placeholder="enter name"
          name="name"
        />{" "}
        <br />
        <br />
        <input
          type="text"
          defaultValue={data?.password}
          placeholder="enter password"
          name="password"
        />{" "}
        <br />
        <br />
        <button disabled={data?.error}>Login</button>
      </form>
    </div>
  );
}

export default FormValidationUsingUseActionState;
