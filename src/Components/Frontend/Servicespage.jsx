/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../../../public/IMAGE/main-logo.png";
import Ellipse from "../../../public/IMAGE/Ellipse 1.png";
import Star from "../../../public/SVG/Star.svg";
import Stats from "../Frontend/Stats";
import Footer from "../Frontend/Footer";
import { useNavigate } from "react-router-dom";

const navigation = [
  { name: "HOME", href: "/", current: false },
  { name: "ABOUT", href: "/about", current: false },
  { name: "SERVICES", href: "/services", current: true },
  { name: "CASE STUDIES", href: "/casestudies", current: false }
];

function Servicespage() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/contactus";
    navigate(path);
  };
  return (
    <div className="Servicespage-section">
      <div className="flex bg-gray-100">
        {/* Side Navbar */}
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
                className="absolute text-white text-lg paragraph flex bg-cover bg-center right-0 w-43 h-30 bottom-[57rem]"
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
          <div className="flex">
            <hr className="w-[39%] mt-31 m-10" />
            <h1 className="paragraph flex mt-27 text-2xl">Services</h1>
          </div>

          <div className="m-10">
            <h1 className="design-class text-8xl">Services & Solutions</h1>
          </div>

          <div className="container-grid grid grid-cols-12">
            <div className="sm:col-span-6">
              <h1 className="design-class m-10 mt-45 text-gray-300">
                Since 2020
              </h1>
              <div className="m-10">
                <p className="paragraph">Creating Deep Connections Between </p>
                <p className="paragraph">Brands and Their Audiences. </p>
              </div>
            </div>
            <div className="sm:col-span-6">
              <div className="flex justify-end text-3xl text-end">
                <p className="paragraph mr-20 w-[37vw]">
                  At PulseCreativeCo, we provide top-notch design and
                  development services tailored to meet your unique needs. Our
                  goal is to transform your ideas into stunning digital
                  experiences that captivate and engage your audience. Explore
                  our range of services:
                </p>
              </div>
            </div>
          </div>

          <div className="Lists">
            <hr className="w-[95%] m-10 border-0 h-[2px] bg-[#635D8B26] bg-opacity-15" />

            <div className="container-grid justify-between grid-cols-12 flex">
              <div className="sm:col-span-6">
                <h1 className="design-class text-8xl m-10">UI/UX Design</h1>
              </div>
              <div className="sm:col-span-6"></div>
              <h1 className="design-class text-8xl m-10 text-[#00000040] text-opacity-25">
                01
              </h1>
            </div>
            <div className="flex">
              <p className="paragraph flex m-10 text-[#00000040] text-opacity-25">
                UI/UX Design{" "}
                <span className="m-1 ml-5">
                  <img src={Star} />
                </span>
              </p>
              <p className="paragraph flex mt-10 mr-5 text-[#00000040] text-opacity-25">
                Ecommerce{" "}
                <span className="m-1 ml-5">
                  <img src={Star} />
                </span>
              </p>
              <p className="paragraph flex mt-10 mr-5 text-[#00000040] text-opacity-25">
                Digital Product{" "}
                <span className="m-1 ml-5">
                  <img src={Star} />
                </span>
              </p>
              <p className="paragraph flex mt-10 mr-5 text-[#00000040] text-opacity-25">
                Design Systems{" "}
                <span className="m-1 ml-5">
                  <img src={Star} />
                </span>
              </p>
              <p className="paragraph flex mt-10 mr-5 text-[#00000040] text-opacity-25">
                Prototype
              </p>
            </div>

            <hr className="w-[95%] m-10 border-0 h-[2px] bg-[#635D8B26] bg-opacity-15" />

            <div className="container-grid justify-between grid-cols-12 flex">
              <div className="sm:col-span-6">
                <h1 className="design-class text-8xl m-10">Graphic Design</h1>
              </div>
              <div className="sm:col-span-6"></div>
              <h1 className="design-class text-8xl m-10 text-[#00000040] text-opacity-25">
                02
              </h1>
            </div>
            <div className="flex">
              <p className="paragraph flex m-10 text-[#00000040] text-opacity-25">
                Custom Illustrations{" "}
                <span className="m-1 ml-5">
                  <img src={Star} />
                </span>
              </p>
              <p className="paragraph flex mt-10 mr-5 text-[#00000040] text-opacity-25">
                Packaging Design{" "}
                <span className="m-1 ml-5">
                  <img src={Star} />
                </span>
              </p>
              <p className="paragraph flex mt-10 mr-5 text-[#00000040] text-opacity-25">
                Business Cards & Stationery{" "}
                <span className="m-1 ml-5">
                  <img src={Star} />
                </span>
              </p>
              <p className="paragraph flex mt-10 mr-5 text-[#00000040] text-opacity-25">
                Advertise Banner{" "}
                <span className="m-1 ml-5">
                  <img src={Star} />
                </span>
              </p>
              <p className="paragraph flex mt-10 mr-5 text-[#00000040] text-opacity-25">
                Marketing Design
              </p>
            </div>

            <hr className="w-[95%] m-10 border-0 h-[2px] bg-[#635D8B26] bg-opacity-15" />

            <div className="container-grid justify-between grid-cols-12 flex">
              <div className="sm:col-span-6">
                <h1 className="design-class text-8xl m-10">Branding</h1>
              </div>
              <div className="sm:col-span-6"></div>
              <h1 className="design-class text-8xl m-10 text-[#00000040] text-opacity-25">
                03
              </h1>
            </div>
            <div className="flex">
              <p className="paragraph flex m-10 text-[#00000040] text-opacity-25">
                Logo Design{" "}
                <span className="m-1 ml-5">
                  <img src={Star} />
                </span>
              </p>
              <p className="paragraph flex mt-10 mr-5 text-[#00000040] text-opacity-25">
                Brand Guideline{" "}
                <span className="m-1 ml-5">
                  <img src={Star} />
                </span>
              </p>
              <p className="paragraph flex mt-10 mr-5 text-[#00000040] text-opacity-25">
                Visual Identity{" "}
                <span className="m-1 ml-5">
                  <img src={Star} />
                </span>
              </p>
              <p className="paragraph flex mt-10 mr-5 text-[#00000040] text-opacity-25">
                Rebranding{" "}
                <span className="m-1 ml-5">
                  <img src={Star} />
                </span>
              </p>
              <p className="paragraph flex mt-10 mr-5 text-[#00000040] text-opacity-25">
                Brand Strategy
              </p>
            </div>

            <hr className="w-[95%] m-10 border-0 h-[2px] bg-[#635D8B26] bg-opacity-15" />

            <div className="container-grid justify-between grid-cols-12 flex">
              <div className="sm:col-span-6">
                <h1 className="design-class text-8xl m-10">Mobile App</h1>
              </div>
              <div className="sm:col-span-6"></div>
              <h1 className="design-class text-8xl m-10 text-[#00000040] text-opacity-25">
                04
              </h1>
            </div>
            <div className="flex">
              <p className="paragraph flex m-10 text-[#00000040] text-opacity-25">
                iOS{" "}
                <span className="m-1 ml-5">
                  <img src={Star} />
                </span>
              </p>
              <p className="paragraph flex mt-10 mr-5 text-[#00000040] text-opacity-25">
                Android{" "}
                <span className="m-1 ml-5">
                  <img src={Star} />
                </span>
              </p>
              <p className="paragraph flex mt-10 mr-5 text-[#00000040] text-opacity-25">
                Hybrid App{" "}
                <span className="m-1 ml-5">
                  <img src={Star} />
                </span>
              </p>
              <p className="paragraph flex mt-10 mr-5 text-[#00000040] text-opacity-25">
                Design and Prototyping{" "}
                <span className="m-1 ml-5">
                  <img src={Star} />
                </span>
              </p>
              <p className="paragraph flex mt-10 mr-5 text-[#00000040] text-opacity-25">
                App Maintenance and Support
              </p>
            </div>

            <hr className="w-[95%] m-10 border-0 h-[2px] bg-[#635D8B26] bg-opacity-15" />

            <div className="container-grid justify-between grid-cols-12 flex">
              <div className="sm:col-span-6">
                <h1 className="design-class text-8xl m-10">Website</h1>
              </div>
              <div className="sm:col-span-6"></div>
              <h1 className="design-class text-8xl m-10 text-[#00000040] text-opacity-25">
                05
              </h1>
            </div>
            <div className="flex mb-10">
              <p className="paragraph flex m-10 text-[#00000040] text-opacity-25">
                Responsive{" "}
                <span className="m-1 ml-5">
                  <img src={Star} />
                </span>
              </p>
              <p className="paragraph flex mt-10 mr-5 text-[#00000040] text-opacity-25">
                E-commerce{" "}
                <span className="m-1 ml-5">
                  <img src={Star} />
                </span>
              </p>
              <p className="paragraph flex mt-10 mr-5 text-[#00000040] text-opacity-25">
                Custom Web Applications{" "}
                <span className="m-1 ml-5">
                  <img src={Star} />
                </span>
              </p>
              <p className="paragraph flex mt-10 mr-5 text-[#00000040] text-opacity-25">
                CMS{" "}
                <span className="m-1 ml-5">
                  <img src={Star} />
                </span>
              </p>
              <p className="paragraph flex mt-10 mr-5 text-[#00000040] text-opacity-25">
                Website Optimization
              </p>
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
export default Servicespage;
