
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
// import noImge from '../assets/no-image.jpg';


export const ProductCard = () => {

    const { counter, countBy } = useProduct(); 

    return (
        <>
            <div className={ styles.productCard }>
                <img className={ styles.productImg } src="./coffee-mug.png" alt="coffee mug" />
                {/* <img className={ styles.productImg } src={noImge} alt="no image of mug" /> */}
                <span className={ styles.productDescription }>Coffee Mug</span>

                <div className={ styles.buttonsContainer }>

                    <button onClick={ () => countBy(-1)} className={ styles.buttonMinus }>-</button>

                    <div className= { styles.countLabel }>{counter}</div>

                    <button onClick={ () => countBy(+1)} className={ styles.buttonAdd }>+</button>

                </div>

            </div>
        </>
    )
}
