# React App

La base que voy a utilizar en futuros proyectos. La he inicializado con **pnpm**

## Instalaciones

- [React Router Dom](https://reactrouter.com/en/main/start/tutorial) -> **pnpm install react-router-dom@6**

- 

## Anotaciones

- Por culpa del **barrel file** me carga todo y se salta el lazy load por tanto, he tenido que comentar todo lo que habia en el index de las pages para que funcionara. No era el problema de la page404, sino el barrel

## Pasos para el despliegue en NPM

1. Crear el paquete a través de **npx tsdx create <nombre del paquete>** ( puede que te pida que intales tsdx, hazlo )

2. Optimizar el **index.tsx** y solo tener las exportaciones que quieras, por ejemplo export * from './components y cambiar la extensión del .tsx a .ts ya que no hay componentes 

3. Optimizar los módulos de css ( si no utilizas los archivos styles.modules.css  no es necesario este paso ):

  1. Crear un archivo en la raíz del proyecto **tsdx.config.js**

  2. Creat el contenido del archivo:

  ```
    const postcss = require('rollup-plugin-postcss');
    const images = require('@rollup/plugin-image');
    module.exports = {
        rollup(config, options) {
            config.plugins = [
            postcss({ modules: true }),
            images({ incude: ['**/*.png', '**/*.jpg'] }),
            ...config.plugins,
        ];
            return config;
        },
    };
  ```
  4. Importo los paquetes que me hacen falta **yarn add -D rollup-plugin-postcss,  yarn add -D @rollup/plugin-image** que son para enseñarle a tsdx cómo cargar los paquetes de css y las imágenes

  5. Creo el archivo **typings.d.ts** en el **src** en el cual tengo que tener la siguiente configuración:
    ```
    declare module '*.css' {
        const content: { [className: string]: string };
        export default content;
    }

    declare module "*.jpg" {
        const value: any;
        export default value;
    }

    declare module "*.png" {
        const value: any;
        export default value;
    }
    ```
    Donde el .jpg y .png son los tipos de archivos que estoy usando y cargando
  
  6. Para evitar ciertos errores, importar React de 'react' ya que según en que actualización estés hará falta
