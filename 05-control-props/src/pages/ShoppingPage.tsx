import { useState } from "react"
import { ProductCard } from "../components"
import { ProductButtons, ProductImage, ProductTitle } from "../components/subCardComponent"
import { products } from "../constants/products"

import '../styles/customStyles.css'
import { OnChangeArgs, ProductInCart } from "../interfaces/interfaces"


export const ShoppingPage = () => {

    // const [ shoppingCart, setShoppingCart ] = useState<{ [ key: string ]: ProductInCart }>({ // forma de nombrar el useState
    //     '1': { ...product1, count: 1}, // así luce el objeto que quiero que crear
    //     '2': { ...product2, count: 2},
    // });
    const [ shoppingCart, setShoppingCart ] = useState<{ [ key: string ]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: OnChangeArgs) => { // es la desestructuración del event
        // console.log('onProductCountChange', {count, product});
        // shoppingCart[ product.id ] = { ...product, count } // funcionaría pero sería una MALA PRÁCTICA porque estaría mutando el shoppingCart

        setShoppingCart( oldShoppingCart => {
            // Tarea: eliminar el elemento cuando el count = 0 ❌ he intentado un if ( count === 0 ) return

            if ( count === 0 ) {
                const { [product.id]: toDelete , ...rest } = oldShoppingCart;
                // delete {...oldShoppingCart}[product.id] // otra forma de hacerlo
                console.log(toDelete); // para que no salga el error
                
                return {
                    ...rest
                }
            }
            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count } // forma en la cual está estructurado el producto que es como está hecho el useState: la llave y el objeto
            }
        })
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
                                onChange={ onProductCountChange } // si la mando así, lo que estoy diciendo es que si el onChange al hacer click manda algo, ese algo será el primer argumento que se reciba en la función onProductCountChange de la otra manera, 👇🏼, yo estoy diciendo que argumento quiero que tenga, o si no quiero que tenga ninguno
                                // onChange={ () => onProductCountChange() }
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
                    {/* {
                        //* Tarea: intentar hacer el carrito dinámico y que desaparezca cuando no hay productos ❌ se me había ocurrido la siguiente solución pero no funciona así
                        products.map( product => (
                            !product 
                                ? ''
                                : 
                            <ProductCard 
                                key={ product.id }
                                product={ product }
                                style={{ width: '150px' }}
                                className = 'bg-dark text-white'
                                onChange={ onProductCountChange } // si la mando así, lo que estoy diciendo es que si el onChange al hacer click manda algo, ese algo será el primer argumento que se reciba en la función onProductCountChange de la otra manera, 👇🏼, yo estoy diciendo que argumento quiero que tenga, o si no quiero que tenga ninguno
                                // onChange={ () => onProductCountChange() }
                            >
                                <ProductImage 
                                    className = 'custom-image'
                                />
                                <ProductTitle />
                                <ProductButtons 
                                    className = 'custom-buttons'
                                />
                            </ProductCard>
                        ))
                    } */}
                    {
                        // he tenido que transformar el shoppingCart que es donde tengo los productos, no en los productos mismo como había hecho antes, en un arreglo para poder hacer el .map y en este recibo el key, que será el sello de identidad, y el productInCart que es el producto en sí
                        Object.entries( shoppingCart ).map( ([ key, product]) => (
                            <ProductCard
                                key={key}
                                product={ product }
                                className = 'bg-dark text-white'
                                style = {{ width: '150px' }}
                                value = { product.count }
                            >
                                <ProductImage 
                                    className = 'custom-image'
                                />
                                <ProductButtons 
                                    className = 'custom-buttons'
                                />
                            </ProductCard>
                        ))
                    }
                </div>
                {/* <div className="shopping-cart">
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
                </div> */}
            </div>
        </>
    )
}
