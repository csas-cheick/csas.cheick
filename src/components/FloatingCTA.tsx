import { FC, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaTimes, FaComments, FaArrowRight } from "react-icons/fa";
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
      icon: <FaEnvelope className="text-base" />,
      label: "Email",
      description: language === 'fr' ? "Réponse sous 24h" : "Reply within 24h",
      href: "mailto:csas.cheick@gmail.com",
      bgColor: "bg-gradient-to-r from-indigo-500 to-indigo-600",
      hoverColor: "hover:from-indigo-600 hover:to-indigo-700",
      iconBg: "bg-indigo-400/30",
      external: true
    },
    {
      icon: <FaWhatsapp className="text-base" />,
      label: "WhatsApp",
      description: language === 'fr' ? "Réponse rapide" : "Quick response",
      href: "https://wa.me/21653414178",
      bgColor: "bg-gradient-to-r from-emerald-500 to-emerald-600",
      hoverColor: "hover:from-emerald-600 hover:to-emerald-700",
      iconBg: "bg-emerald-400/30",
      external: true
    },
    {
      icon: <FaLinkedin className="text-base" />,
      label: "LinkedIn",
      description: language === 'fr' ? "Réseau pro" : "Pro network",
      href: "https://www.linkedin.com/in/cheick-chaibou-cheick-salihou-ahmed-8b1aa3316",
      bgColor: "bg-gradient-to-r from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
      iconBg: "bg-blue-400/30",
      external: true
    },
  ];

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-16 left-0 mb-3"
          >
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-3 sm:p-5">
              {/* Header */}
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse" />
                <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {language === 'fr' ? "Me contacter" : "Contact me"}
                </p>
              </div>
              
              {/* Contact Options - Horizontal Layout */}
              <div className="flex gap-2 sm:gap-3">
                {contactOptions.map((option, index) => (
                  <motion.a
                    key={option.label}
                    href={option.href}
                    target={option.external ? "_blank" : undefined}
                    rel={option.external ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, type: "spring", stiffness: 300 }}
                    className={`group flex flex-col items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-white transition-all duration-300 ${option.bgColor} ${option.hoverColor} shadow-md hover:shadow-lg hover:scale-105 active:scale-95`}
                  >
                    <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full ${option.iconBg}`}>
                      {option.icon}
                    </div>
                    <span className="font-semibold text-[10px] sm:text-xs whitespace-nowrap">{option.label}</span>
                  </motion.a>
                ))}
              </div>
              
              {/* Divider */}
              <div className="relative my-3 sm:my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200 dark:border-gray-700" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 sm:px-3 bg-white dark:bg-gray-800 text-[10px] sm:text-xs text-gray-400 dark:text-gray-500">
                    {language === 'fr' ? "ou" : "or"}
                  </span>
                </div>
              </div>
              
              {/* Full Form Button */}
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-2 w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white rounded-xl font-semibold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundSize: '200% 100%' }}
              >
                <FaComments className="text-xs sm:text-sm" />
                <span className="whitespace-nowrap">{language === 'fr' ? "Formulaire complet" : "Full form"}</span>
                <FaArrowRight className="text-[10px] sm:text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </Link>
            </div>
            
            {/* Arrow pointer */}
            <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white dark:bg-gray-800 rotate-45 border-r border-b border-gray-200/50 dark:border-gray-700/50" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button - Always visible */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all duration-300 ${
          isOpen 
            ? "bg-gray-800 dark:bg-gray-700 shadow-gray-900/30" 
            : "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500 shadow-indigo-500/40"
        }`}
        style={{ backgroundSize: '200% 100%' }}
        aria-label={language === 'fr' ? "Ouvrir le menu contact" : "Open contact menu"}
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
          <>
            <span className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-20" />
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-30 blur-sm animate-pulse" />
          </>
        )}
      </motion.button>
      
      {/* Notification badge */}
      {!isOpen && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full border-2 border-white dark:border-gray-900 shadow-lg"
        />
      )}
    </div>
  );
};

export default FloatingCTA;
