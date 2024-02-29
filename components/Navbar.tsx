"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav className="bg-white">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between  h-16">
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                  </svg>
                )}
              </button>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center  space-x-4">
                <a
                  href="#"
                  className="text-black hover:bg-black hover:text-white rounded-lg p-2"
                >
                  Shop
                </a>
                <a
                  href="/loobook"
                  className="text-black hover:bg-black hover:text-white rounded-lg p-2"
                >
                  Lookbook
                </a>
                <a
                  href="/about"
                  className="text-black hover:bg-black hover:text-white rounded-lg p-2"
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="text-black hover:bg-black hover:text-white rounded-lg p-2"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="#" className="text-black text-2xl">
                  Almeda
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                </svg>
                <span className="text-black text-lg ml-2">0</span>
              </div>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden h-screen flex items-center justify-center">
            <div className="flex flex-col items-center">
              <a
                href="#"
                className="text-black hover:bg-black hover:text-white rounded-lg p-2"
              >
                Shop
              </a>
              <a
                href="#"
                className="text-black hover:bg-black hover:text-white rounded-lg p-2"
              >
                Lookbook
              </a>
              <a
                href="#"
                className="text-black hover:bg-black hover:twhite rounded-lg p-2"
              >
                About
              </a>
              <a
                href="#"
                className="text-black hover:bg-black hover:text-white rounded-lg p-2"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
