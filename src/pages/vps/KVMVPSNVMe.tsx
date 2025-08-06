import React from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Server, Zap, Shield, Clock, Users, ArrowRight, Rocket } from "lucide-react";

const KVMVPSNVMe = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: "Starter NVMe",
      price: "$12.99",
      period: "month",
      popular: false,
      specs: {
        ram: "2 GB",
        storage: "25 GB NVMe",
        cpu: "1 Core",
        bandwidth: "2 TB",
        ips: "1 IPv4"
      },
      features: [
        "KVM Virtualization",
        "NVMe Storage",
        "Full Root Access",
        "DDoS Protection",
        "24/7 Support",
        "Instant Setup"
      ]
    },
    {
      name: "Professional NVMe",
      price: "$24.99",
      period: "month",
      popular: true,
      specs: {
        ram: "4 GB",
        storage: "50 GB NVMe",
        cpu: "2 Cores",
        bandwidth: "4 TB",
        ips: "1 IPv4"
      },
      features: [
        "KVM Virtualization",
        "NVMe Storage",
        "Full Root Access",
        "DDoS Protection",
        "24/7 Support",
        "Instant Setup",
        "Backup Space"
      ]
    }
  ];

  const features = [
    {
      icon: <Server className="h-6 w-6" />,
      title: "KVM Virtualization",
      description: "True hardware virtualization with dedicated resources and full isolation"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "NVMe Storage",
      description: "Ultra-fast NVMe storage with up to 3500MB/s read/write speeds"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-700 opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Badge variant="secondary" className="mb-4">
                KVM VPS NVMe
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Ultimate Performance VPS
              </h1>
              <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                Experience the fastest VPS hosting with KVM virtualization and NVMe storage. 
                Perfect for high-performance applications, databases, and demanding workloads.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
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
                  <div className="text-2xl font-bold text-orange-600">3500MB/s</div>
                  <div className="text-sm text-gray-500">Read Speed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">99.9%</div>
                  <div className="text-sm text-gray-500">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">Instant</div>
                  <div className="text-sm text-gray-500">Setup</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-gray-500">Support</div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/hostsailor/service-images/kvm-vps-nvme.svg"
                alt="KVM VPS NVMe"
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
              KVM VPS NVMe Plans
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Choose the perfect NVMe-powered plan for your ultimate performance needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-shadow ${plan.popular ? 'ring-2 ring-orange-500' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-orange-600">
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
                        <Check className="h-4 w-4 text-orange-600 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-orange-600 hover:bg-orange-700' : ''}`}
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
              Why Choose KVM VPS NVMe?
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Get the ultimate combination of performance, reliability, and flexibility
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-700">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Ultimate Performance?
          </h2>
          <p className="text-orange-100 mb-8 text-base leading-relaxed font-light tracking-wide">
            Join thousands of satisfied customers who trust HostSailor for their NVMe VPS hosting needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Order Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KVMVPSNVMe; 
