"use client"

import { Badge } from "@/components/ui/badge"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { motion } from "framer-motion"

const skillGroups = [
  {
    label: "Product & Management",
    skills: [
      "Product thinking",
      "Stakeholder communication",
      "Planning",
      "Coordination",
    ],
  },
  {
    label: "IT & Networking",
    skills: [
      "Networking fundamentals",
      "Routing / Switching",
      "Device configuration",
      "Troubleshooting",
    ],
  },
  {
    label: "Community",
    skills: ["Event organizing", "PR", "Community building"],
  },
]

export function SkillsSection() {
  return (
    <section className="px-4 py-16 sm:py-24 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Skills
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What I Bring
          </h2>
        </AnimatedSection>

        <div className="mt-12 flex flex-col gap-10">
          {skillGroups.map((group, gi) => (
            <AnimatedSection key={group.label} delay={0.1 + gi * 0.08}>
              <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {group.label}
              </h3>
              <StaggerContainer className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <StaggerItem key={skill}>
                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Badge
                        variant="secondary"
                        className="rounded-xl px-4 py-1.5 text-sm font-medium cursor-default transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
