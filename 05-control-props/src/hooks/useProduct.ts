import { useEffect, useState } from "react"
import { OnChangeArgs, Product } from "../interfaces/interfaces";


interface UseProductArgs {
    product: Product,
    onChange?: ( args: OnChangeArgs ) => void,
    value?: number,
}


// Tarea: hacer el hook ✅
export function useProduct ({ onChange, product, value = 0 }: UseProductArgs ) {
    const [counter, setCounter] = useState( value );

    const countBy = ( value: number ) => {
        const  newValue = Math.max( counter + value, 0 ) // esto significa que elegirá siempre el mayor entre el counter + value o el cero
        setCounter( newValue )
        // setCounter( prev => Math.max( prev + value, 0 )); // estop significa que escogerá entre el mayor de los dos números. Así evitando que sea negativo y nos permite hacerlo en unsa sola linea de código y no hacer dos funciones distintas
        
        onChange && onChange({ count: newValue, product}); // el operador && es como si fuera un if donde si onChange es null o undefined, no ejecutará el onChange()
    }

    useEffect(() => { // useEffect para controlar el carrito dependiendo del value
        setCounter( value );
    }, [value])

    return{
        counter,
        countBy
    }
}
