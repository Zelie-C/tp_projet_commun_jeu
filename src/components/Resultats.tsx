import { useEffect, useState } from "react"
import './general.css'

const Resultats = (playerName: string) => {
    
    const [allResults, setAllResults] = useState<number[]>([])

    useEffect(
        () => {

            const localResults: number[] = JSON.parse(localStorage.getItem(playerName)!)
            if (localResults.length > 0) {
                setAllResults(localResults)
            }
        }, [])

    return (
        <>
            <div>
                <h2>Vos résultats</h2>
                {allResults.length > 0 ? allResults.map(
                    (score) => (
                       <div className="score-result-page">{score}</div> 
                    ))
                : <div>Vous n'avez pas de score</div>}
            </div>
        </>
    )
}

export default Resultats