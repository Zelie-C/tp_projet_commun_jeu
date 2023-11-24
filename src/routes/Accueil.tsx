import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BestScore from "../components/BestScore";

const Accueil = () => {

    const [username, setUsername] = useState("");
    const navigate = useNavigate();


    const buttonClick = () => {
        navigate('/home/' + username)
    }


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }


    // ACCUEIL AVEC CHOIX PRENOM
    return (
        <>
        <div className="container">
            <BestScore username={username}/>
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
