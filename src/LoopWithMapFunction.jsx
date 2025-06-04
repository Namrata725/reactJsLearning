function LoopWithMapFunction() {
  const fruits = ["Apple", "Banana", "Cherry", "Date"];
  //example of aray

  const fruitsData = [
    { id: 1, name: "Apple", color: "Red", price: 120 },
    { id: 2, name: "Banana", color: "Yellow", price: 50 },
    { id: 3, name: "Cherry", color: "Red", price: 200 },
    { id: 4, name: "Graps", color: "Green", price: 150 },
    { id: 5, name: "Orange", color: "Orange", price: 80 },
  ];

  return (
    <div>
      <div>
        <h3>Dummy Table</h3>
        <table border="1" cellPadding="10" cellSpacing="10">
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Color</th>
            <th>Price</th>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Apple</td>
              <td>Red</td>
              <td>120</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Banana</td>
              <td>Yellow</td>
              <td>50</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Cherry</td>
              <td>Red</td>
              <td>200</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Graps</td>
              <td>Green</td>
              <td>150</td>
            </tr>

            <tr>
              <td>5</td>
              <td>Orange</td>
              <td>Orange</td>
              <td>80</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h3>Loop With Map Filter</h3>

        <table border="1" cellPadding="10" cellSpacing="10">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Color</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {fruitsData.map((fruit) => (
              <tr key={fruit.id}>
                <td>{fruit.id}</td>
                <td>{fruit.name}</td>
                <td>{fruit.color}</td>
                <td>{fruit.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LoopWithMapFunction;
