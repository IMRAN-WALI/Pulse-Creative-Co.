/* eslint-disable no-unused-vars */
import React from "react";
import Services from "../Frontend/Services";
import Casestudies from "../Frontend/Casestudies";
import Stats from "../Frontend/Stats";
import Footer from "../Frontend/Footer";
import Logo from "../../../public/IMAGE/main-logo.png";
import img from "../../../public/IMAGE/creative.png";
import Ellipse from "../../../public/IMAGE/Ellipse 1.png";
import Line from "../../../public/IMAGE/underline.png";
import { useNavigate } from "react-router-dom";

const navigation = [
  { name: "HOME", href: "/", current: true },
  { name: "ABOUT", href: "/about", current: false },
  { name: "SERVICES", href: "/services", current: false },
  { name: "CASE STUDIES", href: "/casestudies", current: false }
];

function Home() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/contactus";
    navigate(path);
  };
  
  return (
    <div style={{ backgroundColor: "#F0F2F4" }} className="w-full">
      <div className="flex bg-gray-100 h-screen">
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

        {/* Main Content */}
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

          <div className=" container">
            <h1 className="design-class text-start text-[60px] md:text-[150px] m-10 ">Design</h1>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 md:text-[150px] sm:text-[40px] design-class ml-10">&</span>
              <h1 className="design-class md:text-[150px] sm:text-[40px]">Technology</h1>
            </div>
          </div>
          <h1 className="text-[80px] text-center m-5 relative">
            Where Ideas Pulse with Creativity
            <img
              src={Line}
              alt="line"
              className="relative left-[62%] transform bottom-4"
            />
          </h1>
        </div>
      </div>

      <div
        className="container-grid bg-cover w-[100%] h-[100vh] "
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="flex flex-col justify-end items-end w-[100%]">
          <p className="paragraph text-start justify-center text-white text-[65px] mt-10 p-20 w-[50%]">
            Welcome to Pulse Creative Co, where innovation meets imagination in
            the realms of design and technology.
          </p>

          <div className="flex justify-end w-full">
            <button className="paragraph bg-white rounded-full border-white h-25 w-25 text-[25px] mr-50 leading-7">
              view More
            </button>
          </div>
        </div>
      </div>
      <Services />
      <Casestudies />
      <Stats />
      <Footer />
    </div>
  );
}

export default Home;
