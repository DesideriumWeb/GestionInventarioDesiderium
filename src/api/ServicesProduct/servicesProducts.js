import axios from "axios";

// Function to save a product
export const saveProduct = async (productData, imageFiles) => {
  try {
    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("description", productData.description);
    formData.append("cantidadTotal", productData.cantidadTotal.toString());
    formData.append("precio", productData.precio);
    formData.append("precioC", productData.precioC.toString());
    formData.append("canidadML", productData.canidadML.toString());
    formData.append("title", productData.title);
    formData.append("categoria", productData.categoria);
    imageFiles.forEach((file) => {
      formData.append("imagePath", file);
    });
// Imprimir el contenido de FormData
for (const [key, value] of formData.entries()) {
  if (value instanceof File) {
    console.log(`${key}: ${value.name}`); // Para los archivos, muestra el nombre
  } else {
    console.log(`${key}: ${value}`); // Para otros valores, muestra el valor
  }
}
    // Replace the URL with your API endpoint
    // const response = await axios.post(`${process.env.NEXT_PUBLIC_REACT_APP_API}/product`, formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // });

    // console.log("Producto guardado exitosamente:", response.data);
    // return response.data;
  } catch (error) {
    console.error("Error al guardar el producto:", error);
    throw error;
  }
};