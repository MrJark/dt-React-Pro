import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';




export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src="https://mrjark.com/wp-content/uploads/2023/04/cropped-favicon-mrjark-32x32.png" alt="mrjark logo" />
                    <ul>
                        <li>
                            <NavLink 
                                to='/' 
                                className={ ({ isActive }) => isActive ? 'nav-active' : ''}
                            >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className={ ({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/user' className={ ({ isActive }) => isActive ? 'nav-active' : ''}>User</NavLink>
                        </li>
                    </ul>
                </nav>

                {/* <Routes>
                    <Route path='/' element={ <h1>Home</h1> }/>
                </Routes> */}
            </div>
        </BrowserRouter>
    )
}