import { FC, ReactElement, useState } from "react";
import { motion } from "framer-motion";
import { FaLinux, FaShieldAlt, FaDatabase, FaCode, FaExternalLinkAlt, FaChevronDown, FaCheckCircle, FaCalendarAlt, FaBuilding } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import illustrationSucces from "../assets/illustration_succes.svg";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
};

interface Certification {
  date: string;
  title: string;
  subtitle: string;
  organization: string;
  verificationUrl: string;
  icon: ReactElement;
  gradientFrom: string;
  gradientTo: string;
  description: string;
  skills: string[];
}

const Certifications: FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { t, language } = useLanguage();

  const scrollToCertifications = () => {
    const element = document.getElementById('certifications-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getCertificationsData = (): Certification[] => {
    if (language === 'en') {
      return [
        {
          date: "July 2025",
          title: "LPIC-Linux Essentials: Linux",
          subtitle: "Linux Essentials",
          organization: "Linux Professional Institute",
          verificationUrl: "https://lpi.org/verify/LPI000653714/7k8c58pyyj",
          icon: <FaLinux />,
          gradientFrom: "from-yellow-400",
          gradientTo: "to-orange-500",
          description: "This certification validates fundamental Linux skills, covering command line, file management, permissions and basic system administration.",
          skills: ["Command Line", "File Systems", "Permissions", "User Management", "Shell Scripting"]
        },
        {
          date: "April 2025",
          title: "Cybersecurity",
          subtitle: "Introduction to Cybersecurity",
          organization: "Cisco Networking Academy",
          verificationUrl: "https://www.credly.com/badges/0f9e39b0-fdeb-4603-b8a7-64850e04c42a/public_url",
          icon: <FaShieldAlt />,
          gradientFrom: "from-blue-400",
          gradientTo: "to-cyan-500",
          description: "Comprehensive training on cybersecurity principles, common threats, data protection techniques and IT security best practices.",
          skills: ["Network Security", "Threat Analysis", "Data Protection", "Security Practices"]
        },
        {
          date: "May 2025",
          title: "Data Science",
          subtitle: "Introduction to Data Science",
          organization: "Cisco Networking Academy",
          verificationUrl: "https://www.credly.com/badges/252c099a-810f-4354-b852-1e96de3839b4/public_url",
          icon: <FaDatabase />,
          gradientFrom: "from-emerald-400",
          gradientTo: "to-teal-500",
          description: "Learning fundamental data science concepts, including data analysis, visualization, statistics and introduction to machine learning.",
          skills: ["Data Analysis", "Visualization", "Statistics", "Machine Learning"]
        },
        {
          date: "January 2025",
          title: "C# Language",
          subtitle: "Foundational C#",
          organization: "FreeCodeCamp & Microsoft",
          verificationUrl: "https://www.freecodecamp.org/certification/csas-cheick/foundational-c-sharp-with-microsoft",
          icon: <FaCode />,
          gradientFrom: "from-purple-400",
          gradientTo: "to-pink-500",
          description: "Mastery of C# language fundamentals, including syntax, data structures, object-oriented programming and .NET application development.",
          skills: ["C# Syntax", "OOP", "Data Structures", ".NET Development"]
        },
      ];
    }
    // French version
    return [
      {
        date: "Juillet 2025",
        title: "LPIC-1 : Linux",
        subtitle: "Linux Essentials",
        organization: "Linux Professional Institute",
        verificationUrl: "https://lpi.org/verify/LPI000653714/7k8c58pyyj",
        icon: <FaLinux />,
        gradientFrom: "from-yellow-400",
        gradientTo: "to-orange-500",
        description: "Cette certification valide les compétences fondamentales en Linux, couvrant la ligne de commande, la gestion des fichiers, les permissions et l'administration système de base.",
        skills: ["Ligne de commande", "Systèmes de fichiers", "Permissions", "Scripts Shell"]
      },
      {
        date: "Avril 2025",
        title: "Cybersécurité",
        subtitle: "Introduction à la Cybersécurité",
        organization: "Cisco Networking Academy",
        verificationUrl: "https://www.credly.com/badges/252c099a-810f-4354-b852-1e96de3839b4/public_url",
        icon: <FaShieldAlt />,
        gradientFrom: "from-blue-400",
        gradientTo: "to-cyan-500",
        description: "Formation complète sur les principes de la cybersécurité, les menaces courantes, les techniques de protection des données et les meilleures pratiques de sécurité informatique.",
        skills: ["Sécurité réseau", "Analyse des menaces", "Protection des données", "Bonnes pratiques"]
      },
      {
        date: "Mai 2025",
        title: "Science des données",
        subtitle: "Introduction à la science des données",
        organization: "Cisco Networking Academy",
        verificationUrl: "https://www.credly.com/badges/0f9e39b0-fdeb-4603-b8a7-64850e04c42a/public_url",
        icon: <FaDatabase />,
        gradientFrom: "from-emerald-400",
        gradientTo: "to-teal-500",
        description: "Apprentissage des concepts fondamentaux de la science des données, incluant l'analyse de données, la visualisation, les statistiques et l'introduction au machine learning.",
        skills: ["Analyse de données", "Visualisation", "Statistiques", "Machine Learning"]
      },
      {
        date: "Janvier 2025",
        title: "C# Langage",
        subtitle: "Foundational C#",
        organization: "FreeCodeCamp & Microsoft",
        verificationUrl: "https://www.freecodecamp.org/certification/csas-cheick/foundational-c-sharp-with-microsoft",
        icon: <FaCode />,
        gradientFrom: "from-purple-400",
        gradientTo: "to-pink-500",
        description: "Maîtrise des fondamentaux du langage C#, incluant la syntaxe, les structures de données, la programmation orientée objet et le développement d'applications .NET.",
        skills: ["Syntaxe C#", "POO", "Structures de données", "Développement .NET"]
      },
    ];
  };

  const certifications = getCertificationsData();

  return (
    <>
      <SEO 
        title={language === 'fr' ? "Certifications" : "Certifications"}
        description={language === 'fr' 
          ? "Mes certifications professionnelles - LPIC-1 Linux, Cybersécurité Cisco, Data Science et C# Microsoft."
          : "My professional certifications - LPIC-1 Linux, Cisco Cybersecurity, Data Science and Microsoft C#."}
      />
      <div className="min-h-screen transition-colors duration-300">
        {/* Section Hero */}
        <section className="flex items-center justify-center px-4 py-6 md:py-10 relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-4 md:gap-8 items-center"
            >
              {/* Section gauche - Texte */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 dark:text-white mb-2 md:mb-3">
                  {t.certifications.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">{t.certifications.titleHighlight}</span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-2 md:mb-3">
                  {t.certifications.subtitle}
                </p>
                <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-3 md:mb-4">
                  {language === 'fr' 
                    ? "Chaque certification représente un engagement envers l'excellence et l'apprentissage continu."
                    : "Each certification represents a commitment to excellence and continuous learning."}
                </p>
                
                {/* Scroll indicator */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={scrollToCertifications}
                  className="animate-bounce mt-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors cursor-pointer"
                  aria-label={language === 'fr' ? "Défiler vers les certifications" : "Scroll to certifications"}
                >
                  <FaChevronDown className="text-2xl md:text-3xl" />
                </motion.button>
              </motion.div>

              {/* Section droite - Image */}
              <motion.div 
                className="flex justify-center mt-3 md:mt-0"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative">
                  <img 
                    src={illustrationSucces} 
                    alt="Illustration succès" 
                    className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-xs h-auto animate-float"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section Certifications */}
        <div id="certifications-section" className="bg-gray-50 dark:bg-gray-900 py-12 md:py-16 px-4 transition-colors duration-300">
          <div className="container mx-auto max-w-6xl">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
                <HiSparkles className="text-lg" />
                <span>{language === 'fr' ? `${certifications.length} Certifications obtenues` : `${certifications.length} Certifications earned`}</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-3">
                {t.certifications.sectionTitle}
              </h2>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {language === 'fr' 
                  ? "Des formations reconnues par l'industrie pour valider mes compétences techniques"
                  : "Industry-recognized training to validate my technical skills"}
              </p>
            </motion.div>

            {/* Certifications Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Card */}
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
                    {/* Top Gradient Bar */}
                    <div className={`h-1.5 bg-gradient-to-r ${cert.gradientFrom} ${cert.gradientTo}`} />
                    
                    <div className="p-4 sm:p-6">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-4">
                        {/* Icon + Title row on mobile */}
                        <div className="flex items-center gap-3 sm:gap-4">
                          {/* Icon */}
                          <motion.div 
                            className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${cert.gradientFrom} ${cert.gradientTo} flex items-center justify-center text-white text-xl sm:text-2xl shadow-lg`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {cert.icon}
                          </motion.div>
                          
                          {/* Title & Org */}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-bold text-gray-800 dark:text-white mb-0.5 sm:mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                              {cert.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                              {cert.subtitle}
                            </p>
                          </div>
                        </div>
                        
                        {/* Date Badge - Full width on mobile */}
                        <div className={`flex-shrink-0 self-start sm:self-auto px-3 py-1.5 rounded-lg bg-gradient-to-r ${cert.gradientFrom} ${cert.gradientTo} text-white text-xs font-semibold flex items-center gap-1.5 w-fit`}>
                          <FaCalendarAlt className="text-xs" />
                          {cert.date}
                        </div>
                      </div>
                      
                      {/* Organization */}
                      <div className="flex flex-wrap items-center gap-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-4">
                        <div className="flex items-center gap-2">
                          <FaBuilding className="text-xs flex-shrink-0" />
                          <span className="truncate">{cert.organization}</span>
                        </div>
                        <div className="flex items-center gap-1 ml-auto">
                          <FaCheckCircle className="text-green-500 flex-shrink-0" />
                          <span className="text-green-600 dark:text-green-400 text-xs font-medium">
                            {language === 'fr' ? "Vérifié" : "Verified"}
                          </span>
                        </div>
                      </div>
                      
                      {/* Description - Visible on hover */}
                      <motion.div
                        initial={false}
                        animate={{ 
                          height: hoveredCard === index ? 'auto' : 0,
                          opacity: hoveredCard === index ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                          {cert.description}
                        </p>
                      </motion.div>
                      
                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      {/* Verify Button */}
                      <motion.a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r ${cert.gradientFrom} ${cert.gradientTo} text-white text-xs sm:text-sm font-semibold hover:shadow-lg transition-all duration-300 w-full sm:w-auto`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaCheckCircle />
                        <span className="truncate">{language === 'fr' ? "Vérifier le certificat" : "Verify certificate"}</span>
                        <FaExternalLinkAlt className="text-xs flex-shrink-0" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 text-center"
            >
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">
                <div className="flex -space-x-3">
                  {certifications.map((cert, i) => (
                    <motion.div 
                      key={i} 
                      className={`w-10 h-10 rounded-full bg-gradient-to-r ${cert.gradientFrom} ${cert.gradientTo} flex items-center justify-center text-white text-sm border-2 border-white dark:border-gray-800`}
                      whileHover={{ scale: 1.2, zIndex: 10 }}
                    >
                      {cert.icon}
                    </motion.div>
                  ))}
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm font-semibold text-gray-800 dark:text-white">
                    {language === 'fr' ? "Apprentissage continu" : "Continuous Learning"}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {language === 'fr' ? "Nouvelles certifications en préparation..." : "New certifications in progress..."}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certifications;