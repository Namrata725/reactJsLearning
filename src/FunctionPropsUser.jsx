function FunctionPropsUser(displayName, name, getFunction) {
  return (
    <div>
      <button
        onClick={() => {
          displayName(name);
        }}
      >
        User Display!!
      </button>
      <button onClick={getFunction}>get function</button>
    </div>
  );
}

export default FunctionPropsUser;
