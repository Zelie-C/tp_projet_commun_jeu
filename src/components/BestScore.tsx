import { useNavigate } from "react-router-dom";

const BestScore = (props: {username: string}) => {

  const navigate = useNavigate();
  const localData = localStorage.getItem(props.username)!;


  const handleClick = () => {
    navigate('/results/' + props.username);
}

  return (
    <>
      <div className="best_score" onClick={handleClick}>
        <p>Best score : {localData}</p>
      </div>
    </>
  )
}

export default BestScore
