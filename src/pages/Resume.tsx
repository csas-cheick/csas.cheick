import { FC, useState } from "react";
import { FaDownload, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import illustrationCV from "../assets/illustration_cv.svg";
import { useLanguage } from "../context/LanguageContext";

// Configuration de PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume: FC = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { t, language } = useLanguage();

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv2.pdf';
    link.download = 'CV_CHEICK_SALIHOU_AHMED_CHEICK_CHAIBOU.pdf';
    link.click();
  };

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center px-4 py-6 md:py-10 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
            {/* Texte à gauche */}
            <div className="space-y-2 md:space-y-3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 dark:text-white">
                {t.resume.title} <span className="text-indigo-600 dark:text-indigo-400">{t.resume.titleHighlight}</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                {t.resume.subtitle}
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3 pt-2">
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 text-sm md:text-base bg-indigo-600 dark:bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <FaDownload className="text-base md:text-lg" />
                  {t.resume.download}
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById('cv-viewer');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="px-4 md:px-5 py-2 md:py-2.5 text-sm md:text-base border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  {t.resume.view}
                </button>
              </div>
            </div>

            {/* Illustration à droite */}
            <div className="flex justify-center mt-3 md:mt-0">
              <img 
                src={illustrationCV} 
                alt="CV Illustration" 
                className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-xs animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CV Viewer Section */}
      <section id="cv-viewer" className="py-6 md:py-10 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto max-w-4xl">
        {/* Header avec bouton de téléchargement */}
        <div className="flex flex-col items-center mb-4 md:mb-6 gap-2 md:gap-3">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
            {language === 'fr' ? "Aperçu du CV" : "Resume Preview"}
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
            {language === 'fr' ? "Parcourez les pages de mon curriculum vitae" : "Browse through my resume pages"}
          </p>
        </div>

        {/* Aperçu du PDF */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden p-8 transition-colors duration-300">
          <div className="flex flex-col items-center">
            <Document
              file="/cv2.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="flex items-center justify-center h-96">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                </div>
              }
            >
              <Page
                pageNumber={pageNumber}
                width={Math.min(window.innerWidth * 0.8, 900)}
                renderTextLayer={true}
                renderAnnotationLayer={true} 
              />
            </Document>

            {/* Navigation entre les pages */}
            {numPages > 0 && (
              <div className="mt-6 flex items-center gap-4">
                <button
                  onClick={goToPrevPage}
                  disabled={pageNumber <= 1}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  <FaChevronLeft />
                  {language === 'fr' ? "Précédent" : "Previous"}
                </button>

                <span className="text-gray-700 font-medium">
                  {language === 'fr' ? `Page ${pageNumber} sur ${numPages}` : `Page ${pageNumber} of ${numPages}`}
                </span>

                <button
                  onClick={goToNextPage}
                  disabled={pageNumber >= numPages}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  {language === 'fr' ? "Suivant" : "Next"}
                  <FaChevronRight />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bouton de téléchargement en bas */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleDownload}
            className="flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <FaDownload className="text-xl animate-bounce" />
            {language === 'fr' ? "Télécharger le CV au format PDF" : "Download Resume as PDF"}
          </button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Resume;
