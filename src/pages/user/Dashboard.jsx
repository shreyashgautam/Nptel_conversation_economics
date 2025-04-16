import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Dashboard = () => {
  const weeks = Array.from({ length: 13 }, (_, i) => `Week ${i}`);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleClick = (weekNumber) => {
    navigate(`week${weekNumber}`);
  };

  const handleFullTestClick = () => {
    navigate('/fulltest');
  };

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center p-10 relative overflow-hidden ">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            className="absolute inset-0 flex justify-center items-center z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="h-24 w-24 border-t-4 border-blue-500 rounded-full animate-spin"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </motion.div>
        ) : (
          <>
            <motion.h1
              className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 z-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Conversation Economics
            </motion.h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mb-6 relative z-10">
              {weeks.map((week, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  onClick={() => handleClick(index)}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-gray-900 p-6 rounded-xl shadow-md cursor-pointer border-l-4 border-blue-500 
                  transition-all duration-300 hover:border-pink-500 hover:bg-gradient-to-r from-blue-800/30 to-pink-800/30"
                >
                  <h3 className="text-2xl font-semibold mb-2 text-blue-400 group-hover:text-white transition-all duration-300">
                    {week}
                  </h3>
                  <p className="text-sm text-gray-300 group-hover:text-gray-100">
                    Progress: <span className="font-medium text-white">Not Started</span>
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              onClick={handleFullTestClick}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.97 }}
              className="group bg-gray-900 p-6 rounded-xl shadow-md cursor-pointer border-l-4 border-purple-500 
              w-full max-w-6xl relative z-10 hover:bg-gradient-to-r from-purple-700/30 to-green-700/30 
              hover:border-green-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2 text-purple-400 group-hover:text-white transition-all duration-300">
                Full Test
              </h3>
              <p className="text-sm text-gray-300 group-hover:text-gray-100">
                Click here to take the full test with random questions.
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
