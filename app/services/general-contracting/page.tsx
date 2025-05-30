"use client"

import type React from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, CheckCircle, Shield, Award, ArrowRight, Clock } from "lucide-react"
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

export default function GeneralContractingPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const services = [
    "Project management",
    "Permit acquisition",
    "Trade coordination",
    "Safety compliance",
    "Quality control",
    "Timeline management",
    "Budget oversight",
    "Final inspections",
    "Subcontractor management",
    "Material procurement",
    "Site supervision",
    "Progress reporting",
  ]

  const features = [
    { icon: <Award className="h-5 w-5" />, text: "Licensed General Contractors" },
    { icon: <Shield className="h-5 w-5" />, text: "Full Insurance Coverage" },
    { icon: <CheckCircle className="h-5 w-5" />, text: "Permit Management" },
    { icon: <Clock className="h-5 w-5" />, text: "On-Time Delivery" },
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
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="General contracting services"
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
              <Award className="h-8 w-8 mr-3" />
              <Badge className="bg-[#F7941D] text-white">Licensed Contractors</Badge>
            </div>
            <h1 className="text-5xl font-bold mb-4">General Contracting Services</h1>
            <p className="text-xl text-gray-200 mb-6">
              Full project management from permits to completion. Let us handle every aspect of your construction
              project.
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
                <h2 className="text-3xl font-bold text-[#1A2D75] mb-6">Comprehensive Project Management</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our licensed general contractors provide complete project oversight, managing all trades, permits, and
                  safety compliance for your construction project. We take the stress out of construction by handling
                  every detail from start to finish.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With decades of experience in the construction industry, our team has the expertise to manage projects
                  of any size and complexity. We maintain strong relationships with trusted subcontractors, suppliers,
                  and municipal authorities to ensure your project proceeds smoothly and efficiently.
                </p>
              </div>
            </AnimatedSection>

            {/* Services Grid */}
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-[#1A2D75] mb-8">Our General Contracting Services</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Project Types */}
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-[#1A2D75] mb-8">Project Types We Handle</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#1A2D75] mb-4">Residential Projects</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Custom Homes</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Renovations & Additions</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Interior Design</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#1A2D75] mb-4">Commercial Projects</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Office Buildings</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Retail Spaces</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Restaurant Builds</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Features List */}
            <AnimatedSection>
              <div className="space-y-4 bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#1A2D75] mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      {feature.icon}
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Contact Card */}
            <AnimatedSection>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#1A2D75] mb-4">Get in Touch</h3>
                  <p className="text-gray-700 mb-4">Ready to start your project? Contact us today.</p>
                  <Button className="bg-[#F7941D] hover:bg-[#e8850a] text-white w-full">Contact Us</Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </aside>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-[#1A2D75] py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Let us bring your vision to life with our expert general contracting services.
          </p>
          <Link href="/#contact">
            <Button
              size="lg"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#1A2D75] px-8 py-3"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} 2WIN Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
