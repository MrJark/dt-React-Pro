import { FormEvent } from 'react';

import '../styles/styles.css'
import { useFrom } from '../hooks/useForm';


export const RegisterPage = () => {

    const { 
        formData, onChange, resetForm, isValidEmail

    } = useFrom({ // lo que inicializa el useForm es lo que moldea al formData
        name:'',
        email: '',
        password: '',
        secondPassword: '',
    });

    const { name, email, password, secondPassword } = formData;
 
    const onSubmit = (e: FormEvent<HTMLFormElement>) => { // para saber el tipo del evento he tenido que hacer en el onSumbit del form (e) => onChange(e) y mantener el mouse encima y solo me lo dice
        e.preventDefault();
    }

    // el ultimo btn de un formulario, por default, es de tipo submit por tanto se podría obviar
    return (
        <div>
            <h1>Register Page</h1>

            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="Name"
                    name='name' // este name debe de hacer match con el del initialValue para que puedan escuchar el evento 
                    value={name}
                    onChange={onChange}
                    className={ `${ name.trim().length <= 0 && 'has-error' }` }
                    />
                { name.trim().length <= 0 && <span>Required</span>}
                <input 
                    type="email" 
                    placeholder="Email"
                    name='email'
                    value={email}
                    onChange={onChange}
                    className={ `${ !isValidEmail(email) && 'has-error' }`}
                />
                { !isValidEmail( email ) && <span>Invalid email</span>}
                <input 
                    type="password" 
                    placeholder="Password"
                    name='password'
                    value={password}
                    onChange={onChange}
                />
                { password.trim().length <= 0 && <span>Required</span>}
                { password.trim().length < 6 && password.trim().length > 0 && <span>Password need at least 6 characters</span>}
                <input 
                    type="password" 
                    placeholder="Repeat password"
                    name='secondPassword'
                    value={secondPassword}
                    onChange={onChange}
                />
                { secondPassword.trim().length <= 0 && <span>Required</span>}
                { secondPassword.trim().length > 0 && password !== secondPassword && <span>The password must be equal</span>}

                <button 
                    type="submit"
                    
                >Submit</button>
                <button 
                    type='button'
                    onClick={resetForm}
                >Reset</button>
            </form>
        </div>
    )
}
