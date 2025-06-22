function UserEdit() {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>edit data</h3>
      <input type="text" placeholder="enter name" />
      <br />
      <br />
      <input type="text" placeholder="enter age" />
      <br />
      <br />
      <input type="text" placeholder="enter email" />
      <br />
      <br />
      <button>update</button>
    </div>
  );
}

export default UserEdit;
