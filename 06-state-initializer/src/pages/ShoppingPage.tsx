
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
                        {   // esto lo hago por el cambio del children que ha pasado a ser una JSX.Element para que funcione el Formik
                            ({ reset }) => ( // función que renderiza un jsx
                                <>
                                    <ProductImage 
                                        className = 'custom-image'
                                    />
                                    <ProductTitle 
                                        className = 'text-white'
                                    />
                                    <ProductButtons 
                                        className = 'custom-buttons'
                                    />
                                    <button onClick={reset}>Reset</button>
                                </>
                            )
                        }
                    </ProductCard>
                </div>
            </div>
        </>
    )
}
