import { FC, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaTimes, FaComments } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const FloatingCTA: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();

  // Ne pas afficher sur la page contact
  const hideOnContact = location.pathname === "/contact";

  // Fermer le menu quand on change de page
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  if (hideOnContact) return null;

  const contactOptions = [
    {
      icon: <FaEnvelope className="text-lg" />,
      label: "Email",
      href: "mailto:csas.cheick@gmail.com",
      color: "bg-red-500 hover:bg-red-600",
      external: true
    },
    {
      icon: <FaWhatsapp className="text-lg" />,
      label: "WhatsApp",
      href: "https://wa.me/21653414178",
      color: "bg-green-500 hover:bg-green-600",
      external: true
    },
    {
      icon: <FaLinkedin className="text-lg" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/csas-cheick",
      color: "bg-blue-600 hover:bg-blue-700",
      external: true
    },
  ];

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-16 left-0 mb-2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 min-w-[200px]">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                {language === 'fr' ? "Me contacter via" : "Contact me via"}
              </p>
              <div className="space-y-2">
                {contactOptions.map((option, index) => (
                  <motion.a
                    key={option.label}
                    href={option.href}
                    target={option.external ? "_blank" : undefined}
                    rel={option.external ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-white transition-all duration-200 ${option.color}`}
                  >
                    {option.icon}
                    <span className="font-medium">{option.label}</span>
                  </motion.a>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
                >
                  {language === 'fr' ? "Formulaire complet" : "Full form"}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button - Always visible */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
          isOpen 
            ? "bg-gray-700 dark:bg-gray-600" 
            : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
        }`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes className="text-white text-xl" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaComments className="text-white text-xl" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulse animation when not open */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-indigo-600 animate-ping opacity-25" />
        )}
      </motion.button>
    </div>
  );
};

export default FloatingCTA;
