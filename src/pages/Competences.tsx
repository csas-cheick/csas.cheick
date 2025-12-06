import { FC } from "react";
import { 
  FaChevronDown, 
  FaReact, 
  FaPython, 
  FaGitAlt, 
  FaDocker, 
  FaLinux, 
  FaDatabase,
  FaJava,
  FaMobileAlt,
  FaNetworkWired,
  FaServer,
  FaRobot,
  FaTools,
  FaLaptopCode
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiOracle, 
  SiDotnet, 
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiFlutter,
  SiMysql,
  SiFigma,
  SiPostman,
  SiCplusplus
} from "react-icons/si";
import { TbBrain } from "react-icons/tb";
import { HiGlobeAlt } from "react-icons/hi";
import illustrationCompetences from "../assets/illustration_competences.svg";
import { useLanguage } from "../context/LanguageContext";

interface Skill {
  name: string;
  icon: React.ReactElement;
  description?: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactElement;
  skills: Skill[];
  description: string;
}

const Competences: FC = () => {
  const { t, language } = useLanguage();
  const scrollToSkills = () => {
    const element = document.getElementById('skills-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const skillCategories: SkillCategory[] = [
    {
      title: language === 'fr' ? "Développement Web" : "Web Development",
      icon: <HiGlobeAlt className="text-3xl text-indigo-600" />,
      description: language === 'fr' 
        ? "Interfaces modernes et responsives • Intégration API REST • Optimisation UX"
        : "Modern responsive interfaces • REST API integration • UX optimization",
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500" /> },
      ],
    },
    {
      title: language === 'fr' ? "Développement Mobile" : "Mobile Development",
      icon: <FaMobileAlt className="text-3xl text-pink-600" />,
      description: language === 'fr' 
        ? "Applications multiplateformes • UI/UX mobile cohérente • Connexion backend API"
        : "Cross-platform applications • Consistent mobile UI/UX • Backend API connection",
      skills: [
        { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
        { name: "React Native", icon: <FaReact className="text-cyan-400" /> },
      ],
    },
    {
      title: language === 'fr' ? "Développement Logiciel" : "Software Development",
      icon: <FaLaptopCode className="text-3xl text-purple-600" />,
      description: language === 'fr' 
        ? "Programmation orientée objet • Architecture MVC • API REST"
        : "Object-oriented programming • MVC Architecture • REST API",
      skills: [
        { name: "C# (ASP.NET Core)", icon: <SiDotnet className="text-purple-600" /> },
        { name: "Java", icon: <FaJava className="text-red-600" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
        { name: ".NET", icon: <SiDotnet className="text-purple-700" /> },
      ],
    },
    {
      title: language === 'fr' ? "Intelligence Artificielle" : "Artificial Intelligence",
      icon: <FaRobot className="text-3xl text-indigo-700" />,
      description: language === 'fr'
        ? "Apprentissage supervisé/non supervisé • KNN, Régression, SVM • Manipulation de datasets"
        : "Supervised/unsupervised learning • KNN, Regression, SVM • Dataset manipulation",
      skills: [
        { name: "Python", icon: <FaPython className="text-yellow-500" /> },
        { name: "Machine Learning", icon: <TbBrain className="text-indigo-600" /> },
        { name: language === 'fr' ? "Prétraitement des données" : "Data preprocessing", icon: <FaDatabase className="text-gray-600" /> },
      ],
    },
    {
      title: language === 'fr' ? "Systèmes & Linux" : "Systems & Linux",
      icon: <FaLinux className="text-3xl text-yellow-600" />,
      description: language === 'fr'
        ? "Administration Linux • Scripting Bash • LPIC-1 Essentials"
        : "Linux administration • Bash scripting • LPIC-1 Essentials",
      skills: [
        { name: "Linux", icon: <FaLinux className="text-yellow-600" /> },
        { name: "Bash", icon: <FaServer className="text-gray-700" /> },
        { name: language === 'fr' ? "Commandes shell" : "Shell commands", icon: <FaServer className="text-gray-600" /> },
      ],
    },
    {
      title: language === 'fr' ? "Réseaux" : "Networks",
      icon: <FaNetworkWired className="text-3xl text-blue-600" />,
      description: language === 'fr'
        ? "Modèle OSI • TCP/IP • Routage de base • Cisco NetAcad"
        : "OSI model • TCP/IP • Basic routing • Cisco NetAcad",
      skills: [
        { name: "TCP/IP", icon: <FaNetworkWired className="text-blue-600" /> },
        { name: language === 'fr' ? "Modèle OSI" : "OSI Model", icon: <FaNetworkWired className="text-indigo-600" /> },
        { name: "Cisco NetAcad", icon: <FaNetworkWired className="text-blue-700" /> },
      ],
    },
    {
      title: language === 'fr' ? "Bases de Données" : "Databases",
      icon: <FaDatabase className="text-3xl text-green-600" />,
      description: language === 'fr'
        ? "Modélisation • Normalisation • Requêtes SQL • CRUD / Joins / Index"
        : "Modeling • Normalization • SQL queries • CRUD / Joins / Index",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "SQL Server", icon: <FaDatabase className="text-red-600" /> },
        { name: "Oracle", icon: <SiOracle className="text-red-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      ],
    },
    {
      title: language === 'fr' ? "Outils & Technologies" : "Tools & Technologies",
      icon: <FaTools className="text-3xl text-gray-700" />,
      description: language === 'fr'
        ? "Outils essentiels pour le développement moderne"
        : "Essential tools for modern development",
      skills: [
        { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "Figma", icon: <SiFigma className="text-purple-600" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      ],
    },
  ];

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center px-4 py-6 md:py-10 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
            {/* Texte à gauche */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 dark:text-white mb-2 md:mb-3">
                {t.skills.title} <span className="text-indigo-600 dark:text-indigo-400">{t.skills.titleHighlight}</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-2 md:mb-3">
                {t.skills.subtitle}
              </p>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-3 md:mb-4">
                {t.skills.description}
              </p>
              
              {/* Scroll indicator */}
              <button
                onClick={scrollToSkills}
                className="animate-bounce mt-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors cursor-pointer"
                aria-label={language === 'fr' ? "Défiler vers les compétences" : "Scroll to skills"}
              >
                <FaChevronDown className="text-2xl md:text-3xl" />
              </button>
            </div>

            {/* Illustration à droite */}
            <div className="flex justify-center mt-3 md:mt-0">
              <img 
                src={illustrationCompetences} 
                alt="Illustration compétences" 
                className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-xs h-auto animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills-section" className="py-12 md:py-16 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-3 md:mb-4">
            {t.skills.sectionTitle}
          </h2>
          <p className="text-center text-sm md:text-base text-gray-600 dark:text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            {t.skills.description}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pb-3 md:pb-4 border-b-2 border-indigo-100 dark:border-gray-700">
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-2 md:p-3 rounded-lg flex-shrink-0">
                    <div className="text-2xl md:text-3xl">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-gray-800 dark:text-white leading-tight">
                    {category.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-3 md:mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="flex items-center gap-1.5 md:gap-2 p-1.5 md:p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-600 transition-colors group"
                    >
                      <div className="text-lg md:text-2xl group-hover:scale-110 transition-transform flex-shrink-0">
                        {skill.icon}
                      </div>
                      <span className="text-[10px] md:text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Note en cours d'approfondissement */}
          <div className="mt-8 md:mt-12 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-4 md:p-6 border-l-4 border-indigo-600 dark:border-indigo-400">
            <div className="flex items-start gap-2 md:gap-3">
              <span className="text-2xl md:text-3xl flex-shrink-0">📚</span>
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-1 md:mb-2 text-sm md:text-base">En cours d'approfondissement</h3>
                <p className="text-xs md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  Je continue à développer mes compétences en <strong>Intelligence Artificielle</strong>, 
                  <strong> Cloud Computing</strong> et <strong> Architecture logicielle avancée</strong> à travers 
                  des projets personnels et des formations continues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Competences;
