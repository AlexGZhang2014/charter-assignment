import Transaction from "./Transaction";
import "./transaction.css";

const TransactionList = (props) => {
    const { transactions } = props;
    return (
        <div className="transaction-list">
            {transactions.map(transaction => <Transaction key={`${transaction.userId}-${transaction.amount}`} transaction={transaction}/>)}
        </div>
    )
}

export default TransactionList;