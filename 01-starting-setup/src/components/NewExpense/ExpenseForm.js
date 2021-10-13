import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  let expense = {};
  let [enteredTitle, setEnteredTitle] = useState(``);
  let [enteredAmount, setEnteredAmount] = useState(``);
  let [enteredDate, setEnteredDate] = useState(``);

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = function (e) {
    e.preventDefault();

    expense = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate + "T00:00:00"),
    };

    setEnteredTitle(``);
    setEnteredAmount(``);
    setEnteredDate(``);
    props.onsaveData(expense);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-01-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.onStopediting}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
