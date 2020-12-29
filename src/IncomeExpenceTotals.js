import { useContext } from "react";
import { TransContext } from "./TransContext";

 const IncomeExpenceTotals = () => {
        let income = 0;
        let expenses = 0;

        let {transactions} = useContext(TransContext);

        transactions.forEach(obj => {
                if(obj.amount > 0){
                   income += obj.amount;
                }else if(obj.amount < 0){
                   expenses += obj.amount;
                }


        });


    return (
         <div className="income-expense-box">
                <h3 className="income">INCOME <br />Rs. {income}</h3>
                <h3 className="expense">EXPENSE <br />Rs. {Math.abs(expenses)}</h3>
        </div>  
        )
}

export default IncomeExpenceTotals