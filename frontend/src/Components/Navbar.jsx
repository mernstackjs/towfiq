import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import Button from "../Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const navLink = [
  {
    name: "Läxhjalp",
    path: "läxhjalp",
  },
  {
    name: "Välja Amne",
    path: "Välja-Amne",
  },
  {
    name: "Schema",
    path: "schema",
  },
];
const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full">
      <div className="md:flex items-center justify-between text-white bg-black py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
        text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <Link to="/">
              <img className="w-[70px]" src={logo} alt="" />
            </Link>
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-2 cursor-pointer md:hidden"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? " z-20 bg-gray-700 text-white text-2xl " : "top-[-490px] "
          }`}
        >
          {navLink.map((link) => (
            <Link
              className="md:ml-8 text-white text-xl md:my-0 my-7 flex flex-col"
              to={link.path}
            >
              {link.name}
            </Link>
          ))}
          <Button className="text-2xl">
            <Link to="Kontakt">Kontakt</Link>
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
