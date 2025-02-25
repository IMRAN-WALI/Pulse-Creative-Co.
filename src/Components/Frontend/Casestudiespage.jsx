/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import Logo from "../../../public/IMAGE/main-logo.png";
import Ellipse from "../../../public/IMAGE/Ellipse 1.png";
import Stats from "../Frontend/Stats";
import Footer from "../Frontend/Footer";
import { useNavigate } from "react-router-dom";

const navigation = [
  { name: "HOME", href: "/", current: false },
  { name: "ABOUT", href: "/about", current: false },
  { name: "SERVICES", href: "/services", current: false },
  { name: "CASE STUDIES", href: "/casestudies", current: true }
];

function Casestudiespage() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/contactus";
    navigate(path);
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    "/public/IMAGE/carousal1.png",
    "/public/IMAGE/carousal2.png",
    "/public/IMAGE/carousal3.png"
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="casestudiespage-section">
      <div className="flex bg-gray-100">
        <div className="w-64 shadow-lg" style={{ backgroundColor: "#F0F2F4" }}>
          {/* Navigation Links */}
          <nav className="mt-35">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`flex items-center px-6 py-2 ${
                      item.current ? "text-#0000004D" : "text-gray-400"
                    } hover:text-black`}
                  >
                    <span className="ml-2">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex-1">
          <div className="container-grid flex justify-between p-5">
            <div className="sm:col-span-6">
              <img src={Logo} alt="Logo" className="h-10" />
            </div>
            <div className="sm:col-span-6">
              <div
                className="absolute text-white text-lg paragraph flex bg-cover bg-center right-0 w-43 h-30 bottom-[50rem]"
                style={{ backgroundImage: `url(${Ellipse})` }}
              >
                <button
                  className="btn text-2xl relative flex items-center justify-center left-10 bottom-5"
                  onClick={routeChange}
                >
                  Let’s Talk
                </button>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-[#8E3CF7]">
            <div className="flex m-10 mt-30">
              <h1 className="design-class text-9xl">Case Studies</h1>
            </div>
          </div>

          <div className="container-grid grid grid-cols-12">
            <div className="sm:col-span-4"></div>
            <div className="sm:col-span-8">
              <div>
                <h1 className="design-class text-[#00000040] text-opacity-25 text-4xl">
                  Real Stories of Success
                </h1>
                <p className="paragraph mt-5 text-4xl w-[80%]">
                  At PulseCreativeCo, we pride ourselves on delivering
                  exceptional results for our clients. Our case studies showcase
                  the transformative impact of our work across various
                  industries. Dive into these real-world examples to see how
                  we’ve helped businesses achieve their goals through innovative
                  design and development solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="container-grid grid grid-cols-12">
            <div className="sm:col-span-4 ">
              <div className="design-class m-10 text-[#00000040] text-opacity-25 text-4xl">
                <h1>Our Work & </h1>
                <h1>Case Studies </h1>
              </div>
            </div>
            <div className="sm:col-span-8"></div>
          </div>

          <hr className="w-[95%] m-10 border-0 h-[2px] bg-[#635D8B26] bg-opacity-15" />

          {/* Carousel Section - Now placed below content */}
          <div className="carousal-container px-8 mt-20">
            <div className="relative h-[80vh]">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`duration-200 ease-linear absolute inset-0 ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={item}
                    className="w-full h-full object-cover"
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
              <div className="btn">
                <button
                  type="button"
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 flex items-center justify-center p-2 cursor-pointer group focus:outline-none"
                  onClick={handlePrev}
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                    <svg
                      className="h-8 w-8 text-white"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <line x1="5" y1="12" x2="19" y2="12" />{" "}
                      <line x1="5" y1="12" x2="11" y2="18" />{" "}
                      <line x1="5" y1="12" x2="11" y2="6" />
                    </svg>
                  </span>
                </button>

                <button
                  type="button"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 flex items-center justify-center p-2 cursor-pointer group focus:outline-none"
                  onClick={handleNext}
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                    <svg
                      className="h-8 w-8 text-white"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <line x1="5" y1="12" x2="19" y2="12" />{" "}
                      <line x1="13" y1="18" x2="19" y2="12" />{" "}
                      <line x1="13" y1="6" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <hr className="w-[95%] m-10 border-0 h-[2px] bg-[#635D8B26] bg-opacity-15" />

          {/* Carousel Section - Now placed below content */}
          <div className="carousal-container px-8 mt-20 mb-20">
            <div className="relative h-[80vh]">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`duration-200 ease-linear absolute inset-0 ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={item}
                    className="w-full h-full object-cover"
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
              <div className="btn">
                <button
                  type="button"
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 flex items-center justify-center p-2 cursor-pointer group focus:outline-none"
                  onClick={handlePrev}
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                    <svg
                      className="h-8 w-8 text-white"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <line x1="5" y1="12" x2="19" y2="12" />{" "}
                      <line x1="5" y1="12" x2="11" y2="18" />{" "}
                      <line x1="5" y1="12" x2="11" y2="6" />
                    </svg>
                  </span>
                </button>

                <button
                  type="button"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 flex items-center justify-center p-2 cursor-pointer group focus:outline-none"
                  onClick={handleNext}
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                    <svg
                      className="h-8 w-8 text-white"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <line x1="5" y1="12" x2="19" y2="12" />{" "}
                      <line x1="13" y1="18" x2="19" y2="12" />{" "}
                      <line x1="13" y1="6" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full border-0 h-[2px] bg-[#635D8B26] bg-opacity-15" />
      <Stats />
      <Footer />
    </div>
  );
}

export default Casestudiespage;
