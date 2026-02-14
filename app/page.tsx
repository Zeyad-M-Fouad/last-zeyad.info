"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { MissionSection } from "@/components/sections/mission"
import { EducationSection } from "@/components/sections/education"
import { ExperienceSection } from "@/components/sections/experience"
import { CertificationsSection } from "@/components/sections/certifications"
import { LeadershipSection } from "@/components/sections/leadership"
import { CodeWarsSection } from "@/components/sections/codewars"
import { SkillsSection } from "@/components/sections/skills"
import { HobbiesSection } from "@/components/sections/hobbies"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/back-to-top"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <EducationSection />
        <ExperienceSection />
        <CertificationsSection />
        <LeadershipSection />
        <CodeWarsSection />
        <SkillsSection />
        <HobbiesSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
