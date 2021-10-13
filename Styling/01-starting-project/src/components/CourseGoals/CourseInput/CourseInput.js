import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import classes from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [validInp, setValidInp] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setValidInp(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setValidInp(false);
    if (enteredValue.trim().length === 0) return;
    props.onAddGoal(enteredValue);
    setValidInp(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${classes["form-control"]} ${!validInp && classes.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
