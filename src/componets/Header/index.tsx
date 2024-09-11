"use client";
import { STRINGS, TITLE_MENU_NAVBAR } from "@/config/config";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingCart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "../../app/globals.css";
import Image from "next/image";
import Login from "../Login";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

// import HeaderProducts from "../HeaderProducts/HeaderProduct";
// import ModalIzquierdaMenu from "../ModalIzquierdaMenu";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [numPedidos, setNumeroPedidos] = useState("");
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {}, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Después de 5 segundos, establece showIcon a true
      setShowIcon(true);
    }, 500);

    // Limpiar el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  }, []);

  const handleMenuClick = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-purple-50 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/logo.png"
              width={32}
              height={32}
              alt="Logo Desiderium"
            />
            <span className="self-center text-sm sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
              Desiderium Sex-Shop
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-multi-level"
            aria-expanded={open ? "true" : "false"}
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Abrir menu</span>
            {open ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
          <div
            className={`w-full md:block md:w-auto ${open ? "block" : "hidden"}`}
            id="navbar-multi-level"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-purple-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-purple-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 font-sub-global">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black bg-purple-50 rounded md:bg-transparent md:text-black md:p-0 md:dark:text-white dark:bg-black md:dark:bg-transparent"
                  aria-current="page"
                  onClick={handleMenuClick}
                >
                  Inicio
                </a>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Gestionar Productos{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownNavbar"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="FormInsertCategories"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={handleMenuClick}
                      >
                        Insertar Categoria
                      </a>
                    </li>
                    <li>
                      <a
                        href="FormInsertProduct"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={handleMenuClick}
                      >
                        Insertar Productos
                      </a>
                    </li>
                    <li>
                      <a
                        href="TableProduct"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={handleMenuClick}
                      >
                        Listar Productos
                      </a>
                    </li>
                    <li>
                      <a
                        href="Categories"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={handleMenuClick}
                      >
                        Categorias
                      </a>
                    </li>
                    <li aria-labelledby="dropdownNavbarLink">
                      <button
                        id="doubleDropdownButton"
                        data-dropdown-toggle="doubleDropdown"
                        data-dropdown-placement="right-start"
                        type="button"
                        className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Listar productos
                        <svg
                          className="w-2.5 h-2.5 ms-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      <div
                        id="doubleDropdown"
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="doubleDropdownButton"
                        >
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                              onClick={handleMenuClick}
                            >
                              Overview
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                              onClick={handleMenuClick}
                            >
                              My downloads
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                              onClick={handleMenuClick}
                            >
                              Billing
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                              onClick={handleMenuClick}
                            >
                              Rewards
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={handleMenuClick}
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a
                  onClick={() => {
                    setShowLogin(!showLogin);
                    handleMenuClick();
                  }}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showLogin && <Login showLogin={showLogin} setShowLogin={setShowLogin} />}
    </>
  );
};

export default Header;
