import { FC } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const socialLinks = [
    { href: "https://github.com/csas-cheick", icon: FaGithub, label: "GitHub" },
    { href: "https://twitter.com/csas_cheick", icon: FaTwitter, label: "Twitter" },
    { href: "https://www.linkedin.com/in/csas-cheick", icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://www.instagram.com/csas_cheick", icon: FaInstagram, label: "Instagram" },
  ];

  const quickLinks = [
    { name: t.footer.home, path: "/" },
    { name: t.footer.about, path: "/about" },
    { name: t.footer.projects, path: "/projets" },
    { name: t.footer.skills, path: "/competences" },
    { name: t.footer.contact, path: "/contact" },
  ];
  
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      
      <div className="relative container mx-auto max-w-6xl px-4 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center sm:text-left">
            <Link to="/" className="inline-block mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                csas_cheick
              </span>
            </Link>
            <p className="text-gray-400 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
              {t.footer.description}
            </p>
            <a 
              href="mailto:csas.cheick@gmail.com"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm sm:text-base"
            >
              <FaEnvelope />
              csas.cheick@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2 sm:block sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              {t.footer.followMe}
            </h3>
            <div className="flex justify-center sm:justify-start gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  whileHover={{ y: -3 }}
                  className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-indigo-600 rounded-lg transition-colors duration-300"
                >
                  <social.icon className="text-base sm:text-lg" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center gap-3 sm:gap-4 md:flex-row md:justify-between text-xs sm:text-sm text-gray-400">
            <p className="flex items-center gap-1 flex-wrap justify-center">
              {t.footer.designed}
              <span className="text-white font-medium">csas_cheick</span>
              <FaHeart className="text-red-500 mx-1 animate-pulse" />
            </p>
            <p>© {currentYear} CSAS. {t.footer.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
