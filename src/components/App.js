import React from "react"
import {messages, contacts} from "../data"
import Main from "./Main"
import Nav from "./Nav"

console.log("Messages:", messages)
console.log("Contacts:", contacts)

function App() {
  return (
    <div className="app">
      <Nav contacts={contacts} />
      <Main messages={messages} />
    </div>
  )
}

export default App
