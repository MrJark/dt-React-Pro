# React + TypeScript + Vite

He iniciado y creado el repo con **vite y `pnpm`**

## Instalaciones

- Voy a usar [Storybook](https://storybook.js.org/docs/react/get-started/install) con **npx storybook@latest init**
  
  Y cambio en el package.json en el script **"dev": "npm run storybook",** para que sea más facil llamarlo

- Cada vez que se hace un build, se necesita borrar y volver a crear la carpeta dist, para ello voy a instalar como dependencias [Rinfaf](https://www.npmjs.com/package/rimraf) para que borre la carpeta de manera automática **pnpm i -D rimraf** y [Copyfiles](https://www.npmjs.com/package/copyfiles) para que haga la copia de todos los elementos nuevos o modificaciones y la cree de nuevo **pnpm i -D copyfiles**

  En la parte de los **scripts** del archivo **package.json** necesitas colocar la siguiente linea `"clean": "rimraf dist/"` para que borre **solo** la carpeta dist
  
  Y en la parte del "build" debes colorcar `"build": "npm run clean && tsc"` para que la borre y de inmediato la cree otra vez

## Comentarios

- Si quiero tenerlo en Github pages, tengo que renombrar la carpeta **storybook-static** por **docs**