import TransReducer from "./TransReducer";

import React,  { createContext, useReducer } from "react";

let transactions = [
    {id: 1, desc: "Cash", amount: 100},
    {id: 2, desc: "Mobile Recharge", amount: -50},
    {id: 3, desc: "Cash", amount: 100},
]

export const TransContext = createContext(transactions)



export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TransReducer, transactions);

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD',
            payload: transaction
        })
    }

    function deleteTransaction(id){
        dispatch({
            type: 'DEL',
            payload: id
        })
    }

    return (
        <TransContext.Provider value={
            {
                transactions: state,
                addTransaction,
                deleteTransaction
            }
        }>
            {children}
        </TransContext.Provider>
    );

}