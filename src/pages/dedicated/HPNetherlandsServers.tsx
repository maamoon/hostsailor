import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Building, DollarSign, Shield, Globe, Server, Zap, Award, Clock, Headphones, Rocket, Database, Cpu, HardDrive, Network, Lock, Mail, Phone, Wifi, Settings, Activity, Wrench } from "lucide-react";
import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";

const HPNetherlandsServers = () => {
  const { t } = useTranslation();

  const serverPlans = [
    {
      name: "HP DL20 G9",
      cpu: "Intel E3-1240v5",
      cpuDetails: "@3.5 GHz (4 cores)",
      ram: "8 GB",
      storage: "160 GB SATA",
      bandwidth: "1 Gbps / 5 TB",
      ipv4: "1 IP",
      ipv6: "/48",
      price: "$42.80",
      period: "/month",
      popular: true,
      features: [
        "Instant Setup",
        "IPMI Remote Access",
        "RAID Support",
        "IPv6 Support",
        "OS Installation from ISO",
        "24/7 Technical Support"
      ]
    },
    {
      name: "HP DL120 G7",
      cpu: "Intel E3-1240",
      cpuDetails: "(4 cores)",
      ram: "16 GB",
      storage: "160 GB SATA",
      bandwidth: "1 Gbps / 5 TB",
      ipv4: "1 IP",
      ipv6: "Unlimited",
      price: "$46.80",
      period: "/month",
      popular: false,
      features: [
        "Instant Setup",
        "IPMI Remote Access",
        "RAID Support",
        "IPv6 Support",
        "OS Installation from ISO",
        "24/7 Technical Support"
      ]
    },
    {
      name: "HP DL180 G6",
      cpu: "Intel E5504 v5",
      cpuDetails: "(4 cores)",
      ram: "8 GB",
      storage: "160 GB SATA",
      bandwidth: "1 Gbps / 5 TB",
      ipv4: "1 IP",
      ipv6: "Unlimited",
      price: "$51.60",
      period: "/month",
      popular: false,
      features: [
        "Instant Setup",
        "IPMI Remote Access",
        "RAID Support",
        "IPv6 Support",
        "OS Installation from ISO",
        "24/7 Technical Support"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Server className="h-8 w-8 text-blue-500" />,
      title: "HP-grade Reliability",
      description: "Enterprise Xeon/E-Series CPUs, RAID-capable storage with SSD/SATA/SAS options for maximum performance and reliability."
    },
    {
      icon: <Globe className="h-8 w-8 text-green-500" />,
      title: "Data Center Uptime & Peering",
      description: "Hosted in Amsterdam with redundant dual-10 Gbps uplinks, high-capacity dark fiber ring, and major peering (AMS-IX, NL-IX, DE-CIX)."
    },
    {
      icon: <Activity className="h-8 w-8 text-yellow-500" />,
      title: "Generous Data Allowance",
      description: "Free incoming bandwidth plus 5 TB outgoing monthly for optimal performance and cost-effectiveness."
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-500" />,
      title: "Full Remote Control",
      description: "IPMI remote access for installation and management, plus optional OS installs from ISO for complete control."
    },
    {
      icon: <Rocket className="h-8 w-8 text-indigo-500" />,
      title: "Instant Provisioning",
      description: "Activation occurs automatically after payment confirmation with zero setup delays."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-red-500" />,
      title: "Flexible Payments",
      description: "Accepts credit cards, PayPal, Skrill, SEPA, Western Union, Bitcoin, and other payment methods."
    }
  ];

  const dataCenterFeatures = [
    {
      icon: <Network className="h-6 w-6 text-blue-600" />,
      title: "Amsterdam Infrastructure",
      description: "State-of-the-art data center in Amsterdam with redundant dual-10 Gbps uplinks and high-capacity dark fiber ring."
    },
    {
      icon: <Globe className="h-6 w-6 text-green-600" />,
      title: "Major Peering",
      description: "Direct peering with AMS-IX, NL-IX, DE-CIX and other major networks for optimal routing and low latency."
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-600" />,
      title: "DDoS Protection",
      description: "Enterprise-grade DDoS protection included with all server plans to keep your services secure and online."
    },
    {
      icon: <Clock className="h-6 w-6 text-indigo-600" />,
      title: "99.9% Uptime SLA",
      description: "Guaranteed uptime with 24/7 monitoring and support to ensure your server stays operational."
    }
  ];

  const additionalSpecs = [
    {
      icon: <Network className="h-6 w-6 text-blue-600" />,
      title: "Additional IPs",
      description: "Available upon request for enhanced networking capabilities."
    },
    {
      icon: <Database className="h-6 w-6 text-green-600" />,
      title: "Upgrade-friendly",
      description: "Some models support RAM up to 144 GB, dual CPU, and extra drives for scalability."
    },
    {
      icon: <Wrench className="h-6 w-6 text-purple-600" />,
      title: "Popular Control Panels",
      description: "Supported: WHM, cPanel, Vesta, ISPConfig—the choice is yours."
    },
    {
      icon: <Server className="h-6 w-6 text-indigo-600" />,
      title: "Multiple Use Cases",
      description: "Ideal for hosting game servers, reselling, enterprise applications, or as VPS nodes."
    }
  ];

  const paymentMethods = [
    { name: "Credit Card", icon: "💳" },
    { name: "PayPal", icon: "📱" },
    { name: "Skrill", icon: "💸" },
    { name: "SEPA", icon: "🏦" },
    { name: "Western Union", icon: "🌍" },
    { name: "Bitcoin", icon: "₿" }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime SLA", icon: <Clock className="h-6 w-6" /> },
    { number: "24/7", label: "Technical Support", icon: <Headphones className="h-6 w-6" /> },
    { number: "10 Gbps", label: "Uplink Speed", icon: <Network className="h-6 w-6" /> },
    { number: "Instant", label: "Server Setup", icon: <Rocket className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <HomeHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
                          backgroundImage: "url('/hostsailor/hp-netherlands-bg.svg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 text-green-600 bg-green-100">
              <Server className="h-4 w-4 mr-2" />
              HP Netherlands
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Reliable HP Dedicated Servers in the Netherlands — Starting at ~$42/month
            </h1>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Enterprise setups with instant setup, IPv6, and robust infrastructure from our NL data centers. 
              High-performance HP servers with enterprise-grade reliability and 24/7 support.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="p-2 bg-green-100 rounded-lg">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-green-600">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                Order Now
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3">
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
              Choose from our range of high-performance HP dedicated servers with instant setup and enterprise-grade features
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {serverPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-green-500 shadow-xl scale-105' : 'shadow-lg'} hover:shadow-xl transition-all duration-300`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-green-600">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
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
                      <Globe className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700"><strong>IPv4:</strong> {plan.ipv4} / <strong>IPv6:</strong> {plan.ipv6}</span>
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
                      Order Now
                    </Button>
                    <Button className="w-full" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Card className="p-6 bg-green-50 border-green-200">
              <p className="text-lg text-gray-700">
                <strong>Note:</strong> Longer-term discounts available (6–12 months) lower the monthly cost. 
                Contact us for custom configurations and bulk pricing.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Benefits
            </h2>
            <p className="text-sm text-gray-500 max-w-3xl mx-auto font-light tracking-wide">
              Everything you need for enterprise-grade hosting with maximum performance and reliability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow border border-gray-100">
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

      {/* Data Center Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Amsterdam Data Center
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Enterprise-grade infrastructure with global connectivity and maximum reliability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataCenterFeatures.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow border-0">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-100 rounded-lg">
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

      {/* Additional Specifications Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional Specifications
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Enhanced features and capabilities for your hosting needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalSpecs.map((spec, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow border-0">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    {spec.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{spec.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{spec.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50">
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
              <div key={index} className="text-center p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow bg-white">
                <div className="text-3xl mb-2">{method.icon}</div>
                <div className="text-sm font-medium text-gray-700">{method.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Need Custom Configuration?
            </h2>
            <p className="text-sm text-gray-500 mb-8 font-light tracking-wide">
              Contact our sales team for custom server configurations or reseller inquiries
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-green-50 rounded-lg shadow-lg">
                <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-2xl font-bold text-green-600 mb-2">+1-646-518-9099</p>
                <p className="text-gray-600">24/7 Technical Support</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg shadow-lg">
                <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Get instant support</p>
                <Button className="bg-green-600 hover:bg-green-700">
                  Start Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-8 border-yellow-200 bg-yellow-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Special Discount Available!</h3>
              <p className="text-lg text-gray-700 mb-4">
                Use discount code <strong>HEART0214</strong> for recurring savings on your dedicated server.
              </p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Apply Discount Code
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Deploy Your HP Dedicated Server?
          </h2>
          <p className="text-sm text-green-100 mb-8 max-w-2xl mx-auto font-light tracking-wide">
            Get instant activation upon payment confirmation. Choose your plan and start building 
            your infrastructure with enterprise-grade HP hardware and 24/7 support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
              Order Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3">
              View Reseller Program
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HPNetherlandsServers; 
