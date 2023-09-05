

import { CSSProperties, useCallback, useContext } from 'react';
// import { ProductButtonsProps } from '../../interfaces/interfaces';
import styles from '../../styles/styles.module.css';
import { ProductContext } from '../ProductCard';

export interface Props {
    className?: string,
    style?: CSSProperties,
}


// export const ProductButtons = ({ counter, countBy }: ProductButtonsProps ) => { // gracias al context, puedo no recibir como props el countir y el countBy
export const ProductButtons = ({ className, style }: Props) => { 
    /**
     * Tarea: si se alcanza el valor max debe desabilitarse el boton de + ❌
     * Pasos: 
     * 1. tener un 'maxCounter' que venga del context como prop y que sea opcional ✅ extrayendolo en el Product Cart como prop del useProduct y pasarlo al componente
     * 2. tener un 'isMaxReached' que es un useCallback y tendrá de dependencias [ counter, maxCounter] ❌
     * 3. dependiendo del resultado del isMaxReached tiene que devolver un true o false si  cunter = maxCounter o si no, respectivamente
     * 4. Agragarle la clase disabled con un condicional✅
    */ 
    const context = useContext( ProductContext );
    const { countBy, counter, maxCounter } = context;

    const isMaxReached = useCallback(
      () => !!maxCounter && counter === maxCounter,
      [counter, maxCounter],
    )
    

    return (
        <div 
            className={ `${styles.buttonsContainer} ${className}` }
            style={style}
        >

            <button onClick={ () => countBy(-1)} className={ styles.buttonMinus }>-</button>

            <div className= { styles.countLabel }>{counter}</div>

            <button onClick={ () => countBy(+1)} className={ `${ styles.buttonAdd } ${ isMaxReached() && styles.disabled }` }>+</button>

        </div>
    )
}
