import { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";


function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>

      <div>
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex justify-center space-x-4">
                    <button className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"><Link to={"/"}>Home</Link></button>
                    <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><Link to={"/products"}>Products</Link></button>
                    <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"> <Link to={"/tasks"}>Tasks</Link></button>
                  </div>
                </div>

              </div>
              <div className="hidden md:block">
                <div className="flex items-end">
                  <button className="bg-sky-500/50 hover:bg-sky-500/100 text-white px-6 py-2 rounded-full text-sm font-medium mr-2"><Link to={"/login"}>Login</Link></button>
                  <button className="bg-sky-500/50 hover:bg-sky-500/100 text-white px-6 py-2 rounded-full text-sm font-medium"><Link to={"/signup"}>Sign Up</Link></button>

                  {useLocation().pathname.includes("products") &&
                    <div className="flex flex-col items-end ml-3 mt-3">
                      <button className="bg-purple-700 hover:bg-purple-900 text-white px-4 py-2 text-md rounded-md mr-2 "><Link to={"/addproduct"}>Add Product</Link></button>
                    </div>
                  }
                </div>
              </div>

              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <button className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                    Home
                  </button>
                  <button className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Products
                  </button>
                  <button className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Tasks
                  </button>

                  <button className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Login
                  </button>
                </div>
              </div>

            )}
          </Transition>
        </nav>


      </div>
    </>


  );
}

export default Nav;
