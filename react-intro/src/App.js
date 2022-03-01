import logo from './logo.svg';
import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {
  const expenses = [
    {title: "car insurance", amount: 385.84,  date: new Date(2021, 2, 28)},
    {title: "new computer", amount: 1385.84,  date: new Date(2021, 3, 28)},
    {title: "new superyacht", amount: 234444385.84,  date: new Date(2021, 5, 28)},
    {title: "dog food", amount: 35.84,  date: new Date(2021, 6, 28)}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
        <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
