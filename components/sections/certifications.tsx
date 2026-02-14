"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  AnimatedSection,
  HoverCard,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion-wrapper"
import { Award, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const certs = [
  {
    title: "CCNA",
    issuer: "Cisco",
    subtitle: "Switching, Routing, and Wireless Essentials",
    description:
      "Industry-standard certification validating networking fundamentals, routing, and switching knowledge.",
    link: "https://www.credly.com/badges/7c1eb38c-8147-4c30-a800-5cf305fea2bf/linked_in_profile",
  },
  {
    title: "FCHPT",
    issuer: "Hurghada International Airport",
    subtitle: "Airport Certification",
    description:
      "Certified by Hurghada International Airport for specialized operational proficiency.",
    link: "https://www.linkedin.com/in/zeyad-m-fouad-6773b4244/overlay/Certifications/1979671401/treasury/?profileId=ACoAADySPbsBfunudeo9IDwmy0cS_uo-zP4SYwc",
  },
  {
    title: "IT Specialist",
    issuer: "Certiport",
    subtitle: "Device Configuration & Management",
    description:
      "Proficiency in device configuration, management, and troubleshooting across enterprise environments.",
    link: "https://www.credly.com/badges/c97fff91-1150-42ec-bfff-c2be5b30780d/linked_in_profile",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="px-4 py-16 sm:py-24 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Certifications
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Credentials & Badges
          </h2>
        </AnimatedSection>

        <StaggerContainer className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((cert) => (
            <StaggerItem key={cert.title}>
              <HoverCard className="h-full">
                <Card className="h-full rounded-2xl shadow-md transition-shadow hover:shadow-lg">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"
                      >
                        <Award className="h-5 w-5 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          {cert.title}
                        </h3>
                        <Badge variant="secondary" className="mt-1 text-xs">
                          {cert.issuer}
                        </Badge>
                      </div>
                    </div>
                    <p className="mt-2 text-sm font-medium text-primary">
                      {cert.subtitle}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {cert.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-5 w-full rounded-xl"
                      asChild
                    >
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        View Certificate
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
