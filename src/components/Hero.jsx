// src/components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white rounded-lg mt-6 shadow-lg">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Personalized AI Tutoring
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-lg md:text-xl max-w-xl"
      >
        Learn, practice, and prepare for your courses anytime, anywhere. Sign in to get started!
      </motion.p>
    </div>
  );
}
