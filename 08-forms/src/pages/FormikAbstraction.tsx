import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // esto significa: importa TODO y dale el nombre de Yup desde yup
import '../styles/styles.css';
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components/MySelect';




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

                            <MySelect label='Job Type' name='jobType' >
                                <Field name='jobType' as='select'>
                                    <option value="pick-something">Pick someting</option>
                                    <option value="developer">Developer</option>
                                    <option value="deseigner">Designer</option>
                                    <option value="merketer">Marketer</option>
                                    <option value="growth-manager">Growth Manager</option>
                                    <option value="it-junior">Jr. IT</option>
                                </Field>
                            </MySelect>
                            {/* el errormessage y el label los puedo eliminar gracias al MySelect y las option podría si se lo mando como un objeto al propio MySelect */}
                            {/* <label htmlFor="jobType">Job Type</label> */}
                            {/* <ErrorMessage name='jobType' component='span' /> */}

                            <label>
                                <Field name='terms' type='checkbox'/>
                                Terms and Conditions
                            </label>
                            <ErrorMessage name='terms' component='span' />

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
