import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // esto significa: importa TODO y dale el nombre de Yup desde yup
import '../styles/styles.css';




export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Component</h1>

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
                            <label htmlFor="firstName">First Name</label> {/** este label como tal no hace falta pero es más que nada para identificar el campo */}
                            <Field name='firstName' type='text'/>
                            <ErrorMessage name='firstName' component='span' /> {/** la parte del component es porque quiero que tenga ese formato por los estilos ya que esto devuelve un texto plano */}
                            
                            <label htmlFor="lastName">Last Name</label>
                            <Field name='lastName' type='text'/>
                            <ErrorMessage name='lastName' component='span' />

                            <label htmlFor="email">Email</label>
                            <Field name='email' type='text'/>
                            <ErrorMessage name='email' component='span' />

                            <label htmlFor="jobType">Job Type</label>
                            <Field name='jobType' as='select'>
                                <option value="pick-something">Pick someting</option>
                                <option value="developer">Developer</option>
                                <option value="deseigner">Designer</option>
                                <option value="merketer">Marketer</option>
                                <option value="growth-manager">Growth Manager</option>
                                <option value="it-junior">Jr. IT</option>
                            </Field>
                            <ErrorMessage name='jobType' component='span' />

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
