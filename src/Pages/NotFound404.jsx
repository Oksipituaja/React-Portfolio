import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound404() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>
        <p className="text-2xl font-semibold mb-2">Oops! Page not found.</p>
        <p className="text-gray-400 mb-6">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-2xl transition-colors duration-300"
        >
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
