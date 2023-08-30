import { useEffect, useState } from "react"

const MAX_COUNT = 10;

export const CounterEffect = () => {

    const [counter, setCounter] = useState(5);

    const handleClickUp = () => {
        // setCounter( counter + 1 ); // forma simple
        if ( counter >= MAX_COUNT ) return; // solución valida para tener el máx y que se pare ahí
        setCounter( prev => prev + 1 ); // otra forma de hacerlo
        // otra forma de hacer el max do👇🏼
        // setCounter( prev => Math.min( prev + 1, MAX_COUNT) ); // otra forma de hacerlo en una sola línea eliminando las dos de arriba
    };
    const handleClickDown = () => {
        if( counter <= 0 ) return;
        setCounter( counter - 1 );
    };

    useEffect(() => {
      if( counter <= 10 ) return;

      
        
    }, [counter])
    

    return (
        <>
            <h2>CounterEffect: { counter }</h2>

            <button onClick={handleClickUp}>+1</button>
            <button onClick={handleClickDown}>-1</button>
            
        </>
    )
}
