import { useState } from "react";

function UpdatingObjInState() {
  // This component is designed to demonstrate how to update an object in state.
  const [data, setData] = useState({
    name: "ger",
    address: {
      city: "ht",
      country: "htr",
    },
  });

  const handleName = (name) => {
    // This function updates the name property in the data object.
    setData((prevData) => ({
      ...preData,
      name: name,
    }));
  };

  const handleCity = (city) => {
    // This function updates the city property in the address object.
    setData((prevdata) => ({
      ...prevdata,
      address: {
        ...prevdata.address,
        city: city,
      },
    }));
  };

  const handleCountry = (country) => {
    // This function updates the country property in the address object.
    setData((prevdata) => ({
      ...prevdata,
      address: {
        ...prevdata.address,
        country: country,
      },
    }));
  };
  return (
    <div>
      <h4>Updating Object in State</h4>
      <input
        type="text"
        placeholder="enter your name"
        onChange={(event) => {
          handleName(event.target.value);
        }}
      />
      <h4>{data.name} </h4>

      <input
        type="text"
        placeholder="enter city"
        onChange={(event) => {
          handleCity(event.target.value);
        }}
      />
      <h4>{data.address.city}</h4>

      <input
        type="text"
        placeholder="enter your country"
        onChange={(event) => {
          handleCountry(event.target.value);
        }}
      />
      <h4>{data.address.country}</h4>
    </div>
  );
}

export default UpdatingObjInState;
