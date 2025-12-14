"use client";

import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaAward, FaExternalLinkAlt } from "react-icons/fa";
import ImageGallery from "./ImageGallery";
import { getImageUrl } from "../utils/getImageUrl";

export default function Competitions() {
  const competitions = [
    {
      title: "Presentación de Robots a niños de Primaria",
      position: "Expositor",
      icon: FaAward,
      color: "from-blue-400 to-cyan-400",
      description:
        "Presentación de robots a niños de la primaria Josefa Ortiz de Domínguez junto al club de robótica DeerBotic",
      shortDescription: "Presentación de Robots a niños de Primaria",
      date: "2024",
      images: [
        getImageUrl("Robotica/pri1.jpg"),
        getImageUrl("Robotica/pri2.jpg"),
      ],
    },
    {
      title: "Feria de Ciencias Estatal - Michoacán",
      position: "Participante",
      icon: FaTrophy,
      color: "from-purple-400 to-pink-400",
      description:
        "Participación en la feria de Ciencias Nacional con proyecto FIREWATCH mejorado. Se diseñó y fabricó una PCB propia en Proteus, se añadieron protecciones electrónicas con reguladores, capacitores y transistores, paneles solares más grandes, sensor de movimiento por vibraciones, módulos LoRa para ampliar alcance de señales y se reprogramó todo el sistema incluyendo bot para Telegram y WhatsApp.",
      shortDescription:
        "Participación en feria de ciencias de Michoacán Diciembre 2024",
      date: "Diciembre 2024",
      achievement: "Proyecto FIREWATCH - Nivel Superior",
      images: [
        getImageUrl("FeriaCiencias/fire1.jpg"),
        getImageUrl("FeriaCiencias/fire2.jpg"),
        getImageUrl("FeriaCiencias/fire3.jpg"),
      ],
    },
    {
      title: "Estatal de Robótica - Ciudad Hidalgo",
      position:
        "1er Lugar Innovación + 1er Lugar RC + 3er Lugar Robots de Guerra",
      icon: FaTrophy,
      color: "from-yellow-400 to-orange-400",
      description:
        "Participación en el Estatal de Robótica en Ciudad Hidalgo, Michoacán compitiendo contra escuelas de nivel medio y superior. Rol: Programador trabajando con equipo de la carrera de Electrónica.",
      shortDescription:
        "Reconocimiento por participación destacada en el Estatal de Robótica e Innovación.",
      date: "2024",
      achievement:
        "1er Lugar en Innovación, 1er Lugar en carros RC y 3er Lugar en Robots de Guerra",
      entrevista: "https://www.facebook.com/share/v/1AMuyZriyn/",
      images: [
        getImageUrl("Estatal/hid1.jpg"),
        getImageUrl("Estatal/hid2.jpg"),
        getImageUrl("Estatal/hid3.jpg"),
      ],
    },
    {
      title: "Hackathon ICTI 2024 - Morelia",
      position: "1er Lugar Estatal",
      icon: FaTrophy,
      color: "from-yellow-400 to-orange-400",
      description:
        "Hackathon organizado por el ICTI en Morelia, Michoacán en junio de 2024. Tres días de trabajo intenso desarrollando proyecto con equipo de cinco integrantes (cuatro de electrónica y uno de sistemas), logrando el 1er lugar a nivel estatal.",
      shortDescription:
        "Hackathon ICTI Morelia 2024 — 1er lugar estatal en proyecto interdisciplinario de sistemas y electrónica.",
      date: "Junio 2024",
      achievement: "Primer lugar estatal - Proyecto interdisciplinario",
      prize: "1er lugar estatal",
      entrevista: "https://www.facebook.com/share/v/16KaMzjipU/",
      images: [
        getImageUrl("Hacka2024/hack1.jpg"),
        getImageUrl("Hacka2024/hack2.jpg"),
        getImageUrl("Hacka2024/hack3.jpg"),
      ],
    },
    {
      title: "Hackathon 2025 - Innovation Fest",
      position: "2do y 3er Lugar",
      icon: FaMedal,
      color: "from-slate-300 to-slate-400",
      description:
        "Hackathon 2025 con equipo de Ingeniería en Sistemas. Desarrollamos Ado-Pet, solución tecnológica para perros callejeros y perreras saturadas. Página web para adopción responsable de mascotas creada con PHP Vanilla, HTML, CSS, JavaScript y MySQL.",
      shortDescription:
        "Hackathon 2025 — 2do y 3er lugar con Ado-Pet, plataforma web para adopción de mascotas desarrollada en PHP, HTML, CSS, JS y MySQL.",
      date: "2025",
      achievement: "2do y 3er lugar - Plataforma Ado-Pet",
      prize: "2do y 3er lugar",
      entrevista: "https://www.facebook.com/share/v/16KaMzjipU/",
      images: [
        getImageUrl("Hacka2025/Hacka1.jpg"),
        getImageUrl("Hacka2025/Hacka2.jpg"),
      ],
    },
    {
      title: "Hackathon de Ciberseguridad 2022",
      position: "3er Lugar",
      icon: FaAward,
      color: "from-amber-600 to-amber-700",
      description:
        "Hackathon de Seguridad Informática organizado por la Academia de Ingeniería en Sistemas Computacionales, con estudiantes del Tecnológico de Morelia. Reto de captura de banderas mediante ataques controlados a máquina virtual con Windows 7.",
      shortDescription:
        "Hackathon de Seguridad Informática — 3er lugar en reto de captura de banderas en máquina virtual Windows 7.",
      date: "2022",
      achievement: "3er lugar - Captura de banderas",
      prize: "3er lugar",
      images: [getImageUrl("Hacker/Hack1.jpg")],
    },
  ];

  return (
    <section id="concursos" className="py-20 px-4 bg-slate-900/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block p-3 bg-yellow-500/10 rounded-2xl mb-4"
          >
            <FaTrophy className="text-4xl text-yellow-400" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Concursos y Competencias
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Logros destacados en competencias tecnológicas y robótica
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {competitions.map((comp, index) => {
            const Icon = comp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:border-yellow-500/50 transition-all overflow-hidden group"
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity blur-2xl"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                  }}
                />

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-4 bg-gradient-to-br ${comp.color} rounded-xl`}
                    >
                      <Icon className="text-3xl text-white" />
                    </div>
                    <div
                      className={`px-4 py-2 bg-gradient-to-r ${comp.color} rounded-full`}
                    >
                      <span className="text-white font-bold text-sm">
                        {comp.position}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {comp.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4">
                    {comp.shortDescription}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-500">Fecha:</span>
                      <span className="text-sm text-slate-300">
                        {comp.date}
                      </span>
                    </div>
                    {comp.achievement && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500">Logro:</span>
                        <span className="text-sm text-slate-300">
                          {comp.achievement}
                        </span>
                      </div>
                    )}
                  </div>

                  {comp.images && comp.images.length > 0 && (
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-emerald-400 mb-2">
                        Fotografías:
                      </div>
                      <ImageGallery
                        images={comp.images}
                        projectTitle={comp.title}
                      />
                    </div>
                  )}

                  {comp.entrevista && (
                    <motion.a
                      href={comp.entrevista}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white text-sm font-medium rounded-lg transition-all"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Ver Entrevista
                    </motion.a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
