import { ProductCard } from "../components"
import { ProductButtons, ProductImage, ProductTitle } from "../components/subCardComponent"
import { Product } from "../interfaces/interfaces"

import '../styles/customStyles.css'

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
                <div style={{ display: 'flex'}}>
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap'}}>
                        <ProductCard product={ product }>
                            <ProductImage/>
                            <ProductTitle />
                            <ProductButtons />
                        </ProductCard>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap'}}>
                    <ProductCard 
                        product = { product }
                        className = 'bg-dark'
                    >
                        <ProductCard.Image />
                        <ProductCard.Title title={'Coffee Mug alt'}/>
                        <ProductCard.Buttons />
                    </ProductCard>

                    </div>
                </div>
            </div>
        </>
    )
}
