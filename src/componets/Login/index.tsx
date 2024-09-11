"use client";
import { useState } from "react";

interface LoginModalProps {
  showLogin: boolean;
  setShowLogin: (show: boolean) => void;
}

const Login: React.FC<LoginModalProps> = ({ showLogin, setShowLogin }) => {
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña
  const [email, setEmail] = useState(""); // Estado para el correo
  const [password, setPassword] = useState(""); // Estado para la contraseña

  if (!showLogin) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowLogin(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Aquí puedes manejar la autenticación o enviar los datos al servidor
  };

  return (
    <>
      <div
        id="authentication-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50"
        onClick={handleBackdropClick}
      >
        <div className="relative w-full max-w-md p-4">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Login
              </h3>
              <button
                onClick={() => setShowLogin(false)}
                type="button"
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 1"
                  />
                </svg>
                <span className="sr-only">Cerrar</span>
              </button>
            </div>
            <div className="p-4 md:p-5">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Correo
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Contraseña
                  </label>
                  <input
                    type={showPassword ? "text" : "password"} // Mostrar u ocultar contraseña
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="show-password"
                        type="checkbox"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)} // Cambiar estado para mostrar u ocultar
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="show-password"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Ver contraseña
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Perdio su contraseña?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Ingresar
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  No esta registrado?{" "}
                  <a
                    href="#"
                    className="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Crear cuenta
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
