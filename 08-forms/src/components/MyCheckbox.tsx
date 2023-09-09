import { ErrorMessage, useField } from "formik"



interface Props {
    label: string, // este no es obligatorio
    name: string, // obligatorio
    [x: string]: any, // esto es un comodín que le podemos pasar como props en el cual hay una llave, x, que es siempre de tipo string y lo que recibe podrá ser cualquier cosa y elcual por defecto, lo hace opcional por tanto, no hace falta el ?
}

export const MyCheckbox = ({ label, ...props }: Props ) => { // desestructuración de las props

    const [ field, meta ] = useField({...props, type: 'checkbox'});
    // console.log({field, meta});
    

    return (
        <>
            <label >
                <input type="checkbox" {...field} {...props} />
                {label}
            </label>
            <ErrorMessage name ={props.name} component='span'/>

            {/* // Lo comento porque con el componente ErrorMessage me puedo ahorrar este código
                meta.touched && meta.error && (
                    <span className="error">{meta.error}</span>
                )
            */}
        </>
    )
}
