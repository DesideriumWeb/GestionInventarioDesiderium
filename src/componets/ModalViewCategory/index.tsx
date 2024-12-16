import { useState } from "react";

export default function ModalViewCategory() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Drawer content */}
      <div
        id="drawer-read-product-advanced"
        className={`overflow-y-auto fixed top-0 left-0 z-40 p-4 w-full max-w-lg h-screen bg-white transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } dark:bg-gray-800`}
        tabIndex={-1}
        aria-labelledby="drawer-label"
        aria-hidden={!isOpen}
      >
        <button
          onClick={toggleDrawer}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
          <span className="sr-only">Close menu</span>
        </button>

        <div>
          <h4
            id="read-drawer-label"
            className="mb-1.5 leading-none text-xl font-semibold text-gray-900 dark:text-white"
          >
            Apple iMac 25"
          </h4>
          <h5 className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
            $2999
          </h5>
        </div>

        {/* Product images */}
        <div className="grid grid-cols-3 gap-4 mb-4 sm:mb-5">
          {[...Array(6)].map((_, idx) => (
            <div
              key={idx}
              className="p-2 w-auto bg-gray-100 rounded-lg dark:bg-gray-700"
            >
              <img
                src={`https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-${
                  idx % 3 === 0
                    ? "side"
                    : idx % 3 === 1
                    ? "front"
                    : "back"
                }-image.png`}
                alt={`iMac ${
                  idx % 3 === 0
                    ? "Side"
                    : idx % 3 === 1
                    ? "Front"
                    : "Back"
                } Image`}
              />
            </div>
          ))}
        </div>

        {/* Product details */}
        <dl className="sm:mb-5">
          <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
            Details
          </dt>
          <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
            Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
            processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
            Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
            Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
          </dd>
        </dl>

        {/* Additional sections */}
        <dl className="grid grid-cols-2 gap-4 mb-4">
          <div className="col-span-2 p-3 bg-gray-100 rounded-lg border border-gray-200 dark:bg-gray-700 sm:col-span-1 dark:border-gray-600">
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              Shipping
            </dt>
            <dd className="flex items-center text-gray-500 dark:text-gray-400">
              <svg
                className="w-4 h-4 mr-1.5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              United States, Europe
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
}
