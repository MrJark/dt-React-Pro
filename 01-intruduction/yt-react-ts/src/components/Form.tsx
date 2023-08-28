
import { useForm } from "../hooks/useForm"


export const Form = () => {

    // Comentado porque se va como customHook
    // const [form, setForm] = useState(initialState);

    // const handleChange = (e: ChangeEvent<HTMLInputElement>) => { // el evento es un tipo de dato que depende de lo que esté haciendo la función, en este caso es de tipo change, ChangeEvent, y como es un input es de tipo HTMLInputElement
    //     const { target } = e;
    //     const { name, value } = target;
        
    //     setForm({
    //         ...form,
    //         [ name ]: value // aquí el name, no es el del objeto initialState, sino el nambe del input que le he puesto como identificador
    //     })
        
    // }

    const { form, handleChange } = useForm({
        email: '',
        name: ''
    })

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email" 
                    className="form-control"
                    name="email"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Name:</label>
                <input type="text" 
                    className="form-control"
                    name="name"
                    onChange={handleChange}
                />
            </div>

            <pre>{JSON.stringify(form)}</pre>
        </form>
    )
}
