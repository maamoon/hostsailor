import React from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Server, HardDrive, Zap, Shield, Clock, Users, Star, ArrowRight, Cpu, Memory, Wifi } from "lucide-react";

const OpenVZVPSHDD = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: "Starter",
      price: "$5.99",
      period: "month",
      popular: false,
      specs: {
        ram: "1 GB",
        storage: "20 GB HDD",
        cpu: "1 Core",
        bandwidth: "1 TB",
        ips: "1 IPv4"
      },
      features: [
        "OpenVZ Virtualization",
        "Full Root Access",
        "DDoS Protection",
        "24/7 Support",
        "Instant Setup"
      ]
    },
    {
      name: "Professional",
      price: "$11.99",
      period: "month",
      popular: true,
      specs: {
        ram: "2 GB",
        storage: "50 GB HDD",
        cpu: "2 Cores",
        bandwidth: "2 TB",
        ips: "1 IPv4"
      },
      features: [
        "OpenVZ Virtualization",
        "Full Root Access",
        "DDoS Protection",
        "24/7 Support",
        "Instant Setup",
        "Backup Space"
      ]
    },
    {
      name: "Business",
      price: "$19.99",
      period: "month",
      popular: false,
      specs: {
        ram: "4 GB",
        storage: "100 GB HDD",
        cpu: "4 Cores",
        bandwidth: "4 TB",
        ips: "2 IPv4"
      },
      features: [
        "OpenVZ Virtualization",
        "Full Root Access",
        "DDoS Protection",
        "24/7 Support",
        "Instant Setup",
        "Backup Space",
        "Priority Support"
      ]
    },
    {
      name: "Enterprise",
      price: "$34.99",
      period: "month",
      popular: false,
      specs: {
        ram: "8 GB",
        storage: "200 GB HDD",
        cpu: "8 Cores",
        bandwidth: "8 TB",
        ips: "3 IPv4"
      },
      features: [
        "OpenVZ Virtualization",
        "Full Root Access",
        "DDoS Protection",
        "24/7 Support",
        "Instant Setup",
        "Backup Space",
        "Priority Support",
        "Dedicated IP"
      ]
    }
  ];

  const features = [
    {
      icon: <Server className="h-6 w-6" />,
      title: "OpenVZ Virtualization",
      description: "Lightweight container-based virtualization for optimal performance"
    },
    {
      icon: <HardDrive className="h-6 w-6" />,
      title: "HDD Storage",
      description: "Reliable hard disk storage for cost-effective hosting solutions"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Deployment",
      description: "Your VPS is ready in minutes, not hours or days"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "DDoS Protection",
      description: "Advanced protection against distributed denial of service attacks"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "99.9% Uptime",
      description: "Guaranteed uptime with enterprise-grade infrastructure"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support from our expert team"
    }
  ];

  const benefits = [
    {
      title: "Cost-Effective Solution",
      description: "Perfect for budget-conscious users who need reliable VPS hosting without breaking the bank"
    },
    {
      title: "Easy Management",
      description: "User-friendly control panel for easy server management and monitoring"
    },
    {
      title: "Scalable Resources",
      description: "Upgrade your resources anytime as your needs grow"
    },
    {
      title: "Multiple OS Support",
      description: "Choose from various Linux distributions to match your requirements"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-700 opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Badge variant="secondary" className="mb-4">
                OpenVZ VPS HDD
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Budget-Friendly VPS Hosting
              </h1>
              <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                High-performance OpenVZ VPS with HDD storage. Perfect for development, 
                testing, and small to medium applications at an affordable price.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View All Plans
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">99.9%</div>
                  <div className="text-sm text-gray-500">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">24/7</div>
                  <div className="text-sm text-gray-500">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">Instant</div>
                  <div className="text-sm text-gray-500">Setup</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">DDoS</div>
                  <div className="text-sm text-gray-500">Protected</div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/hostsailor/service-images/openvz-vps-hdd.svg"
                alt="OpenVZ VPS HDD"
                className="w-80 h-60 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              OpenVZ VPS HDD Plans
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Choose the perfect plan for your needs with flexible resource allocation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-shadow ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-green-600">
                    {plan.price}
                    <span className="text-sm text-gray-500 font-normal">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">RAM</span>
                      <span className="font-semibold">{plan.specs.ram}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Storage</span>
                      <span className="font-semibold">{plan.specs.storage}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">CPU</span>
                      <span className="font-semibold">{plan.specs.cpu}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Bandwidth</span>
                      <span className="font-semibold">{plan.specs.bandwidth}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">IP Addresses</span>
                      <span className="font-semibold">{plan.specs.ips}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-green-600 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-green-600 hover:bg-green-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Order Now
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
              Why Choose OpenVZ VPS HDD?
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Get the perfect balance of performance, reliability, and affordability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
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

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perfect For Your Needs
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Whether you're a developer, small business, or growing startup
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-green-100 mb-8 text-base leading-relaxed font-light tracking-wide">
            Join thousands of satisfied customers who trust HostSailor for their VPS hosting needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Order Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OpenVZVPSHDD; 
