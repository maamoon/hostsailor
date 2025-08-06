import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Building, DollarSign, Shield, Globe, Server, Zap, Award, Clock, Headphones, Rocket, Database, Cpu, HardDrive, Network, Lock, Mail, Phone } from "lucide-react";
import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";

const ResellerHosting = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: "Starter Reseller",
      price: "$9.95",
      period: "/month",
      originalPrice: "$19.90",
      discount: "50% OFF",
      features: [
        "25 GB NVMe SSD Storage",
        "250 GB Bandwidth",
        "25 cPanel Accounts",
        "WHM Control Panel",
        "Free SSL Certificates",
        "DDoS Protection",
        "24/7 Support",
        "Free Migration",
        "99.9% Uptime Guarantee",
        "Daily Backups"
      ],
      popular: false,
      color: "blue"
    },
    {
      name: "Professional Reseller",
      price: "$19.95",
      period: "/month",
      originalPrice: "$39.90",
      discount: "50% OFF",
      features: [
        "50 GB NVMe SSD Storage",
        "500 GB Bandwidth",
        "50 cPanel Accounts",
        "WHM Control Panel",
        "Free SSL Certificates",
        "DDoS Protection",
        "24/7 Priority Support",
        "Free Migration",
        "Custom Branding",
        "99.9% Uptime Guarantee",
        "Daily Backups",
        "Free Domain"
      ],
      popular: true,
      color: "green"
    },
    {
      name: "Business Reseller",
      price: "$39.95",
      period: "/month",
      originalPrice: "$79.90",
      discount: "50% OFF",
      features: [
        "100 GB NVMe SSD Storage",
        "1 TB Bandwidth",
        "100 cPanel Accounts",
        "WHM Control Panel",
        "Free SSL Certificates",
        "DDoS Protection",
        "24/7 Priority Support",
        "Free Migration",
        "Custom Branding",
        "Dedicated IP",
        "99.9% Uptime Guarantee",
        "Daily Backups",
        "Free Domain",
        "Advanced Security"
      ],
      popular: false,
      color: "purple"
    },
    {
      name: "Enterprise Reseller",
      price: "$79.95",
      period: "/month",
      originalPrice: "$159.90",
      discount: "50% OFF",
      features: [
        "200 GB NVMe SSD Storage",
        "2 TB Bandwidth",
        "Unlimited cPanel Accounts",
        "WHM Control Panel",
        "Free SSL Certificates",
        "DDoS Protection",
        "24/7 Priority Support",
        "Free Migration",
        "Custom Branding",
        "Dedicated IP",
        "Private Nameservers",
        "99.9% Uptime Guarantee",
        "Daily Backups",
        "Free Domain",
        "Advanced Security",
        "Custom Solutions"
      ],
      popular: false,
      color: "red"
    }
  ];

  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Multiple cPanel Accounts",
      description: "Create and manage unlimited hosting accounts for your clients with full WHM access and complete control over each account."
    },
    {
      icon: <Building className="h-8 w-8 text-green-500" />,
      title: "Custom Branding",
      description: "White-label your hosting services with your own logo, colors, and company identity for a professional branded experience."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-yellow-500" />,
      title: "High Profit Margins",
      description: "Earn significant profits by reselling our reliable hosting services to your clients at competitive market prices."
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      title: "Enterprise Security",
      description: "All reseller accounts come with enterprise-grade DDoS protection and advanced security measures."
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-500" />,
      title: "Global Data Centers",
      description: "Choose from our strategically located data centers in Romania, Netherlands, and United States for optimal performance."
    },
    {
      icon: <Server className="h-8 w-8 text-red-500" />,
      title: "NVMe SSD Technology",
      description: "Lightning-fast NVMe SSD storage ensures your clients' websites load quickly and perform at optimal speeds."
    }
  ];

  const features = [
    {
      icon: <Database className="h-6 w-6 text-green-600" />,
      title: "WHM Control Panel",
      description: "Full Web Host Manager access to create, manage, and monitor all your client accounts from one central location with complete administrative control."
    },
    {
      icon: <Building className="h-6 w-6 text-blue-600" />,
      title: "Custom Branding",
      description: "White-label your hosting services with your own branding, logo, and company identity to build your own hosting brand."
    },
    {
      icon: <Rocket className="h-6 w-6 text-purple-600" />,
      title: "Free Migration",
      description: "We'll help you migrate your existing clients' websites to our platform at no additional cost with zero downtime."
    },
    {
      icon: <Headphones className="h-6 w-6 text-indigo-600" />,
      title: "24/7 Priority Support",
      description: "Round-the-clock technical support with priority queue access to help you and your clients with any hosting-related issues."
    },
    {
      icon: <Shield className="h-6 w-6 text-red-600" />,
      title: "DDoS Protection",
      description: "Enterprise-grade protection against DDoS attacks to keep your clients' websites secure and online at all times."
    },
    {
      icon: <Lock className="h-6 w-6 text-yellow-600" />,
      title: "SSL Certificates",
      description: "Free SSL certificates for all your client accounts to ensure secure, encrypted connections and boost SEO rankings."
    }
  ];

  const dataCenters = [
    {
      name: "Romania",
      location: "Bucharest",
      features: ["Low Latency", "EU Compliance", "High Performance"],
      icon: "🇷🇴"
    },
    {
      name: "Netherlands",
      location: "Amsterdam",
      features: ["Global Connectivity", "Green Energy", "Premium Network"],
      icon: "🇳🇱"
    },
    {
      name: "United States",
      location: "New York",
      features: ["US Market", "Fast Loading", "Local Support"],
      icon: "🇺🇸"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee", icon: <Clock className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="h-6 w-6" /> },
    { number: "50%", label: "Discount Applied", icon: <DollarSign className="h-6 w-6" /> },
    { number: "3", label: "Data Centers", icon: <Globe className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <HomeHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
                          backgroundImage: "url('/hostsailor/reseller-hosting-bg.svg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Badge variant="secondary" className="mb-4 text-green-600 bg-green-100">
                <Building className="h-4 w-4 mr-2" />
                Reseller Hosting Program
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Start Your Own Hosting Business Today
              </h1>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                Turn your hosting knowledge into a profitable business with our premium reseller hosting plans. 
                Create multiple hosting accounts, brand them as your own, and earn significant profits 
                while we handle the infrastructure, security, and support.
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

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  View Reseller Plans
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src="/hostsailor/service-images/reseller-hosting.svg" 
                alt="Reseller Hosting" 
                className="w-80 h-60 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Reseller Plan
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Start your hosting business with our flexible reseller plans designed for entrepreneurs and agencies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
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
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-gray-500 line-through">{plan.originalPrice}</span>
                    <Badge variant="destructive" className="text-xs">{plan.discount}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={plan.popular ? "default" : "outline"}>
                    Order Now
                  </Button>
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
              Why Choose Reseller Hosting?
            </h2>
            <p className="text-sm text-gray-500 max-w-3xl mx-auto font-light tracking-wide">
              Start your own hosting business with minimal investment and maximum potential for growth and profitability
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

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Your Business
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Everything you need to run a successful and profitable hosting business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow border-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {feature.icon}
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
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Global Data Centers
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Choose the data center location that best serves your clients' needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {dataCenters.map((dc, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{dc.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{dc.name}</h3>
                <p className="text-gray-600 mb-4">{dc.location}</p>
                <ul className="space-y-2">
                  {dc.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Reseller Hosting Works
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Simple steps to start your profitable hosting business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Choose Your Plan</h3>
              <p className="text-gray-600">Select the reseller plan that fits your business needs and budget requirements.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Set Up Your Brand</h3>
              <p className="text-gray-600">Customize the hosting experience with your own branding, logo, and company identity.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Start Selling</h3>
              <p className="text-gray-600">Create hosting accounts for your clients and start earning significant profits immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Hosting Business?
          </h2>
          <p className="text-sm text-green-100 mb-8 max-w-2xl mx-auto font-light tracking-wide">
            Join thousands of successful resellers who've built profitable hosting businesses with HostSailor. 
            Get started today and turn your hosting knowledge into a sustainable income stream.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
              Start Your Business
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResellerHosting; 
