import { useState } from "react";
import Compteur from "../components/Compteur";
import Temps from "../components/Temps";

const Home = () => {

  let [starttime, setStarttime] = useState(0);
  let [endtime, setEndtime] = useState(0);
  let [start, setStart] = useState(false);
  let [randomtime, setRandomtime] = useState(0);

  const handleChangeStartTime = (newValue: number) => {
    setStarttime(newValue)
    console.log(starttime)
  }

  const handleChangeEndTime = (newValue: number) => {
    setEndtime(newValue)
    console.log(endtime)
  }

  const handleChangeStart = (newValue: boolean) => {
    setStart(newValue)
  }

  const handleChangeRandomtime = (newValue: number) => {
    setRandomtime(newValue)
  }
  return (
    <>
      <div>
        <Temps startOn={start} randomtime={randomtime} onChangeRandomtime={handleChangeRandomtime}/>
      </div>
      <div>
        <Compteur startOn={start} onChangeStartTime={handleChangeStartTime} onChangeEndTime={handleChangeEndTime} onChangeStart={handleChangeStart} />
        
      </div>
    </>
  )
} 

export default Home