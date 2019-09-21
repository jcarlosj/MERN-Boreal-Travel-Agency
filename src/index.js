/** Principal File */
require( 'dotenv' ) .config();  // Importa el paquete para obtener las variables de entorno para SO
const app = require( './app' ); // Importa Express a la Aplicación 


// Inicia la aplicación usando una función Asincrona
async function main() {
    // Ejecuta el Servidor de Node
    await app .listen( app .get( 'port' ) );                    // Obtiene los valores definidos para la aplicación con el nombre 'port'
    console .log( `El Servidor de "Boreal Travel Agency" se lanzó en el puerto ${ app .get( 'port' ) }` );
}

main();