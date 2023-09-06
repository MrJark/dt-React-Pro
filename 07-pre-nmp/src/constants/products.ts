import { Product } from "../interfaces/interfaces";


export const product1: Product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png',
    description: 'Coffee mug'
}
export const product2: Product = {
    id: '2',
    title: 'Coffee Mug 2',
    img: './coffee-mug-2.png',
    description: 'Coffee mug'
}

export const products: Product[] = [ product1, product2];
