
import { ProductCard } from "../components"
import { ProductButtons, ProductImage, ProductTitle } from "../components/subCardComponent"
import { products } from "../constants/products"

import '../styles/customStyles.css'

const product = products[0];

export const ShoppingPage = () => {
    
    

    return (
        <>
            <div>
                <h1>Shopping Page</h1>
                <hr />
                <div >
                    <ProductCard 
                        key={ product.id }
                        product={ product }
                        className = 'bg-dark text-white'
                        initialValues = {{
                            count: 2,
                            maxCount: 10
                        }}
                    >
                        <ProductImage 
                            className = 'custom-image'
                        />
                        <ProductTitle 
                            className = 'text-white'
                        />
                        <ProductButtons 
                            className = 'custom-buttons'
                        />
                    </ProductCard>
                </div>
            </div>
        </>
    )
}
