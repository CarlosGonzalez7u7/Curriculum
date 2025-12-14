"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import { SiPython, SiStreamlit, SiSqlite } from "react-icons/si";
import { SiTypescript, SiMysql, SiPhp } from "react-icons/si";
import ImageGallery from "./ImageGallery";
import { getImageUrl } from "../utils/getImageUrl";

export default function WebProjects() {
  const projects = [
    {
      title: "Ceramicas Ulises",
      description:
        "Sistema web completo para gestión de inventario y promoción de productos. Maneja carrito de compras con descuentos automáticos, genera notas de venta, BD remota con roles, interfaces diferenciadas para usuarios y administrador.",
      shortDescription:
        "Sistema web para promoción de productos y reportes de ventas al administrador.",
      technologies: [
        { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
        { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      ],
      features: [
        "Carrito de compras",
        "Descuentos automáticos",
        "Notas de venta",
        "Sistema de roles",
      ],
      role: "Desarrollador Full Stack",
      duration: "8 meses",
      startDate: "Marzo 2022",
      link: "https://ceramicasulices.navidev.org/",
      github: "https://github.com/CarlosGonzalez7u7/CeramicasUlises-Manual",
      manual: "https://carlosgonzalez7u7.github.io/CeramicasUlises-Manual/",
    },
    {
      title: "RED-GESTOR PRO",
      description:
        "Aplicación diseñada para facilitar la administración eficiente de redes informáticas del ITSU. Interfaz intuitiva con herramientas para gestionar dispositivos, monitorear estado de red, registrar fallas y mantener control detallado de inventarios de hardware y software.",
      shortDescription:
        "RedGestor-Pro es una aplicación diseñada para facilitar la administración eficiente de redes informáticas.",
      technologies: [
        { name: "Streamlit", icon: SiStreamlit, color: "text-red-500" },
        { name: "Python 3.8+", icon: SiPython, color: "text-yellow-400" },
        { name: "SQLite 3", icon: SiSqlite, color: "text-blue-400" },
      ],
      features: [
        "Monitoreo de red",
        "Gestión de dispositivos",
        "Registro de fallas",
        "Inventario de hardware/software",
      ],
      role: "Desarrollador Full Stack",
      duration: "4 meses",
      startDate: "Febrero 2024",
      images: [
        getImageUrl("RedGestor/RedGestor1.png"),
        getImageUrl("RedGestor/RedGestor2.png"),
        getImageUrl("RedGestor/RedGestor3.png"),
        getImageUrl("RedGestor/RedGestor4.png"),
        getImageUrl("RedGestor/RedGestor5.png"),
        getImageUrl("RedGestor/RedGestor6.png"),
        getImageUrl("RedGestor/RedGestor7.png"),
        getImageUrl("RedGestor/RedGestor8.png"),
        getImageUrl("RedGestor/RedGestor9.png"),
        getImageUrl("RedGestor/RedGestor10.png"),
        getImageUrl("RedGestor/RedGestor11.png"),
        getImageUrl("RedGestor/RedGestor12.png"),
        getImageUrl("RedGestor/RedGestor13.png"),
        getImageUrl("RedGestor/RedGestor14.png"),
        getImageUrl("RedGestor/RedGestor15.png"),
      ],
      github: "https://github.com/CarlosGonzalez7u7/CeramicasUlises-Manual",
      manualTecnico:
        "https://juancarloscamposportafolio.navidev.org/img/Tecnico.pdf",
      manualUsuario:
        "https://juancarloscamposportafolio.navidev.org/img/Usuario.pdf",
    },
    {
      title: "PDV - Herramientas Sarabia",
      description:
        "Sistema de gestión de inventarios para local de reparación de herramientas eléctricas. Automatiza el control de maquinaria electrónica y refacciones, genera notas de ventas y folios para reclamar máquinas.",
      shortDescription:
        "PDV para Local en Uruapan - Esta aplicación fue creada para solo uso local.",
      technologies: [
        { name: "Java", icon: FaJs, color: "text-red-500" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      ],
      features: [
        "Control de inventario",
        "Notas de venta",
        "Sistema de folios",
        "Gestión de refacciones",
      ],
      role: "Desarrollador Full Stack",
      duration: "10 meses",
      startDate: "Febrero 2022",
      images: [
        getImageUrl("PDV_Herramientas/Dat0.png"),
        getImageUrl("PDV_Herramientas/Dat1.png"),
        getImageUrl("PDV_Herramientas/Dat2.png"),
        getImageUrl("PDV_Herramientas/Dat3.png"),
        getImageUrl("PDV_Herramientas/Dat4.png"),
        getImageUrl("PDV_Herramientas/Dat5.png"),
      ],
      github: "https://github.com/CarlosGonzalez7u7/DatOptimize",
    },
    {
      title: "WebGestion - Sistema de Control Educativo",
      description:
        "Sistema desarrollado en Servicio Social para el Jefe de Carrera del ITSU. Se encarga de registrar, generar reportes y llevar un mejor control de información ante docentes. El reto fue crear y montar la web en un servidor interno dentro del ITSU.",
      shortDescription:
        "WebGestion fue diseñado para facilitar y solucionar una problemática generada por el Jefe de Carrera.",
      technologies: [
        { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
        { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      ],
      features: [
        "Gestión de docentes",
        "Generación de reportes",
        "Servidor interno",
        "Control académico",
      ],
      role: "Scrum Master",
      duration: "3 meses",
      startDate: "Septiembre 2025",
      link: "http://38.45.246.109/~juancarlos/public/index.html",
      github: "https://github.com/CarlosGonzalez7u7/Web-Gestion-TEC.git",
      manualTecnico: "/WebGestionTec/ManualTecnico.pdf",
      manualUsuario: "/WebGestionTec/Manualdeusuario.pdf",
    },
    {
      title: "MatLab - Web",
      description:
        "Aplicación Web/Móvil donde docentes generan clases y alumnos pueden ingresar. Usa IA para orientar a los alumnos a resolver problemas matemáticos, físicos, químicos, etc. La IA no da la respuesta, orienta a resolverla.",
      shortDescription:
        "MatLab desarrollada para el apoyo académico y docente en el ámbito educativo.",
      technologies: [
        { name: "React", icon: FaReact, color: "text-cyan-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      ],
      features: [
        "IA educativa",
        "Orientación académica",
        "Clases virtuales",
        "Multi-materia",
      ],
      role: "FrontEnd - Web",
      duration: "4 meses",
      startDate: "Septiembre 2025",
      link: "https://zacekweb.yonniphantom.dev/",
      github: "https://github.com/CarlosGonzalez7u7/FronEnd-Classia.git",
      manualTecnico: "/MatLab/ManualTecnico_Web.pdf",
      manualUsuario: "/MatLab/ManualUsuario_Web.pdf",
    },
    {
      title: "Plataforma de Gestión de Movilidad",
      description:
        "Dashboard administrativo para empresa hotelera. Panel Front-End para administrar sistema de transporte tipo plataforma de viajes. Incluye dashboard con métricas, gráficos interactivos, mapa en tiempo real de conductores, gestión de conductores, viajes, pagos, notificaciones y chat de soporte.",
      shortDescription:
        "Una solución integral para administrar viajes, conductores, pagos y operaciones en tiempo real.",
      technologies: [
        { name: "React", icon: FaReact, color: "text-cyan-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      ],
      features: [
        "Dashboard métricas",
        "Mapa tiempo real",
        "Gestión conductores",
        "Chat soporte",
      ],
      role: "FrontEnd - Web",
      duration: "6 meses",
      startDate: "Marzo 2023",
      images: [
        getImageUrl("TaxiSeguro/dashboard.png"),
        getImageUrl("TaxiSeguro/dashboard1.png"),
        getImageUrl("TaxiSeguro/dashboard2.png"),
        getImageUrl("TaxiSeguro/dashboard3.png"),
      ],
      github: "https://github.com/CarlosGonzalez7u7/FronEnd-Classia.git",
    },
  ];

  return (
    <section id="web" className="py-20 px-4">
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
            className="inline-block p-3 bg-violet-500/10 rounded-2xl mb-4"
          >
            <FaReact className="text-4xl text-violet-400" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Proyectos Web y de Escritorio
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Aplicaciones web reales desarrolladas para clientes y proyectos
            académicos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-400 text-sm mb-2 leading-relaxed">
                  {project.shortDescription}
                </p>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">Rol:</span>
                    <span className="text-slate-300">{project.role}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">Duración:</span>
                    <span className="text-slate-300">{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">Inicio:</span>
                    <span className="text-slate-300">{project.startDate}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-semibold text-violet-400 mb-2">
                    Tecnologías:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => {
                      const Icon = tech.icon;
                      return (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="flex items-center gap-1 px-2 py-1 bg-slate-800/50 border border-slate-700 rounded-lg"
                        >
                          <Icon className={`text-sm ${tech.color}`} />
                          <span className="text-xs text-slate-300">
                            {tech.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-semibold text-blue-400 mb-2">
                    Características:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {project.images && project.images.length > 0 && (
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-emerald-400 mb-2">
                      Capturas de pantalla:
                    </div>
                    <ImageGallery
                      images={project.images}
                      projectTitle={project.title}
                    />
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-violet-500 to-blue-500 hover:from-violet-600 hover:to-blue-600 text-white text-sm font-medium rounded-lg transition-all"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Ver Proyecto
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-violet-500/50 text-slate-300 text-sm font-medium rounded-lg transition-all"
                    >
                      <FaGithub className="text-sm" />
                      GitHub
                    </motion.a>
                  )}
                  {project.manual && (
                    <motion.a
                      href={project.manual}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-blue-500/50 text-slate-300 text-sm font-medium rounded-lg transition-all"
                    >
                      Manual
                    </motion.a>
                  )}
                  {(project.manualTecnico || project.manualUsuario) && (
                    <>
                      {project.manualTecnico && (
                        <motion.a
                          href={project.manualTecnico}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-blue-500/50 text-slate-300 text-xs font-medium rounded-lg transition-all"
                        >
                          Manual Técnico
                        </motion.a>
                      )}
                      {project.manualUsuario && (
                        <motion.a
                          href={project.manualUsuario}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-blue-500/50 text-slate-300 text-xs font-medium rounded-lg transition-all"
                        >
                          Manual Usuario
                        </motion.a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
