// Explica qué hace la funcion. Identifica y corrige los errores en el siguiente código. Si ves algo innecesario, elimínalo. Luego mejoralo para que siga funcionando con callback y luego haz lo que consideres para mejorar su legibilidad.

// Lib fs para manipulacion de archivos
import fs from 'fs'

type Callback = (
  error: Error | null,
  message?: () => string
) => void;

export function procesarArchivo(callback: Callback) {
  // Funcion readFile que recibe un archivo, encode y una callback function
  fs.readFile('input.txt', 'utf8', (error, contenido) => {
    if (error) {
      callback(new Error("Error al leer o procesar el fichero"), "")
      return;
    }

    // setTimeout asincrono para procesar el output
    setTimeout(() => {
      // Coloca el texto en letras mayusculas
      const textoProcesado = contenido.toUpperCase();

      // Funcion writeFile que crea un archivo y recibe como parametros
      // el nombre del archivo final, lo escrito y una callback funciton
      fs.writeFile('output.txt', textoProcesado, (error) => {
        if (error) {
          callback(new Error("Error al generar un output"))
          return;
        }
        callback(null, () => "Datos procesados correctamente")
      });

    }, 1000);
  });
}

procesarArchivo((error, message) => {
  error ? console.error(error.message) : console.log(message())
})
