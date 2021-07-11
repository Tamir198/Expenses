import { useState } from 'react';

import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';


const Expenses = (props) => {
  const [year, setFilteredyear] = useState("2020");

  const yearFilterChangedHandler = (selectedYear) => {
    setFilteredyear(selectedYear);

  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === year;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter dropDownYearValue={year} onChangeYearFilter={yearFilterChangedHandler} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;