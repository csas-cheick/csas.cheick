import { FC, useState } from "react";
import { 
  FaChevronDown, 
  FaGithub, 
  FaExternalLinkAlt, 
  FaReact, 
  FaDatabase 
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiDotnet, 
  SiMysql, 
  SiWebrtc, 
  SiFlutter, 
  SiFirebase 
} from "react-icons/si";
import illustrationProjects from "../assets/illustration_projects.svg";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: { name: string; icon: React.ReactElement }[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

const PROJECTS_DATA: Project[] = [
  {
    title: "FadakCare",
    description: "Plateforme intelligente de dépistage cardiovasculaire.",
    longDescription:
      "FadakCare est une plateforme médicale complète intégrant un dépistage intelligent basé sur des modèles d'IA, une gestion des patients, un système de rendez-vous, une téléconsultation WebRTC, ainsi que des tableaux de bord avancés pour médecins et administrateurs.",
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
    longDescription:
      "Un site vitrine professionnel présentant les services, activités et engagements de l'entreprise Capital Analysis. Développé avec une architecture moderne, une interface responsive et une mise en avant soignée du contenu pour renforcer l'identité numérique de l'entreprise.",
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
    longDescription:
      "CapitalPetroleum est une solution de gestion d'entreprise destinée aux stations-service : gestion des ventes, stocks, fournisseurs, employés, paiements, et tableaux de bord en temps réel. L'application inclut une architecture modulaire, une authentification sécurisée, et des rapports automatiques.",
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
    longDescription:
      "Une application web permettant la gestion des produits, commandes, clients et paiements pour une boutique de couture. L'interface est simple, moderne et optimisée pour offrir une expérience fluide. Le projet inclut également un tableau de bord, un espace administrateur et un module statistique.",
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
    longDescription:
      "ABS est une application mobile permettant le partage d'annonces, de vidéos et de podcasts, incluant un système d'authentification Firebase, une gestion en temps réel des publications, et une interface moderne conçue avec Flutter. Le backend assure une gestion sécurisée des utilisateurs, rôles et contenus.",
    image: "/images/screenshots/abs.png",
    technologies: [
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
    githubUrl: "https://github.com/csas-cheick/abs-app",
    category: "Mobile",
  },
];

const Projets: FC = () => {
  // State
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  // Utilities
  const scrollToProjects = () => {
    const element = document.getElementById('projects-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Computed values
  const categories = ["Tous", ...new Set(PROJECTS_DATA.map(p => p.category))];
  const filteredProjects = selectedCategory === "Tous" 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* ================== HERO SECTION ================== */}
      <section className="relative flex items-center justify-center px-4 py-6 md:py-10 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
            {/* Texte à gauche */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-3 md:mb-4">
                Mes <span className="text-indigo-600">Projets</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-3 md:mb-4">
                Une sélection de projets sur lesquels j'ai travaillé, démontrant mes compétences en développement web, analyse de données et ingénierie logicielle.
              </p>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 md:mb-6">
                Chaque projet représente une <strong className="text-indigo-600">solution concrète</strong> à des problématiques réelles, développée avec des <strong className="text-indigo-600">technologies modernes</strong>.
              </p>
              
              {/* Scroll indicator */}
              <button
                onClick={scrollToProjects}
                className="animate-bounce mt-2 text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
                aria-label="Défiler vers les projets"
              >
                <FaChevronDown className="text-2xl md:text-3xl" />
              </button>
            </div>

            {/* Illustration à droite */}
            <div className="flex justify-center mt-3 md:mt-0">
              <img 
                src={illustrationProjects} 
                alt="Illustration projets" 
                className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-xs h-auto animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================== PROJECTS SECTION ================== */}
      <section id="projects-section" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Réalisations
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-indigo-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-indigo-100 to-blue-100 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback si l'image n'existe pas
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.fallback-icon')) {
                        const fallback = document.createElement('div');
                        fallback.className = 'fallback-icon absolute inset-0 flex items-center justify-center text-gray-400';
                        fallback.innerHTML = '<span class="text-6xl">📊</span>';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  {/* Title & Category */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 text-xs md:text-sm font-semibold text-indigo-600 bg-indigo-50 rounded-full whitespace-nowrap">
                      {project.category}
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4">
                    {project.description}
                  </p>

                  {/* Long Description */}
                  <p className="text-xs md:text-sm lg:text-base text-gray-700 mb-4">
                    {project.longDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-lg text-xs md:text-sm lg:text-base text-gray-700"
                      >
                        <span className="text-indigo-600">{tech.icon}</span>
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm md:text-base bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <FaGithub />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm md:text-base bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        <FaExternalLinkAlt />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projets;
