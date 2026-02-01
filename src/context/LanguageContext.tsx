import { createContext, useContext, useState, ReactNode, FC } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.fr;
}

const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      skills: "Compétences",
      projects: "Projets",
      certifications: "Certifications",
      resume: "CV",
      contact: "Contact"
    },
    home: {
      greeting: "Salut !",
      intro: "JE SUIS",
      name: "CHEICK SALIHOU AHMED",
      description: "Étudiant, passionné par la technologie, la robotique et l'IA, avec un intérêt marqué pour les environnements innovants et les systèmes intelligents.",
      viewProjects: "Voir mes projets",
      myResume: "Mon CV",
      aboutTitle: "QUI SUIS",
      aboutTitleHighlight: "JE ?",
      aboutText1: "Étudiant en Licence 3 Sciences de l'Informatique, passionné par les technologies modernes, la robotique et l'intelligence artificielle. Mon objectif : analyser, comprendre et améliorer les systèmes pour créer des solutions efficaces et intuitives.",
      aboutText2: "Compétences en développement web, mobile et logiciel, ainsi qu'en Linux, réseaux et bases de données. Focus sur les systèmes intelligents et les technologies émergentes.",
      socialTitle: "RETROUVEZ-MOI SUR",
      socialSubtitle: "N'hésitez pas à me contacter"
    },
    skills: {
      title: "Mes",
      titleHighlight: "Compétences",
      subtitle: "Un aperçu de mes compétences techniques et outils maîtrisés.",
      description: "Voici les technologies et outils que j'utilise régulièrement dans mes projets.",
      sectionTitle: "Technologies & Outils",
      categories: {
        languages: "Langages",
        frontend: "Frontend",
        backend: "Backend",
        databases: "Bases de données",
        tools: "Outils & Autres"
      }
    },
    projects: {
      title: "Mes",
      titleHighlight: "Projets",
      subtitle: "Une sélection de projets sur lesquels j'ai travaillé, démontrant mes compétences en développement web, analyse de données et ingénierie logicielle.",
      description: "Chaque projet représente une solution concrète à des problématiques réelles, développées avec des technologies modernes.",
      sectionTitle: "Réalisations",
      allCategories: "Tous",
      code: "Code",
      demo: "Demo",
      categories: {
        fullstack: "Full Stack & IA",
        web: "Web Development",
        mobile: "Mobile"
      },
      fadakcare: {
        title: "FadakCare",
        description: "Plateforme intelligente de dépistage cardiovasculaire.",
        longDescription: "FadakCare est une plateforme médicale complète intégrant un dépistage intelligent basé sur des modèles d'IA, une gestion des patients, un système de rendez-vous, une téléconsultation WebRTC, ainsi que des tableaux de bord avancés pour médecins et administrateurs. Le projet combine backend .NET, frontend React, WebRTC, notifications et analyses prédictives."
      },
      capitalpetroleum: {
        title: "CapitalPetroleum",
        description: "Système de gestion complet pour entreprise pétrolière.",
        longDescription: "CapitalPetroleum est une solution de gestion d'entreprise destinée aux stations-service : gestion des ventes, stocks, fournisseurs, employés, paiements, et tableaux de bord en temps réel. L'application inclut une architecture modulaire, une authentification sécurisée, et des rapports automatiques."
      },
      collections: {
        title: "Collections",
        description: "Plateforme de gestion pour une boutique de couture.",
        longDescription: "Une application web permettant la gestion des produits, commandes, clients et paiements pour une boutique de couture. L'interface est simple, moderne et optimisée pour offrir une expérience fluide. Le projet inclut également un tableau de bord, un espace administrateur et un module statistique."
      },
      abs: {
        title: "ABS",
        description: "Application mobile de communication multimédia (annonces, vidéos, podcasts…).",
        longDescription: "ABS est une application mobile permettant le partage d'annonces, de vidéos et de podcasts, incluant un système d'authentification Firebase, une gestion en temps réel des publications, et une interface moderne conçue avec Flutter. Le backend assure une gestion sécurisée des utilisateurs, rôles et contenus."
      },
      capitalanalysis: {
        title: "Capital Analysis",
        description: "Site web corporatif pour entreprise Capital Analysis.",
        longDescription: "Un site vitrine professionnel présentant les services, activités et engagements de l'entreprise Capital Analysis. Développé avec une architecture moderne, une interface responsive et une mise en avant soignée du contenu pour renforcer l'identité numérique de l'entreprise."
      },
      nectar: {
        title: "Nectar",
        description: "Plateforme de résumé de documents propulsée par l'IA.",
        longDescription: "Nectar est une plateforme web intelligente qui transforme instantanément vos documents volumineux (PDF, Word, Images) en résumés clairs et précis. Grâce à une IA avancée, elle analyse et extrait l'essence de vos textes en s'adaptant strictement au nombre de mots que vous définissez. Fini les lectures interminables : Nectar élimine le superflu pour vous offrir une synthèse fluide, structurée et immédiatement exploitable."
      }
    },
    certifications: {
      title: "Mes",
      titleHighlight: "Certifications",
      subtitle: "Certifications et formations que j'ai obtenues pour développer mes compétences.",
      sectionTitle: "Certifications Obtenues",
      viewCertificate: "Voir le certificat"
    },
    resume: {
      title: "Mon",
      titleHighlight: "CV",
      subtitle: "Consultez mon parcours professionnel et académique.",
      download: "Télécharger le CV",
      view: "Voir le CV"
    },
    contact: {
      title: "Contact",
      titleHighlight: "Moi",
      subtitle: "N'hésitez pas à me contacter pour toute question ou opportunité de collaboration.",
      formTitle: "Envoyez-moi un message",
      name: "Nom",
      email: "Email",
      message: "Message",
      send: "Envoyer",
      sending: "Envoi en cours...",
      success: "Message envoyé avec succès !",
      error: "Erreur lors de l'envoi du message.",
      contactInfo: "Informations de contact",
      socialConnect: "Ou rejoignez-moi sur les réseaux sociaux"
    },
    footer: {
      designed: "Conçu et développé par",
      rights: "Tous droits réservés",
      description: "Étudiant en informatique passionné par l'IA et la création de solutions innovantes.",
      quickLinks: "Liens rapides",
      followMe: "Me suivre",
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact"
    },
    about: {
      badge: "À propos de moi",
      heroTitle: "Passionné par la",
      heroTitleHighlight: "technologie",
      heroSubtitle: "Étudiant en science de l'informatique passionné par l'innovation, l'IA et les nouvelles technologies.",
      heroDescription: "Découvrez mon parcours, mes valeurs et ce qui me motive au quotidien.",
      scrollLabel: "Défiler vers le contenu",
      whoAmI: "Qui suis-je ?",
      introText1: "Je suis Cheick Salihou Ahmed Cheick Chaibou, étudiant en Licence 3 Sciences Informatiques. Mon parcours m'a permis de développer une expertise solide en développement web, mobile et logiciel, avec une passion particulière pour l'intelligence artificielle et les systèmes intelligents.",
      introText2: "J'aime résoudre des problèmes complexes et transformer des idées en solutions concrètes. Chaque projet est pour moi une opportunité d'apprendre et de repousser mes limites.",
      contactMe: "Me contacter",
      downloadCV: "Télécharger CV",
      interests: "Centres d'intérêt",
      interestAI: "Intelligence Artificielle",
      interestWeb: "Développement",
      interestRobotics: "Robotique",
      interestResearch: "Recherche",
      statsBadge: "En chiffres",
      statsTitle: "Quelques statistiques",
      statsYears: "Années d'expérience",
      statsProjects: "Projets réalisés",
      statsTech: "Technologies maîtrisées",
      statsCerts: "Certifications",
      journeyBadge: "Mon parcours",
      journeyTitle: "Expériences & ",
      journeyTitleHighlight: "Formation",
      valuesBadge: "Mes valeurs",
      valuesTitle: "Ce qui me ",
      valuesTitleHighlight: "motive",
      valuePerformance: "Performance",
      valuePerformanceDesc: "Je m'engage à créer des solutions rapides, optimisées et évolutives.",
      valueInnovation: "Innovation",
      valueInnovationDesc: "Toujours à la recherche de nouvelles technologies et approches créatives.",
      valueCollaboration: "Collaboration",
      valueCollaborationDesc: "Je crois au travail d'équipe et à la communication transparente.",
      valueLearning: "Apprentissage continu",
      valueLearningDesc: "Chaque jour est une opportunité d'apprendre quelque chose de nouveau.",
      quote: "\"La meilleure façon de prédire l'avenir est de le créer.\"",
      ctaTitle: "Travaillons ensemble !",
      ctaDescription: "Vous avez un projet en tête ou souhaitez simplement discuter ? N'hésitez pas à me contacter.",
      ctaButton: "Démarrer une conversation",
      timeline: {
        education: {
          year: "2023 - Présent",
          title: "Licence 3 en Sciences Informatiques",
          organization: "Université de Monastir/FSM",
          description: "Spécialisation en développement logiciel, IA et systèmes d'information."
        },
        work: {
          year: "2025",
          title: "Développeur Full Stack",
          organization: "Projets Freelance",
          description: "Conception et développement de solutions web et mobiles (Capital-Analysis,CapitalPetroleum, Collections, ABS)."
        },
        certifications: {
          year: "2025",
          title: "Certifications Professionnelles",
          organization: "Linux Foundation, Cisco, etc.",
          description: "LPIC-1 Linux Essentials, Cisco Networking Basics, et autres certifications en développement."
        },
        milestone: {
          year: "2020",
          title: "Début du parcours en Informatique",
          organization: "LEP ISSA BERI",
          description: "Apprentissage des fondamentaux"
        }
      }
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      certifications: "Certifications",
      resume: "Resume",
      contact: "Contact"
    },
    home: {
      greeting: "Hi there!",
      intro: "I AM",
      name: "CHEICK SALIHOU AHMED CHEICK CHAIBOU",
      description: "Student, passionate about technology, robotics and AI, with a strong interest in innovative environments and intelligent systems.",
      viewProjects: "View my projects",
      myResume: "My Resume",
      aboutTitle: "WHO AM",
      aboutTitleHighlight: "I?",
      aboutText1: "Computer Science student (Bachelor's degree), passionate about modern technologies, robotics and artificial intelligence. My goal: analyze, understand and improve systems to create efficient and intuitive solutions.",
      aboutText2: "Skills in web, mobile and software development, as well as Linux, networks and databases. Focus on intelligent systems and emerging technologies.",
      socialTitle: "FIND ME ON",
      socialSubtitle: "Feel free to contact me"
    },
    skills: {
      title: "My",
      titleHighlight: "Skills",
      subtitle: "An overview of my technical skills and mastered tools.",
      description: "Here are the technologies and tools I regularly use in my projects.",
      sectionTitle: "Technologies & Tools",
      categories: {
        languages: "Languages",
        frontend: "Frontend",
        backend: "Backend",
        databases: "Databases",
        tools: "Tools & Others"
      }
    },
    projects: {
      title: "My",
      titleHighlight: "Projects",
      subtitle: "A selection of projects I've worked on, demonstrating my skills in web development, data analysis and software engineering.",
      description: "Each project represents a concrete solution to real problems, developed with modern technologies.",
      sectionTitle: "Achievements",
      allCategories: "All",
      code: "Code",
      demo: "Demo",
      categories: {
        fullstack: "Full Stack & AI",
        web: "Web Development",
        mobile: "Mobile"
      },
      fadakcare: {
        title: "FadakCare",
        description: "Smart cardiovascular screening platform.",
        longDescription: "FadakCare is a comprehensive medical platform integrating intelligent screening based on AI models, patient management, appointment system, WebRTC teleconsultation, as well as advanced dashboards for doctors and administrators. The project combines .NET backend, React frontend, WebRTC, notifications and predictive analytics."
      },
      capitalpetroleum: {
        title: "CapitalPetroleum",
        description: "Complete management system for petroleum company.",
        longDescription: "CapitalPetroleum is a business management solution for gas stations: sales management, inventory, suppliers, employees, payments, and real-time dashboards. The application includes a modular architecture, secure authentication, and automatic reports."
      },
      collections: {
        title: "Collections",
        description: "Management platform for a sewing shop.",
        longDescription: "A web application for managing products, orders, customers and payments for a sewing shop. The interface is simple, modern and optimized to offer a smooth experience. The project also includes a dashboard, an admin space and a statistics module."
      },
      abs: {
        title: "ABS",
        description: "Multimedia communication mobile app (announcements, videos, podcasts...).",
        longDescription: "ABS is a mobile application allowing the sharing of announcements, videos and podcasts, including a Firebase authentication system, real-time publication management, and a modern interface designed with Flutter. The backend ensures secure management of users, roles and content."
      },
      capitalanalysis: {
        title: "Capital Analysis",
        description: "Corporate website for Capital Analysis company.",
        longDescription: "A professional showcase site presenting the services, activities and commitments of the Capital Analysis company. Developed with a modern architecture, a responsive interface and a careful presentation of content to strengthen the company's digital identity."
      },
      nectar: {
        title: "Nectar",
        description: "AI-powered document summarization platform.",
        longDescription: "Nectar is an intelligent web platform that instantly transforms your large documents (PDF, Word, Images) into clear and precise summaries. Using advanced AI, it analyzes and extracts the essence of your texts while strictly adapting to the word count you define. No more endless reading: Nectar eliminates the superfluous to offer you a fluid, structured and immediately usable synthesis."
      }
    },
    certifications: {
      title: "My",
      titleHighlight: "Certifications",
      subtitle: "Certifications and training I obtained to develop my skills.",
      sectionTitle: "Obtained Certifications",
      viewCertificate: "View certificate"
    },
    resume: {
      title: "My",
      titleHighlight: "Resume",
      subtitle: "View my professional and academic background.",
      download: "Download Resume",
      view: "View Resume"
    },
    contact: {
      title: "Contact",
      titleHighlight: "Me",
      subtitle: "Feel free to contact me for any questions or opportunities.",
      formTitle: "Send me a message",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Error sending message.",
      contactInfo: "Contact Information",
      socialConnect: "Or connect with me on social media"
    },
    footer: {
      designed: "Designed and developed by",
      rights: "All rights reserved",
      description: "Computer Science student passionate about AI and creating innovative solutions.",
      quickLinks: "Quick Links",
      followMe: "Follow Me",
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact"
    },
    about: {
      badge: "About me",
      heroTitle: "Passionate about",
      heroTitleHighlight: "technology",
      heroSubtitle: "Computer Science student passionate about innovation, AI and new technologies.",
      heroDescription: "Discover my journey, my values and what motivates me every day.",
      scrollLabel: "Scroll to content",
      whoAmI: "Who am I?",
      introText1: "I am Cheick Salihou Ahmed Cheick Chaibou, a Bachelor's degree student in Computer Science. My journey has allowed me to develop strong expertise in web, mobile and software development, with a particular passion for artificial intelligence and intelligent systems.",
      introText2: "I love solving complex problems and turning ideas into concrete solutions. Each project is an opportunity for me to learn and push my limits.",
      contactMe: "Contact me",
      downloadCV: "Download CV",
      interests: "Areas of interest",
      interestAI: "Artificial Intelligence",
      interestWeb: "Development",
      interestRobotics: "Robotics",
      interestResearch: "Research",
      statsBadge: "By the numbers",
      statsTitle: "Some statistics",
      statsYears: "Years of experience",
      statsProjects: "Projects completed",
      statsTech: "Technologies mastered",
      statsCerts: "Certifications",
      journeyBadge: "My journey",
      journeyTitle: "Experiences & ",
      journeyTitleHighlight: "Education",
      valuesBadge: "My values",
      valuesTitle: "What ",
      valuesTitleHighlight: "drives me",
      valuePerformance: "Performance",
      valuePerformanceDesc: "I am committed to creating fast, optimized and scalable solutions.",
      valueInnovation: "Innovation",
      valueInnovationDesc: "Always looking for new technologies and creative approaches.",
      valueCollaboration: "Collaboration",
      valueCollaborationDesc: "I believe in teamwork and transparent communication.",
      valueLearning: "Continuous Learning",
      valueLearningDesc: "Every day is an opportunity to learn something new.",
      quote: "\"The best way to predict the future is to create it.\"",
      ctaTitle: "Let's work together!",
      ctaDescription: "Have a project in mind or just want to chat? Feel free to reach out.",
      ctaButton: "Start a conversation",
      timeline: {
        education: {
          year: "2023 - Present",
          title: "Bachelor's Degree in Computer Science",
          organization: "University of Monastir/FSM",
          description: "Specialization in software development, AI and information systems."
        },
        work: {
          year: "2025",
          title: "Full Stack Developer",
          organization: "Freelance Projects",
          description: "Design and development of web and mobile solutions for various clients (FadakCare, CapitalPetroleum, Collections)."
        },
        certifications: {
          year: "2025",
          title: "Professional Certifications",
          organization: "Linux Foundation, Cisco, etc.",
          description: "LPIC-1 Linux Essentials, Cisco Networking Basics, and other development certifications."
        },
        milestone: {
          year: "2020",
          title: "Beginning of development journey",
          organization: "LEP ISSA BERI",
          description: "Learning fundamentals"
        }
      }
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
