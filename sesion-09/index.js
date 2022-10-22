
/// como parte del ejercicio vamos a intalar el winston lo podemos instalar como npm install winston https://www.npmjs.com/package/winston
//compiamos el codigo que esta en la pagina para empezar a utilizarlo 
//esta funcionalidad de winston nos sirve para llevar todo el control de los console.log que tenemos en nuetra aplicacion web.
const winston = require('winston');// require es una manera de importar cosas dentro de node 

const logger = winston.createLogger({
    level: 'debug',// aca podemos colocar el nivel que winsto establece par medir los errores que queremso ver
//                  error: 0,
//                  warn: 1,
//                  info: 2,
//                  http: 3,
//                  verbose: 4,
//                  debug: 5,
//                  silly: 6 
//    winston nos mostrara hasta el nivel que se establezca en el level
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

//podemos reemplazar el console.log por un console.logger
//console.log("Hola mundo");
//console.info("Se comprende la idea de node")
//console.warn("Este un mensaje de advertencia")

//Reemplazando con logger.log


logger.info("Esto es informacion");
logger.debug("Esto es un debug");
logger.warn("Este un mensaje de advertencia");
logger.error("Este es un error"); 

