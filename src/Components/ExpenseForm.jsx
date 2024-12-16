import { useState } from "react"


export const ExpenseForm = ({onAddExpense})=>{

    const[amount, setAmount] = useState('')
    const[date, setDate] = useState('')
    const[note, setNote] = useState('')
    const[category, setCategory] = useState('')


    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!amount || !category || !date){
            alert("Please fill all required fields");
            return;  //what happens If we don't use return keyword;
        }
        onAddExpense({amount, category, date, note}) //creating an object of every expense!
        setAmount('')
        setDate('')
        setCategory('')
        setNote('')
    }

    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder="Amount"
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                 />
                 <input type="text"
                 placeholder="Category"
                 value={category}
                 onChange={(e)=> setCategory(e.target.value)} />
                 <input type="date"
                 value={date}
                 onChange={(e)=> setDate(e.target.value)} 
                 />

                 <button type="submit">ADD</button>
            </form>
        </>
    )
}