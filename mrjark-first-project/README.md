# mrjark-first-project

Este es un paquete de pruebas en el cual despliego un carritop de compra en NPM

### Ejemplo 

```
import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductButtons,
    } from 'mrjark-first-project'
```

```
    <ProductCard 
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
```