"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  AnimatedSection,
  AnimatedSlideLeft,
  AnimatedSlideRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion-wrapper"
import {
  Code2,
  Brain,
  Globe,
  Smartphone,
  Network,
  Settings,
  ExternalLink,
} from "lucide-react"
import { motion } from "framer-motion"

const services = [
  { icon: Code2, label: "Custom Software Development" },
  { icon: Brain, label: "AI Automation & Intelligent Solutions" },
  { icon: Globe, label: "Website Design & Development" },
  { icon: Smartphone, label: "Web & Mobile Applications" },
  { icon: Network, label: "Network Infrastructure Design" },
  { icon: Settings, label: "Technical Consulting & Digital Transformation" },
]

export function CodeWarsSection() {
  return (
    <section id="codewars" className="px-4 py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Entrepreneurship
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Code Wars Egypt
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Left: Info - slides from left */}
          <AnimatedSlideLeft delay={0.1}>
            <Card className="h-full rounded-2xl border-2 border-primary/20 shadow-lg">
              <CardContent className="flex flex-col gap-6 p-6 sm:p-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
                  className="flex items-center gap-3"
                >
                  <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    Co-Founder
                  </Badge>
                </motion.div>

                <p className="text-base leading-relaxed text-muted-foreground">
                  Code Wars Egypt is a technology company and programming team
                  that delivers end-to-end software solutions for businesses and
                  organizations. We focus on building modern, scalable digital
                  products and technical infrastructure.
                </p>

                <StaggerContainer className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {services.map((service) => (
                    <StaggerItem key={service.label}>
                      <motion.div
                        whileHover={{ scale: 1.03, x: 4 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-start gap-3 rounded-xl bg-muted/50 p-3"
                      >
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <service.icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm leading-snug text-foreground">
                          {service.label}
                        </span>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <blockquote className="border-l-2 border-primary/40 pl-4 text-sm italic leading-relaxed text-muted-foreground">
                  Code Wars Egypt aims to empower organizations through smart
                  technology, automation, and reliable infrastructure while
                  delivering high-quality, scalable solutions.
                </blockquote>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button className="w-fit rounded-xl" asChild>
                    <a
                      href="https://codewarsegypt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit codewarsegypt.com
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </AnimatedSlideLeft>

          {/* Right: Team photo - slides from right */}
          <AnimatedSlideRight delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative h-full min-h-[240px] overflow-hidden rounded-2xl shadow-lg sm:min-h-[320px] lg:min-h-[480px]"
            >
              <Image
                src="/images/codewars-team.jpg"
                alt="Code Wars Egypt team at NASA Space Apps Hurghada"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6"
              >
                <p className="text-sm font-medium text-white/90">
                  Code Wars Egypt team winning at NASA Space Apps Hurghada, 2nd Edition
                </p>
              </motion.div>
            </motion.div>
          </AnimatedSlideRight>
        </div>
      </div>
    </section>
  )
}
