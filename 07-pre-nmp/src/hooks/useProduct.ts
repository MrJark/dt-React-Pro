import { useEffect, useRef, useState } from "react"
import { InitialValues, OnChangeArgs, Product } from "../interfaces/interfaces";


interface UseProductArgs {
    product: Product,
    onChange?: ( args: OnChangeArgs ) => void,
    value?: number,
    initialValues?: InitialValues,
}


export function useProduct ({ onChange, product, value = 0, initialValues }: UseProductArgs ) {
    const [counter, setCounter] = useState<number>( initialValues?.count || value );
    
    const isMounted = useRef(false);
    // console.log(initialValues);
    
    const countBy = ( value: number ) => {
        //* Tarea: hacer el límite, maxCount ❌ he creado el nexMaxValue parecido al newValue y ya no he sabido como seguir y eso no era. Tenía que Hhacer un if

        let  newValue = Math.max( counter + value, 0 ) // esto significa que elegirá siempre el mayor entre el counter + value o el cero
        if ( initialValues?.maxCount ) {
            newValue = Math.min( newValue, initialValues.maxCount )
        }
        // const  newMaxValue = Math.min( initialValues?.maxCount || value , counter + value ) // esto no era, el Math.min sí pero no de esa forma
        setCounter( newValue )
        // setCounter( prev => Math.max( prev + value, 0 )); // estop significa que escogerá entre el mayor de los dos números. Así evitando que sea negativo y nos permite hacerlo en unsa sola linea de código y no hacer dos funciones distintas
        
        onChange && onChange({ count: newValue, product }); // el operador && es como si fuera un if donde si onChange es null o undefined, no ejecutará el onChange()

    }

    const reset = () => {
        setCounter(initialValues?.count || value )
    }

    //! SON BUENAS PRÁCTICAS USAR UN useEffect PARA CADA EFECTO Y NO EL MISMO PARA VARIOS
    useEffect(() => { // useEffect para controlar el carrito dependiendo del value
        if( !isMounted.current ) return; // para extraer el valor de los hooks de react es necesario ponerles el .current
        setCounter( value );
    }, [value])

    useEffect(() => { // para cambiar el valor a true solo cuando se renderiza la primera vez por eso no le he puesto ninguna dependencia
        isMounted.current = true;
    }, [])

    const toIsMaxCountReached = !!initialValues?.count && initialValues.maxCount === counter;

    return{
        counter,
        countBy,
        maxCounter: initialValues?.maxCount,
        isMaxCountReached: toIsMaxCountReached,
        reset,
    }
}
