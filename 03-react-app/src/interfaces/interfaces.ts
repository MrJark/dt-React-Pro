

interface Props {
    product: Product
}

interface Product {
    id: string,
    title: string,
    img: string,
    description?: string,
}



export type {
    Product,
    Props,
}