
import { useProduct } from '../hooks/useProduct';
import { Props } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

import { ProductImage, ProductTitle } from './subCardComponent';
import { ProductButtons } from './subCardComponent/ProductButtons';





export const ProductCard = ( { product }: Props) => {

    const { counter, countBy } = useProduct(); 

    return (
        <>
            <div className={ styles.productCard }>
                {/* <img className={ styles.productImg } src="./coffee-mug.png" alt="coffee mug" /> */}
                
                {/* <img className={ styles.productImg } src={ product.img ? product.img : noImage } alt="no image of mug" /> */}
                <ProductImage img={product.img}/>

                {/* <span className={ styles.productDescription }>{product.title}</span> */}
                < ProductTitle title={product.title} />

                {/* <div className={ styles.buttonsContainer }>
                    <button onClick={ () => countBy(-1)} className={ styles.buttonMinus }>-</button>
                    <div className= { styles.countLabel }>{counter}</div>
                    <button onClick={ () => countBy(+1)} className={ styles.buttonAdd }>+</button>
                </div> */}
                < ProductButtons counter={counter} countBy={countBy}/>
            </div>
        </>
    )
}
