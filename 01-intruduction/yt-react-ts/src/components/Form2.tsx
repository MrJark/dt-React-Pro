import { ChangeEvent, useState } from "react"

const initialState = {
    postcode: '',
    city: ''
}

export const Form = () => {

    const [form, setForm] = useState(initialState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => { // el evento es un tipo de dato que depende de lo que esté haciendo la función, en este caso es de tipo change, ChangeEvent, y como es un input es de tipo HTMLInputElement
        const { target } = e;
        const { name, value } = target;
        
        setForm({
            ...form,
            [ name ]: value // aquí el name, no es el del objeto initialState, sino el nambe del input que le he puesto como identificador
        })
        
    }

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Postcode:</label>
                <input type="text" 
                    className="form-control"
                    name="postcode"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">City:</label>
                <input type="text" 
                    className="form-control"
                    name="city"
                    onChange={handleChange}
                />
            </div>

            <pre>{JSON.stringify(form)}</pre>
        </form>
    )
}
