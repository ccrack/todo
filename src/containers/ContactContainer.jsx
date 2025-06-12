import React, { useState } from "react";
import Contact from "../Pages/contact/Contact";

export default function ContactContainer() {
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
    <Contact
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
