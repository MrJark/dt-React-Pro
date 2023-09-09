import { useField } from "formik"



interface Props {
    label: string, // este no es obligatorio
    name: string, // obligatorio
    placeholder?: string,
    [x: string]: any, // esto es un comodín que le podemos pasar como props en el cual hay una llave, x, que es siempre de tipo string y lo que recibe podrá ser cualquier cosa y elcual por defecto, lo hace opcional por tanto, no hace falta el ?
}

export const MySelect = ({ label, ...props }: Props ) => { // desestructuración de las props

    const [ field, meta ] = useField(props);
    // console.log({field, meta});
    

    return (
        <>
            <label htmlFor={ props.id || props.name }>{label}</label>

            <select {... field} {...props} />

            {
                meta.touched && meta.error && (
                    <span className="error">{meta.error}</span>
                )
            }
        </>
    )
}
