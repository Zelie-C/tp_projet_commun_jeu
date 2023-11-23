import { useState } from "react";
import { useCallback } from "react";

const Compteur = () => {

    let [starttime, setStarttime] = useState(0);
    let [endtime, setEndtime] = useState(0);
    let [start, setStart] = useState(false);
  
    const handleClick = useCallback(() => {
      if(!start) {
          setStart(true);
          setStarttime(Date.now());
      }
      else if(start) {
          setStart(false);
          setEndtime(Date.now())
      }
      return start
  },[start]);


 

    return (
        <div>
            <button onClick={handleClick}>+</button>
        </div>
    );
};

export default Compteur;