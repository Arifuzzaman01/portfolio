import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center fap-5 footer-horizontal footer-center bg-gray-900 text-white  p-5">
      <nav>
        <div className="grid grid-flow-col py-5">
          <div className="flex gap-3">
            <a className="text-gray-300" href="https://github.com/arifuzzaman01" target="blanc">
              <FaGithub size={30} />
            </a>
            <a className="text-gray-300"
              href="https://www.linkedin.com/in/arifuzzaman01/"
              target="blanc"
            >
              {" "}
              <FaLinkedin size={30} />
            </a>
            <a className="text-gray-300"
              href="https://web.facebook.com/arifuzzaman.arif.98096721/?_rdc=2&_rdr#"
              target="blanc"
            >
              <FaFacebook size={30} />
            </a>
            <a className="text-gray-300"
              href="https://x.com/Arifuzzaman02"
              target="blanc"
            >
              <FaXTwitter size={30} />
            </a>
          </div>
        </div>
      </nav>
      <aside>
        <p className="text-gray-300 ">
          Copyright © {new Date().getFullYear()} - All right reserved by Arifuzzaman Rakib
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
