import { useContext } from "react";
import { TransContext } from "./TransContext";

 const TransactionForm = () => {

      const {transactions, addTransaction} = useContext(TransContext);  

      console.log(transactions)

      const handleSubmit = (event) => {
           event.preventDefault();
           console.log(document.getElementById("desc").value +  ": " + document.getElementById("amount").value) 
           
           addTransaction({id: new Date().getTime(), desc: document.getElementById("desc").value, amount: Number(document.getElementById("amount").value)});
           document.getElementById("desc").value = "";
           document.getElementById("amount").value = ""
     }   

    return (
            <form className="transction-form" onSubmit={handleSubmit}>
            <h4>Add New Transaction</h4>
            <hr/>
                <input type= "text" id="desc" placeholder="Enter Description" required/><br/>
                <input type= "number" id="amount" placeholder="Enter Amount" required/><br/>
                <input type="submit" value="Add Transaction"/>
            </form>
        )
}

export default TransactionForm