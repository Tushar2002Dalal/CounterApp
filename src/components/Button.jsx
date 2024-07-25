import React from "react";
import "../App.css";

const Button = (props) => {
  return (
    <button type="button" className={props.class} onClick={props.fn}>
      {props.val}
    </button>
  );
};

export default Button;
