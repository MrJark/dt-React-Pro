/**
 * Aquí vas a tner la configuración manual que quieres que tenga el nuevo SW.
 * La url la he sacado de las Doc <https://developer.chrome.com/docs/workbox/modules/workbox-sw/>
 * 
 * Ahora para que funcione, debes mandarle el comando workbox injectManifest
*/

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');


workbox.precaching.precacheAndRoute( self.__WB_MANIFEST );

