

import { useContext } from 'react';
// import { ProductButtonsProps } from '../../interfaces/interfaces';
import styles from '../../styles/styles.module.css';
import { ProductContext } from '../ProductCard';


// export const ProductButtons = ({ counter, countBy }: ProductButtonsProps ) => { // gracias al context, puedo no recibir como props el countir y el countBy
export const ProductButtons = () => { 

    const context = useContext( ProductContext );
    const { countBy, counter } = context;

    return (
        <div className={ styles.buttonsContainer }>

            <button onClick={ () => countBy(-1)} className={ styles.buttonMinus }>-</button>

            <div className= { styles.countLabel }>{counter}</div>

            <button onClick={ () => countBy(+1)} className={ styles.buttonAdd }>+</button>

        </div>
    )
}
