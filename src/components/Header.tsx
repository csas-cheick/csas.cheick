import { FC, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

// Composant drapeau avec SVG inline pour éviter les requêtes CDN externes
const FlagIcon: FC<{ countryCode: string; className?: string }> = ({ countryCode, className = "" }) => {
  if (countryCode === 'FR') {
    return (
      <svg className={`w-5 h-5 rounded-sm ${className}`} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
        <rect width="213.3" height="480" fill="#002654"/>
        <rect x="213.3" width="213.4" height="480" fill="#fff"/>
        <rect x="426.7" width="213.3" height="480" fill="#ce1126"/>
      </svg>
    );
  }
  // GB flag
  return (
    <svg className={`w-5 h-5 rounded-sm ${className}`} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <rect width="640" height="480" fill="#012169"/>
      <path d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 302 81 480H0v-60l239-178L0 64V0h75z" fill="#fff"/>
      <path d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z" fill="#C8102E"/>
      <path d="M241 0v480h160V0H241zM0 160v160h640V160H0z" fill="#fff"/>
      <path d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" fill="#C8102E"/>
    </svg>
  );
};
import { 
  HiHome, 
  HiCode, 
  HiFolder, 
  HiBadgeCheck, 
  HiDocumentText, 
  HiMail,
  HiMenuAlt3,
  HiX,
  HiUser
} from "react-icons/hi";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Calculer la progression du scroll
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t.nav.home, path: "/", icon: HiHome },
    { name: t.nav.about, path: "/about", icon: HiUser },
    { name: t.nav.skills, path: "/competences", icon: HiCode },
    { name: t.nav.projects, path: "/projets", icon: HiFolder },
    { name: t.nav.certifications, path: "/certifications", icon: HiBadgeCheck },
    { name: t.nav.resume, path: "/resume", icon: HiDocumentText },
    { name: t.nav.contact, path: "/contact", icon: HiMail },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl shadow-lg shadow-indigo-500/5 dark:shadow-indigo-500/10 border-b border-gray-200/50 dark:border-gray-700/50" 
            : "bg-transparent"
        }`}
      >
        {/* Barre de progression du scroll */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-150" 
          style={{ width: `${scrollProgress}%` }} 
        />

        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo / Brand */}
            <Link to="/" className="group relative flex items-center gap-3">
              {/* Logo Icon */}
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow duration-300">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
              </div>
              
              {/* Logo Text */}
              <div className="hidden sm:block">
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                  csas_cheick
                </span>
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              {/* Nav Pills Container */}
              <div className="flex items-center bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-1.5 shadow-inner">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                        active 
                          ? "text-white" 
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                      }`}
                    >
                      {active && (
                        <motion.div
                          layoutId="activeNavBg"
                          className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg shadow-indigo-500/25"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <Icon className={`w-4 h-4 relative z-10 ${active ? "text-white" : ""}`} />
                      <span className="relative z-10">{link.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="relative p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-yellow-400 transition-colors overflow-hidden group"
                aria-label="Toggle theme"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="relative z-10"
                  >
                    {theme === 'light' ? <FaMoon className="w-5 h-5" /> : <FaSun className="w-5 h-5" />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              {/* Language Switcher */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleLanguage}
                className="relative flex items-center gap-2 px-3 py-2.5 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 hover:from-indigo-100 hover:to-purple-100 dark:hover:from-indigo-900/50 dark:hover:to-purple-900/50 rounded-xl transition-all overflow-hidden group"
                aria-label="Change language"
              >
                <FlagIcon countryCode={language === 'fr' ? 'FR' : 'GB'} />
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 hidden sm:block">
                  {language === 'fr' ? 'FR' : 'EN'}
                </span>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMenuOpen ? 'close' : 'open'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {isMenuOpen ? <HiX className="w-5 h-5" /> : <HiMenuAlt3 className="w-5 h-5" />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Menu
                  </span>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  >
                    <HiX className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Mobile Nav Links */}
                <div className="flex-1 overflow-y-auto py-4 px-3">
                  <div className="space-y-1">
                    {navLinks.map((link, index) => {
                      const Icon = link.icon;
                      const active = isActive(link.path);
                      return (
                        <motion.div
                          key={link.path}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                              active 
                                ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-indigo-500/25" 
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium">{link.name}</span>
                            {active && (
                              <div className="ml-auto w-2 h-2 bg-white rounded-full" />
                            )}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
                  {/* Theme & Language Row */}
                  <div className="flex gap-3">
                    <button
                      onClick={toggleTheme}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-colors"
                    >
                      {theme === 'light' ? <FaMoon className="w-5 h-5" /> : <FaSun className="w-5 h-5 text-yellow-400" />}
                      <span className="text-sm font-medium">
                        {theme === 'light' ? 'Sombre' : 'Clair'}
                      </span>
                    </button>
                    <button
                      onClick={toggleLanguage}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl transition-colors"
                    >
                      <FlagIcon countryCode={language === 'fr' ? 'FR' : 'GB'} />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {language === 'fr' ? 'Français' : 'English'}
                      </span>
                    </button>
                  </div>
                  
                  {/* Credits */}
                  <div className="text-center text-xs text-gray-500 dark:text-gray-500">
                    © 2024 csas_cheick
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
