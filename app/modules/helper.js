/* Helper Module
  Módulo que contiene funciones de ayuda para la aplicación
*/

/**
 * Función que genera la URL para la conversión de datos
 * @param {string} from Moneda desde donde se convierte
 * @param {string} to  Moneda a la que se va a convertir
 * @param {string} apiKey
 */
function generateConvertURL(from, to, apiKey) {
  return `convert?q=${from}_${to},${to}_${from}&compact=ultra&apiKey=${apiKey}`;
}

export { generateConvertURL };
