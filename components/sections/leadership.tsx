"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection, HoverCard, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { Rocket, Megaphone, Code2 } from "lucide-react"
import { motion } from "framer-motion"

const leadership = [
  {
    icon: Rocket,
    title: "Organizer",
    org: "Future Competition Hurghada (Robotics)",
    detail: "Managed by: Google GTG in Hurghada / GDSE",
  },
  {
    icon: Megaphone,
    title: "PR Director",
    org: "NASA Space Apps Hurghada 2025",
    detail: "Public relations and outreach for NASA hackathon event.",
  },
  {
    icon: Code2,
    title: "Co-Founder",
    org: "Code Wars Egypt",
    detail: "Building competitive programming community for Egyptian students.",
  },
]

export function LeadershipSection() {
  return (
    <section id="leadership" className="px-4 py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Impact
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"Leadership & Community"}
          </h2>
        </AnimatedSection>

        <StaggerContainer className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((item) => (
            <StaggerItem key={item.org}>
              <HoverCard className="h-full">
                <Card className="h-full rounded-2xl shadow-md transition-shadow hover:shadow-lg">
                  <CardContent className="flex flex-col p-6">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10"
                    >
                      <item.icon className="h-5 w-5 text-primary" />
                    </motion.div>
                    <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {item.org}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  </CardContent>
                </Card>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.35}>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
            I enjoy building communities, running events, and creating pathways
            for students.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
