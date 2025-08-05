import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Shield, Globe, Server, Cpu, HardDrive, Wifi, Clock, Award, Users, Database } from "lucide-react";
import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";

const VPSHosting = () => {
  const { t } = useTranslation();

  const vpsTypes = [
    {
      name: "KVM VPS NVMe",
      description: "High-performance NVMe storage for lightning-fast operations",
      features: [
        "NVMe SSD Storage",
        "Dedicated CPU Cores",
        "High-Speed Network",
        "Full Root Access",
        "Instant Deployment",
        "DDoS Protection",
        "24/7 Support"
      ],
      href: "/hostsailor/kvm-vps"
    },
    {
      name: "KVM VPS SSD",
      description: "Reliable SSD-based VPS with excellent performance",
      features: [
        "SSD Storage",
        "Scalable Resources",
        "cPanel Available",
        "Backup Solutions",
        "99.9% Uptime",
        "Security Features",
        "Technical Support"
      ],
      href: "/hostsailor/kvm-vps-ssd"
    },
    {
      name: "KVM VPS Storage",
      description: "High-capacity storage VPS for data-intensive applications",
      features: [
        "Large Storage Capacity",
        "High I/O Performance",
        "Data Redundancy",
        "Backup Solutions",
        "Scalable Storage",
        "Network Optimization",
        "24/7 Monitoring"
      ],
      href: "/hostsailor/storage-vps"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "High Performance",
      description: "Dedicated resources ensure consistent performance for your applications"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Enhanced Security",
      description: "Isolated environment with advanced security measures and DDoS protection"
    },
    {
      icon: <Server className="h-8 w-8 text-blue-500" />,
      title: "Full Control",
      description: "Complete root access to customize your server environment"
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      title: "Global Network",
      description: "Multiple data center locations for optimal performance worldwide"
    }
  ];

  const features = [
    {
      icon: <Cpu className="h-6 w-6 text-blue-500" />,
      title: "Dedicated CPU Cores",
      description: "Guaranteed CPU resources for consistent performance"
    },
    {
      icon: <HardDrive className="h-6 w-6 text-green-500" />,
      title: "SSD/NVMe Storage",
      description: "Fast storage solutions for quick data access"
    },
    {
      icon: <Wifi className="h-6 w-6 text-purple-500" />,
      title: "High-Speed Network",
      description: "Optimized network infrastructure for low latency"
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      title: "Instant Deployment",
      description: "Your VPS is ready in minutes, not hours"
    },
    {
      icon: <Award className="h-6 w-6 text-red-500" />,
      title: "99.9% Uptime",
      description: "Reliable infrastructure with guaranteed uptime"
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-500" />,
      title: "24/7 Support",
      description: "Expert technical support available around the clock"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <HomeHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('/hostsailor/vps-hosting-bg.svg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-5"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
            <Zap className="h-4 w-4 mr-2" />
            VPS Technology
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            VPS Hosting Solutions
          </h1>
          
          <p className="text-sm text-gray-500 mb-8 max-w-3xl mx-auto font-light tracking-wide">
            Experience the freedom and flexibility of Virtual Private Servers. 
            Get dedicated resources, full control, and enterprise-grade performance 
            at affordable prices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              View All Plans
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* VPS Types */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your VPS Type
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the perfect VPS solution for your specific needs and requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {vpsTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{type.name}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <a href={type.href}>Learn More</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose VPS Hosting?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get the best of both worlds - shared hosting affordability with dedicated server performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to run your applications efficiently and securely
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Choose your VPS plan and deploy your server in minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              View VPS Plans
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VPSHosting; 