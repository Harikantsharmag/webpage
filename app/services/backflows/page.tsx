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
  Wrench,
  Droplets,
  Home,
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

export default function BackflowsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const services = [
    "Backflow preventer installation",
    "Annual backflow testing",
    "Cross-connection surveys",
    "Backflow device repair",
    "Municipal compliance reporting",
    "Emergency backflow service",
    "System upgrades",
    "Consultation and planning",
    "Commercial backflow services",
    "Residential backflow services",
    "Backflow certification",
    "Preventative maintenance",
  ]

  const features = [
    { icon: <Shield className="h-5 w-5" />, text: "Certified Backflow Testers" },
    { icon: <CheckCircle className="h-5 w-5" />, text: "Municipal Compliance" },
    { icon: <Droplets className="h-5 w-5" />, text: "Annual Testing Programs" },
    { icon: <Award className="h-5 w-5" />, text: "Certified Reporting" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#1A2D75] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">2W</span>
              </div>
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
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Backflow prevention services"
          fill
          className="object-cover"
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
              <Shield className="h-8 w-8 mr-3" />
              <Badge className="bg-[#F7941D] text-white">Certified Service</Badge>
            </div>
            <h1 className="text-5xl font-bold mb-4">Backflow Prevention Services</h1>
            <p className="text-xl text-gray-200 mb-6">
              Certified backflow testing and cross-connection control, fully compliant with Ontario regulations.
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
                <h2 className="text-3xl font-bold text-[#1A2D75] mb-6">Certified Backflow Prevention</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We provide certified backflow prevention and cross-connection control services, fully compliant with
                  Ontario regulations and municipal requirements. Our certified technicians ensure your water supply is
                  protected from contamination.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Backflow prevention is critical for protecting your drinking water from contamination. Our team
                  specializes in the installation, testing, and certification of backflow prevention devices for
                  residential, commercial, and industrial properties throughout the Greater Toronto Area.
                </p>
              </div>
            </AnimatedSection>

            {/* Services Grid */}
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-[#1A2D75] mb-8">Our Backflow Services</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Compliance Information */}
            <AnimatedSection>
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-500 text-white rounded-lg mr-4">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-800">Municipal Compliance</h3>
                      <p className="text-blue-700">Stay compliant with local regulations</p>
                    </div>
                  </div>
                  <p className="text-blue-700 mb-4">
                    Many municipalities in the Greater Toronto Area require annual backflow testing and certification.
                    Our services help you:
                  </p>
                  <ul className="list-disc pl-6 text-blue-700 space-y-2">
                    <li>Meet municipal requirements for backflow prevention</li>
                    <li>Receive proper documentation for compliance</li>
                    <li>Avoid potential fines and penalties</li>
                    <li>Ensure safe drinking water for your property</li>
                    <li>Maintain insurance compliance</li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Process */}
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-[#1A2D75] mb-8">Our Process</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#1A2D75] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A2D75] mb-2">Inspection</h3>
                  <p className="text-gray-600">We assess your property and identify backflow prevention needs.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#F7941D] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A2D75] mb-2">Installation/Testing</h3>
                  <p className="text-gray-600">Our certified technicians install or test your backflow devices.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#1A2D75] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A2D75] mb-2">Certification</h3>
                  <p className="text-gray-600">We provide all necessary documentation for municipal compliance.</p>
                </div>
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
                      onClick={() => window.open("mailto:info@2wingroup.ca")}
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
                  <h3 className="text-xl font-semibold text-[#1A2D75] mb-4">Why Choose Our Backflow Services</h3>
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
                      <span className="text-gray-700">Testing starting from $120</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-[#F7941D]" />
                      <span className="text-gray-700">1-year warranty on installations</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-[#F7941D]" />
                      <span className="text-gray-700">Free estimates for installations</span>
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
                      href="/services/plumbing"
                      className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <Wrench className="h-5 w-5 text-[#F7941D]" />
                      <span className="text-gray-700">Plumbing Services</span>
                    </Link>
                    <Link
                      href="/services/renovations"
                      className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <Home className="h-5 w-5 text-[#F7941D]" />
                      <span className="text-gray-700">Home Renovations</span>
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
            <h2 className="text-3xl font-bold mb-4">Need Backflow Testing or Installation?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Stay compliant with municipal regulations and protect your water supply. Contact our certified technicians
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#F7941D] hover:bg-[#e8850a] text-white px-8 py-3"
                onClick={() => window.open("tel:+13657775016")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now for Service
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
