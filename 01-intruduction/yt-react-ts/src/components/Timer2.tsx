import { useEffect, useRef, useState } from "react"

type TimeArgs = {
    milliseconds: number,
}

// export const Timer2 = ( args: TimeArgs ) => { // de los args puedo estraer los milliseconds
export const Timer2 = ( { milliseconds }: TimeArgs ) => { 

    const [seconds, setSeconds] = useState(0);
    const ref = useRef<NodeJS.Timer>(); // crea una dependencia que da igual las veces que se reconstruya el componente, siempre ba a apuntar al mismo lado. Porngo que es de tipo NodeJS.Timer porque es lo que devuelve el timeout y es como funciona ese dato

    useEffect( () => {
        ref.current && clearInterval( ref.current );

        ref.current = setInterval( () => setSeconds( s => s + 1) , milliseconds ); // esta intrucción lo que hace es ejecutarse cada segundo o cada x milliseconds
    } ,[milliseconds])

    return (
        <>
            <h4>Timer: <small>{ seconds }</small></h4>
        </>
    )
}
