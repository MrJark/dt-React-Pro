import { useContext } from 'react';
import styles from '../../styles/styles.module.css';
import { ProductContext } from '../ProductCard';



export const ProductTitle = ({ title }: { title?: string }) => { // este tipo de interfaces es solo para elementos simples, si es algo más elabotarado, mejor hacerlo a parte
    // Tarea: hacer el contexto en este elemento
    const context = useContext( ProductContext );
    const { product } = context;

    // forma 2, ternarios
    const titleToShow: string = title ? title : product.title;
    // forma 1 con ifs
    // if ( title ){
    //     titleToShow = title;
    // } else {
    //     titleToShow = product.title
    // }


    return (
        <span className={ styles.productDescription } >{titleToShow}</span>
    )
}
