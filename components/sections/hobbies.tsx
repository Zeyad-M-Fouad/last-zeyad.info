"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection, AnimatedSlideLeft, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { Dumbbell, BookOpen, Gamepad2, Footprints } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const hobbies = [
  {
    icon: Dumbbell,
    title: "Sports & Fitness",
    description:
      "Karate (started at 12, practiced ~10 years). Currently focused on the gym. Interested in calisthenics.",
  },
  {
    icon: Footprints,
    title: "Walking & Exploring",
    description: "I enjoy long walks and discovering new places around Hurghada.",
  },
  {
    icon: BookOpen,
    title: "Reading & Chess",
    description:
      "I read whenever I can and enjoy strategic thinking through chess.",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description:
      "Valorant, Sekiro, Dark Souls series, and strategy games like Total War: Rome.",
  },
]

export function HobbiesSection() {
  return (
    <section id="hobbies" className="px-4 py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Personal
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Outside of work
          </h2>
        </AnimatedSection>

        <div className="mt-12 flex flex-col gap-10 md:flex-row md:gap-14">
          {/* Hobbies image */}
          <AnimatedSlideLeft delay={0.1} className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80 md:h-[420px] md:w-72"
            >
              <Image
                src="/images/ziad-beach.jpg"
                alt="By the sea in Hurghada"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 288px"
              />
            </motion.div>
          </AnimatedSlideLeft>

          {/* Content with stagger */}
          <div className="flex flex-1 flex-col gap-5">
            <StaggerContainer className="flex flex-col gap-5">
              {hobbies.map((hobby) => (
                <StaggerItem key={hobby.title}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.4 }}
                      className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10"
                    >
                      <hobby.icon className="h-5 w-5 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-foreground">
                        {hobby.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {hobby.description}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Personality card */}
            <AnimatedSection delay={0.45}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="mt-4 rounded-2xl border-primary/20 bg-primary/5 shadow-none">
                  <CardContent className="p-5">
                    <p className="text-sm font-medium text-foreground italic">
                      {"\"I like hard challenges \u2014 in games and in life.\""}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
