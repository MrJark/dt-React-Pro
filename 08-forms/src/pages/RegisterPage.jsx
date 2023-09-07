


export const RegisterPage = () => {

    const handleClick = (e) => {
        e.preventDefault();
        
    }

    // el ultimo btn de un formulario, por default, es de tipo submit por tanto se podría obviar
    return (
        <div>
            <h1>Register Page</h1>

            <form>
                <input 
                    type="text" 
                    placeholder="Name"
                />
                <input 
                    type="email" 
                    placeholder="Email"
                />
                <input 
                    type="password" 
                    placeholder="Password"
                />

                <button 
                    type="submit"
                    onClick={handleClick}
                >Submit</button>
            </form>
        </div>
    )
}
