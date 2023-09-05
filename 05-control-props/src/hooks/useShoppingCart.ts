import { useState } from "react";
import { OnChangeArgs, ProductInCart } from "../interfaces/interfaces";


//* Tarea: hacer el useShoppingCart ✅

export function useShoppingCart() {

    const [ shoppingCart, setShoppingCart ] = useState<{ [ key: string ]: ProductInCart }>({}); // queremos que este estado sea el que predomine

    const onProductCountChange = ({ count, product }: OnChangeArgs) => {
        
        setShoppingCart( oldShoppingCart => {

            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

            if ( Math.max( productInCart.count + count, 0 ) > 0 ) {
                productInCart.count += count;

                return {
                    ...oldShoppingCart,
                    [product.id] : productInCart
                }
            }

            const { [product.id]: toDelete , ...rest } = oldShoppingCart;
            console.log(toDelete); // para que se calle
            
            return {
                ...rest
            };

        })
    }


    return {
        shoppingCart,
        setShoppingCart,
        onProductCountChange,
    }
}