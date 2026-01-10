import { FC } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

interface AvailabilityBadgeProps {
  variant?: "default" | "compact";
}

const AvailabilityBadge: FC<AvailabilityBadgeProps> = ({ variant = "default" }) => {
  const { language } = useLanguage();
  
  // Configuration - vous pouvez modifier ces valeurs
  const isAvailable = true; // true = disponible, false = non disponible
  const availabilityText = language === 'fr' 
    ? (isAvailable ? "Disponible pour freelance" : "Non disponible actuellement")
    : (isAvailable ? "Available for freelance" : "Currently unavailable");

  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center gap-2"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            isAvailable ? "bg-green-400" : "bg-orange-400"
          }`} />
          <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
            isAvailable ? "bg-green-500" : "bg-orange-500"
          }`} />
        </span>
        <span className={`text-sm font-medium ${
          isAvailable 
            ? "text-green-600 dark:text-green-400" 
            : "text-orange-600 dark:text-orange-400"
        }`}>
          {availabilityText}
        </span>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className={`inline-flex items-center gap-3 px-4 py-2 rounded-full border backdrop-blur-sm ${
        isAvailable 
          ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800" 
          : "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800"
      }`}
    >
      <span className="relative flex h-3 w-3">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
          isAvailable ? "bg-green-400" : "bg-orange-400"
        }`} />
        <span className={`relative inline-flex rounded-full h-3 w-3 ${
          isAvailable ? "bg-green-500" : "bg-orange-500"
        }`} />
      </span>
      <span className={`text-sm font-medium ${
        isAvailable 
          ? "text-green-700 dark:text-green-300" 
          : "text-orange-700 dark:text-orange-300"
      }`}>
        {availabilityText}
      </span>
    </motion.div>
  );
};

export default AvailabilityBadge;
