import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const ExpenseData = (data) => {
    const expenses = {
      ...data,
      id: Math.random().toString(),
    };
    props.onExpensDataForm(expenses);
    seEditinForm(false);
  };

  const [editnForm, seEditinForm] = useState(false);

  const openEditingForm = () => {
    seEditinForm(true);
  };

  const stopEditing = () => {
    seEditinForm(false);
  };

  return (
    <div className="new-expense">
      {!editnForm && <button onClick={openEditingForm}>Add New Expense</button>}
      {editnForm && (
        <ExpenseForm
          onStopediting={stopEditing}
          onsaveData={ExpenseData}
          onNewListHandler={openEditingForm}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
