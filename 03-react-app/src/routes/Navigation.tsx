import { BrowserRouter, NavLink } from 'react-router-dom';



export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src="https://mrjark.com/wp-content/uploads/2023/04/cropped-favicon-mrjark-32x32.png" alt="mrjark logo" />
                    <ul>
                        <li>
                            <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : ''} to='/lazy1'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : ''} to='/lazy2'>About</NavLink>
                        </li>
                        <li>
                            <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : ''} to='/lazy3'>User</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </BrowserRouter>
    )
}