import { useEffect, useState } from "react";
//let [randomtimeTemps, setRandomtimeTemps] = useState(0);
const Temps = (props:{ 
    startOn: boolean,
    randomtime: number,
    onChangeRandomtime: (newValue: number) => void}) => {

    useEffect(()=>{
        if(props.startOn) {
            let rdtime = Math.floor(Math.random()*20 +1);
            props.onChangeRandomtime(rdtime);
            //setRandomtimeTemps(rdtime);
        }
        
    },[props.startOn])

 

    return (
        <div>
            <h2>{props.startOn ? props.randomtime+" sec" : ""}</h2>
        </div>
    );
};

export default Temps;