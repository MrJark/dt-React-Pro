import { useFormik } from 'formik';
import * as Yup from 'yup'; // esto significa: importa TODO y dale el nombre de Yup desde yup
import '../styles/styles.css';



export const FormikYupPage = () => {



    const formik = useFormik({ // es común que se llame formik
        initialValues: { // este initial es como yo quiero que sea este formulario pero puede tener la forma que yo quiera
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => { // <- esta función también se puede hacer de forma async
            console.log(values); // este solo se disparará cuando tenga todas las reglas del formulario validadas
            
        }, //* Tarea: hacer el lastName y el email ✅
        validationSchema: Yup.object({ // el objeto de dentro tiene que tener los mimsos nombres que el initalValues de arriba sino no hará match
            firstName: Yup.string() // los puntos de abajop son las validaciones
                .max(15, 'Must be 15 characters of less')
                .required('Required')
            ,lastName: Yup.string() // los puntos de abajop son las validaciones
                .max(15, 'Must be 20 characters of less')
                .required('Required')
            ,email: Yup.string() // los puntos de abajop son las validaciones
                .email('Your email is invalid')
                .required('Required')
                
            
        })
    })
    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = formik;

    return (
        <div>
            <h1>Formik YUP</h1>

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
