import React from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Globe, Shield, Zap, Clock, Users, Star, ArrowRight } from "lucide-react";

const DomainRegistration = () => {
  const { t } = useTranslation();

  const domainExtensions = [
    { name: ".com", price: "$12.99", popular: true },
    { name: ".net", price: "$14.99", popular: false },
    { name: ".org", price: "$13.99", popular: false },
    { name: ".info", price: "$11.99", popular: false },
    { name: ".biz", price: "$12.99", popular: false },
    { name: ".co", price: "$24.99", popular: true },
    { name: ".io", price: "$39.99", popular: true },
    { name: ".ai", price: "$49.99", popular: false },
    { name: ".app", price: "$19.99", popular: false },
    { name: ".dev", price: "$19.99", popular: false },
  ];

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Free Privacy Protection",
      description: "Keep your personal information private with free WHOIS privacy protection"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Activation",
      description: "Your domain is active immediately after registration"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Free DNS Management",
      description: "Full DNS control with our advanced domain management tools"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Round-the-clock support for all your domain needs"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Bulk Registration",
      description: "Register multiple domains at once with bulk pricing"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Premium Support",
      description: "Priority support for domain-related issues"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Badge variant="secondary" className="mb-4">
                Domain Registration
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Find Your Perfect Domain Name
              </h1>
              <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                Secure your online identity with premium domain registration services. 
                Get instant activation, free privacy protection, and 24/7 support.
              </p>
              
              {/* Domain Search */}
              <div className="max-w-md mx-auto lg:mx-0">
                <div className="flex rounded-lg overflow-hidden shadow-lg">
                  <input
                    type="text"
                    placeholder="Search for your perfect domain..."
                    className="flex-1 px-4 py-3 text-gray-700 focus:outline-none"
                  />
                  <Button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-none">
                    Search
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/service-images/domain-registration.svg"
                alt="Domain Registration"
                className="w-80 h-60 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Domain Extensions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Domain Extensions
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Choose from hundreds of domain extensions to find the perfect match for your brand
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {domainExtensions.map((domain, index) => (
              <Card key={index} className={`text-center hover:shadow-lg transition-shadow ${domain.popular ? 'ring-2 ring-blue-500' : ''}`}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold">{domain.name}</CardTitle>
                  {domain.popular && (
                    <Badge variant="secondary" className="text-xs">Popular</Badge>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-600 mb-2">{domain.price}</p>
                  <p className="text-sm text-gray-500 mb-3">per year</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Register
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose HostSailor for Domain Registration?
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Get everything you need to establish your online presence with confidence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Transfer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transfer Your Existing Domains
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Move your domains to HostSailor and enjoy better management tools, 
              faster support, and competitive pricing
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Free Transfer</h3>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                  No hidden fees or charges for domain transfers
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quick Process</h3>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                  Most transfers complete within 5-7 days
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Transfer</h3>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                  Industry-standard security protocols
                </p>
              </div>
            </div>
            
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Domain Transfer
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Secure Your Domain?
          </h2>
          <p className="text-blue-100 mb-8 text-base leading-relaxed font-light tracking-wide">
            Join thousands of satisfied customers who trust HostSailor for their domain needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Search Domains
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DomainRegistration; 
