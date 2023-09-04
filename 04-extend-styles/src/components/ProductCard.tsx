
import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ( {children, product, className }: ProductCardProps) => {

    const { counter, countBy } = useProduct(); 

    return (
        <Provider value={{
            counter, countBy, product
        }}>
            <div className={ `${styles.productCard} ${className}` }>
                {children}
            </div>
        </Provider>
    )
}
