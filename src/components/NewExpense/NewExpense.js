import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const savedFormDataHandler = (formData) => {
        const expense = {
            ...formData,
            id: Math.random().toString()
        }

        props.onExpenseAdded(expense);

    }

    return <div className="new-expense">
        <ExpenseForm onFormDataSaved={savedFormDataHandler}></ExpenseForm>
    </div>
}

export default NewExpense;