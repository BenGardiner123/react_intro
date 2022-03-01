
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const App = () => {
  
  const addExpenseHandler = newExpense => {
    console.log("in app js");
    console.log(newExpense);
  }

  const expenses = [
    { title: "car insurance", amount: 385.84, date: new Date(2021, 2, 28) },
    { title: "new computer", amount: 1385.84, date: new Date(2021, 3, 28) },
    { title: "new superyacht", amount: 234444385.84, date: new Date(2021, 5, 28) },
    { title: "dog food", amount: 35.84, date: new Date(2021, 6, 28) }
  ]

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>

  );
}

export default App;
