import React from "react";
import { useTranslation } from "react-i18next";
import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Check, 
  Users, 
  Building, 
  DollarSign, 
  Shield, 
  Globe, 
  Server, 
  Zap, 
  Award, 
  Clock, 
  Headphones, 
  Rocket, 
  Database, 
  Cpu, 
  HardDrive, 
  Network, 
  Lock, 
  Mail, 
  Phone, 
  Wifi, 
  Settings, 
  Activity, 
  Wrench, 
  Monitor, 
  ShoppingCart, 
  Code, 
  ArrowRight,
  Star,
  Target,
  TrendingUp,
  Palette,
  BarChart3
} from "lucide-react";

const ResellerProgram = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
      title: "High Reseller Discounts",
      description: "Purchase services at discounted rates and maximize your profit margins with competitive pricing."
    },
    {
      icon: <Palette className="h-8 w-8 text-blue-500" />,
      title: "White-Label Branding",
      description: "Create your own brand identity and resell hosting packages under your company name."
    },
    {
      icon: <Server className="h-8 w-8 text-purple-500" />,
      title: "Multiple Platforms",
      description: "Support for OpenVZ, KVM, and Dedicated servers across various virtualization platforms."
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: "99.9% Uptime SLA",
      description: "Enterprise-grade reliability with guaranteed uptime and performance standards."
    },
    {
      icon: <Network className="h-8 w-8 text-indigo-500" />,
      title: "1 Gbps Connectivity",
      description: "High-speed network infrastructure ensuring fast and reliable connections for your clients."
    },
    {
      icon: <Rocket className="h-8 w-8 text-orange-500" />,
      title: "Instant Delivery",
      description: "Services activated immediately upon payment confirmation with zero setup delays."
    },
    {
      icon: <Headphones className="h-8 w-8 text-teal-500" />,
      title: "24/7/365 Support",
      description: "Round-the-clock technical support to help you and your clients succeed."
    },
    {
      icon: <Settings className="h-8 w-8 text-yellow-500" />,
      title: "Managed & Unmanaged",
      description: "Flexible service options to meet different client needs and technical requirements."
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Purchase Services",
      description: "Buy hosting services at discounted reseller rates from our comprehensive catalog.",
      icon: <ShoppingCart className="h-6 w-6" />
    },
    {
      step: "02",
      title: "Setup Your Brand",
      description: "Configure white-label branding and customize your hosting packages.",
      icon: <Palette className="h-6 w-6" />
    },
    {
      step: "03",
      title: "Deliver to Clients",
      description: "Resell services to your clients under your own brand identity.",
      icon: <Users className="h-6 w-6" />
    },
    {
      step: "04",
      title: "Get Support",
      description: "Receive comprehensive support from our team to ensure your success.",
      icon: <Headphones className="h-6 w-6" />
    }
  ];

  const offerings = [
    {
      title: "VPS Hosting",
      description: "Virtual Private Servers with multiple virtualization options",
      icon: <Server className="h-12 w-12 text-blue-600" />,
      features: [
        "OpenVZ & KVM Platforms",
        "Instant Deployment",
        "Full Root Access",
        "DDoS Protection",
        "Multiple OS Support",
        "Scalable Resources"
      ],
      popular: true
    },
    {
      title: "Dedicated Servers",
      description: "High-performance dedicated hardware for demanding workloads",
      icon: <Database className="h-12 w-12 text-purple-600" />,
      features: [
        "Enterprise Hardware",
        "Full Server Control",
        "High Performance",
        "Custom Configurations",
        "Priority Support",
        "Hardware Monitoring"
      ],
      popular: false
    },
    {
      title: "Shared Hosting",
      description: "WHM/cPanel reseller plans for web hosting businesses",
      icon: <Globe className="h-12 w-12 text-green-600" />,
      features: [
        "WHM Control Panel",
        "Multiple cPanel Accounts",
        "Unlimited Domains",
        "Free SSL Certificates",
        "99.9% Uptime",
        "Easy Management"
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: "What's the difference between shared and reseller hosting?",
      answer: "Reseller hosting lets you create multiple cPanel accounts using WHM—unlike standard shared hosting which is limited to one cPanel per account. You operate under your brand and have full control over your hosting business."
    },
    {
      question: "How do resellers work?",
      answer: "Resellers bulk-purchase services and resell them to end customers, managing infrastructure, support, and branding themselves. You buy at discounted rates and sell at your own prices."
    },
    {
      question: "Is reseller hosting profitable?",
      answer: "Profit depends on pricing, volume, and effective marketing. HostSailor's low pricing and high reseller margins enable substantial potential for building a successful hosting business."
    },
    {
      question: "Do you provide technical support?",
      answer: "Yes, we offer 24/7/365 technical support to help you and your clients. Our team is available round-the-clock to ensure your success."
    },
    {
      question: "Can I customize the branding?",
      answer: "Absolutely! Our white-label solution allows you to completely customize the branding, control panels, and client experience under your own brand identity."
    },
    {
      question: "Are there any setup fees?",
      answer: "No setup fees or VAT charges. You only pay for the services you purchase at our competitive reseller rates."
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="h-6 w-6" /> },
    { number: "1 Gbps", label: "Connectivity", icon: <Network className="h-6 w-6" /> },
    { number: "24/7", label: "Support", icon: <Headphones className="h-6 w-6" /> },
    { number: "Instant", label: "Deployment", icon: <Rocket className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <HomeHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
                          backgroundImage: "url('/hostsailor/reseller-hosting-bg.svg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Badge variant="secondary" className="mb-4 text-blue-600 bg-blue-100">
                <Users className="h-4 w-4 mr-2" />
                Reseller Program
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Sell Hosting Under Your Brand
              </h1>
              <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                Purchase hosting services at a discount and resell them to your clients—create your own brand 
                while scaling your business with our comprehensive reseller program.
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

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src="/hostsailor/service-images/reseller-hosting.svg" 
                alt="Reseller Program" 
                className="w-80 h-60 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How to Become a Reseller
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Simple steps to start your hosting business with our reseller program
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-200 transform translate-x-4">
                    <div className="w-4 h-4 bg-blue-600 rounded-full absolute -top-2 right-0"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Reseller Program
            </h2>
            <p className="text-sm text-gray-500 max-w-3xl mx-auto font-light tracking-wide">
              Everything you need to build a successful hosting business with maximum profitability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow border border-gray-100 bg-white">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Offerings Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Available Offerings
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              HostSailor supports reselling across three main service categories
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${offering.popular ? 'ring-2 ring-blue-500 shadow-xl scale-105' : 'shadow-lg'}`}>
                {offering.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {offering.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{offering.title}</CardTitle>
                  <p className="text-gray-500">{offering.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {offering.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col gap-2 pt-4">
                    <Button className="w-full" variant={offering.popular ? "default" : "outline"}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Common questions about our reseller program
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Hosting Business?
          </h2>
          <p className="text-base text-blue-100 mb-8 max-w-2xl mx-auto font-light tracking-wide">
            Join our reseller program today and start building your hosting empire with competitive rates, 
            white-label branding, and comprehensive support.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">+1-646-518-9099</p>
              <p className="text-gray-600">24/7 Sales Support</p>
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Register Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResellerProgram; 