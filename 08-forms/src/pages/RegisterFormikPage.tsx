/* *
 * Tarea: hacer todo el formulario ✅
 * Name: min 2, max 20 characteres and required
 * Last Name: max 20 characteres
 * Email: required 
 * Password: min 20 characteres
 * Second Password: same that first
 * Terms: Required true
 * Job Type: required
*/
import * as Yup from 'yup';
import { Form, Formik } from 'formik';

import { MyTextInput, MySelect, MyCheckbox } from '../components';

import '../styles/styles.css'


export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    jobType: '',
                    password: '',
                    secondPassword: '',
                    terms: false,
                }}
                onSubmit={ (value) => {
                    console.log(value);
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .required('First Name is required')
                            .min(2, 'Must be 2 characters or more')
                            .max(20, 'Must be 20 characters or less')
                        ,lastName: Yup.string()
                            .min(2, 'Must be 2 characters or more')
                            .max(20, 'Must be 20 characters or less')
                        ,email: Yup.string()
                            .required('Email is required')
                            .email()
                        ,password: Yup.string()
                            .min(8, 'The password must be 8 characteres or more')
                            .required('Password is required')
                        ,secondPassword: Yup.string()
                            .required('Please repeat your password')
                            .oneOf([Yup.ref('password')], 'Your password must be equal' )
                        ,jobType: Yup.string()
                            .notOneOf(['pick-something'], 'Plaese, choose one')
                            .required('Required')
                        ,terms: Yup.boolean()
                            .oneOf([true], 'Please, accept terms')
                            .required()
                    })
                }
            >
                {
                    () => (
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
                                type='email'
                                placeholder='chema@gmail.com'
                            />

                            <MySelect 
                                label='Select One' 
                                name='jobType' 
                            >
                                <option value="pick-something">Pick someting</option>
                                <option value="developer">Developer</option>
                                <option value="deseigner">Designer</option>
                                <option value="merketer">Marketer</option>
                                <option value="growth-manager">Growth Manager</option>
                                <option value="it-junior">Jr. IT</option>
                            </MySelect>

                            <MyTextInput 
                                label='Password' 
                                name='password' 
                                type='password'
                                placeholder='******'
                            />
                            <MyTextInput 
                                label='Repeat the password' 
                                name='secondPassword' 
                                type='password'
                            />

                            <MyCheckbox 
                                label='Terms and Conditions'
                                name='terms' 
                            />

                            <button type='submit'>
                                Submit
                            </button>
                        </Form>
                    )
                }
                
            </Formik>
        </div>
    )
}
