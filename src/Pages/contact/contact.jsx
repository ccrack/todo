import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  //create state for each form field
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
  });

  //handleChange fuction
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // handleSubmit fuction
  const handleSubmit = (e) => {
    e.preventDefault();
    let firstN = document.querySelectorAll(".form-item");
    firstN.forEach((element) => {
      element.value = "";
    });
    alert("Submition successful!");
  };

  return (
    <div className="contact">
      <h1>Contact</h1>
      <form className="form-contact" method="GET" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            className="form-item"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            className="form-item"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            className="form-item"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Comment:
          <textarea
            className="form-item"
            name="comment"
            placeholder="Comment"
            value={formData.comment}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Contact;
