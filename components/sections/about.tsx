"use client"

import Image from "next/image"
import { AnimatedSlideLeft, AnimatedSlideRight, AnimatedSection } from "@/components/motion-wrapper"
import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            About
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            The story started early
          </h2>
        </AnimatedSection>

        <div className="mt-12 flex flex-col items-center gap-10 md:flex-row md:gap-16">
          {/* Childhood image - slides from left */}
          <AnimatedSlideLeft delay={0.1} className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.03, rotate: -1 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src="/images/ziad-2004-pc.jpg"
                alt="Zeyad in 2004 playing on an old PC"
                width={480}
                height={360}
                className="h-auto w-full max-w-xs sm:max-w-sm"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-3 text-center text-sm text-muted-foreground italic"
            >
              {"2004 \u2014 my first memories with a PC."}
            </motion.p>
          </AnimatedSlideLeft>

          {/* Text - slides from right */}
          <AnimatedSlideRight delay={0.2} className="flex-1">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I loved technology since childhood. I had a couple of PCs, used to
              open them, break cables, explore old hard disks and floppy
              disks&mdash;always curious how everything works. That curiosity
              never faded; it only grew into a passion for building products and
              connecting people through technology.
            </p>
          </AnimatedSlideRight>
        </div>
      </div>
    </section>
  )
}
