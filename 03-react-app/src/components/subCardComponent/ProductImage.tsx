import styles from '../../styles/styles.module.css';
import noImage from '../../assets/no-image.jpg';


export const ProductImage = ({ img = '' }) => {
    return (
        <img className={ styles.productImg } src={ img ? img : noImage } alt="Product Image" />
    )
}
