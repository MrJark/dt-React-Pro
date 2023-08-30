import { ChangeEvent, useState } from "react";


// export const useForm = <T extends Object > ( initState:T ) => { // el tipo T es de tipo genérico y esta es la forma en la cual se haría en las funciones de flecha, Algo más complejo por el extends delñ Objeto porque es un objeto, pero si fuera un arrray sería extends Array
export function useForm<T> ( initState:T ) { // el tipo T es de tipo genérico

    const [form, setForm] = useState( initState );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => { 
        const { target } = e;
        const { name, value } = target;
        
        setForm({
            ...form,
            [ name ]: value 
        })
        
    }

    return {
        handleChange,
        form,
        ...form
    }
}