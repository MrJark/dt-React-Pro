import { ProductCard } from "../components/ProductCard"
import { Product } from "../interfaces/interfaces"


const product: Product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png',
    description: 'Coffee mug'
}

export const ShoppingPage = () => {
    return (
        <>
            <div>
                <h1>Shopping Page</h1>
                <hr />
                <div style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap'}}>
                    <ProductCard product={ product }/>

                </div>
            </div>
        </>
    )
}
