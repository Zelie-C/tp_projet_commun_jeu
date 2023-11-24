import { useMemo, useState } from "react";
import Compteur from "../components/Compteur";
import BestScore from "../components/BestScore";
import { useParams } from "react-router-dom";
import Temps from "../components/Temps";
import '../general.css'

const Home = () => {
  const params = useParams()
  const [starttime, setStarttime] = useState(0);
  const [endtime, setEndtime] = useState(0);
  const [start, setStart] = useState(false);
  const [randomtime, setRandomtime] = useState(0);

  const resultTime: number = useMemo(() => {
    return (endtime - starttime) / 1000
  }, [endtime, starttime])


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
      </div>
      <div>
        <BestScore username={params.username!}/>
        <h1>Blind Game</h1>
        <h2>Hello {params.username}</h2>
        <Temps startOn={start} randomtime={randomtime} onChangeRandomtime={handleChangeRandomtime}/>
        {resultTime <= 0 ?
        <h3 className="time-result display-none">{resultTime}</h3> :
        <h3 className="time-result">{resultTime}</h3>
      }
        <Compteur startOn={start} onChangeStartTime={handleChangeStartTime} onChangeEndTime={handleChangeEndTime} onChangeStart={handleChangeStart} result={resultTime}/>

      </div>
    </>
  )
}

export default Home
