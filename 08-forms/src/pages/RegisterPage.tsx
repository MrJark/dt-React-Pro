import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';

import '../styles/styles.css'

import { InitialValue } from '../interfaces/interfaces';

const initialValue: InitialValue = {
    name: '',
    email: '',
    password: '',
    secondPassword: '',
}

export const RegisterPage = () => {
    
    // Se puede manejar el estado de los formularios mediante un useState para cada uno de los campos y tener el valor inicial como un '' o similar pero también puedo manejarlo con uno solo
    const [registerDate, setRegisterDate] = useState(initialValue);
    const { email, name, password, secondPassword } = registerDate;


    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setRegisterDate( prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

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
                />
                <input 
                    type="email" 
                    placeholder="Email"
                    name='email'
                    value={email}
                    onChange={onChange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    name='password'
                    value={password}
                    onChange={onChange}
                />
                <input 
                    type="password" 
                    placeholder="Repeat password"
                    name='secondPassword'
                    value={secondPassword}
                    onChange={onChange}
                />

                <button 
                    type="submit"
                    
                >Submit</button>
            </form>
        </div>
    )
}
