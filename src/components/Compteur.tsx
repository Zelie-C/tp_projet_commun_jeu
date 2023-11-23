import { useCallback } from "react";

const Compteur = (props:{
    startOn: boolean, 
    onChangeStartTime: (newValue: number) => void,
    onChangeEndTime: (newValue: number) => void,
    onChangeStart: (newValue: boolean) => void
}) => {

   

    const handleClick = useCallback(() => {
        if(!props.startOn) {
            props.onChangeStart(true);
            props.onChangeStartTime(Date.now());
        }
        else if(props.startOn) {
            props.onChangeStart(false);
            props.onChangeEndTime(Date.now());
        }
    },[]);


 

    return (
        <div>
            <button onClick={handleClick}>{props.startOn ? 'Stop' : 'Démarrer'}</button>
        </div>
    );
};

export default Compteur;