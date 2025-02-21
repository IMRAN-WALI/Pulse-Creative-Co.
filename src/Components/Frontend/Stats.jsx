/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import PenImg from "../../../public/IMAGE/pen.png";

function Stats() {
  return (
    <div
      className="Stats-section flex h-[100vh]"
      style={{ backgroundColor: "#F0F2F4" }}
    >
      {/* Stats Section */}
      <div className="flex-1 flex flex-col">
        <section className="py-20">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-4 lg:gap-5 lg:flex-row lg:justify-between items-center">
              <div className="w-full h-60 bg-[#ECE8F4] p-6 rounded-lg flex flex-col items-center justify-center text-center">
                <div className="design-class text-9xl text-gray-900 inline-flex items-baseline">
                  5 <sup className="paragraph text-xl ml-1">Years</sup>
                </div>
                <span className="paragraph text-3xl text-black mt-2">
                  Doing our Best
                </span>
              </div>

              <div className="w-full h-60 bg-[#ECE8F4] p-6 rounded-lg flex flex-col items-center justify-center text-center">
                <div className="design-class text-9xl text-gray-900 inline-flex items-baseline">
                  135
                </div>
                <span className="paragraph text-3xl text-black mt-2">
                  Completed Projects
                </span>
              </div>

              <div className="w-full h-60 bg-[#ECE8F4] p-6 rounded-lg flex flex-col items-center justify-center text-center">
                <div className="design-class text-9xl text-gray-900 inline-flex items-baseline">
                  23
                </div>
                <span className="paragraph text-3xl text-black mt-2">
                  Countries Worldwide
                </span>
              </div>

              <div className="w-full h-60 bg-[#ECE8F4] p-6 rounded-lg flex flex-col items-center justify-center text-center">
                <div className="design-class text-9xl text-gray-900 inline-flex items-baseline">
                  50+
                </div>
                <span className="paragraph text-3xl text-black mt-2">
                  Happy Clients
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="container-grid grid grid-cols-12 gap-4 p-10">
          <div className="col-span-10 flex flex-col">
            <h1 className="design-class text-[16vh] leading-none font-bold">
              YOU HAVE A PROJECT
              <br />
              IN MIND?
            </h1>
            <p className="paragraph absolute text-3xl ml-[40rem] mt-40 w-[45%]">
              we are always excited to collaborate on new and innovative
              projects. Whether you’re launching a startup, rebranding an
              existing business, or looking to enhance your digital presence,
              we’re here to help bring your vision to life.
            </p>
          </div>
          <div className="col-span-2 flex items-center justify-end">
            <button>
            <img
              className="w-[25vw] h-auto"
              src={PenImg}
              alt="Pen Illustration"
            />
            </button>
          </div>
        </div>

        <div
          className="h-25 flex items-center text-white justify-between overflow-hidden mt-12"
          style={{
            background:
              "linear-gradient(279.04deg, #8E3CF7 -5.88%, #F0F2F4 134.65%)"
          }}
        >
          <marquee
            behavior="scroll"
            direction="left"
            scrollamount="10"
            loop="infinite"
          >
            <h1 className="design-class text-6xl whitespace-nowrap flex items-center">
              {Array(100).fill(
                <div className="flex items-center">
                  <span>Let’s Talk</span>
                  <span className="text-2xl paragraph ml-20 flex items-center justify-center">
                    GET IN TOUCH
                  </span>
                  <span className="mx-10"></span>
                </div>
              )}
            </h1>
          </marquee>
        </div>
      </div>
    </div>
  );
}

export default Stats;
