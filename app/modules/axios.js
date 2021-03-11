/* Axios Module 
   Configura la libreria de axios con los 
   valores del proyecto
*/

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://prepaid.currconv.com/api/v7",
});

export default axiosInstance;
