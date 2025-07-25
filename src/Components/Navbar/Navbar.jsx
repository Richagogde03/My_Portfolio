import React, { useEffect } from "react";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scrol function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  const section = document.getElementById(sectionId);
  if(section) {
    section.scrollIntoView({behavior: "smooth"});
  }
};

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "project", label: "Project" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[18vw] ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* LOGO */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Richa</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Gogde</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Dekstop Menu*/}
        <ul className="hidden md:flex space-x-7 text-gray-300 ">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* social media Icone */}
        <div className="hidden md:flex lg:flex space-x-3">
          <div className="hidden md:flex space-x-4">
            <a
              href="https://github.com/Richagogde03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaGithub size={24} />
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a
              href="https://www.linkedin.com/in/richa-gogde-800464219/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Mobile Menu icons */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            ></FiX>
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            ></FiMenu>
          )}
        </div>
      </div>

      {/* Mobile Items for mobile screen */}
      {isOpen && (
        <div
          className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter 
          backdrop-blur-lg z-50 rounded-lg shadow-lg"
        >
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white
                ${activeSection === item.id ? "text-[#8245ec]" : ""} `}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
                <a
                  href="https://github.com/Richagogde03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/richa-gogde-800464219/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaLinkedin size={24} />
                </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
