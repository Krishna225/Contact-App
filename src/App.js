import "./styles.css";
import AddContact from "./contactForm";
import ContactList from "./ContactList";
import EditContact from "./editContact";
import ContactDetail from "./ContactDetail";

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import { ContactProvider } from "./context/ContactsCrudContext";

function App() {
  return (
    <div className="App">
      <h1>Contact Manager</h1>
      <ContactProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<AddContact />} />
          <Route path="/contactlist" element={<ContactList />} />
          <Route path="/edit" element={<EditContact />} />
          <Route path="/contact/:id" element={<ContactDetail />} />
        </Routes>
      </ContactProvider>
    </div>
  );
}

export default App;
