"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Linkedin, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { FloatingElement } from "@/components/motion-wrapper"

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.6 + i * 0.03, ease: "easeOut" },
  }),
}

const fullName = "Zeyad Mohamed Fouad"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20"
    >
      {/* Animated background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <FloatingElement delay={0}>
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
        </FloatingElement>
        <FloatingElement delay={1}>
          <div className="absolute top-1/3 left-1/4 h-[200px] w-[200px] rounded-full bg-primary/3 blur-2xl" />
        </FloatingElement>
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-1 sm:gap-10 md:flex-row md:gap-16">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mb-4 flex items-center justify-center gap-2 text-sm text-muted-foreground md:justify-start"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <MapPin className="h-4 w-4" />
            </motion.span>
            <span>Hurghada, Egypt</span>
          </motion.div>

          {/* Animated name: letter-by-letter */}
          <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl text-balance">
            {fullName.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{ minWidth: char === " " ? "0.3em" : undefined }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="mt-5 font-heading text-lg font-medium text-primary sm:text-xl"
          >
            {"Product Manager \u2022 Tech & Networking \u2022 Community Builder"}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            From childhood curiosity to building impactful technology in Hurghada.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.9 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:justify-start"
          >
            <Button size="lg" className="w-full rounded-2xl px-8 sm:w-auto" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full rounded-2xl px-8 sm:w-auto"
              asChild
            >
              <a href="#experience">View Experience</a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="w-full rounded-2xl px-6 sm:w-auto"
              asChild
            >
              <a href="https://www.linkedin.com/in/zeyad-m-fouad-6773b4244" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Professional Image with animated border ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <motion.div
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ duration: 0.3 }}
            className="relative h-56 w-56 overflow-hidden rounded-3xl shadow-xl ring-4 ring-background sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96"
          >
            <Image
              src="/images/ziad-professional.jpg"
              alt="Zeyad Mohamed Fouad — professional photo"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.a>
      </motion.div>
    </section>
  )
}
