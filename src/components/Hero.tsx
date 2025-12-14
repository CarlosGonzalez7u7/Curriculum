"use client";

import { motion } from "framer-motion";
// Eliminamos la importación de next/image que te daba error
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaMobileAlt,
  FaRobot,
} from "react-icons/fa";

export default function Hero() {
  const stats = [
    { icon: FaCode, label: "Proyectos Web", value: "15+" },
    { icon: FaMobileAlt, label: "Apps Móviles", value: "8+" },
    { icon: FaRobot, label: "Robots", value: "5+" },
  ];

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-20 px-4"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ... (Todo el código de la izquierda se mantiene igual) ... */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full mb-6"
            >
              <span className="text-violet-400 font-medium">
                Ingeniero en Sistemas Computacionales
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Juan Carlos Gonzalez Orozco
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-slate-400 mb-8 leading-relaxed"
            >
              Desarrollador Full Stack apasionado por crear soluciones
              innovadoras. Especializado en desarrollo web, aplicaciones
              móviles, robótica, Redes, y más. Con experiencia en tecnologías
              modernas y enfoque en la calidad del código.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 mb-12"
            >
              <motion.a
                href="https://github.com/CarlosGonzalez7u7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-slate-800/50 hover:bg-violet-500/20 border border-slate-700 hover:border-violet-500/50 rounded-xl transition-all"
              >
                <FaGithub className="text-2xl text-slate-300 hover:text-violet-400 transition-colors" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/juan-carlos-gonzalez-orozco-79415335b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-slate-800/50 hover:bg-blue-500/20 border border-slate-700 hover:border-blue-500/50 rounded-xl transition-all"
              >
                <FaLinkedin className="text-2xl text-slate-300 hover:text-blue-400 transition-colors" />
              </motion.a>
              <motion.a
                href="https://mail.google.com/mail/u/1/#inbox"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 rounded-xl transition-all"
              >
                <FaEnvelope className="text-2xl text-slate-300 hover:text-cyan-400 transition-colors" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl"
                  >
                    <Icon className="text-3xl text-violet-400 mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* DERECHA: Imagen Animada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-blue-500/20 rounded-full blur-3xl"
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative bg-gradient-to-br from-violet-500/10 to-blue-500/10 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent" />
              <div className="relative aspect-square flex items-center justify-center">
                {/* CAMBIO: Usamos una etiqueta <img> normal envuelta en el motion div */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  // Estilos para el contenedor circular de la imagen
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-violet-500/20 shadow-2xl"
                >
                  <img
                    src="./yo.jpg"
                    alt="Juan Carlos Gonzalez Orozco"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
