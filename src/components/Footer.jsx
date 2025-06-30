import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-gradient-to-t from-green-300 text-base-content rounded p-10">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <div className="flex gap-3">
            <a className="text-[#98CD00]" href="https://github.com/arifuzzaman01" target="blanc">
              <FaGithub size={35} />
            </a>
            <a className="text-[#98CD00]"
              href="https://www.linkedin.com/in/arifuzzaman-rakib-32734a291/"
              target="blanc"
            >
              {" "}
              <FaLinkedin size={35} />
            </a>
            <a className="text-[#98CD00]"
              href="https://web.facebook.com/arifuzzaman.arif.98096721/?_rdc=2&_rdr#"
              target="blanc"
            >
              <FaFacebook size={35} />
            </a>
          </div>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Arifuzzaman Rakib
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
