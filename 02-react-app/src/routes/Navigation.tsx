import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';


export const Navigation = () => {

    return (
        <>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        
                        <img src="https://mrjark.com/wp-content/uploads/2023/04/cropped-favicon-mrjark-32x32.png" alt="mrjark logo" />
                        <ul>
                            <li>
                                <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : ''} to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : ''} to='/about'>About</NavLink>
                            </li>
                            <li>
                                <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : ''} to='/users'>Users</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path='*' element={ <h1>Error 404</h1> } />
                        <Route path='/' element={ <h1>Home</h1> } />
                        <Route path='/about' element={ <h1>About</h1> } />
                        <Route path='/users' element={ <h1>Users</h1> } />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}
