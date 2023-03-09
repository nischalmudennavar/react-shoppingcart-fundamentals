import React, { useRef , useState} from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {

    // 
    event.preventDefault();
    // prevent the default behaviour of the form

    const enteredAmount = amountInputRef.current.value; // getting the value of the input
    // formhandling with refs
    const enteredAmountNumber = +enteredAmount; // converting the string to a number\
    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
      setAmountIsValid(false);
      return;
      // ivalid possiblities for the input
    }

    props.onAddToCart(enteredAmountNumber);
    // if the input is valid, we pass the value to the parent component
  };

  // using refs to get the value of the input instead of useState hook

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef} //sending the ref to Inputcomponent
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
