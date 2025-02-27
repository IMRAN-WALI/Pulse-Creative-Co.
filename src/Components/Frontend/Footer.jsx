/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import img from "../../../public/IMAGE/background.png";
import FacebookSVG from "../../../public/SVG/Facebook.svg";
import InstaSVG from "../../../public/SVG/Instagram.svg";
import LinkdinSVG from "../../../public/SVG/Linkdin.svg";
import SportsSVG from "../../../public/SVG/Sports.svg";
import Behance from "../../../public/SVG/behance.svg";
import Email from "../../../public/IMAGE/Email.png";
import Phone from "../../../public/IMAGE/Phone.png";
import Location from "../../../public/IMAGE/Location.png";
import PulseIcon from "../../../public/IMAGE/pulse.png";
import { useState, useEffect } from "react";
import { FaAnglesUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Ellipse from "../../../public/IMAGE/Ellipse 5.png";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div className="Footer-section">
      <div className="h-[85vh]" style={{ backgroundImage: `url(${img})` }}>
        <footer>
          <div className="w-full md:py-8">
            <div className="sm:flex sm:items-center sm:justify-around">
              <img
                src={PulseIcon}
                className="h-15 w-15 mr-[70rem]"
                alt="Pulse Icon"
              />

              <ul className="design-class flex flex-wrap items-center text-lg text-white sm:mb-0 dark:text-gray-400 gap-10">
                <li>
                  <Link to="/" className="hover:underline me-4 md:me-6">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline me-4 md:me-6">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:underline me-4 md:me-6">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/casestudies" className="hover:underline">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
            <hr className="w-full border-[#F0F2F440] sm:mx-auto dark:border-gray-700 lg:my-8" />

            <div className="grid grid-cols-12">
              {/* Left Text */}
              <div className="col-span-12 sm:col-span-6">
                <p className="paragraph text-white text-7xl ml-15">
                  Where creativity meets innovation. Let's create something
                  extraordinary together.
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="col-span-12 sm:col-span-6  ml-40 ">
                <div className="flex gap-10">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="text-white"
                  >
                    <img src={FacebookSVG} />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="text-white"
                  >
                    <img src={InstaSVG} />
                  </a>
                  <a
                    href="https://pk.linkedin.com/"
                    target="_blank"
                    className="text-white"
                  >
                    <img src={LinkdinSVG} />
                  </a>
                  <a className="text-white">
                    <img src={SportsSVG} />
                  </a>
                  <a className="text-white">
                    <img src={Behance} />
                  </a>
                </div>
                <div className="flex list-none mt-10 gap-5">
                  <div className="border border-white p-3 rounded-full w-85">
                    <ul>
                      <li className="flex items-center space-x-2">
                        <img
                          src={Email}
                          className="w-10 h-10"
                          alt="Email Icon"
                        />
                        <span className="paragraph text-white ">
                          @pulsecreativecogmail.com
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-white p-3 rounded-full w-55">
                    <ul>
                      <li className="flex items-center space-x-2">
                        <img
                          src={Phone}
                          className="w-10 h-10"
                          alt="Email Icon"
                        />
                        <span className="paragraph text-white ">
                          +123456789
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex list-none mt-5 gap-5">
                  <div className="border border-white p-3 rounded-full w-[60%]">
                    <ul>
                      <li className="flex items-center space-x-2">
                        <img
                          src={Location}
                          className="w-10 h-10"
                          alt="Email Icon"
                        />
                        <span className="paragraph text-white ">
                          2715 Ash Dr. San Jose, South Dakota 83475
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <div className="grid grid-cols-12">
          <div className="col-span-10 sm:grid-cols-10">
            <h1 className="design-class text-gray-500 text-[11rem] ml-10">
              Pulse Creative Co.
            </h1>
          </div>
          <div className="col-span-2 sm:grid-cols-2">
            <div
              className="bg-cover relative h-40 w-40 top-10"
              style={{ backgroundImage: `url(${Ellipse})` }}
            >
              <button
                className={`scroll-to-top relative ml-15 items-center top-15 ${
                  isVisible ? "block" : "hidden"
                }`}
                onClick={scrollToTop}
              >
                <FaAnglesUp className="w-10 h-10 fill-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
