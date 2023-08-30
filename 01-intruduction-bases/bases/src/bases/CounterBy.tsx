import { useState } from "react"

// lo más recomendado es usar interfaces o types para el maneho de los tipos. Mejor que el manejo en la propia prop
interface Props { 
    initialValue?: number,
}

// interfaz para el useState y que sea siempre igual
interface CounterState {
    counter: number,
    clicks: number,
}

export const CounterBy = ({ initialValue = 5 }: Props) => {

    const [counterState, setCounterState] = useState<CounterState>({ // aquí se coloca la interfaz
        counter: initialValue,
        clicks: 0,
    });

    const { counter, clicks } = counterState; // 3sta desestructuración me la podría ahorrar si directamente lo hago en el useState

    const handleClickUp = ( value:number ) => {
        // setCounter( counter + 1 ); // forma simple
        setCounterState( prev => ({
            counter: prev.counter + value,
            clicks: prev.clicks + 1
        })); // otra forma de hacerlo
    };


    // Tarea: ver el valor del counter y de los clicks (❌ no he sabido como quitar los errores de types. Tenia que tener un objeto en el setCounterState)
    return (
        <>
            <h2>Counter: { counter }</h2>
            <h2>Clicks: { clicks }</h2>

            <button onClick={() => handleClickUp(1)}>+1</button>
            <button onClick={() => handleClickUp(5)}>+5</button>
            
        </>
    )
}
