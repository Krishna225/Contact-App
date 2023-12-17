import React from "react";
import { Link, useLocation } from "react-router-dom";
import user from "../src/images/user.png";

const ContactDetail = () => {
  const location = useLocation();
  const { name, email } = location.state;

  return (
    <div>
      <div>
        <div>
          <img src={user} alt="user" />
        </div>
        <div>
          <div>{name}</div>
          <div>{email}</div>
        </div>
      </div>
      <div>
        <Link to="/contactlist">
          <button>Back to Contact List</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
