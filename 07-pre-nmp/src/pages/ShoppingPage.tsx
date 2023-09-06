
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
                            ({ reset, theCount, countBy, maxCount }) => ( // función que renderiza un jsx
                                //* Tarea: exponer todos los args que vengan y hacer que funcionen. Los btns tienen que ser de +- 2
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
                                    {/* Tarea */}
                                    <div style={{ display: 'flex', placeContent: 'center', gap: '4px', paddingBottom: '6px'}}>
                                        <button onClick={() => countBy(-2)}>-2</button>
                                        <button onClick={reset}>Reset</button>
                                        {/* {   // forma en la cual lo ha hecho el profesor. Ten en cuenta que aquí hace falta traer el isMax... pero a mi me gusta más la mia
                                            ( !isMaxCountReached && 
                                                <button 
                                                    onClick={() => {
                                                        countBy(2)
                                                    }}
                                                >+2</button>
                                            )
                                        } */}
                                        {
                                            <button 
                                                onClick={() => {
                                                    if( theCount === maxCount ) return
                                                    countBy(2)
                                                }}
                                            >+2</button>
                                        }
                                    </div>
                                    <div>
                                        <span>Count: {theCount}</span>
                                    </div>
                                </>
                            )
                        }
                    </ProductCard>
                </div>
            </div>
        </>
    )
}
