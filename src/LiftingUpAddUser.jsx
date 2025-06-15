function LiftingUpAddUser({ user, setUser }) {
  const UpdateUser = (event) => {
    setUser(event.target.value);
  };
  return (
    <div>
      <h4>Add User</h4>
      <input type="text" value={user} onChange={UpdateUser} />
    </div>
  );
}

export default LiftingUpAddUser;
