import LoopComponentUser from "./LoopComponentUser";

function LoopComponent() {
  const Users = [
    {
      Id: 1,
      UserName: "Ram",
      Age: 23,
      email: "ram@example.com",
    },

    {
      Id: 2,
      UserName: "Teena",
      Age: 23,
      email: "teena@example.com",
    },

    {
      Id: 3,
      UserName: "Rahul",
      Age: 23,
      email: "Rahul@example.com",
    },

    {
      Id: 4,
      UserName: "Muna",
      Age: 23,
      email: "muna@example.com",
    },

    {
      Id: 5,
      UserName: "Ranajn",
      Age: 23,
      email: "ranjan@example.com",
    },
  ];

  return (
    <div>
      {Users.map((Users) => {
        return (
          <div key={Users.Id}>
            <LoopComponentUser user={Users} />
          </div>
        );
      })}
    </div>
  );
}

export default LoopComponent;
