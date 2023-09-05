import { useState } from "react"
import { OnChangeArgs, Product } from "../interfaces/interfaces";


interface UseProductArgs {
    product: Product,
    onChange?: ( args: OnChangeArgs ) => void, 
}


// Tarea: hacer el hook ✅
export function useProduct ({ onChange, product }: UseProductArgs ) {
    const [counter, setCounter] = useState(0);

    const countBy = ( value: number ) => {
        const  newValue = Math.max( counter + value, 0 ) // esto significa que elegirá siempre el mayor entre el counter + value o el cero
        setCounter( newValue )
        // setCounter( prev => Math.max( prev + value, 0 )); // estop significa que escogerá entre el mayor de los dos números. Así evitando que sea negativo y nos permite hacerlo en unsa sola linea de código y no hacer dos funciones distintas
        
        onChange && onChange({ count: newValue, product}); // el operador && es como si fuera un if donde si onChange es null o undefined, no ejecutará el onChange()
    }
    return{
        counter,
        countBy
    }
}
