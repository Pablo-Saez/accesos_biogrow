import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * Versión mejorada con estética tecnológica tipo Vite.
 * Props:
 * - title, description, image
 * - colorFrom, colorTo: define el gradiente base
 * - reverse: invierte la disposición texto/imagen
 * - buttonText, buttonLink: CTA
 */
export default function AppSectionBase({
  title,
  description,
  image,
  colorFrom = "#0f172a", // gris oscuro base
  colorTo = "#1e293b",   // tono intermedio
  buttonText = "Ver aplicación",
  buttonLink = "#",
  reverse = false,
}) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className={`flex flex-col md:flex-row items-center justify-between min-h-screen px-10 md:px-24 py-20 relative overflow-hidden ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
      style={{
        background: `radial-gradient(circle at top left, ${colorFrom}, ${colorTo})`,
      }}
    >
      {/* --- fondo de líneas / glow --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,255,0.15),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,0,200,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 backdrop-blur-[60px] bg-black/10 pointer-events-none" />

      {/* --- Contenido texto --- */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 120 : -120, scale: 0.9 }}
        animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="z-10 max-w-xl space-y-6 drop-shadow-[0_0_10px_rgba(0,255,200,0.6)]"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-500">
          {title}
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed drop-shadow-[0_0_6px_rgba(0,255,255,0.3)]">
          {description}
        </p>

        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 relative group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></span>
          <span className="relative px-8 py-3 bg-black/80 border border-cyan-500 text-cyan-300 font-semibold rounded-full tracking-wide">
            {buttonText}
          </span>
        </a>
      </motion.div>

      {/* --- Imagen --- */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -120 : 120, rotate: -2 }}
        animate={inView ? { opacity: 1, x: 0, rotate: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        className="z-10 mt-16 md:mt-0"
      >
        <img
          src={image}
          alt={title}
          className="w-[320px] md:w-[450px] rounded-3xl shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:scale-105 transition-transform duration-500"
        />
      </motion.div>
    </section>
  );
}