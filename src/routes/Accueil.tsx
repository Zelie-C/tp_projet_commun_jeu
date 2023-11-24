import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../general.css'

const Accueil = () => {

    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/results/' + username);
    }

    const buttonClick = () => {
        navigate('/home')
    }
    

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const localData = localStorage.getItem('scores')!;

    console.log(localData)


    // ACCUEIL AVEC CHOIX PRENOM
    return (
        <>
        <div className="container">
            <div className="best_score" onClick={handleClick}>
                <p>Best score : </p>
            </div>
            <h1>Blind Game</h1>
            <div className="enter_name">
                <label htmlFor="username">Please enter your name :</label>
                <input type="text" name="username" onChange={handleChange}/>
            </div>
            <button className="button_start" onClick={buttonClick}>DÉMARREZ</button>
        </div>
        </>
    )
}

export default Accueil