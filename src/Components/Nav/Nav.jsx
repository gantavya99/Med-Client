import React from "react";
import "./Nav.css";
const Nav = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    setMenuOpen(true);
    clearTimeout(timeoutId);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setMenuOpen(false);
    }, 500); // Change the delay time as needed (in milliseconds)
  };

  return (
    <>
      <hr className="mt-3"></hr>
      <div className="z-50 flex justify-center text-sm cursor-pointer p-1">
        <div className="mx-2 p-2 hover:text-[#10847e]">Home</div>
        <div className="relative mx- p-2 hover:text-[#10847e]">
          <span
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
            className="mr-2 relative"
          >
            Product Categories
          </span>
          <svg
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4 ${
              menuOpen
                ? "rotate-180 transition-transform duration-500"
                : "transition-transform duration-500"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10 13l-5-5h10l-5 5z" />
          </svg>
        </div>
        {menuOpen && (
          <div
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => setMenuOpen(false)}
            className="z-50 origin-bottom-right absolute mt-10 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-0"
          >
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Opioids
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Psychedelics
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Cannabinoids
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Research Chemical
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Weight Loss/ diabetes
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Gummies and Chocolates
              </a>
            </div>
          </div>
        )}

        <div className="mx-2 p-2 hover:text-[#10847e]">How to Order?</div>
        <div className="mx-2 p-2 hover:text-[#10847e]">FAQs</div>
        <div className="mx-2 p-2 hover:text-[#10847e]">Testimonials</div>
        <div className="mx-2 p-2 hover:text-[#10847e]">Contact Us</div>
      </div>

      <hr></hr>
      <div className="hero-bg"></div>
    </>
  );
};
export default Nav;
