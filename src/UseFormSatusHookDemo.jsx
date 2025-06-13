import { useFormStatus } from "react-dom";
import { useFormState } from "react-dom";

function UseFormSatusHookDemo() {
  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("hello");
  };

  const ConstomerForm = () => {
    const { pending } = useFormStatus();
    console.log(pending);
    return (
      <div>
        <input type="text" placeholder="enter your name" />
        <br />
        <br />
        <input type="password" placeholder="enter your password" />
        <br />
        <br />
        <button disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </div>
    );
  };

  return (
    <div>
      <h4>Use Form Satus Hook Demo</h4>

      <form action={handleSubmit}>
        <ConstomerForm />
      </form>
    </div>
  );
}

export default UseFormSatusHookDemo;
