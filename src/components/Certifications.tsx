"use client";

import { motion } from "framer-motion";
import {
  FaCertificate,
  FaGraduationCap,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiCisco } from "react-icons/si";
import { getImageUrl } from "../utils/getImageUrl";

export default function Certifications() {
  const certifications = [
    {
      title: "CCNAv7: Introduction to Networks",
      issuer: "Cisco",
      icon: SiCisco,
      color: "text-blue-400",
      date: "2023",
      credential: "/Certificaciones/Cisco1.pdf",
      skills: ["Redes", "TCP/IP", "Cisco IOS"],
    },
    {
      title: "CCNAv7: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco",
      icon: SiCisco,
      color: "text-blue-400",
      date: "2023",
      credential: "/Certificaciones/Cisco2.pdf",
      skills: ["Switching", "Routing", "Wireless"],
    },
    {
      title: "CCNA: Redes Empresariales, Seguridad y Automatización",
      issuer: "Cisco",
      icon: SiCisco,
      color: "text-blue-400",
      date: "2023",
      credential: "/Certificaciones/Cisco3.pdf",
      skills: ["Enterprise", "Security", "Automation"],
    },
    {
      title: "Feria Michoacana de Ciencias e Ingenierías 2024",
      issuer: "ICTI Michoacán",
      icon: FaCertificate,
      color: "text-purple-400",
      date: "2024",
      credential: "/Certificaciones/FeriaCiencias2024.jpg",
      skills: ["FIREWATCH", "Nivel Superior"],
    },
    {
      title: "Taller de Robótica - Expositor Semana Gandhi 2025",
      issuer: "Escuela Gandhi",
      icon: FaCertificate,
      color: "text-green-400",
      date: "2025",
      credential: "/Certificaciones/RecTaller2.jpg",
      skills: ["Robótica", "Expositor", "Educación"],
    },
    {
      title: "Innovation Fest 2025",
      issuer: "ICTI",
      icon: FaCertificate,
      color: "text-orange-400",
      date: "2025",
      credential: "/Certificaciones/Hackathon2025.jpg",
      skills: ["Hackathon", "Innovación"],
    },
    {
      title: "Cumbre Nacional InnovatecNM 2025 - FIREWATCH",
      issuer: "TecNM",
      icon: FaCertificate,
      color: "text-emerald-400",
      date: "2025",
      credential: "/Certificaciones/Estatal2025.jpg",
      skills: ["Sostenibilidad", "Cambio Climático"],
    },
    {
      title: "Feria de la Ciencia Zona 008 - Expositor",
      issuer: "SEP",
      icon: FaCertificate,
      color: "text-cyan-400",
      date: "2024",
      credential: "/Certificaciones/RecTaller.jpg",
      skills: ["Expositor", "Divulgación"],
    },
    {
      title: "Innovation Fest 2024 - Hackathon",
      issuer: "ICTI",
      icon: FaCertificate,
      color: "text-orange-400",
      date: "2024",
      credential: "/Certificaciones/Hackathon2024.jpg",
      skills: ["Hackathon", "1er Lugar"],
    },
    {
      title: "InnovatecNM 2025 - NIGHTRAPTOR (INNOBÓTICA)",
      issuer: "TecNM",
      icon: FaCertificate,
      color: "text-purple-400",
      date: "2025",
      credential: "/Certificaciones/Satelite.jpg",
      skills: ["Vehículos Aéreos", "UAV"],
    },
  ];

  return (
    <section id="certificaciones" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block p-3 bg-indigo-500/10 rounded-2xl mb-4"
          >
            <FaCertificate className="text-4xl text-indigo-400" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Certificaciones y Reconocimientos
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Formación continua y reconocimientos profesionales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10, rotateY: 5 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-indigo-500/50 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-slate-800/50 rounded-lg group-hover:scale-110 transition-transform">
                    <Icon className={`text-3xl ${cert.color}`} />
                  </div>
                  <FaGraduationCap className="text-2xl text-indigo-400" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors leading-tight">
                  {cert.title}
                </h3>

                <p className="text-slate-400 text-sm mb-3">{cert.issuer}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Fecha:</span>
                    <span className="text-slate-300">{cert.date}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-xs font-semibold text-indigo-400 mb-2">
                    Habilidades:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded text-xs text-indigo-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.a
                  href={getImageUrl(cert.credential.slice(1))}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white text-sm font-medium rounded-lg transition-all"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Ver Credencial
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
