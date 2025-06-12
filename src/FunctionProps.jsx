import FunctionPropsUser from "./FunctionPropsUser";
function functionProps() {
  const displayName = (name) => {
    alert(name);
  };

  const getFunction = () => {
    alert("function user called");
  };

  return (
    <div>
      <FunctionPropsUser
        displayName={displayName}
        name="aa"
        getFunction={getFunction}
      />
      <br />

      <FunctionPropsUser
        displayName={displayName}
        name="bb"
        getFunction={getFunction}
      />
      <br />

      <FunctionPropsUser
        displayName={displayName}
        name="cc"
        getFunction={getFunction}
      />
      <br />
    </div>
  );
}

export default functionProps;
