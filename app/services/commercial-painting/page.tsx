"use client"

import type React from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Phone,
  Mail,
  CheckCircle,
  Shield,
  Award,
  Star,
  ArrowRight,
  Paintbrush,
  Building,
  Home,
  Wrench,
  Clock,
  Palette,
} from "lucide-react"
import { useEffect } from "react"

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function CommercialPaintingPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const services = [
    "Office building painting",
    "Retail space painting",
    "Warehouse painting",
    "Restaurant painting",
    "Medical facility painting",
    "Industrial facility painting",
    "Exterior commercial painting",
    "Interior commercial painting",
    "Pressure washing",
    "Surface preparation",
    "Specialty coatings",
    "Maintenance painting programs",
  ]

  const features = [
    { icon: <Building className="h-5 w-5" />, text: "Commercial Specialists" },
    { icon: <Shield className="h-5 w-5" />, text: "Fully Licensed & Insured" },
    { icon: <Clock className="h-5 w-5" />, text: "Flexible Scheduling" },
    { icon: <Award className="h-5 w-5" />, text: "Quality Guarantee" },
  ]

  const paintTypes = [
    "Latex and acrylic paints",
    "Epoxy floor coatings",
    "Anti-graffiti coatings",
    "Fire-retardant paints",
    "Eco-friendly low-VOC paints",
    "High-durability industrial coatings",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl text-[#1A2D75]">2WIN Group</span>
            </Link>
            <Link href="/#services">
              <Button variant="outline" className="border-[#1A2D75] text-[#1A2D75] hover:bg-[#1A2D75] hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src="/images/service-commercial-painting.png"
          alt="Commercial painting services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2D75]/90 to-[#1A2D75]/70"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <div className="flex items-center mb-4">
              <Paintbrush className="h-8 w-8 mr-3" />
              <Badge className="bg-[#F7941D] text-white">Professional Service</Badge>
            </div>
            <h1 className="text-5xl font-bold mb-4">Commercial Painting Services</h1>
            <p className="text-xl text-gray-200 mb-6">
              Professional commercial painting for offices, retail spaces, and industrial facilities. Quality finishes
              that enhance your business image.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#F7941D] hover:bg-[#e8850a] text-white px-8 py-3">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1A2D75] px-8 py-3"
                onClick={() => window.open("tel:+13657775016")}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now: +1 (365) 777-5016
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <AnimatedSection>
              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold text-[#1A2D75] mb-6">Professional Commercial Painting</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Transform your business space with our professional commercial painting services. We specialize in
                  painting offices, retail stores, restaurants, warehouses, and industrial facilities throughout the
                  Greater Toronto Area. Our experienced team delivers high-quality finishes that enhance your business
                  image and create a professional environment.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We understand that your business operations are important, which is why we work around your schedule
                  to minimize disruption. Our painters are trained to work efficiently while maintaining the highest
                  standards of quality and cleanliness. We use only premium commercial-grade paints and materials
                  designed to withstand heavy traffic and daily wear.
                </p>
              </div>
            </AnimatedSection>

            {/* Services Grid */}
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-[#1A2D75] mb-8">Our Commercial Painting Services</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Paint Types & Coatings */}
            <AnimatedSection>
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-500 text-white rounded-lg mr-4">
                      <Palette className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-800">Premium Paint & Coatings</h3>
                      <p className="text-blue-700">Commercial-grade materials for lasting results</p>
                    </div>
                  </div>
                  <p className="text-blue-700 mb-4">
                    We use only the highest quality commercial paints and specialized coatings:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {paintTypes.map((type, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                        <span className="text-blue-800">{type}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Process */}
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-[#1A2D75] mb-8">Our Process</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#1A2D75] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A2D75] mb-2">Assessment</h3>
                  <p className="text-gray-600">We evaluate your space and provide detailed estimates.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#F7941D] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A2D75] mb-2">Preparation</h3>
                  <p className="text-gray-600">Thorough surface preparation and protection of your property.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#1A2D75] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A2D75] mb-2">Painting</h3>
                  <p className="text-gray-600">Professional application with minimal business disruption.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#F7941D] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A2D75] mb-2">Final Inspection</h3>
                  <p className="text-gray-600">Quality check and cleanup to your satisfaction.</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Industries We Serve */}
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-[#1A2D75] mb-8">Industries We Serve</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#1A2D75] mb-4">Office & Corporate</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Corporate Offices</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Co-working Spaces</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Professional Buildings</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#1A2D75] mb-4">Retail & Hospitality</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Retail Stores</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Restaurants & Cafes</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Hotels & Lodging</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#1A2D75] mb-4">Healthcare & Education</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Medical Facilities</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Schools & Universities</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Childcare Centers</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#1A2D75] mb-4">Industrial & Warehouse</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Manufacturing Facilities</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Warehouses</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Distribution Centers</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Card */}
            <AnimatedSection>
              <Card className="bg-[#1A2D75] text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
                  <div className="space-y-4">
                    <Button
                      className="w-full bg-[#F7941D] hover:bg-[#e8850a] text-white"
                      onClick={() => window.open("tel:+13657775016")}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call: +1 (365) 777-5016
                    </Button>
                    <Button
                      className="w-full border-white bg-transparent text-white hover:bg-white hover:text-[#1A2D75]"
                      onClick={() => window.open("mailto:2winontario@gmail.com")}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Email Us
                    </Button>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <h4 className="font-semibold mb-3">Business Hours</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Mon - Fri:</span>
                        <span>7:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>8:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>By Appointment</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Features */}
            <AnimatedSection>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#1A2D75] mb-4">Why Choose Our Commercial Painting</h3>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="p-2 bg-[#F7941D] text-white rounded-lg">{feature.icon}</div>
                        <span className="font-medium text-gray-700">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Pricing */}
            <AnimatedSection>
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#1A2D75] mb-4">Pricing & Warranty</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-[#F7941D]" />
                      <span className="text-gray-700">Competitive commercial rates</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-[#F7941D]" />
                      <span className="text-gray-700">3-year warranty on workmanship</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-[#F7941D]" />
                      <span className="text-gray-700">Free estimates and consultations</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Related Services */}
            <AnimatedSection>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#1A2D75] mb-4">Related Services</h3>
                  <div className="space-y-3">
                    <Link
                      href="/services/renovations"
                      className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <Home className="h-5 w-5 text-[#F7941D]" />
                      <span className="text-gray-700">Commercial Renovations</span>
                    </Link>
                    <Link
                      href="/services/general-contracting"
                      className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <Wrench className="h-5 w-5 text-[#F7941D]" />
                      <span className="text-gray-700">General Contracting</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="bg-[#1A2D75] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Commercial Space?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Enhance your business image with professional commercial painting. Contact us for a free consultation and
              estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#F7941D] hover:bg-[#e8850a] text-white px-8 py-3"
                onClick={() => window.open("tel:+13657775016")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now for Estimate
              </Button>
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#1A2D75] px-8 py-3"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}
