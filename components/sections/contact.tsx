"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/motion-wrapper"
import { Mail, Phone, Copy, Check, Send, Linkedin } from "lucide-react"
import { toast } from "sonner"

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "zeyad.m@codewarsegypt.com",
    href: "mailto:zeyad.m@codewarsegypt.com",
  },
  {
    icon: Phone,
    label: "Personal Phone",
    value: "+201009425750",
    href: "tel:+201009425750",
  },
  {
    icon: Phone,
    label: "Work Phone",
    value: "+20 122 533 075",
    href: "tel:+2012253075",
  },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    toast.success("Copied to clipboard")
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8 flex-shrink-0"
      onClick={handleCopy}
      aria-label={`Copy ${text}`}
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-primary" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </Button>
  )
}

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)

    try {
      const res = await fetch("https://formsubmit.co/ajax/zeyad.m@codewarsegypt.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `Portfolio Contact from ${formState.name}`,
        }),
      })

      if (res.ok) {
        toast.success("Message sent successfully!")
        setFormState({ name: "", email: "", message: "" })
      } else {
        toast.error("Failed to send message. Please try again.")
      }
    } catch {
      toast.error("Network error. Please try again later.")
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="px-4 py-16 sm:py-24 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Get in Touch
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Contact
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Contact cards */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-col gap-4">
              {contactItems.map((item) => (
                <Card key={item.label} className="rounded-2xl shadow-sm">
                  <CardContent className="flex items-center gap-3 p-4 sm:gap-4 sm:p-5">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        className="block truncate text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                    <CopyButton text={item.value} />
                  </CardContent>
                </Card>
              ))}

              <Card className="rounded-2xl shadow-sm">
                <CardContent className="flex items-center gap-3 p-4 sm:gap-4 sm:p-5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      LinkedIn
                    </p>
                    <a
                      href="https://www.linkedin.com/in/zeyad-m-fouad-6773b4244"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block truncate text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      Zeyad M Fouad
                    </a>
                  </div>
                  <CopyButton text="https://www.linkedin.com/in/zeyad-m-fouad-6773b4244" />
                </CardContent>
              </Card>

              <Button variant="outline" className="mt-2 rounded-xl" asChild>
                <a href="mailto:zeyad.m@codewarsegypt.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email me directly
                </a>
              </Button>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection delay={0.2}>
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Send a Message
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className="mt-5 flex flex-col gap-4"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, name: e.target.value }))
                      }
                      className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, email: e.target.value }))
                      }
                      className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, message: e.target.value }))
                      }
                      className="flex w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <Button type="submit" className="rounded-xl" disabled={sending}>
                    <Send className="mr-2 h-4 w-4" />
                    {sending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
