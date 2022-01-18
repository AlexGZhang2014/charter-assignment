import { useEffect, useState } from "react"
import transactionData from "../data/transactions.json";
import TransactionList from "./TransactionList";
import "./transaction.css";
import RewardsDisplay from "../rewards/RewardsDisplay";

const TransactionDisplay = () => {
    const [transactions, setTransactions] = useState([]);
    const [isCalculated, setIsCalculated] = useState(false);
    const [totalRewardPoints, setTotalRewardPoints] = useState(0);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        getTransactions();
    }, [transactions]);

    const getTransactions = () => {
        setTransactions(transactionData);
    }

    const calculateTotalRewardPoints = (transaction) => {
        let totalRewardPoints = 0;
        let difference = transaction.amount - 50;
        if (difference <= 50) {
            totalRewardPoints += difference;
            return totalRewardPoints;
        }
        difference = transaction.amount - 100;
        totalRewardPoints += 50 + difference * 2;
        return totalRewardPoints;
    }

    const calculateUserRewardPoints = () => {
        const transactionMap = {};
        let totalRewardPoints = 0;
        transactionData.forEach(transaction => {
            const rewardPoints = calculateTotalRewardPoints(transaction);
            totalRewardPoints += rewardPoints;
            if (transaction.userId in transactionMap) {
                transactionMap[transaction.userId].rewardPoints += rewardPoints;
            } else {
                transactionMap[transaction.userId] = {
                    userId: transaction.userId,
                    rewardPoints: rewardPoints
                }
            }
        })
        setUserData(Object.values(transactionMap));
        setTotalRewardPoints(totalRewardPoints);
        setIsCalculated(!isCalculated);
    }

    return (
        <div className="transaction-display">
            <h1>List of Transactions</h1>
            <h3>Click the button below to calculate the number of reward points for each user</h3>
            <button style={{ marginBottom: "5px" }} onClick={calculateUserRewardPoints}>{isCalculated ? "Display transactions" : "Calculate reward points"}</button>
            {isCalculated ? <RewardsDisplay userData={userData} total={totalRewardPoints} /> : <TransactionList transactions={transactions} />}
        </div>
    )
}

export default TransactionDisplay;