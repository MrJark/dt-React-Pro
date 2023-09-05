
import { CSSProperties, ReactElement, createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { InitialValues, OnChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    children?: ReactElement | ReactElement[], // SIEMPRE es así para los childrens. Le digo que es de tipo ReactElement pero que puede venir uno solo o puede ser un arreglo, varios childrens
    product: Product,
    className?: string, // la parte del className para los styles
    style?: CSSProperties, // este es el tipo que tiene el style en las props y lo consigo igual que los otros. Poniendome encima del elemento porque si se cómo se usa, al hacerlo, con ponerme encima me dice que es
    onChange?: ( args: OnChangeArgs ) => void,
    value?: number,
    initialValues?: InitialValues
}

export const ProductCard = ( {children, product, className, style, onChange, value, initialValues }: Props) => {

    const { counter, countBy } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter, countBy, product
        }}>
            <div 
                className={ `${styles.productCard} ${className}` }
                style={ style }
            >
                {children}
            </div>
        </Provider>
    )
}
