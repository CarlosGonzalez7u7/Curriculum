"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { FaEnvelope, FaUser, FaComment, FaPaperPlane } from "react-icons/fa"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    // Simulación de envío
    setTimeout(() => {
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setStatus(""), 3000)
    }, 1500)
  }

  return (
    <section id="contacto" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
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
            className="inline-block p-3 bg-cyan-500/10 rounded-2xl mb-4"
          >
            <FaEnvelope className="text-4xl text-cyan-400" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Contacto</span>
          </h2>
          <p className="text-xl text-slate-400">¿Tienes un proyecto en mente? ¡Hablemos!</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8"
        >
          <div className="space-y-6">
            <div>
              <label className="flex items-center gap-2 text-slate-300 mb-2 font-medium">
                <FaUser className="text-cyan-400" />
                Nombre
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-slate-300 mb-2 font-medium">
                <FaEnvelope className="text-cyan-400" />
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-slate-300 mb-2 font-medium">
                <FaComment className="text-cyan-400" />
                Mensaje
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === "sending"}
              className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {status === "sending" ? (
                "Enviando..."
              ) : status === "success" ? (
                "¡Mensaje Enviado!"
              ) : (
                <>
                  <FaPaperPlane />
                  Enviar Mensaje
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
