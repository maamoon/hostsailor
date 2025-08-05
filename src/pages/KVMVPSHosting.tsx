import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Building, DollarSign, Shield, Globe, Server, Zap, Award, Clock, Headphones, Rocket, Database, Cpu, HardDrive, Network, Lock, Mail, Phone, Wifi, Settings, Activity, Wrench, Monitor, Gamepad2, ShoppingCart, Code } from "lucide-react";
import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";

const KVMVPSHosting = () => {
  const { t } = useTranslation();

  const vpsPlans = [
    {
      name: "Mini Sailor",
      ram: "256 MB",
      vswap: "256 MB",
      storage: "10 GB HDD",
      cores: "1",
      bandwidth: "~256 GB",
      price: "$0.80",
      originalPrice: "$1.99",
      period: "/month",
      popular: false,
      features: [
        "Instant Deployment",
        "Full Root Access",
        "DDoS Protection",
        "24/7 Support",
        "Weekly Backups",
        "Gigabit Network"
      ]
    },
    {
      name: "Sailor",
      ram: "512 MB",
      vswap: "512 MB",
      storage: "15 GB HDD",
      cores: "2",
      bandwidth: "~512 GB",
      price: "$1.19",
      originalPrice: "$3.99",
      period: "/month",
      popular: true,
      features: [
        "Instant Deployment",
        "Full Root Access",
        "DDoS Protection",
        "24/7 Support",
        "Weekly Backups",
        "Gigabit Network"
      ]
    },
    {
      name: "Seaman",
      ram: "1 GB",
      vswap: "1 GB",
      storage: "30 GB HDD",
      cores: "4",
      bandwidth: "~1 TB",
      price: "$6.99",
      originalPrice: "$8.99",
      period: "/month",
      popular: false,
      features: [
        "Instant Deployment",
        "Full Root Access",
        "DDoS Protection",
        "24/7 Support",
        "Weekly Backups",
        "Gigabit Network"
      ]
    },
    {
      name: "Lieutenant",
      ram: "2 GB",
      vswap: "2 GB",
      storage: "50 GB HDD",
      cores: "6",
      bandwidth: "~2 TB",
      price: "$12.99",
      originalPrice: "$15.99",
      period: "/month",
      popular: false,
      features: [
        "Instant Deployment",
        "Full Root Access",
        "DDoS Protection",
        "24/7 Support",
        "Weekly Backups",
        "Gigabit Network"
      ]
    },
    {
      name: "Captain",
      ram: "4 GB",
      vswap: "4 GB",
      storage: "80 GB HDD",
      cores: "8",
      bandwidth: "~4 TB",
      price: "$22.99",
      originalPrice: "$29.99",
      period: "/month",
      popular: false,
      features: [
        "Instant Deployment",
        "Full Root Access",
        "DDoS Protection",
        "24/7 Support",
        "Weekly Backups",
        "Gigabit Network"
      ]
    },
    {
      name: "Commodore",
      ram: "8 GB",
      vswap: "8 GB",
      storage: "120 GB HDD",
      cores: "12",
      bandwidth: "~8 TB",
      price: "$41.99",
      originalPrice: "$49.99",
      period: "/month",
      popular: false,
      features: [
        "Instant Deployment",
        "Full Root Access",
        "DDoS Protection",
        "24/7 Support",
        "Weekly Backups",
        "Gigabit Network"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Rocket className="h-8 w-8 text-blue-500" />,
      title: "Instant Deployment",
      description: "Your VPS is up and running right after payment confirmation with zero setup delays."
    },
    {
      icon: <HardDrive className="h-8 w-8 text-green-500" />,
      title: "High-speed NVMe & RAID10",
      description: "Blazing-fast I/O and redundancy with industry-leading NVMe/RAID10 storage technology."
    },
    {
      icon: <Cpu className="h-8 w-8 text-yellow-500" />,
      title: "AMD EPYC CPUs & DDR5",
      description: "Superior compute performance with low latency using AMD EPYC CPUs and DDR5 memory."
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      title: "Enterprise DDoS Protection",
      description: "Included by default to keep your services safe from all types of attacks."
    },
    {
      icon: <Settings className="h-8 w-8 text-indigo-500" />,
      title: "Full Root Access",
      description: "Complete control with support for Linux, Windows, Solaris, BSD, and custom ISO installs."
    },
    {
      icon: <Activity className="h-8 w-8 text-red-500" />,
      title: "Scalable Plans",
      description: "Easily upgrade resources as your needs grow with flexible scaling options."
    }
  ];

  const useCases = [
    {
      icon: <Monitor className="h-6 w-6 text-blue-600" />,
      title: "Websites",
      description: "Perfect for hosting websites with high performance and reliability."
    },
    {
      icon: <ShoppingCart className="h-6 w-6 text-green-600" />,
      title: "eCommerce Stores",
      description: "Ideal for online stores requiring fast loading times and secure transactions."
    },
    {
      icon: <Code className="h-6 w-6 text-purple-600" />,
      title: "SaaS Platforms",
      description: "Excellent for software-as-a-service applications and development environments."
    },
    {
      icon: <Gamepad2 className="h-6 w-6 text-indigo-600" />,
      title: "Gaming Servers",
      description: "High-performance gaming servers with low latency and stable connections."
    }
  ];

  const addons = [
    {
      category: "Control Panels",
      items: [
        { name: "cPanel/WHM", price: "$15" },
        { name: "ISPmanager Lite", price: "$4" },
        { name: "ISPmanager Business", price: "$12" },
        { name: "DirectAdmin", price: "$17" },
        { name: "Webuzo", price: "$2.50" },
        { name: "VMmanager", price: "$8.50" }
      ]
    },
    {
      category: "Additional Services",
      items: [
        { name: "Softaculous", price: "$1.50" },
        { name: "CloudLinux OS", price: "$11" },
        { name: "WHMCS License", price: "$13.60" },
        { name: "Additional IPv4", price: "$2 each" },
        { name: "Extra Bandwidth (512GB)", price: "$1.25" },
        { name: "Extra Bandwidth (1TB)", price: "$2.50" }
      ]
    },
    {
      category: "DDoS Protection (Netherlands)",
      items: [
        { name: "1 Gbps Protection", price: "$4" },
        { name: "10 Gbps Protection", price: "$20" },
        { name: "20 Gbps Protection", price: "$40" }
      ]
    }
  ];

  const stats = [
    { number: "Instant", label: "Deployment", icon: <Rocket className="h-6 w-6" /> },
    { number: "24/7", label: "Expert Support", icon: <Headphones className="h-6 w-6" /> },
    { number: "NVMe", label: "Storage", icon: <HardDrive className="h-6 w-6" /> },
    { number: "AMD EPYC", label: "CPUs", icon: <Cpu className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <HomeHeader />
      
      {/* Promo Banner */}
      <section className="py-4 px-4 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="container mx-auto text-center">
          <p className="text-white font-semibold">
            🎉 Special Offers: Use <strong>HEART0214</strong> for 25% recurring discount or <strong>KVMVPS90</strong> for 90% off! 🎉
          </p>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('/kvm-vps-bg.svg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 text-indigo-600 bg-indigo-100">
              <Server className="h-4 w-4 mr-2" />
              KVM VPS Hosting
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              High-Performance KVM VPS — from just $2.99/month
            </h1>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Powered by industry-leading NVMe/RAID10, AMD EPYC CPUs, and DDR5 RAM—backed by instant provisioning, 
              strong DDoS protection, and 24/7 support.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="p-2 bg-indigo-100 rounded-lg">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-indigo-600">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3">
                Deploy Now
              </Button>
              <Button size="lg" variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3">
                View All Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* VPS Plans Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              VPS Plans & Pricing
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Choose from our range of high-performance KVM VPS plans with instant setup and enterprise-grade features
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vpsPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-indigo-500 shadow-xl scale-105' : 'shadow-lg'} hover:shadow-xl transition-all duration-300`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-indigo-600">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <div className="text-sm text-gray-500 line-through">
                    {plan.originalPrice}{plan.period}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Database className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700"><strong>RAM:</strong> {plan.ram} / vSwap: {plan.vswap}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <HardDrive className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Storage:</strong> {plan.storage}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Cpu className="h-4 w-4 text-purple-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700"><strong>CPU Cores:</strong> {plan.cores}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Network className="h-4 w-4 text-indigo-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Bandwidth:</strong> {plan.bandwidth}</span>
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
                      Deploy Now
                    </Button>
                    <Button className="w-full" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our KVM VPS?
            </h2>
            <p className="text-sm text-gray-500 max-w-3xl mx-auto font-light tracking-wide">
              Everything you need for high-performance virtual private servers with maximum reliability
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

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perfect For
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Ideal for websites, eCommerce stores, SaaS platforms, gaming servers, and development environments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow border-0">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    {useCase.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Optional Add-ons
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Enhance your VPS with additional services and control panels
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {addons.map((addon, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow border-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{addon.category}</h3>
                <div className="space-y-3">
                  {addon.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700 font-medium">{item.name}</span>
                      <span className="text-indigo-600 font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Advanced features for optimal performance and reliability
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-xl transition-shadow border-0">
              <Network className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Gigabit Network</h3>
              <p className="text-gray-600 text-sm">Gigabit network ports with free incoming traffic, optimized for speed and reliability.</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-xl transition-shadow border-0">
              <Database className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Weekly Backups</h3>
              <p className="text-gray-600 text-sm">Weekly backups available with flexible and scalable plans to match your needs.</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-xl transition-shadow border-0">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Setup Fees</h3>
              <p className="text-gray-600 text-sm">No setup fees, optional managed services, and no long-term contracts required.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Need Help Choosing?
            </h2>
            <p className="text-sm text-gray-500 mb-8">
              Contact our sales team for custom configurations or technical support
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-indigo-50 rounded-lg shadow-lg">
                <Phone className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-2xl font-bold text-indigo-600 mb-2">+1-646-518-9099</p>
                <p className="text-gray-600">24/7 Technical Support</p>
              </div>
              
              <div className="text-center p-6 bg-indigo-50 rounded-lg shadow-lg">
                <Mail className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Get instant support</p>
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  Start Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Deploy Your KVM VPS?
          </h2>
          <p className="text-sm text-indigo-100 mb-8 max-w-2xl mx-auto font-light tracking-wide">
            Get instant deployment upon payment confirmation. Choose your plan and start building 
            your infrastructure with enterprise-grade hardware and 24/7 support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3">
              Deploy Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3">
              View Reseller Program
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KVMVPSHosting; 
