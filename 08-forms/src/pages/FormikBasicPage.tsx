import { useFormik, FormikErrors } from 'formik';
import '../styles/styles.css';
import { FormValues } from '../interfaces/interfaces';


export const FormikBasicPage = () => {

    const validate = ( { firstName, lastName, email }: FormValues ) => { // de desestructurado de values el firstName, lastName y el email que es justo lo que he puesto yo en el initalValues de formik
        const errors: FormikErrors<FormValues> = {};

        if ( !firstName ) {
            errors.firstName = 'Required'
        } else if ( firstName.length >= 15 ) {
            errors.firstName = 'Must be 15 characters of less'
        }
        
        if ( !lastName ) {
            errors.lastName = 'Required'
        } else if ( lastName.length >= 25 ) {
            errors.firstName = 'Must be 20 characters of less'
        }

        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) { // expresión regular para validar el email
            errors.email = 'Invalid email address';
        }

        return errors;
    }

    const formik = useFormik({ // es común que se llame formik
        initialValues: { // este initial es como yo quiero que sea este formulario pero puede tener la forma que yo quiera
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => { // <- esta función también se puede hacer de forma async
            console.log(values); // este solo se disparará cuando tenga todas las reglas del formulario validadas
            
        },
        validate
    })
    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = formik;

    return (
        <div>
            <h1>Formik Tutorial</h1>

            <form onSubmit={ handleSubmit } noValidate>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    name='firstName'
                    onBlur={ handleBlur }
                    onChange={ handleChange }
                    value={ values.firstName } // este value.firstName es lo que has definido arriba yo, no viene nativo. Lo que si es native es el values que hace referencia a lo que has definido
                />
                { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    name='lastName'
                    onBlur={ handleBlur }
                    onChange={ handleChange }
                    value={ values.lastName }
                />
                { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }

                <label htmlFor="emailAdress">Email Adress</label>
                <input 
                    type="email" 
                    name='email'
                    onBlur={ handleBlur }
                    onChange={ handleChange }
                    value={ values.email }
                />
                { touched.email && errors.email && <span>{ errors.email }</span> }

                <button 
                    type='submit'
                >Submit</button>
            </form>
        </div>
    )
}
