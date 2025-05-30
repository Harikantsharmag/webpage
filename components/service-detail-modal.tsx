"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Phone, CheckCircle, Clock, Shield, Award, Wrench, Zap, Home, Users, ArrowRight, Star } from "lucide-react"

interface ServiceDetailModalProps {
  service: string
  onClose: () => void
}

const serviceData = {
  plumbing: {
    title: "Professional Plumbing Services",
    subtitle: "Licensed plumbers for all your residential and commercial needs",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Our licensed plumbing professionals provide comprehensive plumbing services throughout the Greater Toronto Area. From emergency repairs to complete system installations, we handle every job with precision and compliance to Ontario plumbing codes.",
    services: [
      "Emergency plumbing repairs",
      "Drain cleaning and unclogging",
      "Water heater installation and repair",
      "Pipe installation and replacement",
      "Fixture installation (sinks, toilets, faucets)",
      "Sump pump installation",
      "Water line repairs",
      "Bathroom and kitchen plumbing",
    ],
    features: [
      { icon: <Shield className="h-5 w-5" />, text: "Licensed & Insured Plumbers" },
      { icon: <Clock className="h-5 w-5" />, text: "24/7 Emergency Service" },
      { icon: <CheckCircle className="h-5 w-5" />, text: "Code Compliant Work" },
      { icon: <Award className="h-5 w-5" />, text: "Warranty on All Work" },
    ],
    pricing: "Starting from $150 for service calls",
    warranty: "2-year warranty on all installations",
  },
  electrical: {
    title: "Licensed Electrical Services",
    subtitle: "ECRA licensed electricians for safe and reliable electrical work",
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Our ECRA licensed electricians provide safe, reliable electrical services for residential and commercial properties. We ensure all work meets Ontario electrical codes and safety standards.",
    services: [
      "Electrical panel upgrades",
      "Wiring and rewiring",
      "Outlet and switch installation",
      "Lighting installation",
      "Electrical inspections",
      "Generator installation",
      "EV charger installation",
      "Commercial electrical work",
    ],
    features: [
      { icon: <Zap className="h-5 w-5" />, text: "ECRA Licensed Electricians" },
      { icon: <Shield className="h-5 w-5" />, text: "ESA Certified Work" },
      { icon: <CheckCircle className="h-5 w-5" />, text: "Code Compliant Installation" },
      { icon: <Award className="h-5 w-5" />, text: "Comprehensive Warranty" },
    ],
    pricing: "Starting from $200 for service calls",
    warranty: "5-year warranty on electrical installations",
  },
  "medical-gas": {
    title: "Medical Gas Systems",
    subtitle: "CSA certified medical gas installation and maintenance",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Our certified technicians specialize in medical gas systems according to CSA standards. We provide hospital-grade safety and installation for healthcare facilities.",
    services: [
      "Medical gas pipeline installation",
      "Oxygen system installation",
      "Vacuum system installation",
      "Medical air systems",
      "Gas outlet installation",
      "System testing and certification",
      "Maintenance and repairs",
      "Emergency gas system service",
    ],
    features: [
      { icon: <Users className="h-5 w-5" />, text: "CSA Certified Technicians" },
      { icon: <Shield className="h-5 w-5" />, text: "Hospital-Grade Safety" },
      { icon: <CheckCircle className="h-5 w-5" />, text: "Code Compliant Systems" },
      { icon: <Award className="h-5 w-5" />, text: "Full System Certification" },
    ],
    pricing: "Custom quotes based on system requirements",
    warranty: "3-year warranty on medical gas installations",
  },
  backflows: {
    title: "Backflow Prevention Services",
    subtitle: "Certified backflow testing and cross-connection control",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "We provide certified backflow prevention and cross-connection control services, fully compliant with Ontario regulations and municipal requirements.",
    services: [
      "Backflow preventer installation",
      "Annual backflow testing",
      "Cross-connection surveys",
      "Backflow device repair",
      "Municipal compliance reporting",
      "Emergency backflow service",
      "System upgrades",
      "Consultation and planning",
    ],
    features: [
      { icon: <Shield className="h-5 w-5" />, text: "Certified Backflow Testers" },
      { icon: <CheckCircle className="h-5 w-5" />, text: "Municipal Compliance" },
      { icon: <Clock className="h-5 w-5" />, text: "Annual Testing Programs" },
      { icon: <Award className="h-5 w-5" />, text: "Certified Reporting" },
    ],
    pricing: "Starting from $120 for testing",
    warranty: "1-year warranty on installations",
  },
  renovations: {
    title: "Home & Commercial Renovations",
    subtitle: "Complete renovation services from design to completion",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Transform your space with our comprehensive renovation services. From kitchens and bathrooms to complete home makeovers, we handle every detail with precision and care.",
    services: [
      "Kitchen renovations",
      "Bathroom remodeling",
      "Basement finishing",
      "Home additions",
      "Commercial renovations",
      "Flooring installation",
      "Painting and finishing",
      "Custom millwork",
    ],
    features: [
      { icon: <Home className="h-5 w-5" />, text: "Complete Design Service" },
      { icon: <Wrench className="h-5 w-5" />, text: "Licensed Contractors" },
      { icon: <CheckCircle className="h-5 w-5" />, text: "Permit Handling" },
      { icon: <Award className="h-5 w-5" />, text: "Quality Guarantee" },
    ],
    pricing: "Custom quotes based on project scope",
    warranty: "5-year warranty on structural work",
  },
  "general-contracting": {
    title: "General Contracting Services",
    subtitle: "Full project management from permits to completion",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Our licensed general contractors provide complete project oversight, managing all trades, permits, and safety compliance for your construction project.",
    services: [
      "Project management",
      "Permit acquisition",
      "Trade coordination",
      "Safety compliance",
      "Quality control",
      "Timeline management",
      "Budget oversight",
      "Final inspections",
    ],
    features: [
      { icon: <Award className="h-5 w-5" />, text: "Licensed General Contractors" },
      { icon: <Shield className="h-5 w-5" />, text: "Full Insurance Coverage" },
      { icon: <CheckCircle className="h-5 w-5" />, text: "Permit Management" },
      { icon: <Clock className="h-5 w-5" />, text: "On-Time Delivery" },
    ],
    pricing: "Competitive rates based on project scope",
    warranty: "Comprehensive project warranty",
  },
}

export default function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  const data = serviceData[service as keyof typeof serviceData]

  if (!data) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-lg max-w-6xl w-full max-h-[95vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 text-gray-600 hover:text-gray-800 shadow-lg"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Hero Section */}
        <div className="relative h-80 overflow-hidden rounded-t-lg">
          <Image src={data.image || "/placeholder.svg"} alt={data.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A2D75]/90 via-[#1A2D75]/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
            <p className="text-xl text-gray-200">{data.subtitle}</p>
          </div>
        </div>

        <div className="p-8">
          {/* Description */}
          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">{data.description}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Services List */}
            <div>
              <h2 className="text-2xl font-bold text-[#1A2D75] mb-6">Our Services Include:</h2>
              <div className="grid gap-3">
                {data.services.map((serviceItem, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{serviceItem}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features & Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#1A2D75] mb-4">Why Choose Us</h3>
                <div className="space-y-3">
                  {data.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="p-2 bg-[#F7941D] text-white rounded-lg">{feature.icon}</div>
                      <span className="font-medium text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-[#1A2D75] mb-3">Pricing & Warranty</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-[#F7941D]" />
                      <span className="text-gray-700">{data.pricing}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-[#F7941D]" />
                      <span className="text-gray-700">{data.warranty}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <Button
                  onClick={() => {
                    onClose()
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="w-full bg-[#F7941D] hover:bg-[#e8850a] text-white"
                >
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-[#1A2D75] text-[#1A2D75] hover:bg-[#1A2D75] hover:text-white"
                  onClick={() => window.open("tel:+13657775016")}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now: +1 (365) 777-5016
                </Button>
              </div>
            </div>
          </div>

          {/* Emergency Service Banner */}
          {(service === "plumbing" || service === "electrical") && (
            <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-500 text-white rounded-lg">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-red-800">24/7 Emergency Service Available</h4>
                  <p className="text-red-700">
                    Need immediate assistance? We&apos;re available around the clock for emergency {service} services.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
