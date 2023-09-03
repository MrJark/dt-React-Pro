

interface Props {
    product: Product
}

interface Product {
    id: string,
    title: string,
    img: string,
    description?: string,
}

/* Sub Cart Components */
interface ProductButtonsProps {
    counter: number,
    countBy: (value: number) => void,
}

export type {
    Product,
    Props,
    ProductButtonsProps,
}