import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#000");

  const toggleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000");
      } else {
        setColor("transparent");
        setTextColor("#000");
      }
    };
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div
      style={{ backgroundColor: `#fff` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300 shadow-md"
    >
      <div className="max-w-[1240] m-auto flex justify-between md:grid md:grid-cols-3 items-center py-4 md:px-7">
        <div className="col-span-2 flex">
          <Link to="/" className="mr-12 ml-8">
            <img src={logo} alt="logo" />
          </Link>
          <ul className="hidden sm:flex" style={{ color: `${textColor}` }}>
            <li className="relative p-4">
              <Link to="/courses">Courses</Link>
              <div className="hidden absolute bg-white mt-2 py-2 rounded-lg shadow-md">
                <a
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  href="#"
                >
                  <Link to="/techie-mode">Techiemode</Link>
                </a>
                <a
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  href="#"
                >
                  Backend
                </a>
              </div>
            </li>
            <li className="p-4">
              <Link to="/about">About Us</Link>
            </li>
            <li className="p-4">
              <Link to="/about">Blog</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul
            className="hidden sm:flex ml-32"
            style={{ color: `${textColor}` }}
          >
            <li className="p-4">
              <Link className="bg-[#D4F6FF4D] rounded-3xl py-2 px-6" to="/">
                Login
              </Link>
            </li>
            <li className="p-4">
              <Link
                to="/about"
                className="bg-[#3778B8] text-white rounded-3xl py-2 px-4"
              >
                Apply Now
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Button */}
        <div className="block sm:hidden items-end z-10 mr-8">
          {nav ? (
            <AiOutlineClose
              size={20}
              onClick={toggleNav}
              style={{ color: `${textColor}` }}
            />
          ) : (
            <AiOutlineMenu
              size={20}
              onClick={toggleNav}
              style={{ color: `${textColor}` }}
            />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "fixed w-[100%] sm:w-[60%] top-20 md-[45%] h-[45%] bg-blur-white  ease-in duration-500"
              : "fixed left-[-100%] h-[45%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="text-[hsla(2, 0%, 100%, 0.7)]">
            <ul className="py-4 flex flex-col">
              <Link
                to="/"
                className=" w-[100%]"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
                onClick={toggleNav}
              >
                <li className="py-4 p-10 text-1xl">Home</li>
              </Link>
              <Link
                to="#about"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
                onClick={toggleNav}
              >
                <li className="py-4 p-10 text-sm">Courses</li>
              </Link>
              <Link
                to="#skills"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
                onClick={toggleNav}
              >
                <li className="py-4 p-10 text-sm">About us</li>
              </Link>
              <Link
                to="#projects"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
                onClick={toggleNav}
              >
                <li className="py-4 p-10 text-sm">Contacts</li>
              </Link>
              <Link
                to="#mentorship"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
                onClick={toggleNav}
              >
                <li className="py-4 p-10 text-sm">Login</li>
              </Link>
              <Link
                to="#contact"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
                onClick={toggleNav}
              >
                <li className="py-4 p-10 text-sm">Apply now</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
