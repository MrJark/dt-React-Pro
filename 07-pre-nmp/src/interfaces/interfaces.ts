
import { Props as ProductToTitleProps } from '../components/subCardComponent/ProductTitle';
import { Props as PropsToProductImage } from '../components/subCardComponent/ProductImage';
import { Props as PropsToProductButtons } from '../components/subCardComponent/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';



interface ProductContextProps {
    counter: number,
    countBy: ( value: number ) => void,
    product: Product,
    maxCounter?: number,
}

interface Product {
    id: string,
    title: string,
    img: string,
    description?: string,
}

interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: ( Props: ProductToTitleProps ) => JSX.Element,
    Image: ( Props: PropsToProductImage ) => JSX.Element,
    Buttons: ( Props: PropsToProductButtons ) => JSX.Element,
}

interface ProductInCart extends Product { // para añadir una propiedad más a una interface se usa el 'extends'
    count: number,
}

interface OnChangeArgs {
    product: Product, 
    count: number
}

interface InitialValues { // la creo aquí para no tener una anidación dentro de las props del product cart
    count?: number,
    maxCount?: number,
}

interface ProductCardHandlers {
    theCount: number,
    isMaxCountReached: boolean,
    maxCount?: number,
    product: Product,
    countBy: ( value: number) => void,
    reset: () => void,
}

export type {
    Product,
    ProductCardProps,
    ProductContextProps,
    ProductCardHOCProps,
    ProductInCart,
    OnChangeArgs,
    InitialValues,
    ProductCardHandlers,
}