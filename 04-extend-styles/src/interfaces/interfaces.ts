import { ReactElement } from "react"


interface ProductCardProps {
    children?: ReactElement | ReactElement[], // SIEMPRE es así para los childrens. Le digo que es de tipo ReactElement pero que puede venir uno solo o puede ser un arreglo, varios childrens
    product: Product,
    className?: string // la parte del className para los styles
}

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

interface ProductCardHOCProps { // estas descripciones las he obtenido poniendo el cursor encima del elemento y copiandolo
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: ({ title }: { title?: string }) => JSX.Element,
    Image: ({ img  }: { img ?: string }) => JSX.Element,
    Buttons: () => JSX.Element
}

//* props para los subCardComponents
interface PropsToProductTitle {
    title?: string,
    className?: string,
}
// Tarea: hacer la props para image ✅
interface PropsToProductImage {
    img?: string,
    className?: string,
}

export type {
    Product,
    ProductCardProps,
    ProductContextProps,
    ProductCardHOCProps,
    PropsToProductTitle,
    PropsToProductImage,
}