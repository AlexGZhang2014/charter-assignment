import "./rewards.css";

const RewardData = (props) => {
    const { userId, totalRewardPoints, rewardPoints } = props;
    return (
        <div className="reward">
            <p>{`User ID: ${userId}`}</p>
            <p>{`Total Reward Points: ${totalRewardPoints}`}</p>
            <p>{`User Reward Points by Month:`}</p>
            {Object.values(rewardPoints).map(rewardPoint => {
                return(
                    <div key={`${rewardPoint.month}-${rewardPoint.rewardPoints}`} className="reward-point">
                        <p>{`Month: ${rewardPoint.month}`}</p>
                        <p>{`Reward Points: ${rewardPoint.rewardPoints}`}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default RewardData;