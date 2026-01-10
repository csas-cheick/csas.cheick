import { FC, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedBackground from "./components/AnimatedBackground";
import LoadingSpinner from "./components/LoadingSpinner";
import FloatingCTA from "./components/FloatingCTA";

// Lazy loading des pages pour améliorer les performances
const Bienvenue = lazy(() => import("./Accueil"));
const About = lazy(() => import("./pages/About"));
const Competences = lazy(() => import("./pages/Competences"));
const Projets = lazy(() => import("./pages/Projets"));
const Certifications = lazy(() => import("./pages/Certifications"));
const Resume = lazy(() => import("./pages/Resume"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner size="lg" />
  </div>
);

const AnimatedRoutes: FC = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Bienvenue />} />
          <Route path="/about" element={<About />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App: FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col transition-colors duration-300">
        <AnimatedBackground />
        <Header />
        <main className="flex-1 relative z-10">
          <AnimatedRoutes />
        </main>
        <Footer />
        <ScrollToTop />
        <FloatingCTA />
      </div>
    </Router>
  );
};

export default App;
