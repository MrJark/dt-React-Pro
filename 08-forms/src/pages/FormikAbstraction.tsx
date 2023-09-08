import { Formik, Form } from 'formik';
import * as Yup from 'yup'; // esto significa: importa TODO y dale el nombre de Yup desde yup
import '../styles/styles.css';
import { MyTextInput } from '../components/MyTextInput';




export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik 
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={ ( values ) => {
                    console.log(values);  
                }}
                validationSchema={
                    Yup.object({ 
                        firstName: Yup.string()
                            .max(15, 'Must be 15 characters of less')
                            .required('Required')
                        ,lastName: Yup.string()
                            .max(15, 'Must be 20 characters of less')
                            .required('Required')
                        ,email: Yup.string()
                            .email('Your email is invalid')
                            .required('Required')
                        ,terms: Yup.boolean()
                            .oneOf([true], 'Please, accept terms')
                        ,jobType: Yup.string()
                            .notOneOf(['pick-something'], 'Plaese, choose one')
                            .required('Required')

                    })
                }
            >
                { () => ( 
                        <Form>
                            <MyTextInput 
                                label='First Name' 
                                name='firstName'
                                placeholder='Chema'
                            />
                            <MyTextInput 
                                label='Last Name' 
                                name='lastName'
                                placeholder='Ferrandez'
                            />
                            <MyTextInput 
                                label='Email' 
                                name='email'
                                placeholder='chema@gmail.com'
                                type='email'
                            />


                            <button 
                                type='submit'
                            >Submit</button>
                        </Form>
                    )
                }

            </Formik>

            
        </div>
    )
}
