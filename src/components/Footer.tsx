"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 border-t border-slate-800/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Carlos González
            </div>
            <p className="text-slate-400 text-sm flex items-center gap-2 justify-center md:justify-start">
              Hecho con <FaHeart className="text-red-500 animate-pulse" /> usando React + Vite
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <motion.a
              href="https://github.com/CarlosGonzalez7u7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-slate-800/50 hover:bg-violet-500/20 border border-slate-700 hover:border-violet-500/50 rounded-lg transition-all"
            >
              <FaGithub className="text-xl text-slate-300 hover:text-violet-400 transition-colors" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-slate-800/50 hover:bg-blue-500/20 border border-slate-700 hover:border-blue-500/50 rounded-lg transition-all"
            >
              <FaLinkedin className="text-xl text-slate-300 hover:text-blue-400 transition-colors" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 rounded-lg transition-all"
            >
              <FaEnvelope className="text-xl text-slate-300 hover:text-cyan-400 transition-colors" />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-slate-500 text-sm"
        >
          © {currentYear} Carlos González. Todos los derechos reservados.
        </motion.div>
      </div>
    </footer>
  )
}
