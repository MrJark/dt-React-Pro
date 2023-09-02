import { lazy } from 'react'

/**
 * Para trabajar con los lazy de react, los componentes, las LazyPages, deben estar como una 'export default ...' y no como un ' export const' o 'export function'
*/

const Lazy1 = lazy( () => import('../../01-lazyload/pages/LazyPage1') );
const Lazy2 = lazy( () => import('../../01-lazyload/pages/LazyPage2') );
const Lazy3 = lazy( () => import('../../01-lazyload/pages/LazyPage3') );


export {
    Lazy1,
    Lazy2,
    Lazy3,
}
