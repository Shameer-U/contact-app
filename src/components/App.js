import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";

function App() {
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Dipesh",
  //     email: "malvia@gmail.com"
  //   },
  //   {
  //     id: "2",
  //     name: "Nikesh",
  //     email: "nicks@gmail.com"
  //   }
  // ];
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: Date.now(), ...contact }]);
  }

  const removeContactHandler = (id) => {
      const newContactList = contacts.filter((contact) => {
        return contact.id !== id;
      });

      setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
 }, []);

  useEffect(() => {
     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
      <div className="ui container">
        {/* <Header /> */}
        <Router>
            <Routes>
              <Route path="/add" element={ <AddContact addContactHandler={addContactHandler} /> } />
              <Route path="/" element={ <ContactList contacts={contacts} getContactId={removeContactHandler} />} />
              <Route path="/contact/:id" element={ <ContactDetails />} />
            </Routes>
            {/* <AddContact addContactHandler={addContactHandler} /> 
            <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
        </Router>
      </div>
  );
}

export default App;
