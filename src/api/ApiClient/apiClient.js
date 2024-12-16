import axios from "axios";
import nookies from "nookies"; // Importar nookies para trabajar con cookies

// Configurar Axios para incluir el token
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REACT_APP_API, // URL base de la API
});

apiClient.interceptors.request.use(
  (config) => {
    // Obtener el token desde las cookies
    const cookies = nookies.get(null); // null si estás del lado cliente
    const token = cookies.token; // La clave debe coincidir con la que usaste al guardar
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
