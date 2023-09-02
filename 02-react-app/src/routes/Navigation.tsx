import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

import { routes } from './routes';
import { Suspense } from 'react';



export const Navigation = () => {
    /* Tarea: hacer el .map del routes para que sea dinémico ✅  */
    /* Para usar el Lazy tenemos que envolver el Browser en el Suspense, componente de React el cual le dice que para la carga y solo la haga cuando sea necesario y teneos que ponerle el fallback que es lo que renderiza mientras carga*/
    return (
        <>
            <Suspense fallback={ <span>Loading...</span> } >
                <BrowserRouter>
                    <div className='main-layout'>
                        <nav> 
                            <img src="https://mrjark.com/wp-content/uploads/2023/04/cropped-favicon-mrjark-32x32.png" alt="mrjark logo" />
                            <ul>
                                {
                                    routes.map( route => {
                                        return (
                                            route.to === '' 
                                                ? null
                                                : <li key={route.to}>
                                                        <NavLink
                                                            to={route.to}
                                                            className={ ({ isActive }) => isActive ? 'nav-active' : ''}
                                                        >{route.name}</NavLink>
                                                    </li>
                                        )
                                    })
                                }
                                {/* <li>
                                    <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : ''} to='/lazy1'>Lazy1</NavLink>
                                </li>
                                <li>
                                    <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : ''} to='/lazy2'>Lazy2</NavLink>
                                </li>
                                <li>
                                    <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : ''} to='/lazy3'>Lazy3</NavLink>
                                </li> */}
                            </ul>
                        </nav>

                        <Routes>
                            {
                                routes.map( route => {
                                    return (
                                        <Route
                                            key={route.to}
                                            path={route.path} 
                                            element={< route.Component />}
                                        />
                                    )
                                })
                            }
                            {/* <Route path='*' element={ <Page404 /> } />
                            <Route path='/lazy1' element={ <LazyPage1 /> } />
                            <Route path='/lazy2' element={ <LazyPage2 /> } />
                            <Route path='/lazy3' element={ <LazyPage3 /> } /> */}
                        </Routes>
                    </div>
                </BrowserRouter>
            </Suspense>
        </>
    )
}
