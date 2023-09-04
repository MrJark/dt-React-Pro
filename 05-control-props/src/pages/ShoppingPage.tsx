import { useState } from "react"
import { ProductCard } from "../components"
import { ProductButtons, ProductImage, ProductTitle } from "../components/subCardComponent"
import { product2, products } from "../constants/products"

import '../styles/customStyles.css'
import { ProductInCart } from "../interfaces/interfaces"


export const ShoppingPage = () => {

    // const [ shoppingCart, setShoppingCart ] = useState<{ [ key: string ]: ProductInCart }>({ // forma de nombrar el useState
    //     '1': { ...product1, count: 1}, // así luce el objeto que quiero que crear
    //     '2': { ...product2, count: 2},
    // });
    const [ shoppingCart, setShoppingCart ] = useState<{ [ key: string ]: ProductInCart }>({});

    const onProductCountChange = () => {
        console.log('onProductCountChange');
        
    }

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
                                // onChange={ onProductCountChange } // si la mando así, lo que estoy diciendo es que si el onChange al hacer click manda algo, ese algo será el primer argumento que se reciba en la función onProductCountChange de la otra manera, 👇🏼, yo estoy diciendo que argumento quiero que tenga, o si no quiero que tenga ninguno
                                onChange={ () => onProductCountChange() }
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
