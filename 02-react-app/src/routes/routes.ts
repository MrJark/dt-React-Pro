import { Lazy1, Lazy2, Lazy3 } from "../01-lazyload/components/Lazy";
// import { Page404 } from "../01-lazyload/pages";
import { Route } from "../01-lazyload/typings/interfaces";



const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: 'Lazy 1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy 2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Lazy 3'
    },
    // { // no puedo tener esta ruta porque me da error
    //     to: '',
    //     path: '*',
    //     Component: Page404,
    //     name: '404 Page'
    // }
];

export {
    routes
}