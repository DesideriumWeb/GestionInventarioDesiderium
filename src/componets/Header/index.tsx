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
// import HeaderProducts from "../HeaderProducts/HeaderProduct";
// import ModalIzquierdaMenu from "../ModalIzquierdaMenu";

const Header = () => {
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
  return (
    <>
      {/* <div className="shadow-md w-full fixed top-0 left-0 z-20 bg-header font-sub-global" >
        <div className="md:flex items-center justify-between background-header text-header py-2 sm:py-5 md:py-5 lg:py-5 md:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex flex-col items-center font-[Poppins] 
            "
          >
            <span className="font-global custom-sombra-text">
              {STRINGS.NAVBAR_BUTTON_TITLE_DESIDERIUM}
            </span>
            <span className="font-global custom-sombra-text text-lg">
              {STRINGS.NAVBAR_BUTTON_TITLE_DESIDERIUM_1}&nbsp;
              {STRINGS.NAVBAR_BUTTON_TITLE_DESIDERIUM_2}
            </span>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <FontAwesomeIcon
              icon={open ? faTimes : faBars}
              className="text-white hover:text-gray-400 cursor-pointer"
            />
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-16 " : "top-[-490px]"
            }`}
          >
            {TITLE_MENU_NAVBAR.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-sm md:my-0 my-7"
                onClick={() => setOpen(!open)}
              >
                {link.name === "PRODUCTOS" ? (
                  <>
                    <button
                      className="text-black hover:text-purple-700 duration-500"
                      onClick={() => setOpenModal(true)}
                    >
                      PRODUCTOS
                    </button>
                  </>
                ) : (
                  <Link
                    href={link.link}
                    className="text-black hover:text-purple-700 duration-500"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
            {/* <Link onClick={() => setOpen(!open)} href="/cart">
              <div
                className={`text-3xl relative mb-4 sm:mb-0 md:mb-0 lg:mb-0 sm:ml-6 sm:mt-1 md:ml-6 md:mt-1 lg:ml-6 lg:mt-1  `}
              >
                 {numPedidos > 0 && (
                  <span className="absolute right-[299px] md:-right-1 lg:-right-1 color-number-carrito text-white rounded-full w-6 h-6 flex items-center justify-center text-sm transform translate-y-[-50%] translate-x-1/2 transition-all duration-300">
                    {numPedidos}
                  </span>
                )} 
                {showIcon && (
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="text-black hover:text-gray-400 cursor-pointer"
                  />
                )}
              </div>
            </Link>
            <Link
              href="/login"
              onClick={() => setOpen(!open)}
              className="bg-[#D50CD5] text-white font-[Poppins] text-sm py-2 px-6 rounded md:ml-8 hover:bg-[#9806A9]
    duration-500"
            >
              {STRINGS.NAVBAR_BUTTON_LOGIN}
            </Link> 
            <div className="sm:ml-6">
              <Login /> 
            </div>
          </ul>
        </div>
      </div>
      <div className="pt-0 sm:pt-24  md:pt-24  lg:pt-24 bg-white shadow-md w-full fixed top-0 left-0 z-10">
        <div>
          <Banner />
        </div> 
        <div className="hidden sm:flex  md:flex lg:flex justify-center items-center">
        <HeaderProducts /> 
        </div>
      </div>

    <ModalIzquierdaMenu
        openModalVar={openModal}
        setOpenModal={setOpenModal}
      />  */}

      <nav className="bg-purple-50 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-sm sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
              Desiderium Sex-Shop
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center p-2 w-2 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>

            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-multi-level"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-purple-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-purple-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 font-sub-global">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black bg-purple-50 rounded md:bg-transparent md:text-black md:p-0 md:dark:text-white dark:bg-black md:dark:bg-transparent"
                  aria-current="page"
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
                        href="FormInsertProduct"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                       Insertar Productos
                      </a>
                    </li>
                    <li>
                      <a
                        href="TableProduct"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                       Listar Productos
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
                            >
                              Overview
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                              My downloads
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                              Billing
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
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
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
