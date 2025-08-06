import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Server, Shield, Zap, Globe, Cpu, HardDrive, Wifi, Clock, Award, Users } from "lucide-react";
import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";

const DedicatedServers = () => {
  const { t } = useTranslation();

  const serverTypes = [
    {
      name: "Supermicro (Romania)",
      location: "Bucharest, Romania",
      description: "High-performance dedicated servers with Supermicro hardware for optimal reliability and performance.",
      features: [
        "Intel Xeon Processors",
        "ECC DDR4 RAM",
        "Enterprise SSDs",
        "DDoS Protection",
        "24/7 Support",
        "Instant Setup"
      ],
      startingPrice: "$89",
      popular: true
    },
    {
      name: "HP (Netherlands)",
      location: "Amsterdam, Netherlands",
      description: "Enterprise-grade HP servers with managed support and premium network connectivity.",
      features: [
        "HP ProLiant Servers",
        "Intel Xeon Scalable",
        "NVMe Storage",
        "DDoS Protection",
        "Managed Support",
        "99.9% Uptime SLA"
      ],
      startingPrice: "$129",
      popular: false
    },
    {
      name: "Fujitsu (Netherlands)",
      location: "Amsterdam, Netherlands",
      description: "Premium Fujitsu servers with advanced security features and comprehensive management.",
      features: [
        "Fujitsu PRIMERGY",
        "Latest Intel Processors",
        "RAID Storage",
        "Advanced Security",
        "Full Management",
        "24/7 Monitoring"
      ],
      startingPrice: "$149",
      popular: false
    }
  ];

  const configurations = [
    {
      name: "Entry Level",
      cpu: "Intel Xeon E3-1230 v6",
      ram: "16 GB DDR4",
      storage: "2x 500 GB SSD",
      bandwidth: "1 Gbps",
      price: "$89",
      period: "/month",
      features: [
        "4 Cores / 8 Threads",
        "3.5 GHz Base Clock",
        "ECC Memory",
        "RAID 1 Storage",
        "DDoS Protection",
        "24/7 Support"
      ]
    },
    {
      name: "Professional",
      cpu: "Intel Xeon E5-2620 v4",
      ram: "32 GB DDR4",
      storage: "2x 1 TB SSD",
      bandwidth: "1 Gbps",
      price: "$149",
      period: "/month",
      features: [
        "8 Cores / 16 Threads",
        "2.1 GHz Base Clock",
        "ECC Memory",
        "RAID 1 Storage",
        "DDoS Protection",
        "Priority Support"
      ]
    },
    {
      name: "Enterprise",
      cpu: "Intel Xeon E5-2680 v4",
      ram: "64 GB DDR4",
      storage: "4x 1 TB SSD",
      bandwidth: "2.5 Gbps",
      price: "$249",
      period: "/month",
      features: [
        "14 Cores / 28 Threads",
        "2.4 GHz Base Clock",
        "ECC Memory",
        "RAID 10 Storage",
        "DDoS Protection",
        "Dedicated Support"
      ]
    },
    {
      name: "High Performance",
      cpu: "Intel Xeon Gold 6248",
      ram: "128 GB DDR4",
      storage: "4x 2 TB NVMe",
      bandwidth: "10 Gbps",
      price: "$499",
      period: "/month",
      features: [
        "20 Cores / 40 Threads",
        "2.5 GHz Base Clock",
        "ECC Memory",
        "NVMe RAID 10",
        "DDoS Protection",
        "24/7 Phone Support"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Server className="h-8 w-8 text-blue-500" />,
      title: "Full Server Control",
      description: "Complete root access and full control over your dedicated server environment."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Enhanced Security",
      description: "Isolated hardware with enterprise-grade security and DDoS protection."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Maximum Performance",
      description: "Dedicated resources ensure consistent, high-performance operation for your applications."
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      title: "Global Data Centers",
      description: "Choose from our strategically located data centers for optimal latency and performance."
    },
    {
      icon: <Clock className="h-8 w-8 text-red-500" />,
      title: "99.9% Uptime SLA",
      description: "Guaranteed uptime with comprehensive SLA and 24/7 monitoring and support."
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-500" />,
      title: "Expert Support",
      description: "Round-the-clock technical support from our experienced server management team."
    }
  ];

  const features = [
    {
      title: "Instant Setup",
      description: "Your dedicated server is provisioned and ready within minutes of order confirmation."
    },
    {
      title: "DDoS Protection",
      description: "Enterprise-grade DDoS protection included with all dedicated server plans."
    },
    {
      title: "24/7 Monitoring",
      description: "Continuous monitoring of your server's performance, uptime, and security."
    },
    {
      title: "Managed Support",
      description: "Optional managed services including OS updates, security patches, and maintenance."
    },
    {
      title: "Flexible Configuration",
      description: "Customize your server with additional RAM, storage, or bandwidth as needed."
    },
    {
      title: "Backup Solutions",
      description: "Automated backup solutions to protect your data and ensure business continuity."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <HomeHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
                          backgroundImage: "url('/hostsailor/dedicated-servers-bg.svg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Badge variant="secondary" className="mb-4 text-purple-600 bg-purple-100">
                <Server className="h-4 w-4 mr-2" />
                Dedicated Infrastructure
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                High-Performance Dedicated Servers
              </h1>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                Get the power and control you need with our enterprise-grade dedicated servers. 
                Full root access, isolated hardware, and maximum performance for your most demanding applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                  View Server Configurations
                </Button>
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3">
                  Contact Sales
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src="/hostsailor/service-images/dedicated-servers.svg" 
                alt="Dedicated Servers" 
                className="w-80 h-60 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Server Types */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Server Type
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Select from our range of enterprise-grade dedicated servers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {serverTypes.map((server, index) => (
              <Card key={index} className={`relative ${server.popular ? 'ring-2 ring-purple-500 shadow-xl scale-105' : 'shadow-lg'}`}>
                {server.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">{server.name}</CardTitle>
                  <CardDescription className="text-lg text-purple-600 font-medium">{server.location}</CardDescription>
                  <p className="text-gray-600 mt-2">{server.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {server.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center pt-4">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      Starting at {server.startingPrice}/month
                    </div>
                    <Button className="w-full" variant={server.popular ? "default" : "outline"}>
                      Configure Server
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Server Configurations */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Server Configurations
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Pre-configured server options to get you started quickly
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {configurations.map((config, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900">{config.name}</CardTitle>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-purple-600">{config.price}</span>
                    <span className="text-gray-500 ml-1">{config.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Cpu className="h-4 w-4 text-blue-500 mr-2" />
                      <span className="text-gray-700">{config.cpu}</span>
                    </div>
                    <div className="flex items-center">
                      <HardDrive className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">{config.ram}</span>
                    </div>
                    <div className="flex items-center">
                      <Server className="h-4 w-4 text-purple-500 mr-2" />
                      <span className="text-gray-700">{config.storage}</span>
                    </div>
                    <div className="flex items-center">
                      <Wifi className="h-4 w-4 text-orange-500 mr-2" />
                      <span className="text-gray-700">{config.bandwidth}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {config.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs">
                        <Check className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4">
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Dedicated Servers?
            </h2>
            <p className="text-sm text-gray-500 max-w-3xl mx-auto font-light tracking-wide">
              Experience the power and control of dedicated hardware with enterprise-grade reliability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise Features
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Professional-grade features for your business-critical applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Centers Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Global Data Centers
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Strategically located data centers for optimal performance and reliability
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Romania</h3>
              <p className="text-gray-600 mb-4">Bucharest Data Center</p>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Low Latency
              </Badge>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Netherlands</h3>
              <p className="text-gray-600 mb-4">Amsterdam Data Center</p>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                High Performance
              </Badge>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">United States</h3>
              <p className="text-gray-600 mb-4">Los Angeles Data Center</p>
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                Global Reach
              </Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Maximum Performance?
          </h2>
          <p className="text-sm text-purple-100 mb-8 max-w-2xl mx-auto font-light tracking-wide">
            Get the power and control you need with our dedicated servers. 
            Experience enterprise-grade performance with full root access and 24/7 support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DedicatedServers; 
