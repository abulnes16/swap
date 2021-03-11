/* Currency service module
  Módulo de servicio para interactuar con el 
  API de Monedas
*/

import axios from "../modules/axios";
import config from "../config";
import { responseWithError } from "../modules/errorHandler";
import { generateConvertURL } from "../modules/helper";

/**
 * Servicio para convertir monedas mediante la tasa
 * de cambio que esta en el API
 * @param {number} value Valor a convertir
 * @param {string} from Moneda de donde se va a convertir el valor
 * @param {string} to Moneda a donde se va a convertir el valor
 * @returns {Promise<number>}  Valor convertido a la moneda solicitada
 */
async function convertCurrency(value, from, to) {
  const url = generateConvertURL(from, to, config.apiKey);
  try {
    const exchangeData = await axios.get(url);
    if (exchangeData.status === 200) {
      const currencyExchange = exchangeData.data[`${from}_${to}`];
      return (value * currencyExchange).toFixed(2);
    } else {
      throw responseWithError(
        "Error de conexión",
        "No pudimos realizar la petición debido a un error"
      );
    }
  } catch (error) {
    throw responseWithError(
      "Error inesperado",
      "Ocurrió un error al solicitar los datos, intenta de nuevo",
      error
    );
  }
}

export { convertCurrency };
