import { FC, useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaRocket, 
  FaHeart,
  FaCode,
  FaLightbulb,
  FaUsers,
  FaAward,
  FaArrowRight,
  FaQuoteLeft,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaChevronDown,
  FaChartLine
} from "react-icons/fa";
import { 
  HiSparkles, 
  HiChip, 
  HiGlobeAlt,
  HiAcademicCap,
  HiLightningBolt
} from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";
import illustrationPerso from "../assets/illustration_perso.svg";

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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

// Counter animation hook
const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
    }
  }, [startOnView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, hasStarted]);

  return { count, ref };
};

// Stat Item Component
interface StatItemProps {
  stat: {
    value: number;
    suffix: string;
    label: string;
    icon: React.ReactNode;
    color: string;
  };
  index: number;
}

const StatItem: FC<StatItemProps> = ({ stat, index }) => {
  const { count, ref } = useCountUp(stat.value, 2000);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
    >
      <div className="flex justify-center mb-3 sm:mb-4">
        <div className={`p-3 sm:p-4 bg-gradient-to-r ${stat.color} rounded-xl sm:rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
          <span className="text-white text-xl sm:text-2xl">{stat.icon}</span>
        </div>
      </div>
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-1 sm:mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base leading-tight font-medium">
        {stat.label}
      </div>
    </motion.div>
  );
};

const About: FC = () => {
  const { t } = useLanguage();

  // Scroll to content section
  const scrollToContent = () => {
    const element = document.getElementById('about-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Statistics with counter animation
  const stats = [
    { 
      value: 3, 
      suffix: "+", 
      label: t.about.statsYears,
      icon: <FaBriefcase className="text-2xl" />,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      value: 5, 
      suffix: "+", 
      label: t.about.statsProjects,
      icon: <FaRocket className="text-2xl" />,
      color: "from-purple-500 to-pink-500"
    },
    { 
      value: 4, 
      suffix: "+", 
      label: t.about.statsTech,
      icon: <FaCode className="text-2xl" />,
      color: "from-orange-500 to-red-500"
    },
    { 
      value: 4, 
      suffix: "+", 
      label: t.about.statsCerts,
      icon: <FaAward className="text-2xl" />,
      color: "from-green-500 to-emerald-500"
    },
  ];

  // Timeline data
  const timeline = [
    {
      year: t.about.timeline.education.year,
      title: t.about.timeline.education.title,
      organization: t.about.timeline.education.organization,
      description: t.about.timeline.education.description,
      icon: <FaGraduationCap />,
      type: "education"
    },
    {
      year: t.about.timeline.work.year,
      title: t.about.timeline.work.title,
      organization: t.about.timeline.work.organization,
      description: t.about.timeline.work.description,
      icon: <FaBriefcase />,
      type: "work"
    },
    {
      year: t.about.timeline.certifications.year,
      title: t.about.timeline.certifications.title,
      organization: t.about.timeline.certifications.organization,
      description: t.about.timeline.certifications.description,
      icon: <FaAward />,
      type: "achievement"
    },
    {
      year: t.about.timeline.milestone.year,
      title: t.about.timeline.milestone.title,
      organization: t.about.timeline.milestone.organization,
      description: t.about.timeline.milestone.description,
      icon: <FaRocket />,
      type: "milestone"
    },
  ];

  // Values/Philosophy
  const values = [
    {
      icon: <HiLightningBolt className="text-3xl" />,
      title: t.about.valuePerformance,
      description: t.about.valuePerformanceDesc
    },
    {
      icon: <HiSparkles className="text-3xl" />,
      title: t.about.valueInnovation,
      description: t.about.valueInnovationDesc
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: t.about.valueCollaboration,
      description: t.about.valueCollaborationDesc
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: t.about.valueLearning,
      description: t.about.valueLearningDesc
    },
  ];

  // Interests
  const interests = [
    { icon: <HiChip />, name: t.about.interestAI },
    { icon: <HiGlobeAlt />, name: t.about.interestWeb },
    { icon: <FaRocket />, name: t.about.interestRobotics },
    { icon: <HiAcademicCap />, name: t.about.interestResearch },
  ];

  return (
    <>
      <SEO 
        title={t.nav.about}
        description={t.about.heroDescription}
      />
      
      <div className="min-h-screen transition-colors duration-300">
        {/* Hero Section */}
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
                <motion.span 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-full text-xs sm:text-sm font-medium mb-3 md:mb-4"
                >
                  <HiSparkles />
                  {t.about.badge}
                </motion.span>

                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 dark:text-white mb-2 md:mb-3">
                  {t.about.heroTitle}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                    {t.about.heroTitleHighlight}
                  </span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-2 md:mb-3">
                  {t.about.heroSubtitle}
                </p>
                <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-3 md:mb-4">
                  {t.about.heroDescription}
                </p>
                
                {/* Scroll indicator */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={scrollToContent}
                  className="animate-bounce mt-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors cursor-pointer"
                  aria-label={t.about.scrollLabel}
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
                  src={illustrationPerso} 
                  alt="Illustration personnelle" 
                  className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-xs h-auto"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Content Section */}
        <section id="about-content" className="py-12 md:py-16 px-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              {/* Left - Text */}
              <div>
                <motion.h2 
                  variants={itemVariants}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6"
                >
                  {t.about.whoAmI}
                </motion.h2>

                <motion.p 
                  variants={itemVariants}
                  className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed"
                >
                  {t.about.introText1}
                </motion.p>

                <motion.p 
                  variants={itemVariants}
                  className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed"
                >
                  {t.about.introText2}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base"
                  >
                    {t.about.contactMe}
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/resume"
                    className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 border-2 border-indigo-600 dark:border-indigo-400 hover:scale-105 text-sm sm:text-base"
                  >
                    <FaDownload />
                    {t.about.downloadCV}
                  </Link>
                </motion.div>

                {/* Social Links */}
                <motion.div variants={itemVariants} className="flex gap-3 sm:gap-4 mt-6 sm:mt-8">
                  <a
                    href="https://www.linkedin.com/in/csas-cheick"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                  >
                    <FaLinkedin className="text-lg sm:text-xl" />
                  </a>
                  <a
                    href="https://github.com/csas-cheick"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
                  >
                    <FaGithub className="text-lg sm:text-xl" />
                  </a>
                </motion.div>
              </div>

              {/* Right - Interests */}
              <motion.div 
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">
                  {t.about.interests}
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-indigo-50 dark:hover:bg-gray-600 transition-all duration-300"
                    >
                      <span className="text-indigo-600 dark:text-indigo-400 text-lg sm:text-xl">
                        {interest.icon}
                      </span>
                      <span className="font-medium text-xs sm:text-sm text-gray-800 dark:text-white">
                        {interest.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-10 md:mb-12"
            >
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                <FaChartLine />
                {t.about.statsBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                {t.about.statsTitle}
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <StatItem key={index} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                <FaRocket />
                {t.about.journeyBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                {t.about.journeyTitle}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  {t.about.journeyTitleHighlight}
                </span>
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 sm:left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative flex items-start mb-8 sm:mb-10 md:mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8 lg:pr-12" : "md:pl-8 lg:pl-12"} pl-14 sm:pl-16 md:pl-0`}>
                    <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <span className="inline-block px-2.5 sm:px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-1.5 sm:mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-indigo-600 dark:text-indigo-400 font-medium mb-2 sm:mb-3">
                        {item.organization}
                      </p>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute left-1 sm:left-2 md:left-1/2 md:-translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm sm:text-base shadow-lg z-10">
                    {item.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                <FaHeart />
                {t.about.valuesBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                {t.about.valuesTitle}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  {t.about.valuesTitleHighlight}
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 rounded-xl sm:rounded-2xl text-indigo-600 dark:text-indigo-400 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl sm:text-2xl md:text-3xl">{value.icon}</span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-1.5 sm:mb-2">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center text-white overflow-hidden"
            >
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 opacity-20">
                <FaQuoteLeft className="text-4xl sm:text-5xl md:text-6xl" />
              </div>
              <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-4 sm:mb-6 relative z-10 px-4">
                {t.about.quote}
              </blockquote>
              <cite className="text-white/80 text-sm sm:text-base">— Peter Drucker</cite>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
                {t.about.ctaTitle}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                {t.about.ctaDescription}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base"
              >
                {t.about.ctaButton}
                <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
