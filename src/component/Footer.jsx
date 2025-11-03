import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Clock, Award } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Agricultural Equipment Sales', href: '#sales' },
    { name: 'Custom Baling Services', href: '#baling' },
    { name: 'Equipment Rental', href: '#rental' },
    { name: 'Maintenance & Support', href: '#maintenance' }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', name: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', name: 'Instagram' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SS</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Shivam Square Baler
              </h3>
            </div>
            
            <p className="text-gray-400 mb-4 leading-relaxed">
              Empowering farmers with modern agricultural solutions since 2020. Quality equipment, affordable prices, and dedicated service.
            </p>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm mb-2">
              <Award className="w-4 h-4 text-green-500" />
              <span>MSME Registered</span>
            </div>
            <div className="text-xs text-gray-500">
              UDYAM-HR-11-0016195
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div className="text-gray-400 text-sm">
                  <div>Opp. H.M.F, Near Sachin Tyre</div>
                  <div>Kaithal Road, Pehowa</div>
                  <div>Kurukshetra, Haryana - 136128</div>
                </div>
              </div>

              <a
                href="tel:8950648283"
                className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors"
              >
                <Phone className="w-5 h-5 text-green-500" />
                <span>+91 89506 48283</span>
              </a>

              <a
                href="mailto:shivamsaini376v@gmail.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors break-all"
              >
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm">shivamsaini376v@gmail.com</span>
              </a>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div className="text-gray-400 text-sm">
                  <div>Mon - Sat: 9:00 AM - 6:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media & Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-500 text-sm text-center md:text-left">
              <p>© {currentYear} Shivam Square Baler. All rights reserved.</p>
              <p className="text-xs mt-1">Registered under Ministry of MSME, Government of India</p>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 text-sm mr-2">Follow Us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-all duration-200 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Extra Info Bar */}
      <div className="bg-gray-950 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-xs text-gray-600">
            <span>NIC Code: 52219</span>
            <span className="hidden md:inline">•</span>
            <span>Service Activities Incidental to Land Transportation</span>
            <span className="hidden md:inline">•</span>
            <span>Serving Haryana & Surrounding Regions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}