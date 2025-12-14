"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaTrophy,
  FaCertificate,
  FaGamepad,
  FaEnvelope,
} from "react-icons/fa";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const navItems = [
    { id: "inicio", label: "Inicio", icon: FaCode },
    { id: "web", label: "Web", icon: FaCode },
    { id: "concursos", label: "Concursos", icon: FaTrophy },
    { id: "certificaciones", label: "Certificaciones", icon: FaCertificate },
    { id: "hobbies", label: "Hobbies", icon: FaGamepad },
    { id: "contacto", label: "Contacto", icon: FaEnvelope },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollToSection("inicio")}
          >
            Portafolio
          </motion.div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? "bg-violet-500/20 text-violet-400"
                      : "text-slate-400 hover:text-violet-400 hover:bg-slate-800/50"
                  }`}
                >
                  <Icon className="text-sm" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.button>
              );
            })}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 text-slate-400 hover:text-violet-400"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
}
