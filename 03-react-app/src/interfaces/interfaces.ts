import { ReactElement } from "react"


interface ProductCardProps {
    children?: ReactElement | ReactElement[], // SIEMPRE es así para los childrens. Le digo que es de tipo ReactElement pero que puede venir uno solo o puede ser un arreglo, varios childrens
    product: Product
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

/* Sub Cart Components */
// interface ProductButtonsProps { // puedo no usar esta interface gracias al context
//     counter: number,
//     countBy: (value: number) => void,
// }

export type {
    Product,
    ProductCardProps,
    // ProductButtonsProps,
    ProductContextProps,
}