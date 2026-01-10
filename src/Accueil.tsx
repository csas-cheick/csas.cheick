import { FC } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaArrowRight } from "react-icons/fa";
import illustrationHome from "./assets/illustration_home.svg";
import illustrationPerso from "./assets/illustration_perso.svg";
import { useLanguage } from "./context/LanguageContext";
import SEO from "./components/SEO";
import TypeWriter from "./components/TypeWriter";
import AvailabilityBadge from "./components/AvailabilityBadge";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const Accueil: FC = () => {
  const { t, language } = useLanguage();
  
  const typingWords = language === 'fr' 
    ? ["Développeur Full Stack", "Passionné de Tech", "Créateur de Solutions", "Amateur d'IA"]
    : ["Full Stack Developer", "Tech Enthusiast", "Solution Creator", "AI Enthusiast"];
  
  return (
    <>
      <SEO />
      <div className="min-h-screen">
        {/* Section Hero */}
        <section className="min-h-screen flex items-center justify-center py-12 px-4 relative overflow-hidden">
          {/* Gradient Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="container mx-auto max-w-6xl relative z-10"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Section gauche - Texte */}
              <div>
                <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">
                    👋 {language === 'fr' ? "Bienvenue sur mon portfolio" : "Welcome to my portfolio"}
                  </span>
                  <AvailabilityBadge />
                </motion.div>
                
                <motion.h1 
                  variants={itemVariants}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4"
                >
                  {t.home.greeting}
                </motion.h1>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t.home.intro} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 font-bold">{t.home.name}</span>
                </motion.p>
                
                <motion.div 
                  variants={itemVariants}
                  className="text-xl md:text-2xl text-indigo-600 dark:text-indigo-400 font-semibold mb-6 h-10"
                >
                  <TypeWriter words={typingWords} />
                </motion.div>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
                >
                  {t.home.description}
                </motion.p>
                
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    to="/projets"
                    className="group inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    {t.home.viewProjects}
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/resume"
                    className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 border-2 border-indigo-600 dark:border-indigo-400 hover:scale-105"
                  >
                    {t.home.myResume}
                  </Link>
                </motion.div>
              </div>

              {/* Section droite - Image */}
              <motion.div 
                variants={itemVariants}
                className="flex justify-center mt-3 md:mt-0"
              >
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-20 scale-110" />
                  <img 
                    src={illustrationHome} 
                    alt="Illustration développeur" 
                    className="w-full max-w-[200px] sm:max-w-[280px] md:max-w-sm h-auto relative z-10"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Section À propos */}
        <section className="py-20 px-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container mx-auto max-w-6xl"
          >
            <div className="flex gap-6 md:gap-10 items-center">
              {/* Section gauche - Texte */}
              <div className="flex-1">
                <motion.h2 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 dark:text-white mb-8"
                >
                  {t.home.aboutTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">{t.home.aboutTitleHighlight}</span>
                </motion.h2>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-5 text-gray-700 dark:text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed"
                >
                  <p>{t.home.aboutText1}</p>
                  <p>{t.home.aboutText2}</p>
                </motion.div>
              </div>

              {/* Section droite - Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="justify-center flex-shrink-0 hidden md:flex self-start mt-8"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative w-64 h-64 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20" />
                  <img 
                    src={illustrationPerso} 
                    alt="Illustration personnelle" 
                    className="w-full h-full object-contain relative z-10"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Section Réseaux Sociaux */}
        <section className="py-12 md:py-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container mx-auto max-w-4xl text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4">
              {t.home.socialTitle}
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 md:mb-12 px-2">
              {t.home.socialSubtitle}
            </p>
            
            <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
              {[
                { href: "https://www.linkedin.com/in/csas-cheick", icon: FaLinkedin, color: "hover:bg-blue-600", iconColor: "text-blue-600" },
                { href: "https://github.com/csas-cheick", icon: FaGithub, color: "hover:bg-gray-800", iconColor: "text-gray-800 dark:text-white" },
                { href: "https://twitter.com/csas_cheick", icon: FaTwitter, color: "hover:bg-sky-500", iconColor: "text-sky-500" },
                { href: "https://www.instagram.com/csas_cheick", icon: FaInstagram, color: "hover:bg-pink-600", iconColor: "text-pink-600" },
              ].map((social, index) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${social.color} hover:text-white`}
                >
                  <social.icon className={`text-xl sm:text-2xl md:text-3xl ${social.iconColor} group-hover:text-white transition-colors`} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Accueil;
