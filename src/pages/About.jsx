import React from 'react';
import { Target, Eye, Award, Users, TrendingUp, Heart, CheckCircle, Building, MapPin, Calendar } from 'lucide-react';

export default function AboutPage() {
  const milestones = [
    { year: "2020", title: "Company Established", desc: "Founded on May 12, 2020 in Pehowa, Kurukshetra" },
    { year: "2020", title: "MSME Registration", desc: "Registered under Ministry of MSME (UDYAM-HR-11-0016195)" },
    { year: "2021", title: "Service Expansion", desc: "Introduced equipment rental services" },
    { year: "2024", title: "100+ Happy Farmers", desc: "Serving agricultural community across Haryana" }
  ];

  const values = [
    {
      icon: <Award className="w-10 h-10" />,
      title: "Quality First",
      description: "We never compromise on the quality of our equipment and services. Every machine is tested and maintained to the highest standards."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Customer-Centric",
      description: "Our farmers are at the heart of everything we do. We provide personalized solutions and responsive support to meet their unique needs."
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Innovation",
      description: "We continuously adopt the latest agricultural technologies to help farmers improve productivity and reduce costs."
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Sustainability",
      description: "Promoting environmentally friendly farming practices and efficient crop residue management for a better tomorrow."
    }
  ];

  const whyChoose = [
    "Years of hands-on experience in agricultural machinery",
    "High-performance equipment built for Indian farming conditions",
    "Competitive pricing for sales, rental, and service options",
    "Personalized assistance and quick response to client needs",
    "Comprehensive after-sales support and maintenance",
    "Promoting sustainable and efficient crop management"
  ];

  const teamValues = [
    { icon: <Building className="w-6 h-6" />, label: "MSME Certified", value: "Government Registered" },
    { icon: <MapPin className="w-6 h-6" />, label: "Location", value: "Pehowa, Kurukshetra" },
    { icon: <Calendar className="w-6 h-6" />, label: "Since", value: "May 12, 2020" },
    { icon: <Users className="w-6 h-6" />, label: "Clients Served", value: "100+ Farmers" }
  ];

  return (
    <div className="min-h-screen bg-white mt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-blue-800 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto">
            Empowering farmers with efficient, durable, and affordable mechanized solutions since 2020
          </p>
        </div>
      </div>

      {/* Company Info Cards */}
      <div className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {teamValues.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                  {item.icon}
                </div>
                <div className="text-sm text-gray-600 mb-1">{item.label}</div>
                <div className="text-lg font-bold text-gray-800">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="w-24 h-1 bg-green-600 mb-8"></div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Welcome to <strong>Shivam Square Baler</strong>, a trusted name in the agricultural machinery and farm service industry based in Pehowa, District Kurukshetra, Haryana. Established in 2020, our company is committed to empowering farmers with efficient, durable, and affordable mechanized solutions that simplify agricultural operations and increase productivity.
                </p>
                
                <p className="text-lg">
                  At Shivam Square Baler, we specialize in the manufacturing, supply, and servicing of square balers and related agricultural equipment. Our machines are designed to help farmers efficiently collect, compress, and bind crop residue like straw, hay, and stubble into compact square bales.
                </p>
                
                <p className="text-lg">
                  These bales are easy to handle, transport, and store — saving both time and effort during post-harvest management. Our commitment to quality and customer satisfaction has made us a preferred partner for farmers across the region.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-2xl shadow-2xl">
                <Target className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed">
                  Our mission is to revolutionize Indian farming practices through affordable mechanization. We aim to help farmers reduce manual labor, improve efficiency, and make agriculture more sustainable and profitable.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-2xl shadow-2xl">
                <Eye className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg leading-relaxed">
                  To become the leading provider of agricultural machinery solutions in North India, recognized for innovation, reliability, and unwavering commitment to farmer success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-green-600 to-blue-700 text-white p-12 rounded-2xl shadow-2xl">
              <h2 className="text-3xl font-bold mb-8">Why Choose Shivam Square Baler?</h2>
              <div className="space-y-4">
                {whyChoose.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="text-lg">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">MSME Certified Business</h2>
              <div className="w-24 h-1 bg-green-600 mb-8"></div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Shivam Square Baler is a registered micro enterprise under the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India.
                </p>
                
                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                  <div className="font-semibold text-gray-800 mb-2">UDYAM Registration No.</div>
                  <div className="text-2xl font-bold text-green-700">UDYAM-HR-11-0016195</div>
                  <div className="text-sm text-gray-600 mt-2">Established: May 12, 2020</div>
                </div>
                
                <p className="text-lg">
                  The business operates from Kaithal Road, Pehowa, District Kurukshetra, Haryana, and falls under the "Service Activities Incidental to Land Transportation" category (NIC Code 52219).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Journey
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 shadow-lg">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Growing Family of Satisfied Farmers
          </h2>
          <p className="text-xl mb-8 text-green-50">
            Experience the difference that quality equipment and dedicated service can make
          </p>
          <button className="px-8 py-4 bg-white text-green-700 rounded-lg font-semibold hover:bg-green-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Get in Touch Today
          </button>
        </div>
      </div>
    </div>
  );
}