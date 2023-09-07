import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import {RegisterPage} from '../pages/RegisterPage.jsx'
import { FormikBasicPage } from '../pages/FormikBasicPage.js';


export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src="https://mrjark.com/wp-content/uploads/2023/04/cropped-favicon-mrjark-32x32.png" alt="mrjark logo" />
                    <ul>
                        <li>
                            <NavLink 
                                to='/register' 
                                className={ ({ isActive }) => isActive ? 'nav-active' : ''}
                            >Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik' className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik</NavLink>
                        </li>
                        <li>
                            <NavLink to='/user' className={ ({ isActive }) => isActive ? 'nav-active' : ''}>User</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/register' element={ <RegisterPage /> }/>
                    <Route path='/formik' element={ <FormikBasicPage /> }/>
                    <Route path='/user' element={ <p><a style={{ color: 'white', fontSize: '30px', }} href="https://linkedin.com/in/mrjark">MrJark</a></p> }/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}