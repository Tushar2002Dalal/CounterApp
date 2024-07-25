import React from "react";
import "../App.css";

const Message = (props) => {
  return (
    <h2 className={props.class}>
      {props.msg} {props.val}
    </h2>
  );
};

export default Message;
