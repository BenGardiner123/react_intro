import React from "react";
import "./NewExpense.css";
import "./ExpenseForm"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, 
            id: Math.random().toString(),
        }
        console.log(expenseData)
        //pass the info up the chain to the parent component
        props.onAddExpense(expenseData)
    }


    return( 
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
    )
};

export default NewExpense;