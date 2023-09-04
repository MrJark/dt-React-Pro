import { ReactElement } from "react"


interface ProductCardProps {
    children?: ReactElement | ReactElement[], // SIEMPRE es así para los childrens. Le digo que es de tipo ReactElement pero que puede venir uno solo o puede ser un arreglo, varios childrens
    product: Product,
    className?: string
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

export type {
    Product,
    ProductCardProps,
    ProductContextProps,
    ProductCardHOCProps,
}