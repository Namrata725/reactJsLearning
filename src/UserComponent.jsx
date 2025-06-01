function VariableProps({ name, age }) {
  return (
    <>
      <h3>From VariableProps</h3>
      <p>
        Welcome {name}, you are {age} years old.
      </p>
      <hr />
    </>
  );
}

function ObjectProps({ user, user2 }) {
  return (
    <>
      <h3>From ObjectProps</h3>
      <p>
        name: {user.name} <br />
        age: {user.age} <br />
        email: {user.email}
      </p>
      <hr />

      <h3>From ObjectProps</h3>
      <p>
        name: {user2.name} <br />
        age: {user2.age} <br />
        email: {user2.email}
      </p>
      <hr />
    </>
  );
}

function ArrayProps({ country }) {
  return (
    <>
      <h3>From ArrayProps</h3>

      <ul>
        {country.map((country, index) => (
          <li key={index}>{country}</li>
        ))}
      </ul>

      <hr />
    </>
  );
}

function ClickProps({ student }) {
  return (
    <div>
      <h3>Click Props</h3>
      <p>student Name: {student}</p>
    </div>
  );
}

function UserComponent({
  name,
  age,
  user,
  user2,
  country,
  student,
  setStudent,
}) {
  return (
    <>
      <VariableProps name={name} age={age} />
      <ObjectProps user={user} user2={user2} />
      <ArrayProps country={country} />
      <hr />

      {student && <ClickProps student={student} />}
      <button
        onClick={() => {
          const newStudent = prompt("Enter student name:");
          setStudent(newStudent);
        }}
      >
        click me
      </button>
    </>
  );
}

export default UserComponent;
