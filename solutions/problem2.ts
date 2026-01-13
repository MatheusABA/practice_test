//  Transforma la siguiente función para que funcione con promesas en lugar de callbacks:

// export function obtenerDatosPromise(callback) {
//   setTimeout(() => {
//     callback(null, { data: 'datos importantes' });
//   }, 2000);
// }

function obtenerDatosPromise(): Promise<{data: string}> {
  return new Promise((resolve, reject) => {
    setTimeout(() =>
      resolve(
        {
          data: "datos importantes"
        }
      )
    , 2000)
  })
}

obtenerDatosPromise()
  .then((value) => {
    console.log(value)
  })
  .catch((error) => {
    console.log(error)
  })