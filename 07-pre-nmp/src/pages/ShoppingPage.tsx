
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
                        initialValues = {{
                            count: 2,
                            maxCount: 10
                        }}
                    >
                        {
                            () => ( // desestructuración
                                <>
                                    <ProductImage />
                                    <ProductTitle />
                                    <ProductButtons />
                                </>
                            )
                        }
                    </ProductCard>
                </div>
            </div>
        </>
    )
}
