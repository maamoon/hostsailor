import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Building, DollarSign, Shield, Globe, Server, Zap, Award, Clock, Headphones, Rocket, Database, Cpu, HardDrive, Network, Lock, Mail, Phone, Wifi, Zap, Settings, Activity } from "lucide-react";
import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";

const SupermicroRomaniaServers = () => {
  const { t } = useTranslation();

  const serverPlans = [
    {
      name: "Dreadnought",
      cpu: "Intel Xeon E3-1230 v5",
      cpuDetails: "3.4 GHz, 4 cores, 8 threads",
      ram: "8 GB DDR3",
      storage: "1 TB Enterprise SATA or 128 GB SSD",
      bandwidth: "5 TB outgoing, free incoming",
      ddos: "20 Gbps",
      price: "$78.99",
      period: "/month",
      yearlyPrice: "$947.88",
      yearlyPeriod: "/year",
      popular: true,
      features: [
        "Instant Setup",
        "Full IPMI Access",
        "RAID Support",
        "IPv6 Support",
        "OS Installation from ISO",
        "24/7 Technical Support"
      ]
    },
    {
      name: "Orion",
      cpu: "Intel Xeon E5-2620 v4",
      cpuDetails: "2.1 GHz, 8 cores, 16 threads",
      ram: "16 GB DDR4",
      storage: "2 TB Enterprise SATA or 256 GB SSD",
      bandwidth: "10 TB outgoing, free incoming",
      ddos: "20 Gbps",
      price: "$129.99",
      period: "/month",
      yearlyPrice: "$1,559.88",
      yearlyPeriod: "/year",
      popular: false,
      features: [
        "Instant Setup",
        "Full IPMI Access",
        "RAID Support",
        "IPv6 Support",
        "OS Installation from ISO",
        "24/7 Priority Support"
      ]
    },
    {
      name: "Vanguard",
      cpu: "Intel Xeon E5-2680 v4",
      cpuDetails: "2.4 GHz, 14 cores, 28 threads",
      ram: "32 GB DDR4",
      storage: "4 TB Enterprise SATA or 512 GB SSD",
      bandwidth: "15 TB outgoing, free incoming",
      ddos: "20 Gbps",
      price: "$189.99",
      period: "/month",
      yearlyPrice: "$2,279.88",
      yearlyPeriod: "/year",
      popular: false,
      features: [
        "Instant Setup",
        "Full IPMI Access",
        "RAID Support",
        "IPv6 Support",
        "OS Installation from ISO",
        "24/7 Priority Support",
        "Dedicated IP"
      ]
    }
  ];

  const features = [
    {
      icon: <Server className="h-8 w-8 text-blue-500" />,
      title: "Enterprise-grade Hardware",
      description: "Supermicro servers with Xeon CPUs, RAID support, and reliable SSD/SATA persistence for maximum performance and reliability."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Network & DDoS Protection",
      description: "Included 20 Gbps mitigation (NL & RO) plus IPv6 (/48 or /64) addressing for comprehensive security."
    },
    {
      icon: <Activity className="h-8 w-8 text-yellow-500" />,
      title: "Maximum Throughput",
      description: "1 Gbps port, unmetered incoming traffic, and 5 TB outgoing bandwidth per month for optimal performance."
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-500" />,
      title: "Control & Flexibility",
      description: "Full IPMI remote management, OS install from ISO, and complete administrative control over your server."
    },
    {
      icon: <Rocket className="h-8 w-8 text-indigo-500" />,
      title: "Instant Provisioning",
      description: "The server is operational immediately upon payment confirmation with zero setup delays."
    },
    {
      icon: <Headphones className="h-8 w-8 text-red-500" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support with 99.9% uptime guarantee and resilient network infrastructure."
    }
  ];

  const dataCenterFeatures = [
    {
      icon: <Network className="h-6 w-6 text-blue-600" />,
      title: "High-Speed Connectivity",
      description: "Private Romanian data centers (Bucharest) on Arista switches, with 2 Tbit+ capacity and multi-ISP peering."
    },
    {
      icon: <Globe className="h-6 w-6 text-green-600" />,
      title: "Global Peering",
      description: "Multi-ISP peering with LINX, DE-CIX, AMS-IX, Cogent, Telia, and other major networks for optimal routing."
    },
    {
      icon: <HardDrive className="h-6 w-6 text-purple-600" />,
      title: "RAID Protection",
      description: "RAID-protected storage, redundant links, self-healing network, and continuous monitoring for maximum reliability."
    },
    {
      icon: <Wifi className="h-6 w-6 text-indigo-600" />,
      title: "Dark Fiber Ring",
      description: "Resilient network built on a dark fiber ring in M247 Bucharest for enterprise-grade connectivity."
    }
  ];

  const paymentMethods = [
    { name: "Credit Card", icon: "💳" },
    { name: "PayPal", icon: "📱" },
    { name: "Bitcoin", icon: "₿" },
    { name: "SEPA", icon: "🏦" },
    { name: "Skrill", icon: "💸" },
    { name: "Bank Transfer", icon: "🏛️" }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee", icon: <Clock className="h-6 w-6" /> },
    { number: "24/7", label: "Technical Support", icon: <Headphones className="h-6 w-6" /> },
    { number: "20 Gbps", label: "DDoS Protection", icon: <Shield className="h-6 w-6" /> },
    { number: "Instant", label: "Server Setup", icon: <Rocket className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <HomeHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('/supermicro-bg.svg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 text-blue-600 bg-blue-100">
              <Server className="h-4 w-4 mr-2" />
              Supermicro Romania
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Premium Dedicated Servers in Romania — Powered by Supermicro
            </h1>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Instant setup, global technical support, and enterprise-grade features starting at 
              <span className="font-bold text-blue-600"> USD 71.99/month</span>. High-performance, 
              customizable dedicated servers built on Supermicro hardware and backed by robust infrastructure.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Order Now
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                View All Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Server Plans Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Server Plans
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Choose from our range of high-performance dedicated servers with instant setup and enterprise-grade features
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {serverPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-blue-500 shadow-xl scale-105' : 'shadow-lg'} hover:shadow-xl transition-all duration-300`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    or {plan.yearlyPrice}{plan.yearlyPeriod}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Cpu className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-700">{plan.cpu}</span>
                        <div className="text-gray-500 text-xs">{plan.cpuDetails}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-sm">
                      <Database className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700"><strong>RAM:</strong> {plan.ram}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <HardDrive className="h-4 w-4 text-purple-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Storage:</strong> {plan.storage}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Network className="h-4 w-4 text-indigo-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Bandwidth:</strong> {plan.bandwidth}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Shield className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700"><strong>DDoS:</strong> {plan.ddos}</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-2 pt-4">
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                      Order with SSD
                    </Button>
                    <Button className="w-full" variant="outline">
                      Order with HDD
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Features & Benefits
            </h2>
            <p className="text-sm text-gray-500 max-w-3xl mx-auto font-light tracking-wide">
              Everything you need for enterprise-grade hosting with maximum performance and reliability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Center Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Specs & Data Center
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Enterprise-grade infrastructure with global connectivity and maximum reliability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataCenterFeatures.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow border-0">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Multiple Payment Options
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Choose your preferred payment method for instant server activation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {paymentMethods.map((method, index) => (
              <div key={index} className="text-center p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{method.icon}</div>
                <div className="text-sm font-medium text-gray-700">{method.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Need Custom Configuration?
            </h2>
            <p className="text-sm text-gray-500 mb-8 font-light tracking-wide">
              Contact our sales team for custom server configurations or reseller inquiries
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">+1-646-518-9099</p>
                <p className="text-gray-600">24/7 Technical Support</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Get instant support</p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Start Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Deploy Your Dedicated Server?
          </h2>
          <p className="text-sm text-blue-100 mb-8 max-w-2xl mx-auto font-light tracking-wide">
            Get instant activation upon payment confirmation. Choose your plan and start building 
            your infrastructure with enterprise-grade hardware and 24/7 support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Order Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              View Reseller Program
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SupermicroRomaniaServers; 
