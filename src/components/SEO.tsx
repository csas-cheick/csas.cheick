import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: FC<SEOProps> = ({
  title,
  description,
  keywords,
  image = "/og-image.png",
  url = "https://csas-cheick.vercel.app",
}) => {
  const { language } = useLanguage();
  
  const defaultTitle = language === 'fr' 
    ? "csas_cheick | Étudiant en Science de l'Informatique" 
    : "csas_cheick | Computer Science Student";
    
  const defaultDescription = language === 'fr'
    ? "Site web de Cheick Salihou Ahmed - Étudiant en informatique passionné par l'IA, le développement web, mobile et les technologies modernes."
    : "Website of Cheick Salihou Ahmed - Computer Science student passionate about AI, web development, mobile and modern technologies.";
    
  const defaultKeywords = language === 'fr'
    ? "développeur, full stack, react, typescript, .net, portfolio, web, mobile, flutter, IA"
    : "developer, full stack, react, typescript, .net, portfolio, web, mobile, flutter, AI";

  const seoTitle = title ? `${title} | csas_cheick` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;

  return (
    <Helmet>
      {/* Google Site Verification */}
      <meta name="google-site-verification" content="_o-OrJ30ZOTNuO300M9oIunLqdqxRYRNH48fsTjzImQ" />
      
      {/* Primary Meta Tags */}
      <html lang={language} />
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content="Cheick Salihou Ahmed Cheick Chaibou" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={language === 'fr' ? 'fr_FR' : 'en_US'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@csas_cheick" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#4f46e5" />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
