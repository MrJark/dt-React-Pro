

import { ProductButtonsProps } from '../../interfaces/interfaces';
import styles from '../../styles/styles.module.css';


export const ProductButtons = ({ counter, countBy }: ProductButtonsProps ) => {

    return (
        <div className={ styles.buttonsContainer }>

            <button onClick={ () => countBy(-1)} className={ styles.buttonMinus }>-</button>

            <div className= { styles.countLabel }>{counter}</div>

            <button onClick={ () => countBy(+1)} className={ styles.buttonAdd }>+</button>

        </div>
    )
}
