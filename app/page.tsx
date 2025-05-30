"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Wrench,
  Zap,
  Home,
  Shield,
  Users,
  Clock,
  Star,
  Award,
} from "lucide-react"

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

// Animated section component
function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div ref={ref} animate={controls} initial="hidden" variants={fadeUp} className={className}>
      {children}
    </motion.div>
  )
}

// Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#1A2D75] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">2W</span>
            </div>
            <span className="font-bold text-xl text-[#1A2D75]">2WIN Group</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-[#1A2D75] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-[#1A2D75] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-[#1A2D75] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-[#1A2D75] transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-[#1A2D75] transition-colors"
            >
              Contact
            </button>
          </nav>

          <Button
            onClick={() => scrollToSection("contact")}
            className="hidden md:flex bg-[#F7941D] hover:bg-[#e8850a] text-white"
          >
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <nav className="flex flex-col space-y-4 p-4">
              <button onClick={() => scrollToSection("home")} className="text-left text-gray-700 hover:text-[#1A2D75]">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="text-left text-gray-700 hover:text-[#1A2D75]">
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-gray-700 hover:text-[#1A2D75]"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left text-gray-700 hover:text-[#1A2D75]"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-[#1A2D75]"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-[#F7941D] hover:bg-[#e8850a] text-white w-full"
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1A2D75] to-[#2A4A9B] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A2D75]/90 via-[#1A2D75]/70 to-[#2A4A9B]/80"></div>
      <Image
        src="/webpage/images/hero-construction.jpg"
        alt="Professional construction work"
        fill
        className="object-cover mix-blend-overlay"
        priority
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Licensed Experts in Construction, Plumbing, and More
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            From residential renovations to certified plumbing and electrical, we do it all—professionally and safely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              className="bg-[#F7941D] hover:bg-[#e8850a] text-white px-8 py-3 text-lg"
            >
              View Our Services <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1A2D75] px-8 py-3 text-lg transition-all"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <>
      <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#1A2D75] to-[#F7941D] rounded-lg blur opacity-20"></div>
                <Image
                  src="/images/about-team.jpg"
                  alt="2WIN professional construction team"
                  width={800}
                  height={600}
                  className="relative rounded-lg shadow-xl"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-5xl font-bold text-[#1A2D75] mb-6 leading-tight">About Us</h2>
                  <div className="w-20 h-1 bg-[#F7941D] mb-6"></div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At 2WIN Group of Companies Inc., we bring together years of experience, certified professionals, and a
                  dedication to quality. We specialize in delivering reliable and compliant services in construction,
                  plumbing, electrical, medical gas, and more.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our team of licensed experts ensures every project meets the highest standards of safety, quality, and
                  compliance with Ontario regulations.
                </p>
                <Button
                  onClick={() => setShowDetails(true)}
                  className="bg-[#1A2D75] hover:bg-[#152459] text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  More Details <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Details Modal */}
      {showDetails && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowDetails(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#1A2D75] mb-4">About 2WIN Group of Companies Inc.</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#1A2D75] mb-3">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To provide exceptional construction, plumbing, and electrical services that exceed our clients'
                    expectations while maintaining the highest standards of safety, quality, and professionalism.
                  </p>

                  <h3 className="text-xl font-semibold text-[#1A2D75] mb-3">Our Experience</h3>
                  <p className="text-gray-700 leading-relaxed">
                    With over 20 years of combined experience in the construction industry, our team has successfully
                    completed hundreds of projects across the Greater Toronto Area, from residential renovations to
                    complex commercial installations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#1A2D75] mb-3">Certifications & Licenses</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> ECRA Licensed Electrical Contractor
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Licensed Plumbing Contractor
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> WSIB Coverage
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Comprehensive Liability Insurance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> CSA Medical Gas Certification
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#1A2D75] mb-3 mt-6">Service Areas</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We proudly serve the entire Greater Toronto Area including Toronto, Mississauga, Brampton, Markham,
                    Richmond Hill, Vaughan, and surrounding communities.
                  </p>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold text-[#1A2D75] mb-3">Why Choose 2WIN Group?</h3>
                <p className="text-gray-700 leading-relaxed">
                  We understand that your property is one of your most important investments. That's why we approach
                  every project with meticulous attention to detail, use only the highest quality materials, and ensure
                  all work meets or exceeds Ontario building codes and safety standards. Our commitment to excellence
                  has earned us a reputation as one of the most trusted contractors in the GTA.
                </p>
              </div>
              <Button
                onClick={() => {
                  setShowDetails(false)
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="w-full bg-[#F7941D] hover:bg-[#e8850a] text-white"
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Plumbing",
      description:
        "From emergency repairs to full-system installations, our licensed plumbers handle everything with precision and compliance.",
      image: "/images/service-plumbing.jpg",
      slug: "plumbing",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Backflows",
      description:
        "We provide certified backflow prevention and cross-connection control, fully compliant with Ontario regulations.",
      image: "/images/service-backflows.jpg",
      slug: "backflows",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Electrical",
      description:
        "Residential or commercial wiring, service upgrades, panel replacements, and certified inspections—done right and safely.",
      image: "/images/service-electrical.jpg",
      slug: "electrical",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Medical Gas",
      description:
        "Our experts handle medical gas systems according to CSA standards, ensuring hospital-grade safety and installation.",
      image: "/images/service-medical-gas.jpg",
      slug: "medical-gas",
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Renovations",
      description:
        "From kitchens to full basement finishes, our renovation services are detail-focused and built to last.",
      image: "/images/service-renovations.jpg",
      slug: "renovations",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "General Contracting",
      description:
        "Full project oversight, permits, trades, and safety compliance managed by licensed general contractors.",
      image: "/images/service-general-contracting.jpg",
      slug: "general-contracting",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A2D75] mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional, licensed, and certified services for all your construction and maintenance needs.
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeUp}>
              <Card className="group h-full hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-lg">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2D75]/90 via-[#1A2D75]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <Link href={`/services/${service.slug}`}>
                      <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1A2D75] shadow-lg transition-all">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-br from-[#F7941D] to-[#e8850a] text-white rounded-xl mr-4 shadow-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#1A2D75]">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Process Section
function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Consultation & Planning",
      description: "We listen to your goals, inspect the site, and deliver a realistic, tailored plan.",
      icon: <Users className="h-8 w-8" />,
    },
    {
      number: "02",
      title: "Execution",
      description: "Our certified team gets to work using top-tier materials and industry practices.",
      icon: <Wrench className="h-8 w-8" />,
    },
    {
      number: "03",
      title: "Satisfaction",
      description:
        "We complete the job only when you're 100% satisfied. Every project is inspected, signed off, and warrantied.",
      icon: <CheckCircle className="h-8 w-8" />,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A2D75] mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven approach that ensures quality results every time.
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeUp} className="text-center">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-[#1A2D75] to-[#2A4A9B] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <div className="text-white">{step.icon}</div>
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-[#F7941D] to-[#e8850a] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2D75] mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Why Choose Us Section
function WhyChooseUsSection() {
  const features = [
    { icon: <Shield className="h-6 w-6" />, text: "Licensed & Insured" },
    { icon: <CheckCircle className="h-6 w-6" />, text: "All Work Certified & Guaranteed" },
    { icon: <Star className="h-6 w-6" />, text: "Transparent Quotes" },
    { icon: <Award className="h-6 w-6" />, text: "20+ Years of Combined Experience" },
    { icon: <Clock className="h-6 w-6" />, text: "Clean, On-Time, & Respectful Crews" },
  ]

  return (
    <section className="py-20 bg-[#1A2D75] text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Experience the difference that comes with working with true professionals.
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex items-center space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm"
            >
              <div className="p-2 bg-[#F7941D] rounded-lg">{feature.icon}</div>
              <span className="font-medium">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Gallery Section
function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "/images/gallery-kitchen.jpg",
      title: "Modern Kitchen Renovation - Mississauga",
    },
    {
      src: "/images/gallery-bathroom.jpg",
      title: "Luxury Bathroom Remodel - Toronto",
    },
    {
      src: "/images/gallery-electrical-panel.jpg",
      title: "Electrical Panel Upgrade",
    },
    {
      src: "/images/gallery-commercial-plumbing.jpg",
      title: "Commercial Plumbing Installation",
    },
    {
      src: "/images/gallery-basement.jpg",
      title: "Basement Finishing Project",
    },
    {
      src: "/images/gallery-office.jpg",
      title: "Commercial Office Renovation",
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A2D75] mb-4">Our Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the quality and craftsmanship that sets us apart.
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all">
                    View Full Size
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
            >
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery image"
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                <X className="h-8 w-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A2D75] mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? Get in touch with our team.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <Card className="max-w-3xl mx-auto p-8 shadow-xl">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#1A2D75] mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#F7941D]/10 rounded-full">
                      <Phone className="h-6 w-6 text-[#F7941D]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Phone</p>
                      <p className="text-lg text-gray-700">+1 (365) 777-5016</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#F7941D]/10 rounded-full">
                      <Mail className="h-6 w-6 text-[#F7941D]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Email</p>
                      <p className="text-lg text-gray-700">info@2wingroup.ca</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#F7941D]/10 rounded-full">
                      <MapPin className="h-6 w-6 text-[#F7941D]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Location</p>
                      <p className="text-lg text-gray-700">Greater Toronto Area, Ontario</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-xl font-semibold text-[#1A2D75] mb-4">Business Hours</h4>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-medium">Saturday:</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span>Emergency Only</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-xl font-semibold text-[#1A2D75] mb-4">Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-[#1A2D75] border-[#1A2D75]">
                    ECRA Licensed
                  </Badge>
                  <Badge variant="outline" className="text-[#1A2D75] border-[#1A2D75]">
                    WSIB Covered
                  </Badge>
                  <Badge variant="outline" className="text-[#1A2D75] border-[#1A2D75]">
                    Fully Insured
                  </Badge>
                  <Badge variant="outline" className="text-[#1A2D75] border-[#1A2D75]">
                    CSA Certified
                  </Badge>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <Button
                  className="bg-[#F7941D] hover:bg-[#e8850a] text-white px-8 py-3 text-lg"
                  onClick={() => window.open("tel:+13657775016")}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </Button>
              </div>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#1A2D75] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#F7941D] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">2W</span>
              </div>
              <span className="font-bold text-xl">2WIN Group</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Licensed experts in construction, plumbing, electrical, and more. Serving the Greater Toronto Area with
              quality and professionalism.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services/plumbing" className="hover:text-white">
                  Plumbing
                </Link>
              </li>
              <li>
                <Link href="/services/electrical" className="hover:text-white">
                  Electrical
                </Link>
              </li>
              <li>
                <Link href="/services/renovations" className="hover:text-white">
                  Renovations
                </Link>
              </li>
              <li>
                <Link href="/services/general-contracting" className="hover:text-white">
                  General Contracting
                </Link>
              </li>
              <li>
                <Link href="/services/medical-gas" className="hover:text-white">
                  Medical Gas Systems
                </Link>
              </li>
              <li>
                <Link href="/services/backflows" className="hover:text-white">
                  Backflow Prevention
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (365) 777-5016</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@2wingroup.ca</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Greater Toronto Area, ON</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 2WIN Group of Companies Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Main Component
export default function Component() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  )
}
