"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloudDownload } from "lucide-react";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="text-white body-font">
      <div className="container mx-auto items-center flex py-7 md:px-7 px-3 md:flex-row">
        <Link
          className="flex title-font font-medium text-white mb-4 md:mb-0 pr-4"
          href="/"
        >
          <span className="ml-3 text-2xl md:text-3xl">OLAMIDE FAMOJURO</span>
        </Link>

        {/* Hamburger / X Icon */}
        <button
          className={`text-white ${navbarOpen && "fixed right-5 top-10"} cursor-pointer z-[51] text-xl leading-none py-1 border border-solid border-transparent  rounded bg-transparent block md:hidden outline-none focus:outline-none ml-auto pb-3`}
          type="button"
          onClick={toggleNavbar}
        >
          {navbarOpen ? (
            // X Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Mobile Navigation (Slide-Up Animation) */}
        <AnimatePresence>
          {navbarOpen && (
            <motion.div
              className="fixed inset-0 bg-[#121212] z-50 md:hidden"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
            >
              <div className="container justify-center items-center flex flex-col h-full mx-auto p-5">
                <nav className="flex flex-col items-center justify-center space-y-6 text-center">
                  <Link
                    className="text-2xl hover:text-[#14AFF1]"
                    href="/"
                    onClick={toggleNavbar}
                  >
                    Home
                  </Link>
                  <Link
                    className="text-2xl hover:text-[#14AFF1]"
                    href="/about"
                    onClick={toggleNavbar}
                  >
                    About
                  </Link>
                  <Link
                    className="text-2xl hover:text-[#14AFF1]"
                    href="/characters"
                    onClick={toggleNavbar}
                  >
                    Characters
                  </Link>
                  <Link
                    className="text-2xl hover:text-[#14AFF1]"
                    href="/projects"
                    onClick={toggleNavbar}
                  >
                    Projects
                  </Link>
                  {/* <Link
                    className="text-2xl hover:text-[#14AFF1]"
                    href="/projects"
                    onClick={toggleNavbar}
                  >
                    Products
                  </Link> */}
                  <Link
                    className="text-2xl hover:text-[#14AFF1]"
                    href="/projects"
                    onClick={toggleNavbar}
                  >
                    Tutorials
                  </Link>
                  <Link
                    className="text-2xl hover:text-[#14AFF1]"
                    href="/contact"
                    onClick={toggleNavbar}
                  >
                    Contact
                  </Link>
                </nav>
                <button
                  className="w-fit mt-8 px-4 py-2 bg-[#14AFF1] text-white font-semibold rounded-lg hover:bg-[#0F8AC0] transition-colors"
                  onClick={() => {
                    toggleNavbar();
                    toggleModal();
                  }}
                >
                  View Resume
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Navigation */}
        <div className="md:flex flex-grow items-center hidden">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold pl-7">
            <Link className="mr-6 hover:text-[#14AFF1]" href="/">
              Home
            </Link>
            <Link className="mr-6 hover:text-[#14AFF1]" href="/about">
              About
            </Link>
            <Link className="mr-6 hover:text-[#14AFF1]" href="/characters">
              Characters
            </Link>
            <Link className="mr-6 hover:text-[#14AFF1]" href="/projects">
              Projects
            </Link>
            {/* <Link className="mr-6 hover:text-[#14AFF1]" href="/projects">
              Products
            </Link> */}
            <Link className="mr-6 hover:text-[#14AFF1]" href="/tutorials">
              Tutorials
            </Link>
            <Link className="mr-6 hover:text-[#14AFF1]" href="/contact">
              Contact
            </Link>
          </nav>
          <button
            className="px-4 bg-[#14AFF1] py-2 mt-2 text-sm font-semibold text-white transition duration-500 ease-in-out transform rounded-lg md:mt-0 md:ml-4 hover:bg-[#0F8AC0] focus:outline-none focus:shadow-outline"
            onClick={toggleModal}
          >
            View Resume
          </button>
        </div>

        {/* Modal for CV */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 z-[999999] flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-[#121212] rounded-lg py-6 px-2 w-full max-w-3xl max-h-[95vh] overflow-y-auto"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <div className="flex px-5 justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold"> 3D-Aritst CV</h2>
                  <button
                    className="text-white hover:text-[#14AFF1]"
                    onClick={toggleModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-x"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                <div className="h-[70vh] overflow-y-auto">
                  {/* Embed your CV here */}
                  <iframe
                    src="/Famojuro Olamide Henryi_3D-Aritst_CV.pdf"
                    className="w-full h-full"
                    frameBorder="0"
                  ></iframe>
                </div>
                <div className="mt-2 flex justify-end">
                  <a
                    href="/Famojuro Olamide Henryi_3D-Aritst_CV.pdf"
                    download="Olamide_Famojuro_CV.pdf"
                    className="px-4 py-2"
                  >
                    <CloudDownload color="#14AFF1" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
