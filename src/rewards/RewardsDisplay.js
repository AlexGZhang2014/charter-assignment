import RewardData from "./RewardData";
import "./rewards.css";

const RewardsDisplay = (props) => {
    const { userData, total } = props;
    return (
        <div className="rewards-display">
            <p>{`Total reward points across all users for 3 months: ${total}`}</p>
            {userData.map(user => <RewardData key={user.userId} userId={user.userId} totalRewardPoints={user.totalRewardPoints} rewardPoints={user.rewardPoints}/>)}
        </div>
    )
}

export default RewardsDisplay;