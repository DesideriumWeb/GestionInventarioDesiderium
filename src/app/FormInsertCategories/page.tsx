"use client";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { saveCategory } from "@/api/ServicesCategory/servicesCategory";
import { toast } from "react-hot-toast";

const FormInsertCategories = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Requerido")
      .max(40, "El nombre no debe exceder los 40 caracteres"),
    description: Yup.string()
      .required("Requerido")
      .max(300, "La descripcion no debe exceder los 300 caracteres")
  });

  const handleSubmit = async (values: Category) => {
    try {
      const { name, description } = values;
      const categoryData = { name, description, state: 1 };
  
      console.log("res", categoryData);
  
      // Enviar el objeto sin _id
      const response = await saveCategory(categoryData);
      console.log("Categoría guardada:", response);
  
      // Mostrar notificación de éxito
      toast.success("¡Categoría guardada exitosamente!");
    } catch (error: any) {
      console.error("Error al guardar la categoría:", error);
  
      // Extraer mensaje de error del servidor (si existe)
      const errorMessage =
        error?.response?.data?.message || // Mensaje del servidor
        "Hubo un error inesperado al guardar la categoría."; // Mensaje genérico
  
      // Mostrar notificación de error con mensaje específico
      toast.error(`Error: ${errorMessage}`);
    }
  };
  
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
   <Formik
  initialValues={{
    _id:"",
    name: "",
    description: ""
  }}
  validationSchema={validationSchema}
  onSubmit={handleSubmit}
>
  {({ setFieldValue, values, isValid }) => (
    <Form className="font-global w-full p-10 font-sub-global">
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="name">
            Nombre categoria
          </label>
          <Field
            name="name"
            type="text"
            value={values.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFieldValue("name", e.target.value.toLowerCase()) // Convierte a minúsculas
            }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="name">
            Descripcion
          </label>
          <Field
            name="description"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
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
          Agregar Categoria
        </button>
      </div>
    </Form>
  )}
</Formik>

    </>
  );
};

export default FormInsertCategories;
