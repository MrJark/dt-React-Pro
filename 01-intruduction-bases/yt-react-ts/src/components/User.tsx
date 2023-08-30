import { useState } from 'react'

// las interfaces son reglas que le podemos poner a los objetos
interface User {
    uid: string,
    name: string,
}

// si quiero crear una const con un user que use la interface de User, tiene que tener los mismos campos y la misma forma:
// const otherUser: User = {
//     uid: 'abc456',
//     name: 'Mariano'
// };

export const User = () => {
    // podría ponerle los {} como objeto vacio pero no le estaría diciendo que tipo de elementos tiene en su interior y para ello uso el interface y le digo que ese state va a manejar un user
    const [user, setUser] = useState<User>(); 

    const logIn = () => {
        setUser({
            uid: 'ABC123',
            name: 'Chema'
        })
    }
    return (
        <>
            <div>
                <h3>User: useState</h3>
                <button onClick={logIn} className="btn btn-outline-secondary">
                    LogIn
                </button>
            </div>
            <div>
                {
                    ( !user )
                        ? 'No user yet'
                        : <pre>{JSON.stringify(user)}</pre>
                }
            </div>
        </>
    )
}
