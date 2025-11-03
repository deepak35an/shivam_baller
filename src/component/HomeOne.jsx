import React, { useState, useEffect } from 'react';
import { Tractor, Wrench, Package, Users, Award, TrendingUp, Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Empowering Farmers with Modern Solutions",
      subtitle: "Quality Agricultural Machinery Since 2020",
      cta: "Explore Our Services"
    },
    {
      title: "Efficient Square Balers",
      subtitle: "Simplify Your Post-Harvest Management",
      cta: "View Equipment"
    },
    {
      title: "Affordable Rental Solutions",
      subtitle: "Access Premium Machinery Without Heavy Investment",
      cta: "Rental Options"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: <Package className="w-10 h-10" />,
      title: "Sales of Agricultural Equipment",
      description: "Wide range of square balers, rakes, and farm implements designed for reliable performance with minimal maintenance."
    },
    {
      icon: <Tractor className="w-10 h-10" />,
      title: "Custom Baling Services",
      description: "Professional on-field baling with advanced equipment and skilled operators. Quick field clearing for your next crop cycle."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Equipment Rental",
      description: "Access high-quality agricultural machinery at affordable rates without heavy capital investment."
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Maintenance & Support",
      description: "Comprehensive after-sales service including maintenance, repair, and spare parts support for longer equipment life."
    }
  ];

  const whyChooseUs = [
    { icon: <Award className="w-6 h-6" />, title: "Experienced & Reliable", desc: "Years of hands-on experience in agricultural machinery" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Quality Assurance", desc: "Equipment built for Indian farming conditions" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Affordable Solutions", desc: "Competitive pricing for sales, rental, and services" },
    { icon: <Users className="w-6 h-6" />, title: "Customer-Centric", desc: "Personalized assistance and quick response" }
  ];

  const stats = [
    { number: "2020", label: "Established" },
    { number: "100+", label: "Happy Farmers" },
    { number: "24/7", label: "Support Available" },
    { number: "MSME", label: "Registered" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Slider */}
      <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                MSME Registered • UDYAM-HR-11-0016195
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-50 max-w-3xl mx-auto">
              {heroSlides[currentSlide].subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <a href="https://wa.link/wrdiq4" className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Whatsapp Us</span>
              </a>
              <a href="tel:8950648283"className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call Us Now</span>
              </a>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center space-x-2 mt-12">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About Shivam Square Baler
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Our Story</h3>
                <p className="mb-4 leading-relaxed">
                  Established in 2020, Shivam Square Baler is a trusted name in agricultural machinery based in Pehowa, Kurukshetra, Haryana. We are committed to empowering farmers with efficient, durable, and affordable mechanized solutions.
                </p>
                <p className="leading-relaxed">
                  We specialize in manufacturing, supply, and servicing of square balers and related agricultural equipment that help farmers efficiently collect, compress, and bind crop residue into compact square bales.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h4>
                <p className="text-gray-600">
                  Revolutionize Indian farming practices through affordable mechanization, helping farmers reduce manual labor and improve efficiency.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Our Vision</h4>
                <p className="text-gray-600">
                  Make agriculture more sustainable and profitable by promoting environmentally friendly crop management practices.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600">
                <h4 className="text-xl font-bold text-gray-800 mb-2">MSME Certified</h4>
                <p className="text-gray-600">
                  Registered micro enterprise under Ministry of MSME, Government of India (UDYAM-HR-11-0016195)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive agricultural machinery solutions tailored to meet the needs of modern farming
            </p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Farming Operations?
          </h2>
          <p className="text-xl mb-8 text-green-50">
            Contact us today for quality agricultural machinery solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8950648283" className="px-8 py-4 bg-white text-green-700 rounded-lg font-semibold hover:bg-green-50 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg">
              <Phone className="w-5 h-5" />
              <span>+91 89506 48283</span>
            </a>
            <a href="mailto:shivamsaini376v@gmail.com" className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Shivam Square Baler
            </h3>
            <p className="text-gray-400 mb-4">
              Empowering farmers with modern agricultural solutions since 2020.
            </p>
            <p className="text-sm text-gray-500">
              UDYAM-HR-11-0016195
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-sm">Opp. H.M.F, Near Sachin Tyre, Kaithal Road, Pehowa, Kurukshetra - 136128</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+91 89506 48283</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-sm">shivamsaini376v@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2024 Shivam Square Baler. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
}