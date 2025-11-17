import { FC, useState } from "react";
import { FaChevronDown, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from "react-icons/fa";
import illustrationContact from "../assets/illustration_contact.svg";
import emailjs from '@emailjs/browser';

const Contact: FC = () => {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center px-4 py-4 md:py-6 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-3 md:gap-6 items-center">
            {/* Texte à gauche */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-2 md:mb-3">
                Me <span className="text-indigo-600">Contacter</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-2 md:mb-3">
                Vous avez un projet en tête ou souhaitez discuter d'une opportunité ? 
                N'hésitez pas à me contacter !
              </p>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-3 md:mb-4">
                Je suis toujours ouvert aux <strong className="text-indigo-600">nouvelles collaborations</strong>, 
                <strong className="text-indigo-600"> projets freelance</strong> et <strong className="text-indigo-600">opportunités professionnelles</strong>.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-2 md:space-y-3 mb-3 md:mb-4">
                <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-indigo-100 p-1.5 md:p-2 rounded-full">
                    <FaEnvelope className="text-indigo-600 text-sm md:text-base" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-500">Email</p>
                    <a href="mailto:csas.cheick@gmail.com" className="text-xs md:text-sm text-gray-800 font-medium hover:text-indigo-600">
                      csas.cheick@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-indigo-100 p-1.5 md:p-2 rounded-full">
                    <FaPhone className="text-indigo-600 text-sm md:text-base" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-500">Téléphone</p>
                    <a href="tel:+21653414178" className="text-xs md:text-sm text-gray-800 font-medium hover:text-indigo-600">
                      +216 53 414 178
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-indigo-100 p-1.5 md:p-2 rounded-full">
                    <FaMapMarkerAlt className="text-indigo-600 text-sm md:text-base" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-500">Localisation</p>
                    <p className="text-xs md:text-sm text-gray-800 font-medium">Monastir, Tunisie</p>
                  </div>
                </div>
              </div>
              
              {/* Scroll indicator */}
              <button
                onClick={scrollToForm}
                className="animate-bounce mt-1 text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
                aria-label="Défiler vers le formulaire"
              >
                <FaChevronDown className="text-xl md:text-2xl" />
              </button>
            </div>

            {/* Illustration à droite */}
            <div className="flex justify-center mt-2 md:mt-0">
              <img 
                src={illustrationContact} 
                alt="Illustration contact" 
                className="w-full max-w-[120px] sm:max-w-[160px] md:max-w-xs h-auto animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form-section" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Envoyez-moi un message
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg flex items-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.</span>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg flex items-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>Une erreur s'est produite. Veuillez réessayer.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none transition-colors"
                    placeholder="votre.email@exemple.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none transition-colors"
                  placeholder="Objet de votre message"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none transition-colors resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Ou rejoignez-moi sur les réseaux sociaux
            </h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://linkedin.com/in/csas-cheick"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-blue-600"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://github.com/csas-cheick"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-800"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://twitter.com/csas_cheick"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-blue-400"
              >
                <FaTwitter className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
