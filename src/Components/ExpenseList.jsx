
import React from 'react'

export const ExpenseList = ({expenses}) => {
    console.log("inside expenselist")
    console.log(expenses)
  return (
    <div>
        <div> 
            <h2> Your Expenses</h2>
            <ul>{expenses.map((expense, index)=>(  
                <li key={index}>
                    <strong>₹{expense.amount}</strong> - {expense.category} on {new Date(expense.date).toLocaleDateString()} 
                </li>
            ))}</ul>
        </div>
    </div>
  )
}
