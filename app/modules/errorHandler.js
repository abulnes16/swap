/* Error Handler Module
  Módulo para manejar error
*/

/**
 * Función que maneja una respuesta y convierte
 * un error a un objeto para ser usado en la UI
 * @param {string} title Título del error
 * @param {string} message Mensaje de error
 * @param {any} error Error para imprimir
 */
function responseWithError(title, message, error = null) {
  if (error !== null) {
    console.log(error);
  }

  return {
    errorTitle: title,
    errorMessage: message,
  };
}

export { responseWithError };
