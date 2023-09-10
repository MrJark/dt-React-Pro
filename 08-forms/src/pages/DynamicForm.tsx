
import { Formik, Form } from 'formik';
import formJSON from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';
import { initialValuesToDynamicForm } from '../constants/const';
import * as Yup from 'yup';


const requiredFields: { [x: string]: any } = {};

for (const input of formJSON) {
    initialValuesToDynamicForm[ input.name ] = input.value;

    if( !input.validations ) continue; // si no existen validaciones para ese campo, continua el ciclo. Dato: no se puede poner un return porque es un ciclo

    let schema = Yup.string(); // este es el equema de validaciones y se hace con let porque se puede ir cambiando

    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required('This field is required')
        }
        // regla para el mínimo de caracteres
        if (rule.type === 'minLength') {
            schema = schema.min( (rule as any).value || 2, `Min characters are ${(rule as any).value || 2}`)
        }
        // regla para que sea un email
        if (rule.type === 'email') {
            schema = schema.email('The email format is wrong')
        }
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });


export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>
            
            <Formik
                initialValues={initialValuesToDynamicForm}
                onSubmit={ (values) => {
                    console.log(values);
                    
                }}
                validationSchema={validationSchema}
            >
                { (formik) => (
                    <Form >
                        {
                            formJSON.map( (field) => {
                                const { type, label, name, placeholder, options } = field;

                                if ( type === 'input' || type === 'password' || type === 'email' ) {
                                    return (
                                        <MyTextInput
                                            key={name}
                                            label={label} 
                                            name={name}
                                            placeholder={placeholder}
                                        />
                                    )
                                } else if ( type === 'select' ) {
                                    return (
                                        <MySelect 
                                            key={name}
                                            label={label} 
                                            name={name}
                                        >
                                            <option value="">Select an option</option>
                                            {
                                                options?.map( option => (
                                                    <option 
                                                        key={option.id}
                                                        value={option.id}>
                                                            {option.label}
                                                    </option>
                                                ))
                                            }
                                        </MySelect>
                                )}


                                return <span>Type: { type } not soported</span>

                            })
                        }
                        
                        <button type='submit'>
                            Submit
                        </button>
                    </Form>
                )}                
            </Formik>
        </div>
    )
}
