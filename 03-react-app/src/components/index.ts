import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductButtons, ProductImage, ProductTitle } from './subCardComponent';

// Hago este archivo para poder tener la ProductCard.Image, .Title y .Buttons y tenerlo todo desde la misma import y sea una relación directa

export const ProductCard = Object.assign( ProductCardHOC , {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})