"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa"

interface ImageGalleryProps {
  images: string[]
  projectTitle: string
}

export default function ImageGallery({ images, projectTitle }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {images.slice(0, 4).map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            onClick={() => openLightbox(index)}
            className="relative cursor-pointer overflow-hidden rounded-lg aspect-video bg-slate-800/50"
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`${projectTitle} - Screenshot ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {index === 3 && images.length > 4 && (
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">+{images.length - 4}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => {
                e.stopPropagation()
                closeLightbox()
              }}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <FaTimes className="text-2xl" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <FaChevronLeft className="text-xl" />
            </button>

            <motion.img
              key={selectedImage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={images[selectedImage]}
              alt={`${projectTitle} - Screenshot ${selectedImage + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <FaChevronRight className="text-xl" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
              {selectedImage + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
