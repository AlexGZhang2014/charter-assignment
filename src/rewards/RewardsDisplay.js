import RewardData from "./RewardData";
import "./rewards.css";

const RewardsDisplay = (props) => {
    const { userData, total } = props;
    return (
        <div className="rewards-display">
            <p>{`Total reward points: ${total}`}</p>
            {userData.map(user => <RewardData key={user.userId} userId={user.userId} rewardPoints={user.rewardPoints}/>)}
        </div>
    )
}

export default RewardsDisplay;