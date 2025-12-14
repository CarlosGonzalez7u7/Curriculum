"use client"

import { Hero } from "@/components/hero"
import { WebProjects } from "@/components/web-projects"
import { MobileProjects } from "@/components/mobile-projects"
import { Robotics } from "@/components/robotics"
import { Competitions } from "@/components/competitions"
import { Certifications } from "@/components/certifications"
import { Hobbies } from "@/components/hobbies"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WebProjects />
        <MobileProjects />
        <Robotics />
        <Competitions />
        <Certifications />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
