"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection, AnimatedSlideLeft, HoverCard, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { Briefcase, Building2 } from "lucide-react"
import { motion } from "framer-motion"

const internships = [
  { place: "Sunrise Garden Beach", type: "Intern" },
  { place: "Sunrise Mamlouk", type: "Intern" },
  { place: "Crystal Bay", type: "Intern" },
  { place: "Meraki Shidwan", type: "Intern" },
]

const currentRole = {
  title: "Product Manager",
  company: "Fox Travel Egypt",
  type: "Current",
  bullets: [
    "Support delivery with structured planning and communication.",
    "Translate business needs into clear requirements.",
  ],
}

export function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Experience
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Experience Timeline
          </h2>
        </AnimatedSection>

        <div className="relative mt-12">
          {/* Animated vertical line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-5 top-0 hidden w-px bg-border md:block"
          />

          {/* Current role */}
          <AnimatedSlideLeft delay={0.1}>
            <div className="relative mb-10 md:pl-14">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
                className="absolute left-3 top-6 hidden h-4 w-4 rounded-full border-2 border-primary bg-background md:block"
              />
              <HoverCard>
                <Card className="rounded-2xl shadow-md">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-start gap-3 sm:items-center">
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"
                      >
                        <Briefcase className="h-5 w-5 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          {currentRole.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {currentRole.company}
                        </p>
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Badge className="ml-auto">{currentRole.type}</Badge>
                      </motion.div>
                    </div>
                    <ul className="mt-5 flex flex-col gap-2.5">
                      {currentRole.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </HoverCard>
            </div>
          </AnimatedSlideLeft>

          {/* Internships with stagger */}
          <StaggerContainer className="flex flex-col gap-4 md:pl-14">
            {internships.map((item) => (
              <StaggerItem key={item.place}>
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, type: "spring" }}
                    className="absolute -left-11 top-5 hidden h-3 w-3 rounded-full border-2 border-muted-foreground/40 bg-background md:block"
                  />
                  <HoverCard>
                    <Card className="rounded-2xl shadow-sm">
                      <CardContent className="flex items-center gap-4 p-5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary">
                          <Building2 className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground">
                            {item.place}
                          </p>
                        </div>
                        <Badge variant="secondary">{item.type}</Badge>
                      </CardContent>
                    </Card>
                  </HoverCard>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
