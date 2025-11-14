"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  ArrowDown,
  GitlabIcon as GitHub,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  MapPin,
  Phone,
  Calendar,
  Code,
  Award,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold"
          >
            <span className="text-primary">Shatrughn</span> Vishwakarma
          </motion.div>
          <nav className="hidden md:flex gap-6">
            {["Home", "About", "Skills", "Projects", "Experience", "Education", "Contact"].map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm transition-colors hover:text-primary ${activeSection === item.toLowerCase() ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
              >
                {item}
              </motion.button>
            ))}
          </nav>
          <MobileNav />
        </div>
      </header>

      <main className="container pt-24">
        {/* Hero Section */}
        <section
          id="home"
          className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center py-12 text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Badge className="mb-6 px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20">
                <Zap className="w-3 h-3 mr-1" />
                Available for hire
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Shatrughn Vishwakarma
              </h1>
              <p className="mt-6 text-2xl text-muted-foreground font-light">
                Senior Frontend Engineer & Full-Stack Developer
              </p>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                8 years architecting scalable web applications: 5 years with Angular, 4 years with Next.js & React, plus Node.js API development
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-12 flex flex-wrap justify-center gap-4"
            >
              <Button onClick={() => scrollToSection("contact")} size="lg" className="px-8">
                Get in touch
              </Button>
              <Button variant="outline" size="lg" className="px-8" asChild>
                <a href="/resume-shatrughn-vishwakarma.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
            >
              {[
                { value: "8", label: "Years Total" },
                { value: "5", label: "Angular Years" },
                { value: "4", label: "React/Next.js Years" },
                { value: "40+", label: "Projects Delivered" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="mt-16 flex justify-center"
            >
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                <button
                  onClick={() => scrollToSection("about")}
                  className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowDown className="h-6 w-6" />
                  <span className="sr-only">Scroll down</span>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <Badge variant="outline" className="mb-4">About Me</Badge>
                <h2 className="text-3xl font-bold tracking-tight">Crafting Digital Excellence</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Hello! I'm Shatrughn Vishwakarma, a passionate <strong>Senior Frontend Engineer & Full-Stack Developer</strong> with <strong>8 years</strong> of experience building enterprise-grade applications for Mobile, Tablet, and Desktop platforms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in transforming complex business requirements into elegant, high-performance applications using modern JavaScript/TypeScript ecosystems. My expertise includes <strong>5 years of Angular development</strong>, <strong>4 years of React & Next.js</strong>, and <strong>basic Node.js API development</strong>. I have deep knowledge of state management, performance optimization, cloud deployment, and full-stack development practices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I've successfully delivered <strong>40+ projects</strong>, achieving an average of <strong>35% performance improvement</strong> and <strong>20% cost reduction</strong> through strategic optimizations and modern development practices.
              </p>

              <div className="pt-6 space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="font-medium">8726548759</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="font-medium">shatrughn004@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-medium">Airoli, Navi Mumbai</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-medium">27 Years Old</span>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <GitHub className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="mailto:shatrughn004@gmail.com" aria-label="Email">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold">Core Expertise</h3>
              <div className="space-y-6">
                <ExpertiseItem
                  title="Frontend Architecture"
                  description="Designing scalable, maintainable frontend architectures with modern frameworks and best practices."
                  icon={<Code className="h-5 w-5" />}
                  delay={0.1}
                />
                <ExpertiseItem
                  title="Angular Development (5 Years)"
                  description="Building robust enterprise SPAs with Angular 12+, TypeScript, RxJS, and comprehensive testing."
                  icon={<Zap className="h-5 w-5" />}
                  delay={0.2}
                />
                <ExpertiseItem
                  title="React & Next.js (4 Years)"
                  description="Developing high-performance applications with React 18+, Next.js 14, SSR, and modern React patterns."
                  icon={<TrendingUp className="h-5 w-5" />}
                  delay={0.3}
                />
                <ExpertiseItem
                  title="Node.js API Development (Basic)"
                  description="Building RESTful APIs and backend services with Node.js, Express, and database integration."
                  icon={<Code className="h-5 w-5" />}
                  delay={0.35}
                />
                <ExpertiseItem
                  title="Performance Optimization"
                  description="Reducing load times by 35-50% through code splitting, lazy loading, and bundle optimization."
                  icon={<Award className="h-5 w-5" />}
                  delay={0.4}
                />
                <ExpertiseItem
                  title="Team Leadership"
                  description="Mentoring developers, establishing best practices, and enhancing team productivity by 15%."
                  icon={<Users className="h-5 w-5" />}
                  delay={0.5}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center">
              <Badge variant="outline" className="mb-4">Technical Stack</Badge>
              <h2 className="text-3xl font-bold tracking-tight">Skills & Expertise</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
                Comprehensive expertise across modern frontend technologies, cloud platforms, and development tools.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              <SkillCategory
                title="Core Technologies"
                skills={[
                  { name: "HTML5", level: 98 },
                  { name: "CSS3/SCSS", level: 95 },
                  { name: "JavaScript ES6+", level: 92 },
                  { name: "TypeScript", level: 90 },
                ]}
                delay={0}
              />
              <SkillCategory
                title="Frontend Frameworks (9 Years Combined)"
                skills={[
                  { name: "Angular 12+, RxJS (5 Years)", level: 95 },
                  { name: "React.js 18+ (4 Years)", level: 90 },
                  { name: "Next.js 14 (4 Years)", level: 88 },
                  { name: "Redux & Redux Toolkit", level: 85 },
                  { name: "NgRx", level: 80 },
                ]}
                delay={0.2}
              />
              <SkillCategory
                title="Backend & Full-Stack"
                skills={[
                  { name: "Node.js (Basics)", level: 65 },
                  { name: "Express.js (Basics)", level: 60 },
                  { name: "REST APIs", level: 92 },
                ]}
                delay={0.3}
              />
              <SkillCategory
                title="UI & Styling"
                skills={[
                  { name: "Tailwind CSS", level: 90 },
                  { name: "Bootstrap 5", level: 94 },
                  { name: "Angular Material", level: 88 },
                  { name: "shadcn/ui", level: 82 },
                ]}
                delay={0.4}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                "PrimeNG", "AWS EC2",
                "AWS S3", "Docker",
                "REST APIs", "Node.js",
                "Express.js", "Jest",
                "Responsive Design", "PWA",
                "SEO", "Agile/Scrum"
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-muted rounded-lg p-3 text-center text-sm font-medium border hover:border-primary/20 transition-all cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Enhanced Experience Section */}
        <EnhancedExperienceSection />

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24">
          <div className="space-y-12">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">Portfolio</Badge>
              <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
                A selection of impactful projects demonstrating expertise across eCommerce, CMS, and enterprise applications.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <AnimatedProjectCard {...project} index={index} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 md:py-24">
          <div className="space-y-12">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">Education</Badge>
              <h2 className="text-3xl font-bold tracking-tight">Academic Background</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
                My academic foundation in computer applications and continuous learning journey.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-card to-card/50">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-b from-primary to-primary/80 p-8 text-primary-foreground flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold">BCA</h3>
                      <p className="mt-2 text-primary-foreground/90">Bachelor of Computer Application</p>
                    </div>
                  </div>
                  <div className="p-8 md:w-2/3">
                    <h4 className="text-2xl font-semibold">Swami Vivekananda Subharti University</h4>
                    <p className="text-muted-foreground mt-2">Meerut, Uttar Pradesh</p>
                    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6">
                      <div>
                        <span className="text-sm text-muted-foreground block">Duration</span>
                        <p className="font-semibold text-lg">2012 - 2015</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground block">Percentage</span>
                        <p className="font-semibold text-lg">70.25%</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground block">Class</span>
                        <p className="font-semibold text-lg">First Class</p>
                      </div>
                    </div>
                    <p className="mt-6 text-muted-foreground text-sm">
                      Built strong foundation in computer science fundamentals, software development methodologies, and programming concepts that paved the way for my professional career.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid gap-12 md:grid-cols-2 items-start"
          >
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-4">Get In Touch</Badge>
                <h2 className="text-3xl font-bold tracking-tight">Let's Work Together</h2>
              </div>
              <p className="text-muted-foreground text-lg">
                Interested in collaborating on your next project? I'm always open to discussing new opportunities and challenges.
              </p>
              <div className="space-y-4 mt-8">
                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 p-4 rounded-xl border bg-card/50">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:8726548759" className="font-semibold text-lg hover:text-primary transition-colors">
                      +91 8726548759
                    </a>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 p-4 rounded-xl border bg-card/50">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:shatrughn004@gmail.com" className="font-semibold text-lg hover:text-primary transition-colors">
                      shatrughn004@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 p-4 rounded-xl border bg-card/50">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-lg">Airoli, Navi Mumbai</p>
                  </div>
                </motion.div>
              </div>

              <div className="pt-6">
                <Button variant="outline" asChild className="w-full" size="lg">
                  <a href="/resume-shatrughn-vishwakarma.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
            <ContactForm />
          </motion.div>
        </section>
      </main>

      <footer className="py-8 border-t bg-muted/20">
        <div className="container flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="text-lg font-bold">
              <span className="text-primary">Shatrughn</span> Vishwakarma
            </div>
            <span className="text-muted-foreground">•</span>
            <p className="text-sm text-muted-foreground">
              Senior Frontend Engineer & Full-Stack Developer
            </p>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to top
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Enhanced Experience Section Component
function EnhancedExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Badge variant="outline" className="mb-4">Career Journey</Badge>
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Professional Experience (8 Years Total)
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            5 years Angular expertise + 4 years React/Next.js specialization + Node.js fundamentals
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-primary/20 rounded-full hidden lg:block"></div>

          {enhancedCareerStages.map((stage, index) => (
            <motion.div
              key={stage.role}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col lg:flex-row items-center gap-8 mb-16 last:mb-0 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background z-10 hidden lg:block"></div>

              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-card border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
                        {stage.period}
                      </Badge>
                      <h3 className="text-xl font-bold text-foreground">{stage.role}</h3>
                      <p className="text-muted-foreground font-medium">{stage.company}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {stage.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">KEY ACHIEVEMENTS</h4>
                    <ul className="space-y-2">
                      {stage.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 text-sm"
                        >
                          <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  {stage.metrics && (
                    <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-muted/30 rounded-lg">
                      {stage.metrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <div className="text-2xl font-bold text-primary">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.description}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {stage.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Date Indicator for Mobile */}
              <div className="lg:hidden w-full text-center mt-4">
                <Badge variant="secondary">{stage.period}</Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillBar({ skill, level }: { skill: string; level: number }) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-sm">{skill}</span>
        <span className="text-muted-foreground text-sm font-medium">{level}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  )
}

function SkillCategory({
  title,
  skills,
  delay,
}: { title: string; skills: { name: string; level: number }[]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="p-6 rounded-xl border bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
    >
      <h3 className="text-xl font-bold mb-6 text-foreground">{title}</h3>
      <div className="space-y-5">
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
        ))}
      </div>
    </motion.div>
  )
}

function AnimatedProjectCard({
  title,
  description,
  tags,
  demoUrl,
  period,
  teamSize,
  index,
}: Project & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="h-full flex flex-col bg-gradient-to-br from-card to-card/50 border hover:border-primary/20 transition-all group">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start gap-2 mb-2">
            <CardTitle className="text-lg group-hover:text-primary transition-colors">{title}</CardTitle>
            {period && (
              <Badge variant="outline" className="whitespace-nowrap text-xs">
                {period}
              </Badge>
            )}
          </div>
          <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow pb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.3 }}
              >
                <Badge variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
          {teamSize && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-3 w-3" />
              Team: {teamSize}
            </div>
          )}
        </CardContent>
        {demoUrl && (
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all" asChild>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-3 w-3" />
                View Live Project
              </a>
            </Button>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  )
}

function ExpertiseItem({ title, description, icon, delay }: { title: string; description: string; icon: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex gap-4 p-4 rounded-xl border bg-card/50 hover:bg-card transition-all"
    >
      <div className="bg-primary/10 p-3 rounded-xl h-12 w-12 flex items-center justify-center flex-shrink-0">
        <div className="text-primary">
          {icon}
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Handle form submission here
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-6 p-8 rounded-2xl border bg-card/50 backdrop-blur-sm shadow-lg"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Full Name *
          </label>
          <input
            id="name"
            required
            placeholder="Your full name"
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="your.email@example.com"
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject *
        </label>
        <input
          id="subject"
          required
          placeholder="What's this regarding?"
          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message *
        </label>
        <textarea
          id="message"
          required
          placeholder="Tell me about your project or inquiry..."
          rows={6}
          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none transition-colors"
        />
      </div>
      <Button
        type="submit"
        className="w-full py-3 text-base"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </motion.form>
  )
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
      setIsOpen(false)
    }
  }

  return (
    <div className="md:hidden">
      <Button variant="outline" size="sm" onClick={() => setIsOpen(!isOpen)}>
        Menu
      </Button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md p-6 z-50 border-b"
        >
          <nav className="flex flex-col space-y-4">
            {["Home", "About", "Skills", "Projects", "Experience", "Education", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-base py-3 transition-colors hover:text-primary font-medium text-left"
              >
                {item}
              </button>
            ))}
          </nav>
        </motion.div>
      )}
    </div>
  )
}

// Enhanced Types and Data
interface Project {
  title: string
  description: string
  tags: string[]
  demoUrl?: string
  period: string
  teamSize: string
}

interface EnhancedCareerStage {
  role: string
  company: string
  period: string
  technologies: string[]
  achievements: string[]
  metrics?: { value: string; description: string }[]
  responsibilities: string[]
}

const projects: Project[] = [
  {
    title: "Unicorn eCommerce Platform",
    description: "Full-stack eCommerce solution with advanced product management, cart, and secure checkout system.",
    tags: ["Angular 12", "TypeScript", "PrimeNG", "Bootstrap", "REST API"],
    demoUrl: "https://shop.unicornstore.in",
    period: "March 2024 - May 2024",
    teamSize: "2",
  },
  {
    title: "Ferrite Structural Steel CMS",
    description: "Enterprise content management system for structural steel manufacturing with inventory and order tracking.",
    tags: ["JavaScript", "jQuery", "Codeigniter", "Bootstrap", "MySQL"],
    demoUrl: "https://ferritesteels.com",
    period: "Nov 2020 - Dec 2020",
    teamSize: "2",
  },
  {
    title: "Aviation Management System",
    description: "Comprehensive aviation management platform with real-time dashboard and analytics.",
    tags: ["Angular 8", "TypeScript", "Angular Material", "PrimeNG", "Chart.js"],
    period: "May 2021 - March 2023",
    teamSize: "2",
  },
  {
    title: "Beam Commerce Platform",
    description: "Scalable eCommerce platform with multi-vendor support and advanced analytics.",
    tags: ["Angular 12", "TypeScript", "PrimeNG", "Bootstrap 5", "SCSS"],
    period: "March 2024 - May 2024",
    teamSize: "3",
  },
  {
    title: "RioCare India Healthcare CMS",
    description: "Healthcare content management system with patient portal and appointment scheduling.",
    tags: ["JavaScript", "jQuery", "Codeigniter 3", "Bootstrap", "Healthcare"],
    demoUrl: "https://riocareindia.com",
    period: "Jan 2022 - Feb 2022",
    teamSize: "2",
  },
  {
    title: "Mechtex Industrial CMS",
    description: "Industrial company CMS with product catalog and lead management system.",
    tags: ["JavaScript", "jQuery", "Codeigniter", "Bootstrap", "Industrial"],
    demoUrl: "https://mechtex.com",
    period: "Feb 2022 - March 2022",
    teamSize: "3",
  },
]

const enhancedCareerStages: EnhancedCareerStage[] = [
  {
    role: "Senior Full-Stack Developer",
    company: "Beaminnovate Pvt. Ltd.",
    period: "2023 - Present",
    technologies: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "shadcn/ui", "Node.js", "Express", "AWS"],
    achievements: [
      "Architected and deployed full-stack applications using Next.js and Node.js",
      "Migrated legacy Angular applications to Next.js, improving performance by 50%",
      "Implemented server-side rendering and API routes for enhanced SEO and performance",
      "Built RESTful APIs with Node.js/Express for multiple client applications"
    ],
    metrics: [
      { value: "50%", description: "Performance improvement" },
      { value: "8+", description: "Full-stack projects" }
    ],
    responsibilities: [
      "Architected full-stack solutions using Next.js and Node.js",
      "Implemented server-side rendering and static generation strategies",
      "Developed RESTful APIs with Node.js and Express",
      "Optimized application performance and deployed on AWS"
    ]
  },
  {
    role: "React & Next.js Developer",
    company: "Beaminnovate Pvt. Ltd.",
    period: "2021 - 2023 (4 Years Combined: React/Next.js)",
    technologies: ["React 18", "Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui", "Redux", "AWS"],
    achievements: [
      "Developed 8+ modern web applications using React and Next.js",
      "Implemented advanced React patterns and hooks for scalable architectures",
      "Reduced bundle sizes by 40% through code-splitting and lazy loading optimization",
      "Led adoption of Next.js across multiple projects for improved performance"
    ],
    metrics: [
      { value: "40%", description: "Bundle size reduction" },
      { value: "8+", description: "React/Next.js projects" }
    ],
    responsibilities: [
      "Developed scalable React applications with modern patterns",
      "Implemented Next.js for server-side rendering and static generation",
      "Optimized performance through code-splitting and lazy loading",
      "Collaborated with UI/UX teams for pixel-perfect implementations"
    ]
  },
  {
    role: "Angular Specialist (5 Years Experience)",
    company: "Beaminnovate Pvt. Ltd.",
    period: "2017 - 2021 (5 Years Angular Focus)",
    technologies: ["Angular 12+", "TypeScript", "RxJS", "Angular Material", "PrimeNG", "Bootstrap", "NgRx"],
    achievements: [
      "Built 15+ enterprise SPAs using Angular for eCommerce and ERP systems",
      "Reduced load times by 35% through code-splitting, lazy loading, and tree-shaking",
      "Modernized legacy UIs with component-based architecture and Angular Material",
      "Implemented state management with NgRx for complex data flows",
      "Mentored 4 junior developers in Angular best practices"
    ],
    metrics: [
      { value: "35%", description: "Load time reduction" },
      { value: "15+", description: "SPAs delivered" }
    ],
    responsibilities: [
      "Architected and developed complex single-page applications with Angular",
      "Implemented reactive programming patterns using RxJS",
      "Created reusable component libraries with Angular Material and PrimeNG",
      "Optimized performance through tree-shaking and lazy loading",
      "Established coding standards and mentored junior developers"
    ]
  },
  {
    role: "Frontend Developer",
    company: "Beaminnovate Pvt. Ltd.",
    period: "2017 - 2019",
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Responsive Design"],
    achievements: [
      "Developed 20+ responsive websites and web applications",
      "Implemented mobile-first designs improving mobile conversion rates by 30%",
      "Reduced development time by 25% through component reuse and best practices",
      "Ensured cross-browser compatibility and accessibility compliance"
    ],
    metrics: [
      { value: "20+", description: "Projects delivered" },
      { value: "25%", description: "Development time saved" }
    ],
    responsibilities: [
      "Developed responsive websites using HTML, CSS, and JavaScript",
      "Implemented interactive features with jQuery and vanilla JavaScript",
      "Collaborated with backend developers for API integration",
      "Ensured cross-browser compatibility and web accessibility standards"
    ]
  }
]