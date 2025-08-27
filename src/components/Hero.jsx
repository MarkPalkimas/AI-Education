// src/components/Hero.jsx
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold text-white mb-4"
      >
        Welcome to AI Education
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-lg md:text-xl text-gray-200 max-w-xl"
      >
        Personalized AI tutor for students and educators. Learn, prepare, and excel—anytime, anywhere.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500"
      >
        Get Started
      </motion.button>
    </div>
  );
};

export default Hero;
