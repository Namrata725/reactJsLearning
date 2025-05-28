function ClickHandlers() {
  //function to handle button click

  function handleClick1() {
    alert("Button-1 clicked!");
  }

  //arrow function to handle button click

  const handleClick2 = () => {
    alert("Button-2 clicked!");
  };

  const fruit = (name) => {
    alert(name);
  };
  return (
    <div>
      <button onClick={handleClick1}>I'm button-1</button>
      <button onClick={handleClick2}>I'm button-2</button>

      <div>
        <h2>Fruits</h2>
        <button
          onClick={() => {
            fruit("apple");
          }}
        >
          I'm Apple
        </button>
        <button
          onClick={() => {
            fruit("banana");
          }}
        >
          I'm Banana
        </button>
      </div>
    </div>
  );
}

export default ClickHandlers;
