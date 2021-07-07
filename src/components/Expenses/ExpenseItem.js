import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';


const ExpenseItem = (props) => {
    //Use state return an array 
    // first value is title, second value a function 
    const [title, setTitle] = useState(props.title);


    const clickHandle = () => {
        setTitle('Updated');
        console.log(title);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <button onClick={clickHandle}></button>
            </div>
        </Card>
    );
}

export default ExpenseItem;