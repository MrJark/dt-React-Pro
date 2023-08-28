import { ChangeEvent, useState } from "react";


export function useForm ( initState ) {

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
        form
    }
}