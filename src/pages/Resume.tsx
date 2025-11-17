import { FC, useState } from "react";
import { FaDownload, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import illustrationCV from "../assets/illustration_cv.svg";

// Configuration de PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume: FC = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center px-4 py-6 md:py-10 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
            {/* Texte à gauche */}
            <div className="space-y-2 md:space-y-3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800">
                Mon <span className="text-indigo-600">CV</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                Découvrez mon parcours professionnel, mes compétences et mes réalisations. 
                Un aperçu complet de mon expérience en développement et analyse de données.
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3 pt-2">
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 text-sm md:text-base bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <FaDownload className="text-base md:text-lg" />
                  Télécharger le CV
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById('cv-viewer');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="px-4 md:px-5 py-2 md:py-2.5 text-sm md:text-base border-2 border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-all duration-300"
                >
                  Consulter en ligne
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
      <section id="cv-viewer" className="py-6 md:py-10 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
        {/* Header avec bouton de téléchargement */}
        <div className="flex flex-col items-center mb-4 md:mb-6 gap-2 md:gap-3">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">Aperçu du CV</h2>
          <p className="text-sm md:text-base text-gray-600">Parcourez les pages de mon curriculum vitae</p>
        </div>

        {/* Aperçu du PDF */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-8">
          <div className="flex flex-col items-center">
            <Document
              file="/cv.pdf"
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
                  Précédent
                </button>

                <span className="text-gray-700 font-medium">
                  Page {pageNumber} sur {numPages}
                </span>

                <button
                  onClick={goToNextPage}
                  disabled={pageNumber >= numPages}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Suivant
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
            Télécharger le CV au format PDF
          </button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Resume;
