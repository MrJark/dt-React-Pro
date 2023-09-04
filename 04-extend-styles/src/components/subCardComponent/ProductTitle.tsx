import { useContext } from 'react';
import styles from '../../styles/styles.module.css';
import { ProductContext } from '../ProductCard';
import { PropsToProductTitle } from '../../interfaces/interfaces';

// Tarea: intentar cambiar el título a blanco con el className ✅ Lo he hecho manteniendo las props en el propio componente pero debería haber hecho una interface específica para el ProductTitle d

// export const ProductTitle = ( // de esta manera está bien pero es algo más complejo de leer
//         { title, className }: 
//         { title?: string, className?: string }
//     ) => {
export const ProductTitle = ({ title, className}: PropsToProductTitle) => {

    const context = useContext( ProductContext );
    const { product } = context;

    const titleToShow: string = title ? title : product.title;

    return (
        <span className={ `${styles.productDescription} ${className}` } >{titleToShow}</span>
    )
}
