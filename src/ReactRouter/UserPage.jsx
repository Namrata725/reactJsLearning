import { Link, useParams } from "react-router";
function UserPage() {
  const paramsData = useParams();

  return (
    <div>
      <h1>User List</h1>

      <h4>User id is: {paramsData.id}</h4>
      <h4>
        <Link to={"/user"}>Back to home</Link>
      </h4>
    </div>
  );
}

export default UserPage;
