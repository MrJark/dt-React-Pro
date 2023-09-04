
import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';
import { ProductButtons, ProductImage, ProductTitle } from './subCardComponent';

// import { ProductImage, ProductTitle } from './subCardComponent';
// import { ProductButtons } from './subCardComponent/ProductButtons';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ( {children, product }: ProductCardProps) => {

    const { counter, countBy } = useProduct(); 

    return (
        <Provider value={{ // por el context para poder compartir las props entre padre e hijos
            counter, countBy, product
        }}>
            <div className={ styles.productCard }>
                {/* <img className={ styles.productImg } src="./coffee-mug.png" alt="coffee mug" /> */}
                
                {/* <img className={ styles.productImg } src={ product.img ? product.img : noImage } alt="no image of mug" /> */}
                {/* <ProductImage img={product.img}/> */}

                {/* <span className={ styles.productDescription }>{product.title}</span> */}
                {/* < ProductTitle title={product.title} /> */}

                {/* <div className={ styles.buttonsContainer }>
                    <button onClick={ () => countBy(-1)} className={ styles.buttonMinus }>-</button>
                    <div className= { styles.countLabel }>{counter}</div>
                    <button onClick={ () => countBy(+1)} className={ styles.buttonAdd }>+</button>
                </div> */}
                {/* < ProductButtons counter={counter} countBy={countBy}/> */}
                {/* gracias a los childrens puedo solo tener esto👇🏼 */}
                {children}
            </div>
        </Provider>
    )
}

// Esto es para poder llamarlos de una manera más lógica
ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
