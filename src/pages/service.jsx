import React from 'react';
import { Package, Tractor, Users, Wrench, CheckCircle, ArrowRight, Phone, DollarSign, Clock, Shield } from 'lucide-react';

export default function ServicesPage() {
  const mainServices = [
    {
      icon: <Package className="w-12 h-12" />,
      title: "Sales of Agricultural Equipment",
      description: "We offer a wide range of square balers, rakes, and other farm implements designed to meet the needs of modern agriculture. Each machine is built to deliver reliable performance, ensuring maximum output with minimal maintenance.",
      features: [
        "High-quality square balers",
        "Durable rakes and implements",
        "Built for Indian farming conditions",
        "Maximum output efficiency",
        "Minimal maintenance required",
        "Comprehensive warranty coverage"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Tractor className="w-12 h-12" />,
      title: "Custom Baling Services",
      description: "Our professional baling services cater to farmers who prefer outsourcing their baling operations. With the help of advanced equipment and skilled operators, we provide quick and efficient on-field baling solutions.",
      features: [
        "Advanced baling equipment",
        "Skilled and experienced operators",
        "Quick field clearing services",
        "Efficient crop residue management",
        "Prepare fields for next crop cycle",
        "Flexible scheduling options"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Equipment Rental",
      description: "Understanding the financial challenges faced by small and medium-scale farmers, we also offer agricultural machinery on rent. This allows farmers to access high-quality equipment at affordable rates without heavy capital investment.",
      features: [
        "No heavy capital investment needed",
        "Affordable daily/weekly rates",
        "Well-maintained equipment",
        "Flexible rental periods",
        "Delivery and pickup services",
        "Technical support included"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Maintenance & Support",
      description: "We believe in building long-term relationships with our clients. Our after-sales service team provides maintenance, repair, and spare parts support, ensuring smooth operation and longer life for your equipment.",
      features: [
        "Regular maintenance services",
        "Quick repair solutions",
        "Genuine spare parts supply",
        "Technical consultation",
        "Equipment health checkups",
        "Emergency breakdown support"
      ],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost-Effective Solutions",
      description: "Competitive pricing across all services with flexible payment options"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time-Saving",
      description: "Quick and efficient services that help you complete work faster"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assured",
      description: "Equipment and services built to last with guaranteed reliability"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Proven Track Record",
      description: "Trusted by 100+ farmers across Haryana since 2020"
    }
  ];

  const processSteps = [
    { number: "01", title: "Contact Us", desc: "Reach out via phone, email, or visit us" },
    { number: "02", title: "Consultation", desc: "Discuss your specific farming needs" },
    { number: "03", title: "Solution Design", desc: "We recommend the best equipment/service" },
    { number: "04", title: "Service Delivery", desc: "Quick deployment and ongoing support" }
  ];

  return (
    <div className="min-h-screen bg-white mt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-blue-800 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto">
            Comprehensive agricultural machinery solutions designed to empower farmers and increase productivity
          </p>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className={`bg-gradient-to-br ${service.color} rounded-2xl p-12 text-white shadow-2xl transform hover:scale-105 transition-all duration-300`}>
                    <div className="mb-6">{service.icon}</div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg leading-relaxed opacity-90">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
                  <div className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Our Services Stand Out
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">Simple process to get started with our services</p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-8 -right-12 w-8 h-8 text-gray-300" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-green-50">
            Contact us today to discuss your agricultural machinery needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8950648283"
              className="px-8 py-4 bg-white text-green-700 rounded-lg font-semibold hover:bg-green-50 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Call: +91 89506 48283</span>
            </a>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 flex items-center justify-center space-x-2">
              <span>Request Quote</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}