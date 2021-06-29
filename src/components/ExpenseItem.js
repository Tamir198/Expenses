import './ExpenseItem.css'

function ExpenseItem() {
    return (
    <div className="expense-item">
        <div>march 21</div>
        <div className="expense-item__description">
            <h2>Car insurance</h2>
            <div className="expense-item__price">$346</div>
 
        </div>
    </div>
    );
}

export default ExpenseItem;