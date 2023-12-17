import { Link } from "react-router-dom";
import user from "../src/images/user.png";
import { useContact } from "./context/ContactsCrudContext";

function ContactCard({ contact }) {
  const { id, name, email } = contact;
  const { deleteContact } = useContact();
  return (
    <div>
      <img src={user} alt="user" />
      <Link to={`/contact/${id}`} state={{ id, name, email }}>
        <div>{name}</div>
        <div>{email}</div>
      </Link>
      <button className="del-btn" onClick={() => deleteContact(id)}>
        Delete
      </button>
      <Link to="/edit" state={{ id, name, email }}>
        <button className="edit-btn">Edit</button>
      </Link>
      <hr />
    </div>
  );
}

export default ContactCard;
