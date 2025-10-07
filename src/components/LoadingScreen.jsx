import { motion, AnimatePresence } from 'framer-motion';
import logo from '/assets/FavaraTech.png'; // update path if different

export default function LoadingScreen({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <motion.img
            src={logo}
            alt="FavaraTech Logo"
            className="w-32 h-32 mb-6"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
          <motion.div
            className="text-xl font-semibold text-green-600 dark:text-green-400 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            FavaraTech
          </motion.div>

          {/* Optional loading bar */}
          <motion.div
            className="mt-6 w-32 h-1 bg-gray-200 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="h-full bg-green-600 dark:bg-green-400"
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
