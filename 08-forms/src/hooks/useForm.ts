import { ChangeEvent, useState } from "react";




export function useFrom <T> ( initState: T) { // la T siginifica que es de tipo genérico y dependerá del tipo que tenga el useForm en la parte del RegisterPage

    // Se puede manejar el estado de los formularios mediante un useState para cada uno de los campos y tener el valor inicial como un '' o similar pero también puedo manejarlo con uno solo
    const [ formData, setFormData ] = useState(initState);
    // const { email, name, password, secondPassword } = formData;


    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setFormData( prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    return {
        ...formData, // para no tener que hacer el export de todas las const que están en el formData
        // properties
        formData,

        // methods
        setFormData,
        onChange,
    }
}