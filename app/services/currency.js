/* Currency service module
  Módulo de servicio para interactuar con el 
  API de Monedas
*/

/**
 * Servicio que obtiene el listado de
 * monedas del API
 * @returns {Promise<any>} Listado de monedas
 */
async function getCurrencyList() {}

/**
 * Servicio para convertir monedas mediante la tasa
 * de cambio que esta en el API
 * @param {number} value Valor a convertir
 * @param {string} from Moneda de donde se va a convertir el valor
 * @param {string} to Moneda a donde se va a convertir el valor
 * @returns {Promise<number>}  Valor convertido a la moneda solicitada
 */
async function convertCurrency(value, from, to) {}

export { getCurrencyList, convertCurrency };
