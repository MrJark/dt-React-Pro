
import { Formik, Form } from 'formik';
import formJSON from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';
import { initialValuesToDynamicForm } from '../constants/const';


for (const input of formJSON) {
    initialValuesToDynamicForm[ input.name ] = input.value
}

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>
            
            <Formik
                initialValues={initialValuesToDynamicForm}
                onSubmit={ (values) => {
                    console.log(values);
                    
                }}
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
