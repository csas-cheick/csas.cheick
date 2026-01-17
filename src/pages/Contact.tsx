import { FC, useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from "react-icons/fa";
import illustrationContact from "../assets/illustration_contact.svg";
import emailjs from '@emailjs/browser';
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";

const Contact: FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const scrollToForm = () => {
    const element = document.getElementById('contact-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    try {
      // Configuration EmailJS - À remplacer par vos propres identifiants
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Paramètres du template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Cheick CSAS',
      };

      // Envoi de l'email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setIsSubmitting(false);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <>
      <SEO 
        title="Contact"
        description={language === 'fr' 
          ? "Contactez-moi pour vos projets de développement web, mobile ou IA. Je suis disponible pour des collaborations et opportunités."
          : "Contact me for your web, mobile or AI development projects. I am available for collaborations and opportunities."}
      />
      <div className="min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center px-4 py-4 md:py-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-3 md:gap-6 items-center"
          >
            {/* Texte à gauche */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 dark:text-white mb-2 md:mb-3">
                {t.contact.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">{t.contact.titleHighlight}</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-2 md:mb-3">
                {t.contact.subtitle}
              </p>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-3 md:mb-4">
                {language === 'fr' 
                  ? "Je suis toujours ouvert aux nouvelles collaborations, projets freelance et opportunités professionnelles."
                  : "I am always open to new collaborations, freelance projects and professional opportunities."}
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-2 md:space-y-3 mb-3 md:mb-4">
                <motion.div 
                  className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1.5 md:p-2 rounded-full">
                    <FaEnvelope className="text-indigo-600 dark:text-indigo-400 text-sm md:text-base" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400">Email</p>
                    <a href="mailto:csas.cheick@gmail.com" className="text-xs md:text-sm text-gray-800 dark:text-white font-medium hover:text-indigo-600 dark:hover:text-indigo-400">
                      csas.cheick@gmail.com
                    </a>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1.5 md:p-2 rounded-full">
                    <FaPhone className="text-indigo-600 dark:text-indigo-400 text-sm md:text-base" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400">{language === 'fr' ? "Téléphone" : "Phone"}</p>
                    <a href="tel:+21653414178" className="text-xs md:text-sm text-gray-800 dark:text-white font-medium hover:text-indigo-600 dark:hover:text-indigo-400">
                      +216 53 414 178
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1.5 md:p-2 rounded-full">
                    <FaMapMarkerAlt className="text-indigo-600 dark:text-indigo-400 text-sm md:text-base" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400">{language === 'fr' ? "Localisation" : "Location"}</p>
                    <p className="text-xs md:text-sm text-gray-800 dark:text-white font-medium">
                      {language === 'fr' ? "Monastir, Tunisie" : "Monastir, Tunisia"}
                    </p>
                  </div>
                </motion.div>
              </div>
              
              {/* Scroll indicator */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={scrollToForm}
                className="animate-bounce mt-1 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors cursor-pointer"
                aria-label={language === 'fr' ? "Défiler vers le formulaire" : "Scroll to form"}
              >
                <FaChevronDown className="text-xl md:text-2xl" />
              </motion.button>
            </motion.div>

            {/* Illustration à droite */}
            <motion.div 
              className="flex justify-center mt-2 md:mt-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src={illustrationContact} 
                alt="Illustration contact" 
                className="w-full max-w-[120px] sm:max-w-[160px] md:max-w-xs h-auto animate-float"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form-section" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
            {t.contact.formTitle}
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            {language === 'fr' 
              ? "Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais."
              : "Fill out the form below and I will get back to you as soon as possible."}
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors duration-300">
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg flex items-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t.contact.success}</span>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-lg flex items-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>{t.contact.error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {t.contact.name} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:border-indigo-600 dark:focus:border-indigo-400 focus:outline-none transition-colors"
                    placeholder={language === 'fr' ? "Votre nom" : "Your name"}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:border-indigo-600 dark:focus:border-indigo-400 focus:outline-none transition-colors"
                    placeholder={language === 'fr' ? "votre.email@exemple.com" : "your.email@example.com"}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {language === 'fr' ? "Sujet" : "Subject"} *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:border-indigo-600 dark:focus:border-indigo-400 focus:outline-none transition-colors"
                  placeholder={language === 'fr' ? "Objet de votre message" : "Subject of your message"}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t.contact.message} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:border-indigo-600 dark:focus:border-indigo-400 focus:outline-none transition-colors resize-none"
                  placeholder={language === 'fr' ? "Décrivez votre projet ou votre demande..." : "Describe your project or request..."}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-indigo-600 dark:bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    {t.contact.sending}
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    {t.contact.send}
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
              {t.contact.socialConnect}
            </h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://linkedin.com/in/cheick-chaibou-cheick-salihou-ahmed-8b1aa3316"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-blue-600"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://github.com/csas-cheick"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-800 dark:text-white"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://twitter.com/csas_cheick"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-blue-400"
              >
                <FaTwitter className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;
