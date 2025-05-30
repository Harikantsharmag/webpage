"use client"

import type React from "react"
import { useEffect } from "react"

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
  Zap,
  Home,
  Wrench,
  AlertTriangle,
} from "lucide-react"

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

export default function ElectricalPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const services = [
    "Electrical panel upgrades",
    "Wiring and rewiring",
    "Outlet and switch installation",
    "Lighting installation",
    "Electrical inspections",
    "Generator installation",
    "EV charger installation",
    "Commercial electrical work",
    "Circuit breaker replacement",
    "Electrical troubleshooting",
    "Code compliance upgrades",
    "Smart home installations",
  ]

  const features = [
    { icon: <Zap className="h-5 w-5" />, text: "ECRA Licensed Electricians" },
    { icon: <Shield className="h-5 w-5" />, text: "ESA Certified Work" },
    { icon: <CheckCircle className="h-5 w-5" />, text: "Code Compliant Installation" },
    { icon: <Award className="h-5 w-5" />, text: "5-Year Warranty" },
  ]

  const emergencyServices = [
    "Power outages",
    "Electrical fires",
    "Sparking outlets",
    "Circuit breaker issues",
    "Electrical shocks",
    "Burning smells",
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
          src="/images/hero-electrical.jpg"
          alt="Professional electrical services"
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
              <Zap className="h-8 w-8 mr-3" />
              <Badge className="bg-[#F7941D] text-white">ECRA Licensed</Badge>
            </div>
            <h1 className="text-5xl font-bold mb-4">Licensed Electrical Services</h1>
            <p className="text-xl text-gray-200 mb-6">
              ECRA licensed electricians for safe and reliable electrical work. Residential and commercial services
              available.
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
        <div className="bg-yellow-600 text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center space-x-4">
              <AlertTriangle className="h-6 w-6" />
              <span className="text-lg font-semibold">24/7 Emergency Electrical Service Available</span>
              <Button
                size="sm"
                className="border-white bg-transparent text-white hover:bg-white hover:text-yellow-600"
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
                <h2 className="text-3xl font-bold text-[#1A2D75] mb-6">Expert Electrical Solutions</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our ECRA licensed electricians provide safe, reliable electrical services for residential and
                  commercial properties. We ensure all work meets Ontario electrical codes and safety standards, giving
                  you peace of mind with every installation and repair.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  From simple outlet installations to complex panel upgrades, our experienced team handles projects of
                  all sizes. We stay current with the latest electrical codes and use only high-quality materials to
                  ensure your electrical system operates safely and efficiently.
                </p>
              </div>
            </AnimatedSection>

            {/* Services Grid */}
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-[#1A2D75] mb-8">Our Electrical Services</h2>
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
              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-yellow-500 text-white rounded-lg mr-4">
                      <AlertTriangle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-yellow-800">Emergency Electrical Services</h3>
                      <p className="text-yellow-700">Available 24/7 for electrical emergencies</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {emergencyServices.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Zap className="h-4 w-4 text-yellow-500" />
                        <span className="text-yellow-800">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Safety Information */}
            <AnimatedSection>
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-red-800 mb-4">Electrical Safety Warning</h3>
                  <p className="text-red-700 mb-4">
                    Electrical work can be dangerous and should only be performed by licensed professionals. Signs you
                    need immediate electrical service:
                  </p>
                  <ul className="list-disc pl-6 text-red-700 space-y-2">
                    <li>Burning smells from outlets or panels</li>
                    <li>Sparks when plugging in devices</li>
                    <li>Frequent circuit breaker trips</li>
                    <li>Flickering or dimming lights</li>
                    <li>Warm or hot outlets and switches</li>
                    <li>Electrical shocks from appliances</li>
                  </ul>
                </CardContent>
              </Card>
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
                  <h3 className="text-xl font-semibold text-[#1A2D75] mb-4">Why Choose Our Electrical Services</h3>
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
                      <span className="text-gray-700">Service calls starting from $200</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-[#F7941D]" />
                      <span className="text-gray-700">5-year warranty on installations</span>
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
                    <Link
                      href="/services/general-contracting"
                      className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <Award className="h-5 w-5 text-[#F7941D]" />
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
            <h2 className="text-3xl font-bold mb-4">Need Electrical Work Done Right?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Trust our ECRA licensed electricians for safe, code-compliant electrical work. Contact us today.
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
