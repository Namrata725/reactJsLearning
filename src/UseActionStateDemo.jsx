import { useActionState } from "react";

function UseActionStateDemo() {
  const handleSubmit = async (prevData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");

    await new Promise((res) => setTimeout(res, 1000));

    if (name && password) {
      return { message: "data submitted successfully", name, password };
    } else {
      return { error: "Please fill all fields" };
    }
  };

  const [data, action, pending] = useActionState(handleSubmit, undefined);
  console.log("data", data);

  return (
    <div>
      <h4>UseActionState Demo</h4>
      <form action={action}>
        <input type="text" placeholder="enter name" name="name" />
        <br />
        <br />
        <input type="password" placeholder="enter password" name="password" />
        <br />
        <br />
        <button disabled={pending}>
          {pending ? "Submitting.." : "submit"}
        </button>
        <br />
        <br />
        {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
        {data?.message && (
          <span style={{ color: "green" }}>{data?.message}</span>
        )}

        <h3>Name : {data?.name}</h3>
        <h3>Password : {data?.password}</h3>
      </form>
    </div>
  );
}

export default UseActionStateDemo;
