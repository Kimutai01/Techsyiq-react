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
                  Frontend
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
            <li className="p-4">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul
            className="hidden sm:flex ml-36"
            style={{ color: `${textColor}` }}
          >
            <li className="p-4">
              <Link className="bg-[#D4F6FF4D] rounded-3xl py-2 px-8" to="/">
                Login
              </Link>
            </li>
            <li className="p-4">
              <Link to="/about" className="bg-[#3778B8] rounded-3xl py-2 px-4">
                Apply Now
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Button */}
        <div className="block sm:hidden items-end z-10">
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
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 p-4"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 p-4"
          }
        >
          <ul>
            <li
              onClick={toggleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={toggleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link to="/about">About</Link>
            </li>

            <li
              onClick={toggleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
