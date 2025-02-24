/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../../../public/IMAGE/main-logo.png";
import Ellipse from "../../../public/IMAGE/Ellipse 1.png";
import img from "../../../public/IMAGE/about.png";
import Pulse from "../../../public/IMAGE/light.png";
import img1 from "../../../public/IMAGE/Story.png";
import Stats from "../Frontend/Stats";
import Footer from "../Frontend/Footer";
import { useNavigate } from "react-router-dom";

const navigation = [
  { name: "HOME", href: "/", current: false },
  { name: "ABOUT", href: "/about", current: true },
  { name: "SERVICES", href: "/services", current: false },
  { name: "CASE STUDIES", href: "/casestudies", current: false }
];

function About() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/contactus";
    navigate(path);
  };
  return (
    <div className="About-section">
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
            <hr className="w-[60%] mt-31 m-10" />
            <h1 className="paragraph flex mt-27 text-2xl">About</h1>
          </div>
          <div className="m-10">
            <h1 className="design-class text-8xl">
              Creative Minds for Impactful Communications
            </h1>
            <img className="mt-10" src={img} />
          </div>

          <div className="container-grid grid grid-cols-12">
            <div
              className="Pulse sm:col-span-6 flex bg-cover"
              style={{ backgroundImage: `url(${Pulse})` }}
            ></div>
            <div className="sm:col-span-6">
              <div className="flex justify-end text-3xl text-end w-[70%] ml-52">
                <p className="paragraph">
                  we believe in the magic of creativity and the power of
                  technology. We are a dynamic design agency and development
                  services company dedicated to transforming your ideas into
                  extraordinary digital experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="container-grid grid grid-cols-12">
            <div className="sm:col-span-6 flex">
              <div className="mt-25">
                <h1 className="design-class text-5xl ml-10">Our Story</h1>
                <p className="paragraph text-4xl ml-10 w-[100%] mt-5">
                  Every great idea starts with a pulse, a spark of creativity
                  that sets everything in motion. PulseCreativeCo was born from
                  the passion to blend art with technology, to create solutions
                  that are not only visually stunning but also technically
                  robust. Our journey began with a small team of dreamers,
                  designers, and developers who wanted to make a difference in
                  the digital world. Today, we are proud to be a trusted partner
                  for businesses seeking innovation and excellence.
                </p>
              </div>
            </div>
            <div className="sm:col-span-6 ml-40">
              <img src={img1} />
            </div>
          </div>
          <div className="h-[65vh]">
            <div
              className="h-65 w-[96%] ml-11 mt-10 flex"
              style={{ backgroundColor: "#ECE8F4" }}
            >
              <div className="m-10">
                <h1 className="design-class text-5xl">Our Vision</h1>
                <p className="paragraph text-4xl w-[95.5%] mt-4">
                  Our vision is to be a beacon of creativity and innovation,
                  inspiring businesses to reach new heights through cutting-edge
                  design and technology. We envision a world where every digital
                  interaction is seamless, engaging, and impactful.
                </p>
              </div>
            </div>
            <div
              className="h-70 w-[96%] ml-11 mt-1 flex"
              style={{ backgroundColor: "#ECE8F4" }}
            >
              <div className="m-10">
                <h1 className="design-class text-5xl">Our Mission</h1>
                <p className="paragraph text-4xl w-[95.5%] mt-4">
                  Our mission is to deliver exceptional design and development
                  services that exceed our clients' expectations. We are
                  committed to fostering long-term partnerships by providing
                  personalized, innovative solutions tailored to each client's
                  unique needs and goals. We strive to empower businesses with
                  the tools and strategies they need to thrive in an
                  ever-evolving digital landscape.
                </p>
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

export default About;
