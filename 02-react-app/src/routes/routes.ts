import { Lazy1, Lazy2, Lazy3,  Lazy404,  LazyLayout } from "../01-lazyload/components/Lazy";
// import { LazyLayout } from "../01-lazyload/components/Lazy";

import { NoLazy } from "../01-lazyload/pages/NoLazy";


import { Route } from "../01-lazyload/typings/interfaces";

// import { Page404 } from "../01-lazyload/pages";



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
    { // no puedo tener esta ruta porque me da error a no ser que también la ponga en el sidebar
        to: '/page404',
        path: '*',
        Component: Lazy404,
        name: '404 Page'
    },
    { //
        path: 'lazylayout/*', // esto quiere decir que todas aquellas rutas que pasen por el lazyload, tendrán en la url /lazyload/el-nombre-que-le-corresponda
        to: '/lazylayout',
        Component: LazyLayout,
        name: 'Lazy Layout - Dash'
    },
    // sin lazy 👇🏼
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
];

export {
    routes
}