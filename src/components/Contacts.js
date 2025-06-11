import React from "react"
import Contact from "./Contact"

const Contacts = (props) => {
  return (
    <ul className="contacts">
      {/* props: {contacts: []} */}
      {props.contacts.map((contact) => (
        <Contact name={contact.name} />
      ))}
    </ul>
  )
}

export default Contacts
