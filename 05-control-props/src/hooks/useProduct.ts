import { useState } from "react"

// Tarea: hacer el hook ✅
export function useProduct ( onChange?: () => void ) {
    const [counter, setCounter] = useState(0);

    const countBy = ( value: number ) => {
        setCounter( prev => Math.max( prev + value, 0 )); // estop significa que escogerá entre el mayor de los dos números. Así evitando que sea negativo y nos permite hacerlo en unsa sola linea de código y no hacer dos funciones distintas
        
        onChange && onChange(); // el operador && es como si fuera un if donde si onChange es null o undefined, no ejecutará el onChange()
    }
    return{
        counter,
        countBy
    }
}
