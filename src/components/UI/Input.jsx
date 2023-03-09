import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input id={props.input.id} {...props.input} ref={ref} /> 
      {/* // ref is passed to the input element */}
      {/* ...props.input takes all the desired inputtypes  */}
    </div>
  );
});

// standard input conponent with label
// props.input is an object with id, type, value, onChange, onBlur
// props.label is a string
// props.input.id is a string
// props.input.type is a string
// props.input.value is a string
// props.input.onChange is a function
// props.input.onBlur is a function

export default Input;
