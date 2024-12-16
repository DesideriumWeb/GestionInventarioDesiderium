import apiClient from "../ApiClient/apiClient";
// Function to save a category
export const saveCategory = async (category) => {
  try {
    const response = await apiClient.post("/categories", category);
    return response.data;
  } catch (error) {
    console.error("Error al guardar la categoría:", error);
    throw error;
  }
};
export const getCategory = async () => {
  try {
    const response = await apiClient.get("/categories");
    return response.data;
  } catch (error) {
    console.error("Error al obtener la categoría:", error);
    throw error;
  }
};
