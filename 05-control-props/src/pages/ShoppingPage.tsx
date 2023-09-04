import { useState } from "react"
import { ProductCard } from "../components"
import { ProductButtons, ProductImage, ProductTitle } from "../components/subCardComponent"
import { product1, product2, products } from "../constants/products"

import '../styles/customStyles.css'


export const ShoppingPage = () => {

    const [ shoppingCart, setShoppingCart ] = useState({
        '1': { ...product1, count: 1}, // así luce el objeto que quiero que crear
        '2': { ...product2, count: 2},
    });

    return (
        <>
            <div>
                <h1>Shopping Page</h1>
                <hr />
                <div style={{ display: 'flex'}}>
                    {
                        products.map( product => (
                            <ProductCard 
                                key={ product.id }
                                product={ product }
                                className = 'bg-dark text-white'
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
                        ))
                    }
                </div>
                <div className="shopping-cart">
                <ProductCard
                    product={ product2 }
                    className = 'bg-dark text-white'
                    style={{ width: '150px' }}
                >
                    <ProductImage 
                        className = 'custom-image'
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
