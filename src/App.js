import React, { useState } from "react";
import "./App.css";

function UserSignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("User Data:", formData);
  };

  return (
    <form>
      <label className="userName">
        User Full Name:
        <input type="text" name="fullName" onChange={handleChange} />
      </label>
      <br />

      <label className="desiredName">
        User's desired username:
        <input type="text" name="username" onChange={handleChange} />
      </label>
      <br />

      <label className="email">
        User email:
        <input type="email" name="email" onChange={handleChange} />
      </label>
      <br />

      <label className="address">
        User Address:
        <input type="text" name="address" onChange={handleChange} />
      </label>
      <br />

      <label className="phoneNumber">
        User Phone Number:
        <input type="tel" name="phoneNumber" onChange={handleChange} />
      </label>
      <br />

      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default UserSignUp;
