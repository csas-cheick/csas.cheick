import { FC, useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaChevronDown, 
  FaGithub, 
  FaExternalLinkAlt, 
  FaReact, 
  FaDatabase,
  FaStar,
  FaRocket,
  FaCode,
  FaMobile,
  FaGlobe,
  FaBrain,
  FaHtml5
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiDotnet, 
  SiMysql, 
  SiWebrtc, 
  SiFlutter, 
  SiFirebase, 
  SiJavascript,
  SiPython
} from "react-icons/si";
import illustrationProjects from "../assets/illustration_projects.svg";
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
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
};

const statsVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 20
    }
  }
};

// ========================
// COMPONENT
// ========================

const Projets: FC = () => {
  // State
  const { t, language } = useLanguage();
  const allLabel = language === 'fr' ? "Tous" : "All";
  const [selectedCategory, setSelectedCategory] = useState(allLabel);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Reset category when language changes
  useEffect(() => {
    setSelectedCategory(language === 'fr' ? "Tous" : "All");
  }, [language]);

  // Category icons mapping
  const categoryIcons: Record<string, ReactNode> = {
    "Tous": <FaGlobe className="text-lg" />,
    "All": <FaGlobe className="text-lg" />,
    "Full Stack & IA": <FaBrain className="text-lg" />,
    "Full Stack & AI": <FaBrain className="text-lg" />,
    "Web Development": <FaCode className="text-lg" />,
    "Mobile": <FaMobile className="text-lg" />
  };

  // Get projects data based on language
  const getProjectsData = () => {
    if (language === 'en') {
      return [
        {
          title: "FadakCare",
          description: "Smart cardiovascular screening platform.",
          longDescription: "FadakCare is a comprehensive medical platform integrating intelligent screening based on AI models, patient management, appointment system, WebRTC teleconsultation, as well as advanced dashboards for doctors and administrators.",
          image: "/images/screenshots/fadakcare.png",
          technologies: [
            { name: ".NET", icon: <SiDotnet /> },
            { name: "React", icon: <FaReact /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "MySQL", icon: <SiMysql /> },
            { name: "WebRTC", icon: <SiWebrtc /> },
          ],
          githubUrl: "https://github.com/csas-cheick/fadakcare-frontend",
          liveUrl: "https://fadakcare-frontend.onrender.com/",
          category: "Full Stack & AI",
        },
        {
          title: "Capital Analysis",
          description: "Corporate website for Capital Analysis company.",
          longDescription: "A professional showcase site presenting the services, activities and commitments of Capital Analysis. Developed with modern architecture, responsive interface and careful content presentation.",
          image: "/images/screenshots/captialanalysis.png",
          technologies: [
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "React", icon: <FaReact /> },
          ],
          githubUrl: "https://github.com/csas-cheick/capital-analysis",
          liveUrl: "https://capital-analysis.onrender.com",
          category: "Web Development",
        },
        {
          title: "CapitalPetroleum",
          description: "Complete management system for petroleum company.",
          longDescription: "CapitalPetroleum is a business management solution for gas stations: sales, inventory, suppliers, employees, payments management, and real-time dashboards. Includes modular architecture and secure authentication.",
          image: "/images/screenshots/capitalpetroleum.png",
          technologies: [
            { name: ".NET", icon: <SiDotnet /> },
            { name: "React", icon: <FaReact /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "SQL Server", icon: <FaDatabase /> },
          ],
          githubUrl: "https://github.com/csas-cheick/capital-system",
          liveUrl: "https://capital-analysis.onrender.com",
          category: "Web Development",
        },
        {
          title: "Collections",
          description: "Management platform for a sewing shop.",
          longDescription: "A web application for managing products, orders, customers and payments for a sewing shop. Simple, modern interface optimized for a smooth experience. Includes dashboard and admin space.",
          image: "/images/screenshots/collections.png",
          technologies: [
            { name: "React", icon: <FaReact /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: ".NET", icon: <SiDotnet /> },
            { name: "MySQL", icon: <SiMysql /> },
          ],
          githubUrl: "https://github.com/csas-cheick/collections",
          liveUrl: "https://collections-f6e2.onrender.com",
          category: "Web Development",
        },
        {
          title: "ABS",
          description: "Multimedia communication mobile app (announcements, videos, podcasts...).",
          longDescription: "ABS is a mobile app for sharing announcements, videos and podcasts, including Firebase authentication, real-time publication management, and modern Flutter interface.",
          image: "/images/screenshots/abs.png",
          technologies: [
            { name: "Flutter", icon: <SiFlutter /> },
            { name: "Firebase", icon: <SiFirebase /> },
          ],
          githubUrl: "https://github.com/csas-cheick/abs-app",
          category: "Mobile",
        },
        {
          title: "Nectar",
          description: "AI-powered document summarization platform.",
          longDescription: "Nectar is an intelligent web platform that instantly transforms your large documents (PDF, Word, Images) into clear and precise summaries. Using advanced AI, it analyzes and extracts the essence of your texts while strictly adapting to the word count you define. No more endless reading: Nectar eliminates the superfluous to offer you a fluid, structured and immediately usable synthesis.",
          image: "/images/screenshots/nectar.png",
          technologies: [
            { name: "React", icon: <FaReact /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: ".NET", icon: <SiDotnet /> },
          ],
          githubUrl: "https://github.com/csas-cheick/Nectar",
          liveUrl: "https://nectar-jkb1.onrender.com/",
          category: "Full Stack & AI",
        },
      ];
    }
    // French version
    return [
      {
        title: "FadakCare",
        description: "Plateforme intelligente de dépistage cardiovasculaire.",
        longDescription: "FadakCare est une plateforme médicale complète intégrant un dépistage intelligent basé sur des modèles d'IA, une gestion des patients, un système de rendez-vous, une téléconsultation WebRTC, ainsi que des tableaux de bord avancés pour médecins et administrateurs.",
        image: "/images/screenshots/fadakcare.png",
        technologies: [
          { name: ".NET", icon: <SiDotnet /> },
          { name: "React", icon: <FaReact /> },
          { name: "TypeScript", icon: <SiTypescript /> },
          { name: "MySQL", icon: <SiMysql /> },
          { name: "WebRTC", icon: <SiWebrtc /> },
        ],
        githubUrl: "https://github.com/csas-cheick/fadakcare-frontend",
        liveUrl: "https://fadakcare-frontend.onrender.com/",
        category: "Full Stack & IA",
      },
      {
        title: "Capital Analysis",
        description: "Site web corporatif pour entreprise Capital Analysis.",
        longDescription: "Un site vitrine professionnel présentant les services, activités et engagements de l'entreprise Capital Analysis. Développé avec une architecture moderne, une interface responsive et une mise en avant soignée du contenu pour renforcer l'identité numérique de l'entreprise.",
        image: "/images/screenshots/captialanalysis.png",
        technologies: [
          { name: "TypeScript", icon: <SiTypescript /> },
          { name: "React", icon: <FaReact /> },
        ],
        githubUrl: "https://github.com/csas-cheick/capital-analysis",
        liveUrl: "https://capital-analysis.onrender.com",
        category: "Web Development",
      },
      {
        title: "CapitalPetroleum",
        description: "Système de gestion complet pour entreprise pétrolière.",
        longDescription: "CapitalPetroleum est une solution de gestion d'entreprise destinée aux stations-service : gestion des ventes, stocks, fournisseurs, employés, paiements, et tableaux de bord en temps réel. L'application inclut une architecture modulaire, une authentification sécurisée, et des rapports automatiques.",
        image: "/images/screenshots/capitalpetroleum.png",
        technologies: [
          { name: ".NET", icon: <SiDotnet /> },
          { name: "React", icon: <FaReact /> },
          { name: "TypeScript", icon: <SiTypescript /> },
          { name: "SQL Server", icon: <FaDatabase /> },
        ],
        githubUrl: "https://github.com/csas-cheick/capital-system",
        liveUrl: "https://capital-analysis.onrender.com",
        category: "Web Development",
      },
      {
        title: "Collections",
        description: "Plateforme de gestion pour une boutique de couture.",
        longDescription: "Une application web permettant la gestion des produits, commandes, clients et paiements pour une boutique de couture. L'interface est simple, moderne et optimisée pour offrir une expérience fluide. Le projet inclut également un tableau de bord, un espace administrateur et un module statistique.",
        image: "/images/screenshots/collections.png",
        technologies: [
          { name: "React", icon: <FaReact /> },
          { name: "TypeScript", icon: <SiTypescript /> },
          { name: ".NET", icon: <SiDotnet /> },
          { name: "MySQL", icon: <SiMysql /> },
        ],
        githubUrl: "https://github.com/csas-cheick/collections",
        liveUrl: "https://collections-f6e2.onrender.com",
        category: "Web Development",
      },
      {
        title: "ABS",
        description: "Application mobile de communication multimédia (annonces, vidéos, podcasts…).",
        longDescription: "ABS est une application mobile permettant le partage d'annonces, de vidéos et de podcasts, incluant un système d'authentification Firebase, une gestion en temps réel des publications, et une interface moderne conçue avec Flutter. Le backend assure une gestion sécurisée des utilisateurs, rôles et contenus.",
        image: "/images/screenshots/abs.png",
        technologies: [
          { name: "Flutter", icon: <SiFlutter /> },
          { name: "Firebase", icon: <SiFirebase /> },
        ],
        githubUrl: "https://github.com/csas-cheick/abs-app",
        category: "Mobile",
      },
      {
        title: "Nectar",
        description: "Plateforme de résumé de documents propulsée par l'IA.",
        longDescription: "Nectar est une plateforme web intelligente qui transforme instantanément vos documents volumineux (PDF, Word, Images) en résumés clairs et précis. Grâce à une IA avancée, elle analyse et extrait l'essence de vos textes en s'adaptant strictement au nombre de mots que vous définissez. Fini les lectures interminables : Nectar élimine le superflu pour vous offrir une synthèse fluide, structurée et immédiatement exploitable.",
        image: "/images/screenshots/nectar.png",
        technologies: [
          { name: "HTML", icon: <FaHtml5 /> },
          { name: "JavaScript", icon: <SiJavascript /> },
          { name: "Python", icon: <SiPython /> },
        ],
        githubUrl: "https://github.com/csas-cheick/nectar",
        liveUrl: "https://nectar-jkb1.onrender.com/",
        category: "Full Stack & IA",
      },
    ];
  };

  const PROJECTS_DATA = getProjectsData();

  // Utilities
  const scrollToProjects = () => {
    const element = document.getElementById('projects-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Computed values
  const categories = [allLabel, ...new Set(PROJECTS_DATA.map(p => p.category))];
  const filteredProjects = selectedCategory === allLabel 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  // ========================
  // RENDER
  // ========================

  return (
    <>
      <SEO 
        title={language === 'fr' ? "Projets" : "Projects"}
        description={language === 'fr' 
          ? "Découvrez mes projets de développement web, mobile et IA - FadakCare, CapitalPetroleum, Collections et plus."
          : "Discover my web, mobile and AI development projects - FadakCare, CapitalPetroleum, Collections and more."}
      />
      <div className="min-h-screen transition-colors duration-300">
        {/* ================== HERO SECTION ================== */}
        <section className="relative flex items-center justify-center px-4 py-6 md:py-10 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-4 md:gap-8 items-center"
            >
              {/* Texte à gauche */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4">
                  {t.projects.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">{t.projects.titleHighlight}</span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-3 md:mb-4">
                  {t.projects.subtitle}
                </p>
                <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-4 md:mb-6">
                  {t.projects.description}
                </p>
                
                {/* Scroll indicator */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={scrollToProjects}
                  className="animate-bounce mt-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors cursor-pointer"
                  aria-label={language === 'fr' ? "Défiler vers les projets" : "Scroll to projects"}
                >
                  <FaChevronDown className="text-2xl md:text-3xl" />
                </motion.button>
              </motion.div>

              {/* Illustration à droite */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center mt-3 md:mt-0"
              >
                <motion.img 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  src={illustrationProjects} 
                  alt="Illustration projets" 
                  className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-xs h-auto"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================== PROJECTS SECTION ================== */}
        <section id="projects-section" className="py-16 px-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            {/* Section Title with Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                {t.projects.sectionTitle}
              </h2>
              
              {/* Stats Cards */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 mt-4 sm:mt-6 md:mt-8"
              >
                <motion.div 
                  variants={statsVariants}
                  className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl sm:rounded-2xl text-white shadow-lg"
                >
                  <FaRocket className="text-base sm:text-lg md:text-2xl" />
                  <div className="text-left">
                    <div className="text-base sm:text-lg md:text-2xl font-bold">{PROJECTS_DATA.length}</div>
                    <div className="text-[10px] sm:text-xs opacity-90">{language === 'fr' ? 'Projets' : 'Projects'}</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={statsVariants}
                  className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl sm:rounded-2xl text-white shadow-lg"
                >
                  <FaCode className="text-base sm:text-lg md:text-2xl" />
                  <div className="text-left">
                    <div className="text-base sm:text-lg md:text-2xl font-bold">{new Set(PROJECTS_DATA.flatMap(p => p.technologies.map(t => t.name))).size}+</div>
                    <div className="text-[10px] sm:text-xs opacity-90">{language === 'fr' ? 'Technologies' : 'Technologies'}</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={statsVariants}
                  className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl sm:rounded-2xl text-white shadow-lg"
                >
                  <FaStar className="text-base sm:text-lg md:text-2xl" />
                  <div className="text-left">
                    <div className="text-base sm:text-lg md:text-2xl font-bold">{categories.length - 1}</div>
                    <div className="text-[10px] sm:text-xs opacity-90">{language === 'fr' ? 'Catégories' : 'Categories'}</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

          {/* Category Filter - Enhanced */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500"
                }`}
              >
                <span className="text-sm sm:text-base md:text-lg">{categoryIcons[category]}</span>
                {category}
                <span className={`ml-0.5 sm:ml-1 px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs rounded-full ${
                  selectedCategory === category
                    ? "bg-white/20"
                    : "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400"
                }`}>
                  {category === allLabel ? PROJECTS_DATA.length : PROJECTS_DATA.filter(p => p.category === category).length}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid - Enhanced Cards */}
          <motion.div 
            layout
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project.title}
                  layout
                  variants={cardVariants}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  onHoverStart={() => setHoveredProject(project.title)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden group border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
                >
                  {/* Badge EN COURS DE CORRECTION pour Nectar */}
                  {project.title === (language === 'fr' ? 'Non' : 'Non') && (
                    <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-lg z-20 animate-pulse">
                      {language === 'fr' ? 'En cours de correction' : 'Under correction'}
                    </span>
                  )}
                  {/* Gradient Border Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10 blur-sm scale-105" />
                  
                  {/* Project Image with Enhanced Overlay */}
                  <div className="relative h-64 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.fallback-icon')) {
                          const fallback = document.createElement('div');
                          fallback.className = 'fallback-icon absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500';
                          fallback.innerHTML = '<span class="text-6xl">📊</span>';
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                    
                    {/* Multi-layer Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating Category Badge */}
                    <motion.span 
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="absolute top-4 right-4 px-4 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 backdrop-blur-md rounded-full shadow-lg flex items-center gap-1.5"
                    >
                      {categoryIcons[project.category]}
                      {project.category}
                    </motion.span>

                    {/* Quick Action Buttons on Hover - Hidden on mobile, shown on hover for desktop */}
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ 
                        y: hoveredProject === project.title ? 0 : 20, 
                        opacity: hoveredProject === project.title ? 1 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-4 left-4 right-4 hidden md:flex gap-3"
                    >
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md text-gray-800 dark:text-white rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-lg"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub className="text-lg" />
                          <span className="font-medium text-sm">{t.projects.code}</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-colors shadow-lg"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt />
                          <span className="font-medium text-sm">{t.projects.demo}</span>
                        </a>
                      )}
                    </motion.div>
                  </div>

                  {/* Project Info - Enhanced */}
                  <div className="p-4 sm:p-6">
                    {/* Title with Animated Underline */}
                    <div className="relative inline-block mb-3">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                        {project.title}
                      </h3>
                      <motion.div 
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"
                        initial={{ width: 0 }}
                        animate={{ width: hoveredProject === project.title ? "100%" : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* Short Description */}
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-3 font-medium">
                      {project.description}
                    </p>

                    {/* Long Description with Gradient Fade */}
                    <div className="relative">
                      <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                        {project.longDescription}
                      </p>
                    </div>

                    {/* Technologies - Enhanced Pills */}
                    <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-600/50 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-600/50 hover:border-indigo-300 dark:hover:border-indigo-500 hover:shadow-md transition-all duration-300"
                        >
                          <span className="text-indigo-600 dark:text-indigo-400 text-sm">{tech.icon}</span>
                          <span>{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Mobile Action Buttons - Always visible on mobile */}
                    <div className="flex gap-2 md:hidden mt-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          <FaGithub className="text-base" />
                          <span className="font-medium text-sm">{t.projects.code}</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-colors"
                        >
                          <FaExternalLinkAlt className="text-sm" />
                          <span className="font-medium text-sm">{t.projects.demo}</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Bottom Gradient Line */}
                  <div className="h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Projets;
