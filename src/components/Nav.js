import React from "react"
import Contacts from "./Contacts"

// const Nav = ({contacts}) => {
const Nav = (props) => {
  return (
    <nav>
      <h2>Contacts</h2>
      <Contacts contacts={props.contacts} />
    </nav>
  )
}

export default Nav
