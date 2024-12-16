import axios from "axios";


export const login= async (user : UserLogin) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_REACT_APP_API}/login`, user);
    return response.data;
  } catch (error) {
    console.error("Error al guardar el producto:", error);
    throw error;
  }
};