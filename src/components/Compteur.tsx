import { useCallback } from "react";

const Compteur = (props:{
    startOn: boolean,
    onChangeStartTime: (newValue: number) => void,
    onChangeEndTime: (newValue: number) => void,
    onChangeStart: (newValue: boolean) => void,
    result: number,
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
    },[props]);

    // console.log('Result inside Compteur:', props.result);

    return (
        <div>
            <button onClick={handleClick} className="button_start">{props.startOn ? 'Stop' : 'Démarrer'}</button>
        </div>
    );
};

export default Compteur;
