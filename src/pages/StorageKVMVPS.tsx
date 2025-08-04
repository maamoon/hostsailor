import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Building, DollarSign, Shield, Globe, Server, Zap, Award, Clock, Headphones, Rocket, Database, Cpu, HardDrive, Network, Lock, Mail, Phone, Wifi, Zap, Settings, Activity, Wrench, Monitor, Gamepad2, ShoppingCart, Code, HardDriveIcon, Database, Layers, HardDrive as Storage } from "lucide-react";
import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";

const StorageKVMVPS = () => {
  const { t } = useTranslation();

  const vpsPlans = [
    {
      name: "Mini Sailor",
      storageType: "HDD / RAID10",
      storage: "50 GB",
      ram: "1 GB",
      cores: "1",
      bandwidth: "1 TB",
      price: "$23.40",
      period: "/month",
      popular: false,
      features: [
        "RAID10 Storage",
        "True KVM Virtualization",
        "Full Root Access",
        "DDoS Protection",
        "24/7 Support",
        "Instant Deployment"
      ]
    },
    {
      name: "Sailor",
      storageType: "HDD",
      storage: "100 GB",
      ram: "2 GB",
      cores: "2",
      bandwidth: "2 TB",
      price: "$35.40",
      period: "/month",
      popular: true,
      features: [
        "RAID10 Storage",
        "True KVM Virtualization",
        "Full Root Access",
        "DDoS Protection",
        "24/7 Support",
        "Instant Deployment"
      ]
    },
    {
      name: "Seaman",
      storageType: "HDD",
      storage: "200 GB",
      ram: "4 GB",
      cores: "4",
      bandwidth: "4 TB",
      price: "$5.95",
      period: "/month",
      popular: false,
      features: [
        "RAID10 Storage",
        "True KVM Virtualization",
        "Full Root Access",
        "DDoS Protection",
        "24/7 Support",
        "Instant Deployment"
      ]
    },
    {
      name: "Lieutenant",
      storageType: "HDD",
      storage: "400 GB",
      ram: "8 GB",
      cores: "6",
      bandwidth: "8 TB",
      price: "$11.95",
      period: "/month",
      popular: false,
      features: [
        "RAID10 Storage",
        "True KVM Virtualization",
        "Full Root Access",
        "DDoS Protection",
        "24/7 Support",
        "Instant Deployment"
      ]
    },
    {
      name: "Captain",
      storageType: "HDD",
      storage: "800 GB",
      ram: "16 GB",
      cores: "8",
      bandwidth: "16 TB",
      price: "$21.95",
      period: "/month",
      popular: false,
      features: [
        "RAID10 Storage",
        "True KVM Virtualization",
        "Full Root Access",
        "DDoS Protection",
        "24/7 Support",
        "Instant Deployment"
      ]
    }
  ];

  const benefits = [
    {
      icon: <HardDriveIcon className="h-8 w-8 text-blue-500" />,
      title: "RAID10 Storage Architecture",
      description: "Offers strong redundancy and consistent performance, balancing safety and affordability."
    },
    {
      icon: <Server className="h-8 w-8 text-green-500" />,
      title: "True KVM Virtualization",
      description: "Each VPS runs its own kernel and reserved RAM, ensuring isolation from neighboring nodes."
    },
    {
      icon: <Settings className="h-8 w-8 text-yellow-500" />,
      title: "Multiple OS Support",
      description: "Install Linux, Windows, BSD, Solaris, or custom ISOs with full flexibility."
    },
    {
      icon: <Activity className="h-8 w-8 text-purple-500" />,
      title: "High Upgrade Flexibility",
      description: "Scalable resource options as your requirements grow with easy upgrades."
    },
    {
      icon: <Rocket className="h-8 w-8 text-indigo-500" />,
      title: "Instant Availability",
      description: "Your server goes live immediately after payment confirmation with zero delays."
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: "Enterprise Reliability",
      description: "Designed for stable long-term hosting with enterprise-grade infrastructure."
    }
  ];

  const useCases = [
    {
      icon: <Database className="h-6 w-6 text-blue-600" />,
      title: "Data-Intensive Applications",
      description: "Perfect for hosting backups, media, or storage-backed services."
    },
    {
      icon: <Layers className="h-6 w-6 text-green-600" />,
      title: "Virtualization & Low-cost Nodes",
      description: "Great for setting up multiple lightweight virtual machines."
    },
    {
      icon: <Storage className="h-6 w-6 text-purple-600" />,
      title: "Stable Long-term Hosting",
      description: "For customers prioritizing reliability over raw speed."
    },
    {
      icon: <Monitor className="h-6 w-6 text-indigo-600" />,
      title: "Storage-Heavy Workloads",
      description: "Ideal for applications requiring large storage capacity."
    }
  ];

  const addons = [
    {
      category: "Control Panels",
      items: [
        { name: "cPanel/WHM", price: "$15" },
        { name: "Webuzo", price: "$2.50" },
        { name: "ISPmanager Lite", price: "$4" },
        { name: "ISPmanager Business", price: "$12" },
        { name: "VMmanager", price: "$8.50" }
      ]
    },
    {
      category: "Automation & Extras",
      items: [
        { name: "Softaculous", price: "$1.50" },
        { name: "CloudLinux", price: "$11" },
        { name: "WHMCS License", price: "$13.60" },
        { name: "Additional IPv4", price: "$2 each" },
        { name: "Extra Bandwidth (512GB)", price: "$1.25" },
        { name: "Extra Bandwidth (1TB)", price: "$2.50" }
      ]
    },
    {
      category: "Backup Solutions",
      items: [
        { name: "Manual Backup", price: "Free" },
        { name: "Automated Backup", price: "$5/month" },
        { name: "Backup Plugin", price: "$3/month" },
        { name: "Cloud Backup", price: "$8/month" }
      ]
    }
  ];

  const comparison = [
    {
      feature: "Storage Type",
      storage: "HDD RAID10",
      nvme: "NVMe SSD",
      description: "Storage VPS uses HDD with RAID10 for reliability, while NVMe VPS uses high-speed SSDs"
    },
    {
      feature: "Performance",
      storage: "Consistent",
      nvme: "High Speed",
      description: "Storage VPS offers consistent performance, NVMe VPS provides maximum speed"
    },
    {
      feature: "Cost",
      storage: "Affordable",
      nvme: "Premium",
      description: "Storage VPS is more cost-effective for large storage needs"
    },
    {
      feature: "Use Case",
      storage: "Data Storage",
      nvme: "High Performance",
      description: "Storage VPS for data-heavy apps, NVMe VPS for speed-critical applications"
    }
  ];

  const stats = [
    { number: "RAID10", label: "Storage", icon: <HardDriveIcon className="h-6 w-6" /> },
    { number: "True KVM", label: "Virtualization", icon: <Server className="h-6 w-6" /> },
    { number: "Instant", label: "Deployment", icon: <Rocket className="h-6 w-6" /> },
    { number: "24/7", label: "Support", icon: <Headphones className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <HomeHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('/hostsailor/storage-vps-bg.svg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 text-blue-600 bg-blue-100">
              <Storage className="h-4 w-4 mr-2" />
              Storage KVM VPS
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Storage-Optimized KVM VPS — Powered by RAID10 Stability & Redundancy
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Designed with enterprise-grade RAID10 storage for high performance and reliability, 
              this VPS tier is ideal for disk-heavy applications. Perfect if you need reliable storage rather than NVMe speed.
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

      {/* VPS Plans Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Storage VPS Plans & Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our range of storage-optimized KVM VPS plans with RAID10 reliability and enterprise-grade features
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vpsPlans.map((plan, index) => (
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
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <HardDriveIcon className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Storage:</strong> {plan.storage} ({plan.storageType})</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Database className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700"><strong>RAM:</strong> {plan.ram}</span>
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
            <Card className="p-6 bg-blue-50 border-blue-200">
              <p className="text-lg text-gray-700">
                <strong>Note:</strong> These tiers suit users focusing on stable storage over throughput-intensive environments. 
                Unlike NVMe-based VPS, backups are not automatically included for Storage VPS tiers.
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
              What Sets Storage KVM VPS Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for storage-optimized virtual private servers with maximum reliability
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
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ideal Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Perfect for storage-heavy applications and long-term hosting solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow border-0">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
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

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Storage VPS vs NVMe VPS
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the right VPS type for your specific needs
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="text-center font-semibold text-gray-700">Feature</div>
              <div className="text-center font-semibold text-blue-600">Storage VPS</div>
              <div className="text-center font-semibold text-indigo-600">NVMe VPS</div>
              <div className="text-center font-semibold text-gray-700">Description</div>
            </div>
            
            {comparison.map((item, index) => (
              <div key={index} className="grid md:grid-cols-4 gap-4 p-4 border-b border-gray-200">
                <div className="font-medium text-gray-700">{item.feature}</div>
                <div className="text-center text-blue-600 font-medium">{item.storage}</div>
                <div className="text-center text-indigo-600 font-medium">{item.nvme}</div>
                <div className="text-sm text-gray-600">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Add-Ons & Licenses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enhance your Storage VPS with additional services and control panels
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {addons.map((addon, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow border-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{addon.category}</h3>
                <div className="space-y-3">
                  {addon.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                      <span className="text-gray-700 font-medium">{item.name}</span>
                      <span className="text-blue-600 font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about Storage KVM VPS hosting
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Are backups included with Storage VPS?</h3>
              <p className="text-gray-600">Unlike NVMe-based VPS, backups are not automatically included for Storage VPS tiers. We offer manual backup options and automated backup solutions as add-ons.</p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What operating systems are supported?</h3>
              <p className="text-gray-600">Storage VPS supports Linux, Windows, BSD, Solaris, and custom ISO installs. You have full flexibility to choose your preferred operating system.</p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I upgrade my Storage VPS resources?</h3>
              <p className="text-gray-600">Yes, Storage VPS offers high upgrade flexibility. You can easily scale your resources as your requirements grow with our upgrade options.</p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How does RAID10 storage work?</h3>
              <p className="text-gray-600">RAID10 combines mirroring and striping to provide both redundancy and performance. Your data is mirrored across multiple drives for safety while maintaining good read/write speeds.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Need Help Choosing?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact our sales team for custom configurations or technical support
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
            Ready to Deploy Your Storage VPS?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get instant deployment upon payment confirmation. Choose your plan and start building 
            your storage infrastructure with enterprise-grade RAID10 reliability and 24/7 support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Order Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              View NVMe VPS Plans
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StorageKVMVPS; 