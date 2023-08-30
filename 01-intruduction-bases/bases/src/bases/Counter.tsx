import { useState } from "react"

// lo más recomendado es usar interfaces o types para el maneho de los tipos. Mejor que el manejo en la propia prop
interface Props { 
    initialValue?: number,
}

export const Counter = ({ initialValue = 0 }: Props) => {

    const [counter, setCounter] = useState(initialValue);

    const handleClickUp = () => {
        // setCounter( counter + 1 ); // forma simple
        setCounter( prev => prev + 1 ); // otra forma de hacerlo
    };
    const handleClickDown = () => {
        if( counter <= 0 ) return;
        setCounter( counter - 1 );
    };

    return (
        <>
            <h2>Counter: { counter }</h2>

            <button onClick={handleClickUp}>+1</button>
            <button onClick={handleClickDown}>-1</button>
            
        </>
    )
}
