
import { useForm } from "../hooks/useForm"

interface FormData {
    email: string,
    name: string,
    age: number
}

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

    const { form, handleChange } = useForm<FormData>({
        email: 'chema',
        name: 'chema@',
        age: 25
    })

    // const { name, email, age } = form;

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email" 
                    className="form-control"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Name:</label>
                <input type="text" 
                    className="form-control"
                    name="name"
                    onChange={handleChange}
                    value={form.name}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Age:</label>
                <input type="number" 
                    className="form-control"
                    name="age"
                    onChange={handleChange}
                    value={form.age}
                />
            </div>

            <pre>{JSON.stringify(form)}</pre>
        </form>
    )
}
