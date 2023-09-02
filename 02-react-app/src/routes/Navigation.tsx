import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

import { LazyPage1, LazyPage2, LazyPage3, Page404 } from '../01-lazyload/pages';



export const Navigation = () => {

    return (
        <>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        
                        <img src="https://mrjark.com/wp-content/uploads/2023/04/cropped-favicon-mrjark-32x32.png" alt="mrjark logo" />
                        <ul>
                            <li>
                                <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : ''} to='/lazy1'>Lazy1</NavLink>
                            </li>
                            <li>
                                <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : ''} to='/lazy2'>Lazy2</NavLink>
                            </li>
                            <li>
                                <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : ''} to='/lazy3'>Lazy3</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path='*' element={ <Page404 /> } />
                        <Route path='/lazy1' element={ <LazyPage1 /> } />
                        <Route path='/lazy2' element={ <LazyPage2 /> } />
                        <Route path='/lazy3' element={ <LazyPage3 /> } />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}
