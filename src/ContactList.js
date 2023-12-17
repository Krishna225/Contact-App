import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import { useContact } from "./context/ContactsCrudContext";
import { useEffect } from "react";

function ContactList() {
  const {
    contacts,

    searchHandler,
    retreiveContacts,
    searchResults,
    text,
  } = useContact();

  useEffect(() => {
    retreiveContacts();
  }, []);

  const renderContactList = (text.length < 1 ? contacts : searchResults).map(
    (contact) => {
      return <ContactCard contact={contact} key={contact.id} />;
    }
  );

  const onUserSearch = (e) => {
    searchHandler(e.target.value);
  };

  return (
    <div>
      <h2>Contact List </h2>
      <Link to="/form">
        <button>Add Contact</button>
      </Link>

      <div>
        <div>
          <input
            type="text"
            placeholder="Search Contacts"
            value={text}
            onChange={(e) => onUserSearch(e)}
          />
        </div>
      </div>
      <div>
        {renderContactList.length > 0
          ? renderContactList
          : "No Contacts available"}
      </div>
    </div>
  );
}

export default ContactList;
