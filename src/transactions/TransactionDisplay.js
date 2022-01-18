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
    const months = {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December"
    }

    useEffect(() => {
        getTransactions();
    }, [transactions]);

    const getTransactions = () => {
        setTransactions(transactionData);
    }

    const calculateRewardPoints = (transaction) => {
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
        transactions.forEach(transaction => {
            const monthNum = transaction.date.split("-")[1];
            const month = months[monthNum];
            const rewardPoints = calculateRewardPoints(transaction);
            totalRewardPoints += rewardPoints;
            if (transaction.userId in transactionMap) {
                if (month in transactionMap[transaction.userId].rewardPoints) {
                    transactionMap[transaction.userId].totalRewardPoints += rewardPoints;
                    transactionMap[transaction.userId].rewardPoints[month].rewardPoints += rewardPoints;
                } else {
                    transactionMap[transaction.userId].totalRewardPoints += rewardPoints;
                    transactionMap[transaction.userId].rewardPoints[month] = {
                        month: month,
                        rewardPoints: rewardPoints
                    }
                }
            } else {
                transactionMap[transaction.userId] = {
                    userId: transaction.userId,
                    totalRewardPoints: rewardPoints,
                    rewardPoints: {
                        [month]: {
                            month: month,
                            rewardPoints: rewardPoints
                        }
                    }
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