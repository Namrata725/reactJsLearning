import SchoolData from "./SchoolData";

function NestedLoopMap() {
  const SchoolDetails = [
    {
      SclId: 101,
      SclName: "JMC",
      SclCity: "kathmandu",
      studentData: [
        {
          studId: 1001,
          studName: "sachin",
          Grade: 10,
        },
        {
          studId: 1002,
          studName: "deepti",
          Grade: 6,
        },
        {
          studId: 1003,
          studName: "virat",
          Grade: 2,
        },
      ],
    },
    {
      SclId: 102,
      SclName: "KMC",
      SclCity: "bhaktapur",
      studentData: [
        {
          studId: 101,
          studName: "dikshya",
          Grade: 1,
        },
        {
          studId: 102,
          studName: "simran",
          Grade: 10,
        },
        {
          studId: 103,
          studName: "dipesh",
          Grade: 2,
        },
      ],
    },

    {
      SclId: 103,
      SclName: "SMC",
      SclCity: "lalitpur",
      studentData: [
        {
          studId: 10001,
          studName: "aryan",
          Grade: 10,
        },
        {
          studId: 10002,
          studName: "aayan",
          Grade: 10,
        },
        {
          studId: 10003,
          studName: "aayush",
          Grade: 10,
        },
      ],
    },
  ];

  return (
    <div>
      <h3>School and students Data</h3>
      {SchoolDetails.map((SchoolDetails) => {
        return (
          <div key={SchoolDetails.SclId}>
            <SchoolData SchoolDetails={SchoolDetails} />
          </div>
        );
      })}
    </div>
  );
}
export default NestedLoopMap;
