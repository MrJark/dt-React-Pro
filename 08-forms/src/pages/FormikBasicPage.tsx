import { useFormik } from 'formik';
import '../styles/styles.css';


export const FormikBasicPage = () => {

    const formik = useFormik({ // es común que se llame formik
        initialValues: { // este initial es como yo quiero que sea este formulario pero puede tener la forma que yo quiera
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => { // <- esta función también se puede hacer de forma async
            console.log(values); // este solo se disparará cuando tenga todas las reglas del formulario validadas
            
        }
    })
    const { handleChange, values, handleSubmit } = formik;

    return (
        <div>
            <h1>Formik Tutorial</h1>

            <form onSubmit={ handleSubmit } noValidate>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    name='firstName'
                    onChange={ handleChange }
                    value={ values.firstName } // este value.firstName es lo que has definido arriba yo, no viene nativo. Lo que si es native es el values que hace referencia a lo que has definido
                />
                <span>Fiste Name is required</span>

                <label htmlFor="firstName">Last Name</label>
                <input 
                    type="text" 
                    name='lastName'
                    onChange={ handleChange }
                    value={ values.lastName }
                />
                <span>Last Name is required</span>

                <label htmlFor="emailAdress">Email Adress</label>
                <input 
                    type="email" 
                    name='email'
                    onChange={ handleChange }
                    value={ values.email }
                />
                <span>Email is required</span>

                <button 
                    type='submit'
                >Submit</button>
            </form>
        </div>
    )
}
