function SchoolData({ SchoolDetails }) {
  return (
    <div
      style={{
        background: "lightgray",
        padding: "20px",
        margin: "20px",
        border: "1px solid gray",
        borderRadius: "20px",
      }}
    >
      <p>
        <strong> School Id:</strong>
        {SchoolDetails.SclId}
      </p>

      <p>
        <strong> School Name:</strong>
        {SchoolDetails.SclName}
      </p>

      <p>
        <strong> School City:</strong>
        {SchoolDetails.SclCity}
      </p>
      <p>
        <strong> Students</strong>
        {SchoolDetails.studentData.map((studentData) => {
          return (
            <div
              key={studentData.studId}
              style={{
                margin: "30px",
                border: "1px solid",
                padding: "10px",
              }}
            >
              <p>
                <strong> Student Id:</strong>
                {studentData.studId}
              </p>
              <p>
                {" "}
                <strong>Student Name:</strong>
                {studentData.studName}
              </p>

              <p>
                <strong>Class: </strong>
                {studentData.Grade}
              </p>
            </div>
          );
        })}
      </p>
    </div>
  );
}

export default SchoolData;
