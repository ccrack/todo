import React from "react";
import "./contact.css";

const handleChange = (e) => {};
const handleSubmit = () => {};

export default function contact() {
  return (
    <>
      <h1>contact</h1>
      <form className="form-contact" method="GET" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="name" value="" onChange={handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="name" value="" onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value="" onChange={handleChange} />
        </label>
        <label>
          Comment:
          <textarea name="Comment" value="" onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
