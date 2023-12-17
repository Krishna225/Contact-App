import { createContext, useContext, useState } from "react";
import api from "../api/contact";

const contactCrud = createContext();

function ContactProvider({ children }) {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) ?? []
  );

  const [searchResults, setSearchResults] = useState();
  const [text, setText] = useState("");

  async function retreiveContacts() {
    const response = await api.get("/contacts");
    if (response.data) {
      setContacts(response.data);
    }
  }

  async function addContact(contact) {
    const request = {
      id: `${"name"}-${Date.now()}`,
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setContacts([response.data, ...contacts]);
  }
  async function updateContact(contact) {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  }

  async function deleteContact(id) {
    await api.delete(`/contacts/${id}`);
    const deleteContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(deleteContacts);
  }
  const searchHandler = (searchTerm) => {
    setText(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        console.log(contact);
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };
  return (
    <contactCrud.Provider
      value={{
        contacts,
        addContact,
        deleteContact,
        retreiveContacts,
        updateContact,

        searchHandler,
        searchResults,
        text,
      }}
    >
      {children}
    </contactCrud.Provider>
  );
}

function useContact() {
  return useContext(contactCrud);
}
export { ContactProvider, useContact };
