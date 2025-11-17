import { FC } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-4 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
          {/* Left - Designed by */}
          <div className="text-gray-400">
            <p>Designed and Developed by <span className="text-white font-medium">csas_cheick</span></p>
          </div>

          {/* Center - Copyright */}
          <div className="text-gray-400">
            <p>Copyright © {currentYear} CSAS</p>
          </div>

          {/* Right - Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/csas-cheick"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://twitter.com/csas_cheick"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaTwitter className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/csas-cheick"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="https://www.instagram.com/csas_cheick"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaInstagram className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
