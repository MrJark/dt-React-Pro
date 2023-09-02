import { LazyPage1, LazyPage2, LazyPage3, Page404 } from "../01-lazyload/pages";
import { Route } from "../01-lazyload/typings/interfaces";

const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: LazyPage1,
        name: 'Lazy 1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: LazyPage2,
        name: 'Lazy 2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: LazyPage3,
        name: 'Lazy 3'
    },
    {
        to: '',
        path: '*',
        Component: Page404,
        name: '404 Page'
    }
];

export {
    routes
}