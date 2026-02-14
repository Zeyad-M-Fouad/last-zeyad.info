"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection, AnimatedScale, HoverCard } from "@/components/motion-wrapper"
import { GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

export function EducationSection() {
  return (
    <section id="education" className="px-4 py-16 sm:py-24 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Education
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Academic Background
          </h2>
        </AnimatedSection>

        <AnimatedScale delay={0.15}>
          <HoverCard>
            <Card className="mt-10 max-w-xl rounded-2xl shadow-md">
              <CardContent className="flex items-start gap-5 p-6 sm:p-8">
                <motion.div
                  whileHover={{ rotate: [0, -15, 15, 0] }}
                  transition={{ duration: 0.6 }}
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10"
                >
                  <GraduationCap className="h-6 w-6 text-primary" />
                </motion.div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Egyptian E-Learning University (EELU)
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {"Bachelor\u2019s degree \u2014 Computer Science"}
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Faculty of Information Technology
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {"Strong foundation in CS + IT."}
                  </p>
                </div>
              </CardContent>
            </Card>
          </HoverCard>
        </AnimatedScale>
      </div>
    </section>
  )
}
