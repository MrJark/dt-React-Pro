This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## **yarn** para instalar los paquetes

- A veeces al hacer el build puede darte un error del tipo:
  
  ```
    Error: error:0308010C:digital envelope routines::unsupported
  ```

  Para solucionarlo solo tienes que ejecutar el comando `export NODE_OPTIONS=--openssl-legacy-provider` en la terminal dentro de esta carpeta. Esta solución la he encontrado en [Stackoverflow](https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported)

- Para levantar el poryecto en el service worker **serve -s build**

-  [Explicación del sercive worker](https://web.dev/service-worker-lifecycle/)

Para que funcione este app, tienes que tener además, el backend corriendo sino te dará un error fetch

## Intalaciones

- Workbox **sudo npm install workbox-cli --global**. 

  Para usar el CLI tienes que escribir en esta carpeta de comandos **workbox wizard**. Aquí te pregunta el root y le tienes que decir el **build**. Luego te pregunta que archivos quieres que se haga un pre-chache ( normalmente lo queieres todo ).

  Te pregunta luego que si quieres guardarlo en el propio build, y sí. Y luego te pedirá que si queires crear un config y sí también y te crea el workbox-config.js.

  Una vez todo esto, te pide que ejecutes **workbox generateSW workbox-config.js**. Este comando lo tendrás que ejecutar cada vez que hagas algún cambio en la aplicación para que se guardes y creará el SW por defecto que venga en esa config

- 

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
