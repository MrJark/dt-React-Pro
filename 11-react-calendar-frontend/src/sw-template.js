/**
 * Aquí vas a tner la configuración manual que quieres que tenga el nuevo SW.
 * La url la he sacado de las Doc <https://developer.chrome.com/docs/workbox/modules/workbox-sw/>
 * 
 * Ahora para que funcione, debes mandarle el comando ' workbox injectManifest ' lo configuro en el json con la build
*/

importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

workbox.precaching.precacheAndRoute( self.__WB_MANIFEST );

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst } = workbox.strategies;


// para que la app se vea sin conexion
registerRoute( 
    new RegExp('http://localhost:4000/api/auth/renew '),
    new NetworkFirst() // esto significa que primero busque la ruta en el network
)
registerRoute( 
    new RegExp('http://localhost:4000/api/events'),
    new NetworkFirst()
)


// con estas dos lineas sirvo las rutas en el caché para que la app funcione sin internet
registerRoute( 
    new RegExp('https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'),

    new CacheFirst() // esto significa que primero busque la ruta en el caché y sino está vaya a la petición
)

registerRoute( 
    new RegExp('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css'),

    new CacheFirst() // esto significa que primero busque la ruta en el caché y sino está vaya a la petición
)

