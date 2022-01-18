import { useEffect, useState } from "react"
import transactionData from "../data/transactions.json";
import TransactionList from "./TransactionList";
import "./transaction.css";

const TransactionDisplay = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        getTransactions();
    }, [transactions]);

    const getTransactions = () => {
        // Simulate asynchronous fetch call
        setTransactions(transactionData);
    }

    return (
        <div className="transaction-display">
            <h1>List of Transactions</h1>
            <TransactionList transactions={transactions} />
        </div>
    )
}

export default TransactionDisplay;