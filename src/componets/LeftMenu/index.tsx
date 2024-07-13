import React, { useState, useRef, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";


const LeftMenu: React.FC<LeftMenuProps> = ({ isOpen, onCloseMenu }) => {
  console.log("isOpen:", isOpen);
  const [subMenuOpen, setSubMenuOpen] = useState<{ [key: number]: boolean }>({});
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleSubMenu = (index: number) => {
    setSubMenuOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      // Cierra el menú y todos los submenús abiertos
      onCloseMenu();
      setSubMenuOpen({});
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const menuItems: MenuItem[] = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "Products",
      link: "/products",
      subMenu: [
        { title: "Category 1", link: "/products/category1" },
        { title: "Category 2", link: "/products/category2" },
      ],
    },
    {
      title: "Contact",
      link: "/contact",
    },
    // Añade más elementos del menú si es necesario
  ];

  return (
    <div className="relative">
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? "hidden" : "-translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        <ul className="mt-16 p-4">
          {menuItems.map((item, index) => (
            <li key={index} className="mb-4">
              <div className="flex justify-between items-center">
                <a href={item.link} className="block py-2">
                  {item.title}
                </a>
                {item.subMenu && (
                  <button
                    onClick={() => toggleSubMenu(index)}
                    className="ml-4 focus:outline-none"
                  >
                    {subMenuOpen[index] ? <FaAngleUp /> : <FaAngleDown />}
                  </button>
                )}
              </div>
              {item.subMenu && subMenuOpen[index] && (
                <ul className="ml-4 mt-2">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="mb-2">
                      <a href={subItem.link} className="block py-2">
                        {subItem.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed top-0 left-64 right-0 h-full bg-gray-500 opacity-50 z-30"
          onClick={onCloseMenu}
        />
      )}
    </div>
  );
};

export default LeftMenu;