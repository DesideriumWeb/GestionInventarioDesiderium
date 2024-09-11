import axios from "axios";

// Function to save a category
export const saveCategory = async (category) => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_REACT_APP_API; // Asegúrate de que esté correctamente asignada
    console.log("API URL:", apiUrl); // Verifica si la URL se muestra correctamente en la consola

    const response = await axios.post(`${process.env.NEXT_PUBLIC_REACT_APP_API}/categories`, category);

    console.log("Producto guardado exitosamente:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al guardar el producto:", error);
    throw error;
  }
};