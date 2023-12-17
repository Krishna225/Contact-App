import React, { useState } from "react";
import "./styles.css";
import { useNavigate, useLocation } from "react-router-dom";

import { useContact } from "./context/ContactsCrudContext";

function EditContact() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id, name, email } = location.state;
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const { updateContact } = useContact();

  function Update(e) {
    e.preventDefault();

    if (newName === "" || newName === "") {
      alert("All the fields are mandatory");
      return;
    }

    updateContact({ id, name: newName, email: newEmail });
    setNewEmail("");
    setNewName("");
    navigate("/contactlist");
  }

  return (
    <div>
      <h2>Edit Contact</h2>
      <form className="form" onSubmit={Update}>
        <div className="field">
          <label>Name: </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="email">
          <label>Email: </label>
          <input
            type="text"
            placeholder="Enter your email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>

        <button className="edit-btn">Update </button>
      </form>
    </div>
  );
}

export default EditContact;
