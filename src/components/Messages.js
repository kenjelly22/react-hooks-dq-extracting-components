import React from "react"
import Message from "./Message"

const Messages = (props) => {
  return (
    <section className="messages">
      <ul>
        {props.messages.map((message) => (
          <Message message={message} />
        ))}
      </ul>
    </section>
  )
}

export default Messages
