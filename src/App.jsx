import { useState } from 'react'

import './App.css'
import { ExpenseForm } from './Components/ExpenseForm'
import { ExpenseList } from './Components/ExpenseList';

function App() {
  const [expense, setExpense] = useState([]);

  const addExpense = (expense) =>{
    setExpense((prevExpenses) => [...prevExpenses, expense]);
  }

  
  //sending function as a prop;

  return (
    <>

      <ExpenseForm onAddExpense = {addExpense}></ExpenseForm>
      <ExpenseList expenses={expense} ></ExpenseList>
        
    </>
  )
}

export default App
