/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../../../public/IMAGE/main-logo.png";
import Ellipse from "../../../public/IMAGE/Ellipse 1.png";
import InstagramIcon from "../../../public/SVG/Arrow.svg";
import FacebookIcon from "../../../public/SVG/Arrow.svg";
import LinkedInIcon from "../../../public/SVG/Arrow.svg";
import BehanceIcon from "../../../public/SVG/Arrow.svg";
import DribbbleIcon from "../../../public/SVG/Arrow.svg";
import SVG from "../../../public/SVG/Arrow.svg";
import Stats from "../Frontend/Stats";
import Footer from "../Frontend/Footer";

const navigation = [
  {
    name: "INSTAGRAM",
    href: "https://www.instagram.com/",
    icon: InstagramIcon
  },
  { name: "FACEBOOK", href: "", icon: FacebookIcon },
  { name: "LINKEDIN", href: "", icon: LinkedInIcon },
  { name: "BEHANCE", href: "", icon: BehanceIcon },
  { name: "DRIBBBLE", href: "", icon: DribbbleIcon }
];

function Contactus() {
  return (
    <div className="Contactus-Section">
      <div className="flex bg-gray-100">
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
                <button className="btn text-2xl relative flex items-center justify-center left-10 bottom-5">
                  Let’s Talk
                </button>
              </div>
            </div>
          </div>

          <div className="container-grid grid grid-cols-12">
            <div className="sm:col-span-4">
              <h1 className="design-class text-[#00000040] text-opacity-25 text-[20rem]">
                Talk
              </h1>
            </div>
            <div className="sm:col-span-8">
              <div className="mt-35 ml-20">
                <h1 className="paragraph text-8xl">Let's create a better</h1>
                <h1 className="paragraph text-8xl">world, together.</h1>
                <hr className="w-[95%] border-0 h-[2px] bg-[#635D8B26] bg-opacity-15 mt-3" />
              </div>
            </div>
          </div>

          <div className="container-grid grid grid-cols-12">
            <div className="sm:col-span-4">
              <div className="ml-15 relative bottom-20">
                {/* Navigation Links */}
                <nav>
                  <ul className="space-y-2 leading-3">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={`flex items-center px-6 py-2 ${
                            item.current ? "text-#0000004D" : "text-gray-400"
                          } hover:text-black`}
                        >
                          {/* Render SVG as <img> */}
                          <span>{item.name}</span>
                          <img
                            src={item.icon}
                            alt={item.name}
                            className={`w-3 h-3 ml-5 ${
                              item.name ? "opacity-30 grayscale" : "grayscale"
                            } hover:grayscale-0 hover:opacity-100`}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="sm:col-span-8">
              <div className="ml-20 relative bottom-25">
                <h1 className="design-class text-[#00000040] text-opacity-25 text-4xl">
                  Give us a call
                </h1>
                <h1 className="design-class text-9xl">+1 23456789</h1>
              </div>
            </div>
          </div>

          <div className="container-grid grid grid-cols-12">
            <div className="sm:col-span-6">
              <div className="ml-20 w-full">
                <h1 className="paragraph text-8xl">We’re excited to</h1>
                <h1 className="paragraph text-8xl">hear from you!</h1>
              </div>
            </div>
            <div className="sm:col-span-6">
              <div className="mt-40 flex justify-end mr-10">
                <p className="paragraph text-[#00000040] text-opacity-25">
                  @pulsecreativecogmail.com
                </p>
              </div>
            </div>
          </div>

          <hr className="w-[95%] border-0 h-[2px] bg-[#635D8B26] bg-opacity-15 mt-5 ml-18" />

          <div className="container-grid grid grid-cols-12 mt-5">
            <div className="sm:col-span-5"></div>
            <div className="sm:col-span-7 grid grid-cols-7">
              <div className="col-span-1">
                <h1 className="design-class text-[#635D8B26] text-opacity-25 text-2xl">
                  01
                </h1>
              </div>
              <div className="col-span-6">
                <form className="text-2xl grid">
                  <label className="paragraph">Your Name</label>
                  <input type="text" placeholder="Enter name" />
                </form>
              </div>
              <hr className="w-[57vw] border-0 h-[2px] bg-[#635D8B26] bg-opacity-15 mt-5" />
            </div>
          </div>

          <div className="container-grid grid grid-cols-12 mt-5">
            <div className="sm:col-span-5"></div>
            <div className="sm:col-span-7 grid grid-cols-7">
              <div className="col-span-1">
                <h1 className="design-class text-[#635D8B26] text-opacity-25 text-2xl">
                  02
                </h1>
              </div>
              <div className="col-span-6">
                <form className="text-2xl grid">
                  <label className="paragraph">Your Email</label>
                  <input type="text" placeholder="Enter email" />
                </form>
              </div>
              <hr className="w-[57vw] border-0 h-[2px] bg-[#635D8B26] bg-opacity-15 mt-5" />
            </div>
          </div>

          <div className="container-grid grid grid-cols-12 mt-5">
            <div className="sm:col-span-5"></div>
            <div className="sm:col-span-7 grid grid-cols-7">
              <div className="col-span-1">
                <h1 className="design-class text-[#635D8B26] text-opacity-25 text-2xl">
                  03
                </h1>
              </div>
              <div className="col-span-6">
                <div className="paragraph flex gap-5">
                  <h1 className="text-2xl">What can we do for you?</h1>
                  <div className="flex-1">
                    <div className="flex mt-10 gap-3 -translate-x-66.5">
                      <input type="radio" />
                      <h1 className="text-[#635D8B26] text-opacity-25 hover:text-black">
                        UI / UX Design
                      </h1>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex mt-10 gap-3 -translate-x-90.5">
                      <input type="radio" />
                      <h1 className="text-[#635D8B26] text-opacity-25 hover:text-black">
                        Graphic Design
                      </h1>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex mt-10 gap-3 -translate-x-90.5">
                      <input type="radio" />
                      <h1 className="text-[#635D8B26] text-opacity-25 hover:text-black">
                        Branding
                      </h1>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex mt-10 gap-3 -translate-x-90.5">
                      <input type="radio" />
                      <h1 className="text-[#635D8B26] text-opacity-25 hover:text-black">
                        Mobile App
                      </h1>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex mt-10 gap-3 -translate-x-90.5">
                      <input type="radio" />
                      <h1 className="text-[#635D8B26] text-opacity-25 hover:text-black">
                        Website
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="w-[57vw] border-0 h-[2px] bg-[#635D8B26] bg-opacity-15 mt-5" />
            </div>
          </div>

          <div className="container-grid grid grid-cols-12 mt-5">
            <div className="sm:col-span-5"></div>
            <div className="sm:col-span-7 grid grid-cols-7">
              <div className="col-span-1">
                <h1 className="design-class text-[#635D8B26] text-opacity-25 text-2xl">
                  04
                </h1>
              </div>
              <div className="col-span-6">
                <div className="paragraph flex gap-5">
                  <h1 className="text-2xl">Budget in USD</h1>
                  <div className="flex-1">
                    <div className="flex mt-10 gap-3 -translate-x-40.5">
                      <input type="radio" />
                      <h1 className="text-[#635D8B26] text-opacity-25 hover:text-black">
                        Under $10k
                      </h1>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex mt-10 gap-3 -translate-x-90.5">
                      <input type="radio" />
                      <h1 className="text-[#635D8B26] text-opacity-25 hover:text-black">
                        $10 - $20k
                      </h1>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex mt-10 gap-3 -translate-x-90.5">
                      <input type="radio" />
                      <h1 className="text-[#635D8B26] text-opacity-25 hover:text-black">
                        $20 - $50k
                      </h1>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex mt-10 gap-3 -translate-x-90.5">
                      <input type="radio" />
                      <h1 className="text-[#635D8B26] text-opacity-25 hover:text-black">
                        $50 - $100k
                      </h1>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex mt-10 gap-3 -translate-x-90.5">
                      <input type="radio" />
                      <h1 className="text-[#635D8B26] text-opacity-25 hover:text-black">
                        $100k+
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="w-[57vw] border-0 h-[2px] bg-[#635D8B26] bg-opacity-15 mt-5" />
            </div>
          </div>

          <div className="container-grid grid grid-cols-12 mt-5 h-60">
            <div className="sm:col-span-5"></div>
            <div className="sm:col-span-7 grid grid-cols-7">
              <div className="col-span-1">
                <h1 className="design-class text-[#635D8B26] text-opacity-25 text-2xl">
                  05
                </h1>
              </div>
              <div className="col-span-6">
                <form className="text-2xl grid">
                  <label className="paragraph">Project Details</label>
                  <input type="text" placeholder="Enter details" />
                </form>
              </div>
              <hr className="w-[57vw] border-0 h-[2px] bg-[#635D8B26] bg-opacity-15 mt-5" />
            </div>
          </div>

          <div className="container-grid grid grid-cols-12">
            <div className="sm:col-span-5"></div>
            <div className="sm:col-span-7 grid grid-cols-7">
              <div className="col-span-1">
                <h1 className="design-class text-[#635D8B26] text-opacity-25 text-2xl">
                  06
                </h1>
              </div>
              <div className="col-span-6">
                <form className="text-2xl grid">
                  <label className="paragraph">
                    When would you like to start?
                  </label>
                  <input type="text" placeholder="Select Date..." />
                </form>
              </div>
              <hr className="w-[57vw] border-0 h-[2px] bg-[#635D8B26] bg-opacity-15 mt-5" />
            </div>
          </div>

          <div className="container-grid grid grid-cols-12 mt-5">
            <div className="sm:col-span-5"></div>
            <div className="sm:col-span-7 grid grid-cols-7">
              <div className="col-span-1">
                <h1 className="design-class text-[#635D8B26] text-opacity-25 text-2xl">
                  07
                </h1>
              </div>
              <div className="col-span-6">
                <div className="paragraph flex gap-5">
                  <h1 className="text-2xl">Do you have a deadline?</h1>
                  <div className="flex-1">
                    <div className="flex mt-10 gap-3 -translate-x-63.5">
                      <input type="radio" />
                      <h1 className="text-[#635D8B26] text-opacity-25 hover:text-black">
                        Yes
                      </h1>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex mt-10 gap-3 -translate-x-125.5">
                      <input type="radio" />
                      <h1 className="text-[#635D8B26] text-opacity-25 hover:text-black">
                        No, I’m in no rush
                      </h1>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex mt-10 gap-3 -translate-x-120.5">
                      <input type="radio" />
                      <h1 className="text-[#635D8B26] text-opacity-25 hover:text-black">
                        No deadline, but asap please
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="w-[57vw] border-0 h-[2px] bg-[#635D8B26] bg-opacity-15 mt-5" />
            </div>
          </div>

          <div className="container-grid grid grid-cols-12 mt-10 mb-40">
            <div className="sm:col-span-5"></div>
            <div className="sm:col-span-7 grid grid-cols-7">
              <div className="col-span-1">
                <div className="flex gap-5 bg-[linear-gradient(316.95deg,_#8E3CF7_5.33%,_#F0F2F4_124.21%)] h-15 w-40 rounded-full">
                  <button className="paragraph text-2xl flex justify-center items-center ml-9 gap-5 text-white">
                    Submit{" "}
                    <span>
                      <img
                        className="filter brightness-0 invert"
                        src={SVG}
                        alt="Icon"
                      />
                    </span>
                  </button>
                </div>
              </div>
              <div className="col-span-6"></div>
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

export default Contactus;
