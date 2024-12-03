//src/app.jsx

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assest/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-white py-8">
      <div
        className="container mx-auto grid grid-cols-1 
            md:grid-cols-5 gap-8 w-11/12"
      >
        <div className="flex flex-col ">
          <div className="flex items-center">
            <img src={logo} className="w-32 h-16" />
          </div>
          <div>
            <p>@ reemagowda</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm mb-4">Company</h3>
          <p className="text-gray-200 text-sm">About</p>
          <p className="text-gray-200 text-sm">FAQ</p>
        </div>
        <div>
          <h3 className="text-sm mb-4">Terms</h3>
          <p className="text-gray-200 text-sm">Data privacy</p>
          <p className="text-gray-200 text-sm">Terms</p>
          <p className="text-gray-200 text-sm">Accessibility</p>
        </div>

        <div>
          <h3 className="text-sm  mb-4">Realted</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline text-sm">
                Find buyer
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm">
                Feedback
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                className="text-white text-2xl 
                            hover:text-gray-300"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                className="text-white text-2xl
                            hover:text-gray-300"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="text-white text-2xl
                            hover:text-gray-300"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="text-white text-2xl
                            hover:text-gray-300"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
