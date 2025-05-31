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
  Clock,
  Shield,
  Award,
  Star,
  ArrowRight,
  Wrench,
  Droplets,
  Zap,
  Home,
} from "lucide-react"
import { useEffect } from "react"

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div initial="hidden" whileInView="visible" variants={fadeUp} className={className}>
      {children}
    </motion.div>
  )
}

export default function PlumbingPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const services = [
    "Emergency plumbing repairs",
    "Drain cleaning and unclogging",
    "Water heater installation and repair",
    "Pipe installation and replacement",
    "Fixture installation (sinks, toilets, faucets)",
    "Sump pump installation",
    "Water line repairs",
    "Bathroom and kitchen plumbing",
    "Leak detection and repair",
    "Sewer line services",
    "Water pressure issues",
    "Garbage disposal installation",
  ]

  const features = [
    { icon: <Shield className="h-5 w-5" />, text: "Licensed & Insured Plumbers" },
    { icon: <Clock className="h-5 w-5" />, text: "24/7 Emergency Service" },
    { icon: <CheckCircle className="h-5 w-5" />, text: "Code Compliant Work" },
    { icon: <Award className="h-5 w-5" />, text: "2-Year Warranty on All Work" },
  ]

  const emergencyServices = [
    "Burst pipe repairs",
    "Severe drain blockages",
    "Water heater failures",
    "Sewer backups",
    "Gas leak detection",
    "Flooding issues",
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
          src="/images/hero-plumbing.jpg"
          alt="Professional plumbing services"
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
              <Wrench className="h-8 w-8 mr-3" />
              <Badge className="bg-[#F7941D] text-white">Professional Service</Badge>
            </div>
            <h1 className="text-5xl font-bold mb-4">Professional Plumbing Services</h1>
            <p className="text-xl text-gray-200 mb-6">
              Licensed plumbers for all your residential and commercial needs. Available 24/7 for emergencies.
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

      {/* Emergency Banner */}
      <AnimatedSection>
        <div className="bg-red-600 text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center space-x-4">
              <Clock className="h-6 w-6" />
              <span className="text-lg font-semibold">24/7 Emergency Plumbing Service Available</span>
              <Button
                size="sm"
                className="border-white bg-transparent text-white hover:bg-white hover:text-red-600"
                onClick={() => window.open("tel:+13657775016")}
              >
                Call Emergency Line
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <AnimatedSection>
              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold text-[#1A2D75] mb-6">Expert Plumbing Solutions</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our licensed plumbing professionals provide comprehensive plumbing services throughout the Greater
                  Toronto Area. From emergency repairs to complete system installations, we handle every job with
                  precision and compliance to Ontario plumbing codes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With over 15 years of experience, our team has the expertise to tackle any plumbing challenge. We use
                  only the highest quality materials and latest techniques to ensure your plumbing system operates
                  efficiently for years to come.
                </p>
              </div>
            </AnimatedSection>

            {/* Services Grid */}
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-[#1A2D75] mb-8">Our Plumbing Services</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Emergency Services */}
            <AnimatedSection>
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-red-500 text-white rounded-lg mr-4">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-red-800">Emergency Plumbing Services</h3>
                      <p className="text-red-700">Available 24/7 for urgent plumbing issues</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {emergencyServices.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Droplets className="h-4 w-4 text-red-500" />
                        <span className="text-red-800">{service}</span>
                      </div>
                    ))}
                  </div>
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
                  <h3 className="text-xl font-semibold text-[#1A2D75] mb-2">Assessment</h3>
                  <p className="text-gray-600">We diagnose the issue and provide a detailed assessment and quote.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#F7941D] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A2D75] mb-2">Execution</h3>
                  <p className="text-gray-600">Our skilled plumbers complete the work efficiently and safely.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#1A2D75] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A2D75] mb-2">Quality Check</h3>
                  <p className="text-gray-600">We test everything to ensure perfect operation and your satisfaction.</p>
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
                        <span>Emergency:</span>
                        <span>24/7 Available</span>
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
                  <h3 className="text-xl font-semibold text-[#1A2D75] mb-4">Why Choose Our Plumbing Services</h3>
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
                      <span className="text-gray-700">Service calls starting from $150</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-[#F7941D]" />
                      <span className="text-gray-700">2-year warranty on all installations</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-[#F7941D]" />
                      <span className="text-gray-700">Free estimates on major work</span>
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
                      href="/services/electrical"
                      className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <Zap className="h-5 w-5 text-[#F7941D]" />
                      <span className="text-gray-700">Electrical Services</span>
                    </Link>
                    <Link
                      href="/services/renovations"
                      className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <Home className="h-5 w-5 text-[#F7941D]" />
                      <span className="text-gray-700">Home Renovations</span>
                    </Link>
                    <Link
                      href="/services/backflows"
                      className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <Shield className="h-5 w-5 text-[#F7941D]" />
                      <span className="text-gray-700">Backflow Prevention</span>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Fix Your Plumbing Issues?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Don&apos;t let plumbing problems disrupt your day. Contact our licensed professionals for fast, reliable
              service.
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
