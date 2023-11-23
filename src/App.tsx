import { useCallback, useState } from 'react';
import './App.css'
import Compteur from './Compteur'

function App() {
  let [starttime, setStarttime] = useState(0);
  let [endtime, setEndtime] = useState(0);
  let [start, setStart] = useState(false);

  const handleChangeStartTime = (newValue: number) => {
    setStarttime(newValue)
  }

  const handleChangeEndTime = (newValue: number) => {
    setEndtime(newValue)
  }

  const handleChangeStart = (newValue: boolean) => {
    setStart(newValue)
  }

  return (
    <>
      <div>
        <Compteur startOn={start} onChangeStartTime={handleChangeStartTime} onChangeEndTime={handleChangeEndTime} onChangeStart={handleChangeStart} />
        
      </div>
    </>
  )
}

export default App
