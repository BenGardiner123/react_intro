import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  { id: 'e1', title: "car insurance", amount: 385.84, date: new Date(2020, 2, 28) },
  { id: 'e2', title: "new computer", amount: 1385.84, date: new Date(2019, 3, 28) },
  { id: 'e3', title: "new superyacht", amount: 234444385.84, date: new Date(2018, 5, 28) },
  { id: 'e5', title: "dog food", amount: 35.84, date: new Date(2021, 6, 28) }
]


const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA)

  const addExpenseHandler = newExpense => {
    setExpenses(prevExpenses => {
      return [newExpense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>

  );
}

export default App;
