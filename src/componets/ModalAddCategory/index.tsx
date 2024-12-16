import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { saveCategory } from "@/api/ServicesCategory/servicesCategory";
import toast from "react-hot-toast";

interface ModalAddCategoryProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const ModalAddCategory: React.FC<ModalAddCategoryProps> = ({ isModalOpen, closeModal }) => {
  const modalRef = useRef<HTMLDivElement>(null); // Referencia para detectar clics fuera del modal

  // Esquema de validación con Yup
  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required("El nombre es obligatorio"),
    descripcion: Yup.string().required("La descripción es obligatoria"),
    estado: Yup.string().required("El estado es obligatorio"),
  });

  // Valores iniciales del formulario
  const initialValues = {
    nombre: "",
    descripcion: "",
    estado: "activo", // Estado predeterminado
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (values: { nombre: string; descripcion: string; estado: string }) => {
    try {
      debugger
      const { nombre, descripcion, estado } = values;

      const categoryData: Category = {
        _id: null, 
        name: nombre,
        description: descripcion,
        state: estado && estado.trim().toLowerCase() === "activo" ? 1 : 0 
      };

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
    closeModal(); // Cierra el modal después de guardar
  };

  // Cerrar el modal al hacer clic fuera de él
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  return (
    isModalOpen && (
      <div
        id="createProductModal"
        onClick={handleOutsideClick}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
        aria-hidden={!isModalOpen}
      >
        <div
          ref={modalRef}
          className="relative p-4 w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-800 max-h-[90vh] overflow-y-auto"
        >
          {/* Modal content */}
          <div className="p-4">
            <div className="flex justify-between items-center pb-4 mb-4 border-b dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Crear Categoria
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* Formulario con Formik */}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  {/* Campo: Nombre */}
                  <div className="mb-4">
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Nombre
                    </label>
                    <Field
                      id="nombre"
                      name="nombre"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                      placeholder="Nombre del producto"
                    />
                    <ErrorMessage
                      name="nombre"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  {/* Campo: Descripción */}
                  <div className="mb-4">
                    <label
                      htmlFor="descripcion"
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Descripción
                    </label>
                    <Field
                      id="descripcion"
                      name="descripcion"
                      as="textarea"
                      rows="4"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                      placeholder="Descripción del producto"
                    />
                    <ErrorMessage
                      name="descripcion"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  {/* Campo: Estado */}
                  <div className="mb-4">
                    <label
                      htmlFor="estado"
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Estado
                    </label>
                    <Field
                      id="estado"
                      name="estado"
                      as="select"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    >
                      <option value="activo">Activo</option>
                      <option value="inactivo">Inactivo</option>
                    </Field>
                    <ErrorMessage
                      name="estado"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  {/* Botón: Guardar */}
                  <div className="mt-4 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                    >
                      {isSubmitting ? "Guardando..." : "Guardar"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    )
  );
};

export default ModalAddCategory;
