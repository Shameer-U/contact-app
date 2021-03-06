import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from "../api/contacts";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import EditContact from "./EditContact";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }

  // const addContactHandler = (contact) => {
  //   console.log(contact);
  //   setContacts([...contacts, { id: Date.now(), ...contact }]);
  // }

  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = { id: Date.now(), ...contact };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data ]);
  }

  // const removeContactHandler = (id) => {
  //     const newContactList = contacts.filter((contact) => {
  //       return contact.id !== id;
  //     });

  //     setContacts(newContactList);
  // };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data;
    
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    console.log(contacts);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
};

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
        const newContactList = contacts.filter((contact) => {
            return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase()); 
        });
        setSearchResults(newContactList);
    }
    else {
      setSearchResults(contacts);
    }
  };

//   useEffect(() => {
//     const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//     if (retriveContacts) setContacts(retriveContacts);
//  }, []);

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    }
    getAllContacts();
  }, []);

  useEffect(() => {
     //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
      <div className="ui container">
        {/* <Header /> */}
        <Router>
            <Routes>
              <Route path="/add" element={ <AddContact addContactHandler={addContactHandler} /> } />
              <Route path="/" element={ <ContactList contacts={ searchTerm.length < 1 ? contacts : searchResults } getContactId={removeContactHandler} term={searchTerm} searchKeyword={ searchHandler } />}  />
              <Route path="/contact/:id" element={ <ContactDetails />} />
              <Route path="/edit" element={ <EditContact updateContactHandler={ updateContactHandler } /> } />
            </Routes>

            {/* <AddContact addContactHandler={addContactHandler} /> 
            <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
        </Router>
      </div>
  );
}

export default App;
