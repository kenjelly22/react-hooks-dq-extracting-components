import React from "react"
import Messages from "./Messages"
import Form from "./Form"

const Main = (props) => {
  return (
    <main>
      <h2>Messages</h2>
      <Messages messages={props.messages} />
      <Form />
    </main>
  )
}

export default Main
