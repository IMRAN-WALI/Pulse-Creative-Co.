// eslint-disable-next-line no-unused-vars
import React from "react";
import Eyeimg from "../../../public/IMAGE/Eye.png";
import hand from "../../../public/IMAGE/Hand.png";
import rgbImg from "../../../public/IMAGE/rgb.png";
import { useNavigate } from "react-router-dom";

function Services() {
  let navigate = useNavigate();
  const view = () => {
    let path = "/services";
    navigate(path);
  };
  return (
    <div className="services-section">
      <div className="flex bg-gray-100 h-[70rem]">
        {/* Side Navbar */}
        <div
          className="w-64 shadow-lg h-[70rem]"
          style={{ backgroundColor: "#F0F2F4" }}
        >
          {/* Navigation Links */}
          <nav className="mt-6">
            <ul className="space-y-2"></ul>
          </nav>
        </div>

        <div className="flex-1 mt-25">
          <div className="container-grid flex justify-between m-10 p-10">
            <div className="sm:cols-span-6">
              <p className="paragraph text-3xl w-[80%] text-start justify-center">
                At PulseCreativeCo, we bring creativity and innovation together
                to deliver top-notch design and development services tailored to
                meet your unique needs.
              </p>
            </div>
            <div className="sm:cols-span-6">
              <h1 className="design-class text-9xl">SERVICES</h1>
            </div>
          </div>

          <div className="container-grid grid grid-cols-12">
            <div className="col-span-12 sm:col-span-4">
              <div className="row-span-1 border-l-4 border-[#8E3CF7]">
                <img
                  className="object-cover object-center w-[93%] h-80 ml-8"
                  src={Eyeimg}
                  alt="Eye Design"
                />
              </div>

              <div className="w-[93%] h-75 mt-2 flex justify-center items-center bg-[#ECE8F4] ml-8 row-span-1">
                <h1 className="paragraph text-[#00000040] text-opacity-30 uppercase text-5xl">
                  Graphic Design
                </h1>
              </div>

              <div className="w-[94%] h-75 flex justify-center items-center bg-[#ECE8F4] ml-7 relative mt-2 row-span-1">
                <h1 className="paragraph text-[#00000040] text-opacity-30 uppercase text-5xl text-center">
                  Web & App Development
                </h1>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-4">
              <div className="w-[30vw] h-55 mt-10 flex justify-center items-center bg-[#ECE8F4]">
                <h1 className="paragraph text-[#00000040] text-opacity-30 uppercase text-5xl">
                  Ui / Ux Design
                </h1>
              </div>

              <div className="row-span-2 w-[30vw]">
                <img
                  className="object-cover object-center w-full h-[80vh] mt-2"
                  src={hand}
                  alt="hand Design"
                />
              </div>
            </div>
            <div className="col-span-12 sm:col-span-4 w-full">
              <div className="w-[89%] h-75 mt-20 flex justify-center items-center bg-[#ECE8F4] mx-auto">
                <h1 className="paragraph text-[#00000040] text-opacity-30 uppercase text-5xl">
                  Branding
                </h1>
              </div>

              <div className="row-span-1 mt-2">
                <img
                  className="object-cover object-center w-[90%] h-[70vh] item-center ml-7"
                  src={rgbImg}
                  alt="rgb Design"
                />
                <div className="cont text-end relative bottom-40 mr-25">
                  <button
                    className="paragraph bg-[#F0F2F4] rounded-full border-white h-25 w-25 text-[25px]  capitalize leading-5 hover:bg-gray-200 hover:text-white"
                    onClick={view}
                  >
                    view More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
