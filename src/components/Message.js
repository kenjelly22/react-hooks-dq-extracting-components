import React from "react"

const Message = (props) => {
  return (
    <li className={`messages ${props.message.type}`}>
      <div className="icon">{props.message.name.split("")[0]}</div>
      <span className="content">{props.message.content}</span>
    </li>
  )
}

export default Message
