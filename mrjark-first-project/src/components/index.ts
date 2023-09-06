import { ProductCardHOCProps } from '../interfaces/interfaces';
import { ProductCard as ProductCardHOC } from './ProductCard';

import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export { ProductTitle } from './ProductTitle';
export { ProductImage } from './ProductImage';
export { ProductButtons } from './ProductButtons';
// Hago este archivo para poder tener la ProductCard.Image, .Title y .Buttons y tenerlo todo desde la misma import y sea una relación directa

export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC , {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCard; 
