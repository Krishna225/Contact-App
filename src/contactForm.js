import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router";

import { useContact } from "./context/ContactsCrudContext";

function AddContact() {
  const { addContact } = useContact();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || email === "") {
      alert("All the fields are mandatory");
    }
    addContact({ name, email });
    setEmail("");
    setName("");
    navigate("/contactlist");
  }

  return (
    <div>
      <h2>Add Contact</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Name: </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="email">
          <label>Email: </label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="btn">Add </button>
      </form>
    </div>
  );
}

export default AddContact;
