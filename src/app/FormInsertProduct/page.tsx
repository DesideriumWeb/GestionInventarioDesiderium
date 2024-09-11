"use client";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, FieldProps } from "formik";
import * as Yup from "yup";
import { saveProduct } from "@/api/ServicesProduct/servicesProducts.js";

import LeftMenu from "@/componets/LeftMenu";

const FormInsertProduct = () => {
  const [categories, setCategories] = useState<Category[]>([
    { _id: "1", name: "Dildos" , description :"si"},
    { _id: "2", name: "Vibradores" , description: "no" },
    // Agrega más categorías si es necesario
  ]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imageNames, setImageNames] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Reemplaza la URL con la de tu API
    // axios.get('/api/categories')
    //   .then(response => {
    //     setCategories(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching categories:', error);
    //   });
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Requerido")
      .max(40, "El nombre no debe exceder los 40 caracteres"),
    description: Yup.string()
      .required("Requerido")
      .max(300, "La descripcion no debe exceder los 300 caracteres"),
    cantidadTotal: Yup.number()
      .required("Requerido")
      .positive("Solo numeros positivos mayores a cero")
      .max(999, "La cantidad no puede superar los 3 digitos")
      .integer(),
    precio: Yup.string()
      .required("Requerido")
      .max(9999999, "El precio no debe superar los 6 caracteres"),
    precioC: Yup.number()
      .required("Requerido")
      .positive("Solo numeros positivos mayores a cero")
      .max(9999999, "El precio no debe superar los 6 caracteres")
      .integer(),
    canidadML: Yup.number()
      .required("Requerido")
      .positive("Solo numeros positivos mayores a cero")
      .max(999, "La cantidad no puede superar los 3 digitos")
      .integer(),
    title: Yup.string()
      .required("Requerido")
      .max(40, "El titulo no debe exceder los 40 caracteres"),
    categoria: Yup.string().required("Requerido"),
    //imagePath: Yup.array().min(1, "Debe seleccionar al menos una imagen").required("Debe seleccionar al menos una imagen"),
  });
  const handleSubmit = async (values: ProductFormValues) => {
    try {
      // Call the API function
      const response = await saveProduct(values, imageFiles);
      console.log("Producto guardado:", response);
    } catch (error) {
      console.error("Error al guardar el producto:", error);
    }
  };
  // const handleSubmit = (values: ProductFormValues) => {
  //   console.log("hola");
  //   console.log(values);
  //   console.log(imageFiles);
  //   // Aquí puedes hacer la lógica para subir los datos y las imágenes
  // };
  // const handleSubmit = async (values: ProductFormValues) => {
  //   try {
  //     const formData = new FormData();
  //     formData.append('name', values.name);
  //     formData.append('description', values.description);
  //     formData.append('cantidadTotal', values.cantidadTotal.toString());
  //     formData.append('precio', values.precio);
  //     formData.append('precioC', values.precioC.toString());
  //     formData.append('canidadML', values.canidadML.toString());
  //     formData.append('title', values.title);
  //     formData.append('categoria', values.categoria);
  //     imageFiles.forEach((file) => {
  //       formData.append('imagePath', file);
  //     });
  //     console.log(formData);
  //     // Reemplaza la URL con la de tu API
  //     const response = await axios.post('/api/products', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });

  //     console.log('Producto guardado exitosamente:', response.data);
  //   } catch (error) {
  //     console.error('Error al guardar el producto:', error);
  //   }
  // };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setImageFiles((prevFiles) => [...prevFiles, ...filesArray]);
      setImageNames((prevNames) => [
        ...prevNames,
        ...filesArray.map((file) => file.name),
      ]);
    }
  };
  const handleRemoveImage = (index: any) => {
    setImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setImageNames((prevNames) => prevNames.filter((_, i) => i !== index));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleCloseMenu = () => {
    setMenuOpen(true);
  };
  
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          description: "",
          cantidadTotal: 0,
          precio: "",
          precioC: 0,
          canidadML: "",
          title: "",
          categoria: "",
          imagePath: [],
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, isValid }) => (
          <Form className="font-global w-full p-10 font-sub-global">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="name">
                  Nombre producto
                </label>
                <Field
                  name="name"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="cantidadTotal">
                  Cantidad Total
                </label>
                <Field
                  name="cantidadTotal"
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <ErrorMessage name="cantidadTotal" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="precio">
                  Precio
                </label>
                <Field
                  name="precio"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <ErrorMessage name="precio" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="precioC">
                  Precio Compra
                </label>
                <Field
                  name="precioC"
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <ErrorMessage name="precioC" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="canidadML">
                  Cantidad ML
                </label>
                <Field
                  name="canidadML"
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <ErrorMessage name="canidadML" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="title">
                  Titulo
                </label>
                <Field
                  name="title"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <ErrorMessage name="title" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="categoria">
                  Categoria
                </label>
                <Field
                  name="categoria"
                  as="select"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">Seleccione una categoria</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="categoria" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="description">
                  Descripcion
                </label>
                <Field
                  name="description"
                  as="textarea"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="flex flex-col mb-3 w-full">
                <label className="block font-medium text-gray-900 dark:text-white mb-1" htmlFor="imagePath">
                  Cargar imágenes producto
                </label>
                <input
                  name="imagePath"
                  type="file"
                  multiple
                  onChange={(event) => {
                    handleImageChange(event);
                  }}
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                />
                {imageNames.length > 0 &&
                  imageNames.map((name, index) => (
                    <div
                      key={index}
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mt-2 font-sub-global"
                    >
                      <div className="text-gray-700 text-sm">
                        {index + 1}. Imagen : {name}
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(index)}
                          className="ml-4 bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none text-white px-2 py-1 rounded"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  ))}
                <ErrorMessage name="imagePath" component="div" className="text-red-500 text-sm mt-1" />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                disabled={!isValid}
                type="submit"
                className={`shadow ${
                  isValid ? "bg-blue-900 hover:bg-blue-950" : "bg-gray-700 cursor-not-allowed"
                } focus:shadow-outline focus:outline-none text-white font-serif py-2 px-4 rounded`}
              >
                Agregar Producto
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormInsertProduct;