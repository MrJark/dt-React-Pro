import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.'

export const product = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png',
  description: 'Coffee mug'
}

const App = () => {
  return (
    <>
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
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
