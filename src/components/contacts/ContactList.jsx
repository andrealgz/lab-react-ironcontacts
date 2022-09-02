import { useState } from "react";
import contactsData from "../../contacts.json";
import Contact from "./Contact";
import "./contactList.css";


function ContactList () {
  const [contacts, setContacts] = useState( contactsData.slice(0,1) );

  const handleAddContact= () => {
    const filterContact = contactsData.filter( contact => !contacts.includes(contact) );
    if (filterContact.length) {
      setContacts([ filterContact[Math.floor(Math.random() * filterContact.length )] ,...contacts]);
    } else {
      alert ("Finish")
    }
  }

  const handleSortByName = () => {
    setContacts([...contacts.sort((a, b) => a.name > b.name ? 1 : -1 )])
  }

  const handleSortByPopularity = () => {
    setContacts([...contacts.sort((a, b) => a.popularity - b.popularity )])
  }

  const handleDelete = (contact) => {
    setContacts(contacts.filter( cnt => contact.id !== cnt.id))
  }


  //
  return (
    <>
      <button onClick={ () => handleAddContact() }>Add new famous</button> 
      <button onClick={ () => handleSortByName() }>Sort by name</button>
      <button onClick={ handleSortByPopularity }>Sorty by popularity </button>

      <table className="famous">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => 
            <Contact {...contact} key={contact.id} onDelete={ () => handleDelete(contact) } />
          )}
        </tbody>
      </table>
    </>
  )
}


export default ContactList;