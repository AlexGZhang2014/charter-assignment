import "./rewards.css";

const RewardData = (props) => {
    const { userId, rewardPoints } = props;
    return (
        <div className="reward">
            <p>{`User ID: ${userId}`}</p>
            <p>{`User Reward Points: ${rewardPoints}`}</p>
        </div>
    )
}

export default RewardData;