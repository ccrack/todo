import React from "react";
import "./contact.css";

const Contact = ({ formData, handleChange, handleSubmit }) => {

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
