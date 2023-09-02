import { LazyExoticComponent } from 'react';
import { JSXComponent } from './types';


interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent< JSXComponent > | JSXComponent
    name: string,
}

export type {
    Route
}