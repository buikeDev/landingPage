import React from "react";
import { JSX } from "react/jsx-runtime";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 top-0"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('public/lovable-uploads/39f79d52-ec07-4581-a744-ce30d3995c4e.png')",
          }}
        >
          <div className="w-full h-full bg-black bg-opacity-50"></div>
        </div>
      </div>

      <div className="container px-4 md:px-6 w-full relative z-10">
        <div className="w-full flex flex-col items-center py-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-center">
            Turning Creative Ideas
            <br />
            into Success
          </h1>
          <p className="text-white text-lg md:text-xl mb-12 opacity-90 max-w-2xl text-center">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore
            magna aliqua quis nostrud exerc.
          </p>
          <div>
            <a
              href="#services"
              className="bg-teal-500 hover:bg-teal-600 text-white px-10 py-4 rounded-full font-medium inline-flex items-center justify-center transition-all duration-300"
            >
              Discover Now
            </a>
          </div>
        </div>
      </div>

      {/* Side navigation elements */}
      <div className="hidden lg:flex flex-col items-center justify-center gap-4  right-0  bg-blue-900 p-4 fixed z-50 ">
        <a
          href="#"
          className="p-2 text-white hover:text-blue-300 transition-colors"
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
            className="lucide lucide-shopping-cart"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </a>
        <a
          href="#"
          className="p-2 text-white hover:text-blue-300 transition-colors"
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
            className="lucide lucide-user"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </a>
        <a
          href="#"
          className="p-2 text-white hover:text-blue-300 transition-colors"
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
            className="lucide lucide-mail"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
