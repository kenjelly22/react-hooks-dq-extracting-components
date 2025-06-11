import React from "react"

const Contact = (props) => {
  return (
    <li className="contact">
      <div className="icon">{props.name.split("")[0]}</div>
      {props.name}
    </li>
  )
}

export default Contact
