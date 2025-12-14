"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaRobot,
  FaFutbol,
  FaBicycle,
  FaMusic,
} from "react-icons/fa";

export default function Hobbies() {
  const hobbies = [
    {
      title: "Ciberseguridad",
      description:
        "Me gusta aprender Ciberseguridad, es un pasatiempo adquirir conocimientos, y jugar a atacar o vulnerar máquinas virtuales en un entorno de práctica, aplicando lo aprendido",
      icon: FaShieldAlt,
      color: "from-red-500 to-orange-500",
      skills: ["Ethical Hacking", "Pentesting", "CTF"],
    },
    {
      title: "Robótica",
      description:
        "Me encanta armar y programar robots de todo tipo de forma, desde un robot limpiador de piso, robots soccer para jugar con alguien más, RC y más",
      icon: FaRobot,
      color: "from-purple-500 to-pink-500",
      skills: ["Arduino", "Raspberry Pi", "Competencias"],
    },
    {
      title: "Fútbol",
      description:
        "Me encanta el fútbol, y los partidos de fútbol rápido con amigos nunca faltan",
      icon: FaFutbol,
      color: "from-green-500 to-emerald-500",
      skills: ["Deporte", "Trabajo en equipo", "Estrategia"],
    },
    {
      title: "Ciclismo",
      description:
        "Me encanta el ciclismo, dar rutas o salir a rodar por la ciudad",
      icon: FaBicycle,
      color: "from-blue-500 to-cyan-500",
      skills: ["Ejercicio", "Naturaleza", "Aventura"],
    },
    {
      title: "Música",
      description: "Escuchar música es parte de mi día a día",
      icon: FaMusic,
      color: "from-pink-500 to-rose-500",
      skills: ["Relajación", "Inspiración", "Variedad"],
    },
  ];

  return (
    <section id="hobbies" className="py-20 px-4 bg-slate-900/30">
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
            className="inline-block p-3 bg-pink-500/10 rounded-2xl mb-4"
          >
            <FaRobot className="text-4xl text-pink-400" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Hobbies e Intereses
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Pasiones más allá del código
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:border-pink-500/50 transition-all overflow-hidden group"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                />

                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-block p-4 bg-gradient-to-br ${hobby.color} rounded-2xl mb-4`}
                  >
                    <Icon className="text-4xl text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {hobby.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {hobby.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {hobby.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-slate-800/50 border border-slate-700 hover:border-pink-500/50 rounded-full text-xs text-slate-300 transition-all"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
