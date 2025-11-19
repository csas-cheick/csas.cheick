import { FC } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import illustrationHome from "./assets/illustration_home.svg";
import illustrationPerso from "./assets/illustration_perso.svg";

const Accueil: FC = () => {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Section Hero */}
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Section gauche - Texte */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Salut ! <span className="inline-block animate-wave">👋🏻</span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 mb-4">
                JE SUIS <span className="text-indigo-600 font-bold">CHEICK SALIHOU AHMED CHEICK CHAIBOU</span>
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Etudiant, passionné par la technologie, la robotique et l’IA, avec un intérêt marqué pour les environnements innovants et les systèmes intelligents.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/projets"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  Voir mes projets
                </Link>
                <Link
                  to="/resume"
                  className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors border-2 border-indigo-600"
                >
                  Mon CV
                </Link>
              </div>
            </div>

            {/* Section droite - Image */}
            <div className="flex justify-center mt-3 md:mt-0">
              <div className="relative">
                <img 
                  src={illustrationHome} 
                  alt="Illustration développeur" 
                  className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-xs h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section À propos */}
      <div className="bg-white py-10 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex gap-6 md:gap-10 items-center">
            {/* Section gauche - Texte */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-8">
                PERMETTEZ-MOI DE ME <span className="text-indigo-600">PRÉSENTER</span>
              </h2>
              
              <div className="space-y-5 text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  Étudiant en Licence 3 Sciences Informatiques, je suis passionné par les 
                  <strong className="text-gray-900">technologies modernes</strong>, 
                  la <strong className="text-gray-900">robotique</strong> et 
                  l'<strong className="text-gray-900">intelligence artificielle</strong>. 
                  J’aime analyser, comprendre et améliorer les systèmes pour créer des solutions efficaces et intuitives.
                </p>

                <p>
                  Je possède des compétences en 
                  <strong className="text-indigo-600">développement web</strong>, 
                  <strong className="text-indigo-600">mobile</strong> et 
                  <strong className="text-indigo-600">logiciel</strong>, ainsi qu’en 
                  <strong className="text-indigo-600">Linux</strong>, 
                  <strong className="text-indigo-600">réseaux</strong> et 
                  <strong className="text-indigo-600">bases de données</strong>. 
                  Je m’intéresse particulièrement aux <strong className="text-gray-900">systèmes intelligents</strong> et aux 
                  <strong className="text-gray-900">technologies émergentes</strong>.
                </p>
              </div>

            </div>

            {/* Section droite - Image */}
            <div className="justify-center flex-shrink-0 hidden md:flex self-start mt-8">
              <div className="relative w-64 h-64 transition-transform duration-300 hover:scale-110 hover:rotate-3 cursor-pointer">
                <img 
                  src={illustrationPerso} 
                  alt="Illustration personnelle" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Réseaux Sociaux */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            RETROUVEZ-MOI SUR
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            N'hésitez pas à me contacter
          </p>
          
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="https://www.linkedin.com/in/csas-cheick"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="group flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin className="text-3xl text-indigo-600 group-hover:text-indigo-700" />
            </a>
            
            <a
              href="https://github.com/csas-cheick"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="group flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <FaGithub className="text-3xl text-gray-800 group-hover:text-gray-900" />
            </a>
            
            <a
              href="https://twitter.com/csas_cheick"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              className="group flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <FaTwitter className="text-3xl text-blue-400 group-hover:text-blue-500" />
            </a>
            
            <a
              href="https://www.instagram.com/csas_cheick"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="group flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <FaInstagram className="text-3xl text-pink-600 group-hover:text-pink-700" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
