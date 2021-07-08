import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle,SetTitle] = useState(" ");
    const [enteredAmount,SetAmount] = useState(" ");
    const [enteredDate,SetDate] = useState(" ");

    const titleChangeHandler = (event)=>{
        SetTitle(event.target.value);
    }

    const amountChangeHandler = (event)=>{
        SetAmount(event.target.value);
    }

    const dateChangeHandler = (event)=>{
        SetDate(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const expentData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: Date(enteredDate)
        }
        
        //Execute function recived from father class as pointer
        props.onFormDataSaved(expentData);
        SetTitle(" ");
        SetAmount(" ");
        SetDate(" ");

    }

    //When a button with type submit it pressed, onSumbit (of the form) is called
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" value={enteredAmount} step="0.01" onChange={amountChangeHandler}  />
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' value={enteredDate} min="2019-01-01" max="2022-12-31"  onChange={dateChangeHandler} />
            </div>
        </div>

        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;