import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [isEditingNewExpense, setIsEditing] = useState(false);

  const savedFormDataHandler = (formData) => {
    const expense = {
      ...formData,
      id: Math.random().toString()
    }

    props.onExpenseAdded(expense);
    setIsEditing(false);

  }

  const isEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return <div className="new-expense">
    {/*//In react the button will render only if the left is equal true*/}
    {!isEditingNewExpense && <button onClick={isEditingHandler} >Add new Expense</button>}
    {isEditingNewExpense && <ExpenseForm onFormDataSaved={savedFormDataHandler} onCancle={stopEditingHandler} ExpenseForm />}
  </div>
}

export default NewExpense;