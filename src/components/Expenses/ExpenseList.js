import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './ExpenseList.css';


const Expenses = (props) => {
  const [year, setFilteredyear] = useState("2020");

  const yearFilterChangedHandler = (selectedYear) => {
    setFilteredyear(selectedYear);
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter dropDownYearValue={year} onChangeYearFilter={yearFilterChangedHandler} />
        {props.items.map(expense =>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )}
      </Card>
    </div>
  );
}

export default Expenses;