import { useContext } from "react";
import { TransContext } from "./TransContext";

 const Balance = () => {

     let {transactions} = useContext(TransContext)
     let balance = 0;
     transactions.forEach(transObj => {
        balance += transObj.amount      
     });

    return (
    <h3 className="balance"> BALANCE <br />Rs. {balance}</h3>
        )
}

export default Balance