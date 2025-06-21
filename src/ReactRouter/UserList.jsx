import { Link } from "react-router";
function UserList() {
  const userdata = [
    {
      id: 1,
      name: "sachin",
    },
    {
      id: 2,
      name: "ranjana",
    },
    {
      id: 3,
      name: "anil",
    },
    {
      id: 4,
      name: "amrita",
    },
    {
      id: 5,
      name: "sunny",
    },
  ];
  return (
    <div>
      <h1>User List</h1>
      {userdata.map((user) => {
        return (
          <div
            key={user.id}
            style={{
              paddingLeft: "20PX",
            }}
          >
            <h4>
              <Link to={"/user/" + user.id}>{user.name}</Link>
            </h4>
          </div>
        );
      })}
    </div>
  );
}

export default UserList;
