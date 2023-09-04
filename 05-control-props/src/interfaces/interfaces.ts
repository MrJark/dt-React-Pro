
import { Props as ProductToTitleProps } from '../components/subCardComponent/ProductTitle';
import { Props as PropsToProductImage } from '../components/subCardComponent/ProductImage';
import { Props as PropsToProductButtons } from '../components/subCardComponent/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';


// interface ProductCardProps {
//     children?: ReactElement | ReactElement[], // SIEMPRE es así para los childrens. Le digo que es de tipo ReactElement pero que puede venir uno solo o puede ser un arreglo, varios childrens
//     product: Product,
//     className?: string // la parte del className para los styles
// }

interface ProductContextProps {
    counter: number,
    countBy: ( value: number ) => void,
    product: Product,
}

interface Product {
    id: string,
    title: string,
    img: string,
    description?: string,
}

// interface ProductCardHOCProps { 
//     // estas descripciones las he obtenido poniendo el cursor encima del elemento y copiandolo
//     ({ children, product }: ProductCardProps): JSX.Element,
//     Title: ( Props: { title?: string, className?: string }) => JSX.Element,
//     Image: ( Props: { img ?: string, className?: string }) => JSX.Element,
//     Buttons: ( Props: {className?: string}) => JSX.Element,
// }

//* props para los subCardComponents
// interface PropsToProductTitle {
//     title?: string,
//     className?: string,
// }
// // Tarea: hacer la props para image ✅
// interface PropsToProductImage {
//     img?: string,
//     className?: string,
// }
// interface PropsToProductButtons {
//     className?: string,
// }
// 👆🏽 las comento porque para hacer que en los dos componentes se vean las mismas props, necesito tener en cada uno de los sub card components  sus propias props sino, estaría bien hecho

// Las interfaces PropsToProductTitle, PropsToProductButtons, PropsToProductImage son las mismas que el ProductCardHOCProps por tanto, solo quiero que estén una ves y para eso tengo que hacer lo siguiente

interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: ( Props: ProductToTitleProps ) => JSX.Element,
    Image: ( Props: PropsToProductImage ) => JSX.Element,
    Buttons: ( Props: PropsToProductButtons ) => JSX.Element,
}
export type {
    Product,
    ProductCardProps,
    ProductContextProps,
    ProductCardHOCProps,
}