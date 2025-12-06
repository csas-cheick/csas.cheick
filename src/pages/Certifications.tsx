import { FC, ReactElement, useState } from "react";
import { FaLinux, FaShieldAlt, FaDatabase, FaCode, FaExternalLinkAlt, FaChevronDown, FaSyncAlt } from "react-icons/fa";
import illustrationSucces from "../assets/illustration_succes.svg";
import { useLanguage } from "../context/LanguageContext";

interface Certification {
  date: string;
  title: string;
  subtitle: string;
  organization: string;
  verificationUrl: string;
  icon: ReactElement;
  color: string;
  description: string;
}

const Certifications: FC = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const { t, language } = useLanguage();

  const scrollToCertifications = () => {
    const element = document.getElementById('certifications-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  const getCertificationsData = (): Certification[] => {
    if (language === 'en') {
      return [
        {
          date: "July 2025",
          title: "LPIC-1: Linux",
          subtitle: "Linux Essentials",
          organization: "Linux Professional Institute",
          verificationUrl: "https://lpi.org/verify/LPI000653714/7k8c58pyyj",
          icon: <FaLinux />,
          color: "bg-yellow-500",
          description: "This certification validates fundamental Linux skills, covering command line, file management, permissions and basic system administration.",
        },
        {
          date: "April 2025",
          title: "Cybersecurity",
          subtitle: "Introduction to Cybersecurity",
          organization: "Cisco Networking Academy",
          verificationUrl: "https://www.credly.com/badges/252c099a-810f-4354-b852-1e96de3839b4/public_url",
          icon: <FaShieldAlt />,
          color: "bg-blue-500",
          description: "Comprehensive training on cybersecurity principles, common threats, data protection techniques and IT security best practices.",
        },
        {
          date: "May 2025",
          title: "Data Science",
          subtitle: "Introduction to Data Science",
          organization: "Cisco Networking Academy",
          verificationUrl: "https://www.credly.com/badges/0f9e39b0-fdeb-4603-b8a7-64850e04c42a/public_url",
          icon: <FaDatabase />,
          color: "bg-green-500",
          description: "Learning fundamental data science concepts, including data analysis, visualization, statistics and introduction to machine learning.",
        },
        {
          date: "January 2025",
          title: "C# Language",
          subtitle: "Foundational C#",
          organization: "FreeCodeCamp & Microsoft",
          verificationUrl: "https://www.freecodecamp.org/certification/csas-cheick/foundational-c-sharp-with-microsoft",
          icon: <FaCode />,
          color: "bg-purple-500",
          description: "Mastery of C# language fundamentals, including syntax, data structures, object-oriented programming and .NET application development.",
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
        color: "bg-yellow-500",
        description: "Cette certification valide les compétences fondamentales en Linux, couvrant la ligne de commande, la gestion des fichiers, les permissions et l'administration système de base.",
      },
      {
        date: "Avril 2025",
        title: "Cybersécurité",
        subtitle: "Introduction à la Cybersécurité",
        organization: "Cisco Networking Academy",
        verificationUrl: "https://www.credly.com/badges/252c099a-810f-4354-b852-1e96de3839b4/public_url",
        icon: <FaShieldAlt />,
        color: "bg-blue-500",
        description: "Formation complète sur les principes de la cybersécurité, les menaces courantes, les techniques de protection des données et les meilleures pratiques de sécurité informatique.",
      },
      {
        date: "Mai 2025",
        title: "Science des données",
        subtitle: "Introduction à la science des données",
        organization: "Cisco Networking Academy",
        verificationUrl: "https://www.credly.com/badges/0f9e39b0-fdeb-4603-b8a7-64850e04c42a/public_url",
        icon: <FaDatabase />,
        color: "bg-green-500",
        description: "Apprentissage des concepts fondamentaux de la science des données, incluant l'analyse de données, la visualisation, les statistiques et l'introduction au machine learning.",
      },
      {
        date: "Janvier 2025",
        title: "C# Langage",
        subtitle: "Foundational C#",
        organization: "FreeCodeCamp & Microsoft",
        verificationUrl: "https://www.freecodecamp.org/certification/csas-cheick/foundational-c-sharp-with-microsoft",
        icon: <FaCode />,
        color: "bg-purple-500",
        description: "Maîtrise des fondamentaux du langage C#, incluant la syntaxe, les structures de données, la programmation orientée objet et le développement d'applications .NET.",
      },
    ];
  };

  const certifications = getCertificationsData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Section Hero */}
      <div className="flex items-center justify-center px-4 py-6 md:py-10 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
            {/* Section gauche - Texte */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 dark:text-white mb-2 md:mb-3">
                {t.certifications.title} <span className="text-indigo-600 dark:text-indigo-400">{t.certifications.titleHighlight}</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-2 md:mb-3">
                {t.certifications.subtitle}
              </p>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-3 md:mb-4">
                {t.certifications.subtitle}
              </p>
              
              {/* Scroll indicator */}
              <button
                onClick={scrollToCertifications}
                className="animate-bounce mt-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors cursor-pointer"
                aria-label={language === 'fr' ? "Défiler vers les certifications" : "Scroll to certifications"}
              >
                <FaChevronDown className="text-2xl md:text-3xl" />
              </button>
            </div>

            {/* Section droite - Image */}
            <div className="flex justify-center mt-3 md:mt-0">
              <div className="relative">
                <img 
                  src={illustrationSucces} 
                  alt="Illustration succès" 
                  className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-xs h-auto animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Certifications */}
      <div id="certifications-section" className="bg-gray-50 dark:bg-gray-900 py-8 md:py-12 px-4 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-2 md:mb-3 text-center">
            {t.certifications.sectionTitle}
          </h2>
          <p className="text-center text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto">
            Chaque certification représente un engagement envers l'excellence et l'apprentissage continu
          </p>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative h-64 md:h-80 lg:h-96 perspective-1000 cursor-pointer"
                onClick={() => handleCardClick(index)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                    flippedCard === index ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Face avant */}
                  <div
                    className="absolute w-full h-full backface-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-500"
                  >
                    {/* Colored top bar */}
                    <div className={`h-1.5 md:h-2 ${cert.color}`}></div>
                    
                    <div className="p-3 md:p-4 lg:p-6">
                      <div className="flex items-start gap-2 md:gap-3 lg:gap-4">
                        {/* Icon with animation */}
                        <div className={`${cert.color} text-white p-2 md:p-3 lg:p-4 rounded-lg md:rounded-xl text-xl md:text-2xl lg:text-3xl flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                          {cert.icon}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1 md:mb-2">
                            <span className="inline-block px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
                              {cert.date}
                            </span>
                          </div>
                          
                          <h3 className="text-base md:text-xl lg:text-2xl font-bold text-gray-800 dark:text-white mb-1 md:mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
                            {cert.title}
                          </h3>
                          
                          <p className="text-gray-700 dark:text-gray-300 font-medium mb-1 md:mb-2 text-xs md:text-sm lg:text-base leading-tight">
                            {cert.subtitle}
                          </p>
                          
                          <p className="text-gray-500 dark:text-gray-400 text-[10px] md:text-xs lg:text-sm mb-2 md:mb-3 flex items-center gap-1 md:gap-2">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-400 rounded-full"></span>
                            {cert.organization}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Animation de reflet au survol */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-shimmer pointer-events-none"></div>

                    {/* Texte en bas avec animation - toujours visible sur mobile/tablette, au survol sur desktop */}
                    <div className="absolute bottom-2 md:bottom-3 lg:bottom-4 left-0 right-0 flex items-center justify-center gap-1.5 md:gap-2 text-indigo-600 dark:text-indigo-400 text-[10px] md:text-xs lg:text-sm font-medium opacity-100 xl:opacity-0 xl:group-hover:opacity-100 transition-opacity duration-300">
                      <div className="relative">
                        <FaSyncAlt className="text-xs md:text-sm lg:text-base animate-spin-slow" />
                        <div className="absolute inset-0 rounded-full bg-indigo-400 animate-ping opacity-75"></div>
                      </div>
                      <span className="animate-pulse">
                        {language === 'fr' ? "Cliquez pour voir les détails" : "Click to see details"}
                      </span>
                    </div>
                  </div>

                  {/* Face arrière */}
                  <div
                    className="absolute w-full h-full backface-hidden bg-gradient-to-br from-indigo-600 to-indigo-800 dark:from-indigo-800 dark:to-indigo-900 rounded-xl shadow-lg p-3 md:p-4 lg:p-6 flex flex-col justify-between rotate-y-180"
                  >
                    <div>
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 lg:mb-4">
                        <div className="bg-white/20 p-1.5 md:p-2 lg:p-3 rounded-lg text-white text-lg md:text-xl lg:text-2xl">
                          {cert.icon}
                        </div>
                        <h3 className="text-base md:text-xl lg:text-2xl font-bold text-white leading-tight">{cert.title}</h3>
                      </div>
                      
                      <p className="text-white/90 text-xs md:text-sm lg:text-base leading-relaxed mb-3 md:mb-4 lg:mb-6">
                        {cert.description}
                      </p>

                      <div className="space-y-1 md:space-y-2 text-white/80 text-[10px] md:text-xs lg:text-sm">
                        <p><strong>Date :</strong> {cert.date}</p>
                        <p><strong>Organisation :</strong> {cert.organization}</p>
                      </div>
                    </div>

                    <div className="space-y-2 md:space-y-3">
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="block w-full text-center px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm lg:text-base bg-white dark:bg-gray-200 text-indigo-600 dark:text-indigo-800 font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-md"
                      >
                        <span className="flex items-center justify-center gap-1.5 md:gap-2">
                          {language === 'fr' ? "Vérifier la certification" : "Verify certification"}
                          <FaExternalLinkAlt className="text-[10px] md:text-xs" />
                        </span>
                      </a>
                      <div className="flex items-center justify-center gap-1.5 md:gap-2 text-white/70 text-[10px] md:text-xs">
                        <FaSyncAlt className="text-xs md:text-sm" />
                        <span>{language === 'fr' ? "Cliquez pour retourner" : "Click to flip back"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;

