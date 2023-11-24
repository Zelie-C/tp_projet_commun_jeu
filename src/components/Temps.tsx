import { useEffect } from "react";

  const Temps = (props:{
    startOn: boolean,
    randomtime: number,
    onChangeRandomtime: (newValue: number) => void}) => {


    useEffect(()=>{
        if(props.startOn) {
            const rdtime = Math.floor(Math.random()*20 +1);
            props.onChangeRandomtime(rdtime);
        }

    },[props.startOn, props.onChangeRandomtime, props])



    return (
        <div>
            <h2>{props.randomtime > 0 ? props.randomtime+ " sec" : ""}</h2>
        </div>
    );
};

export default Temps;
