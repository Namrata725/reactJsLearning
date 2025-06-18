import useToggleHook from "./useToggleHook";
function CustomHook() {
  const [value, toggleValue] = useToggleHook(true);
  const [data, setData] = useToggleHook(true);
  console.log("value", value);

  return (
    <div>
      <button onClick={toggleValue}>toggle handing </button>
      <button
        onClick={() => {
          toggleValue(false);
        }}
      >
        hide heading
      </button>
      <button
        onClick={() => {
          toggleValue(true);
        }}
      >
        show heading
      </button>

      {value ? <h3>custom hook demo</h3> : null}

      <hr />
      <hr />
      <hr />

      <button onClick={setData}>toggle handing </button>
      <button
        onClick={() => {
          setData(false);
        }}
      >
        hide heading
      </button>
      <button
        onClick={() => {
          setData(true);
        }}
      >
        show heading
      </button>

      <hr />
      {data ? <h2>custom hook demo</h2> : null}
    </div>
  );
}

export default CustomHook;
