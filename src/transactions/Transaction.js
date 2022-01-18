import "./transaction.css";

const Transaction = (props) => {
    const { transaction } = props;
    return (
        <div className="transaction">
            <p>{`User ID: ${transaction.userId}`}</p>
            <p>{`Transaction amount: ${transaction.amount}`}</p>
            <p>{`Transaction data: ${transaction.data}`}</p>
        </div>
    )
}

export default Transaction;