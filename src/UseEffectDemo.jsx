function UseEffectDemo() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  function updateCounter() {
    setCounter(counter + 1);
  }

  function updateData() {
    setData(data + 1);
  }

  function sayHi() {
    console.log("hii");
  }
  // Don't call functions with side effects here — it will run on every render.
  // sayHi(); // This runs every time the component renders.

  function counterFunction() {
    console.log("counter function", counter);
  }

  useEffect(() => {
    // this only runs when the `counter` state changes.
    // sayHi(); // This would run once after the first render if placed here.
    counterFunction();
  }, [counter]); // Runs only when `counter` is updated.

  return (
    <div>
      <h3>useEffect Demo</h3>

      <h4>{counter}</h4>
      <button onClick={updateCounter}>Update Counter</button>

      <h4>{data}</h4>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
}
