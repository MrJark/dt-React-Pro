import { useState } from "react"
import { Timer2 } from "./Timer2"


export const Timer = () => {

    const [millisecond, setMillisecond] = useState(0)
    return (
        <>
            <span>Milisegundos {millisecond}</span>
            <br />
            <button onClick={() => setMillisecond(1000)} className="btn btn-outline-success">1000</button>
            <button onClick={ () => setMillisecond(2000)} className="btn btn-outline-success">2000</button>
            
            <Timer2 milliseconds={millisecond}/>
        </>
    )
}
