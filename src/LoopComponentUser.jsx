function LoopComponentUser({ user }) {
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid",
        margin: "10px",
        width: "400px",
        borderRadius: "10px",
      }}
    >
      <p>
        <strong>Id: </strong>
        <span>{user.Id}</span>
      </p>

      <p>
        <strong>Name: </strong>
        <span>{user.UserName}</span>
      </p>

      <p>
        <strong>Age </strong>
        <span>{user.Age}</span>
      </p>

      <p>
        <strong>Email </strong>
        <span>{user.email}</span>
      </p>
    </div>
  );
}

export default LoopComponentUser;
