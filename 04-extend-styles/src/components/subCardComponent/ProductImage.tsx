import styles from '../../styles/styles.module.css';
import noImage from '../../assets/no-image.jpg';
import { useContext } from 'react';
import { ProductContext } from '../ProductCard';
import { PropsToProductImage } from '../../interfaces/interfaces';


export const ProductImage = ({ img = '', className }: PropsToProductImage) => {

    const { product } = useContext( ProductContext );
    let imgToShow: string;

    if ( img ) {
        imgToShow = img;
    } else if ( product.img ) {
        imgToShow = product.img 
    } else {
        imgToShow = noImage
    }

    return (
        <img 
            className={ `${styles.productImg} ${className}` } 
            src={ imgToShow } 
            alt="Product Image"
        />
    )
}
