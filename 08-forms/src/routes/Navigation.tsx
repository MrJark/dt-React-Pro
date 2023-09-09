import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

// import {RegisterPage} from '../pages/RegisterPage.jsx'
// import { FormikBasicPage } from '../pages/FormikBasicPage.js';
// import { FormikYupPage } from '../pages/FormikYupPage.js';
// import { FormikComponents } from '../pages/FormikComponents.js';
// import { FormikAbstraction } from '../pages/FormikAbstraction.js';

import { FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage} from '../pages'


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
                            <NavLink to='/formik-yup' className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik YUP</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-components' className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-abstraction' className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik Abstraction</NavLink>
                        </li>
                        <li>
                            <NavLink to='/user' className={ ({ isActive }) => isActive ? 'nav-active' : ''}>User</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/register' element={ <RegisterPage /> }/>
                    <Route path='/formik' element={ <FormikBasicPage /> }/>
                    <Route path='/formik-yup' element={ <FormikYupPage /> }/>
                    <Route path='/formik-components' element={ <FormikComponents /> }/>
                    <Route path='/formik-abstraction' element={ <FormikAbstraction /> }/>
                    <Route path='/user' element={ <p><a style={{ color: 'white', fontSize: '30px', }} href="https://linkedin.com/in/mrjark">MrJark</a></p> }/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}