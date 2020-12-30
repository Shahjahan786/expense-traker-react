import { useContext } from "react"
import { TransContext } from "./TransContext"

 const TransItems = () => {

    let {transactions, deleteTransaction} = useContext(TransContext)

    function removeItem(id){
            console.log(id)
        deleteTransaction(id);
    }

    return (
            <div className="transction-list">
            <h4>Transactions</h4>
            <hr/>
            <ul>
                   {
                        transactions.map((transOb, id) =>{
                                return (
                                <li key={id}><span><button onClick={()=>{removeItem(transOb.id)}}>X</button> {transOb.desc}</span> <span className={transOb.amount > 0  ? "income" : "expense"}>Rs. {transOb.amount}</span></li>
                                )
                        })                           
                   } 
                    
            </ul>
            </div>
        )
}

export default TransItems