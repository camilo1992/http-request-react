import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [startYear, setStartYear] = useState(`2019`);

  const changeYearFilter = (year) => {
    setStartYear(year);
  };

  const filteredExpenses = props.itmes.filter(
    (item) => item.date.getFullYear().toString() === startYear
  );
  console.log(filteredExpenses);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={startYear} onChangeYear={changeYearFilter} />
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList item={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;
