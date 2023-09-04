import { ProductCard } from "../components"
import { ProductButtons, ProductImage, ProductTitle } from "../components/subCardComponent"
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
                <div style={{ display: 'flex'}}>
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap'}}>
                        {/* <ProductCard product={ product }/> sin childrens, sin HOC o Higher-order-component */}
                        <ProductCard product={ product }>
                            {/* una forma de hacerlo 👇🏼 */}
                            <ProductImage/>
                            <ProductTitle />
                            <ProductButtons />
                        </ProductCard>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap'}}>
                    <ProductCard product={ product }>
                            {/* otra forma común de hacerlo 👇🏼 y esto es el compound component parent */}
                            <ProductCard.Image />
                            <ProductCard.Title title={'Coffee Mug alt'}/>
                            {/* <ProductCard.Buttons countBy={ ( value: number ): void => {
                                throw new Error(`error: function not implemented '${value}' El ${value} es para que se calle`)
                            }} counter={0}/> //* GRACIAS AL CONTEXT NO ME HACEN FALTA LAS PROPS */}
                            <ProductCard.Buttons />
                        </ProductCard>

                    </div>
                </div>
            </div>
        </>
    )
}
