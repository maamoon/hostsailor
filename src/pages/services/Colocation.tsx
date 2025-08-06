import React from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Server, Zap, Shield, Clock, Users, ArrowRight, Building, Wifi, Database } from "lucide-react";

const Colocation = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: "1U Rack Space",
      price: "$99",
      period: "month",
      popular: false,
      specs: {
        space: "1U Rack Space",
        power: "500W Power",
        bandwidth: "1 Gbps",
        ips: "1 IPv4"
      },
      features: [
        "24/7 Data Center Access",
        "DDoS Protection",
        "Remote Hands Support",
        "99.9% Uptime SLA",
        "24/7 Monitoring"
      ]
    },
    {
      name: "2U Rack Space",
      price: "$179",
      period: "month",
      popular: true,
      specs: {
        space: "2U Rack Space",
        power: "1000W Power",
        bandwidth: "2 Gbps",
        ips: "2 IPv4"
      },
      features: [
        "24/7 Data Center Access",
        "DDoS Protection",
        "Remote Hands Support",
        "99.9% Uptime SLA",
        "24/7 Monitoring",
        "Priority Support"
      ]
    },
    {
      name: "4U Rack Space",
      price: "$299",
      period: "month",
      popular: false,
      specs: {
        space: "4U Rack Space",
        power: "2000W Power",
        bandwidth: "5 Gbps",
        ips: "4 IPv4"
      },
      features: [
        "24/7 Data Center Access",
        "DDoS Protection",
        "Remote Hands Support",
        "99.9% Uptime SLA",
        "24/7 Monitoring",
        "Priority Support",
        "Dedicated IP Block"
      ]
    }
  ];

  const features = [
    {
      icon: <Building className="h-6 w-6" />,
      title: "Premium Data Centers",
      description: "State-of-the-art facilities with redundant power, cooling, and security systems"
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "High-Speed Connectivity",
      description: "Multiple tier-1 carriers with redundant connections for maximum uptime"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Advanced Security",
      description: "24/7 physical security, biometric access, and comprehensive monitoring"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Remote Hands Support",
      description: "Professional technicians available for hardware installation and maintenance"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "99.9% Uptime SLA",
      description: "Guaranteed uptime with compensation for any service interruptions"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Scalable Solutions",
      description: "Easy expansion from 1U to full racks as your business grows"
    }
  ];

  const dataCenters = [
    {
      location: "Los Angeles, USA",
      features: ["Tier 3 Facility", "Multiple Carriers", "24/7 Security", "N+1 Redundancy"]
    },
    {
      location: "Amsterdam, Netherlands",
      features: ["Tier 3 Facility", "Multiple Carriers", "24/7 Security", "N+1 Redundancy"]
    },
    {
      location: "Bucharest, Romania",
      features: ["Tier 3 Facility", "Multiple Carriers", "24/7 Security", "N+1 Redundancy"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-blue-700 opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Badge variant="secondary" className="mb-4">
                Colocation Services
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Premium Data Center Colocation
              </h1>
              <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                Host your servers in our state-of-the-art data centers with enterprise-grade 
                infrastructure, security, and connectivity. Perfect for businesses requiring 
                full control over their hardware.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gray-600 hover:bg-gray-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View Data Centers
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-600">99.9%</div>
                  <div className="text-sm text-gray-500">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-600">24/7</div>
                  <div className="text-sm text-gray-500">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-600">3</div>
                  <div className="text-sm text-gray-500">Data Centers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-600">DDoS</div>
                  <div className="text-sm text-gray-500">Protected</div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/hostsailor/service-images/colocation.svg"
                alt="Colocation Services"
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
              Colocation Plans
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Choose the perfect rack space solution for your server infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-shadow ${plan.popular ? 'ring-2 ring-gray-500' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-gray-600">
                    {plan.price}
                    <span className="text-sm text-gray-500 font-normal">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Space</span>
                      <span className="font-semibold">{plan.specs.space}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Power</span>
                      <span className="font-semibold">{plan.specs.power}</span>
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
                        <Check className="h-4 w-4 text-gray-600 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gray-600 hover:bg-gray-700' : ''}`}
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
              Why Choose Our Colocation?
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Enterprise-grade infrastructure with professional support
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 mb-4">
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

      {/* Data Centers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Data Centers
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Strategically located facilities with world-class infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {dataCenters.map((dc, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{dc.location}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {dc.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center">
                        <Check className="h-4 w-4 text-gray-600 mr-2" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-600 to-blue-700">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Deploy Your Infrastructure?
          </h2>
          <p className="text-gray-100 mb-8 text-base leading-relaxed font-light tracking-wide">
            Join enterprise customers who trust our colocation services for their critical infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Colocation; 
