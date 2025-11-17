import { motion } from "framer-motion";

export default function LinkCard({ title, url }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-emerald-500/30 hover:scale-105 transition-transform w-72 text-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <h2 className="text-xl font-semibold text-emerald-400 mb-2">{title}</h2>
      <p className="text-gray-400">Ir a {title}</p>
    </motion.a>
  );
}