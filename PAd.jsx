import React from "react";
export default function Pad(props) {

  return (
    <button
      className={props.on ? "on" : null}
      style={{ backgroundColor: props.color }} onClick={() => props.handleClick(props.id)}></button>
  )
}