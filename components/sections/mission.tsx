"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  AnimatedSection,
  AnimatedSlideLeft,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion-wrapper"
import { Target, Users, Network } from "lucide-react"
import { motion } from "framer-motion"

const missionPoints = [
  {
    icon: Target,
    text: "Create a tech hub for Hurghada.",
  },
  {
    icon: Users,
    text: "Connect students to mentorship, events, and real-world projects.",
  },
  {
    icon: Network,
    text: "Build a stronger local network and career pathways.",
  },
]

export function MissionSection() {
  return (
    <section id="mission" className="px-4 py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Mission
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {"Why I\u2019m building in Hurghada"}
          </h2>
        </AnimatedSection>

        <AnimatedSlideLeft delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Living in Hurghada, I saw how competitive and opportunity-rich tech
            events are worldwide&mdash;especially in Cairo. My goal is to help
            students in Hurghada access similar opportunities locally.
          </p>
        </AnimatedSlideLeft>

        <AnimatedSection delay={0.2}>
          <Card className="mt-10 rounded-2xl border-primary/20 bg-primary/5 shadow-none">
            <CardContent className="flex flex-col gap-6 p-6 sm:p-8">
              <p className="font-heading text-lg font-semibold text-foreground">
                My Mission
              </p>
              <StaggerContainer className="flex flex-col gap-5">
                {missionPoints.map((point) => (
                  <StaggerItem key={point.text}>
                    <motion.div
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-start gap-4"
                    >
                      <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <point.icon className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-base text-foreground leading-relaxed">
                        {point.text}
                      </p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}
