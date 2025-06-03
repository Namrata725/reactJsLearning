import { useState } from "react";
function HandleRadioButtonAndDropdown() {
  const [gender, setGender] = useState("female");

  const [city, setCity] = useState("Kathmandu");
  const handleCityHandle = (event) => {
    setCity(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <div>
      <h3>Handle Radio Button And Dropdown</h3>
      <div>
        <h3>Select Gender</h3>
        <input
          type="radio"
          name="gender"
          id="male"
          onChange={handleGenderChange}
          value={"male"}
          checked={gender === "male"}
        />
        <label htmlFor="male">Male</label>

        <input
          type="radio"
          name="gender"
          id="female"
          onChange={handleGenderChange}
          value={"female"}
          checked={gender === "female"}
        />
        <label htmlFor="female">Male</label>
        <h3>Gender: {gender}</h3>
      </div>

      <br />
      <br />
      <br />

      <div>
        <h3>Select Country</h3>
        <select onChange={handleCityHandle} defaultValue={"Kathmandu"}>
          <option value="Kathmandu">Kathmandu</option>
          <option value="Biratnagar">Biratnagar</option>
          <option value="Pokhara">Pokhara</option>
          <option value="Lalitpur">Lalitpur</option>
          <option value="Bhaktapur">Bhaktapur</option>
        </select>

        <h4>selected country: {city}</h4>
      </div>
    </div>
  );
}

export default HandleRadioButtonAndDropdown;
