/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Casestudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    "../../../public/IMAGE/carousal1.png",
    "../../../public/IMAGE/carousal2.png",
    "../../../public/IMAGE/carousal3.png"
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="main">
    <div className="study-section flex" style={{ backgroundColor: "#F0F2F4" }}>
      {/* Sidebar Navigation */}
      <div
        className="w-64 shadow-lg h-[100rem]"
        style={{ backgroundColor: "#F0F2F4" }}
      >
        <nav>
          <ul className="space-y-2"></ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Content Section */}
        <div className="case-section p-8 mt-80">
          <div className="grid gap-5 sm:grid-cols-12">
            <div className="sm:col-span-6">
              <h1 className="design-class text-[100px]">CASE STUDIES</h1>
            </div>
            <div className="sm:col-span-6">
              <p className="paragraph text-3xl">
                At PulseCreativeCo, we excel in delivering successful projects
                across diverse industries, solving client challenges with
                innovative solutions. Explore our case studies to see our
                impactful work and outstanding results.
              </p>
            </div>
          </div>
        </div>

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
      </div>
    </div>
    <hr className="w-full border-0 h-[2px] bg-[#635D8B26] bg-opacity-15" />
    </div>
  );
}

export default Casestudies;
