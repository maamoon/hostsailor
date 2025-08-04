import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Building, DollarSign, Shield, Globe, Server, Zap, Award } from "lucide-react";
import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";

const ResellerHosting = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: "Starter Reseller",
      price: "$9.95",
      period: "/month",
      features: [
        "25 GB SSD Storage",
        "250 GB Bandwidth",
        "25 cPanel Accounts",
        "WHM Control Panel",
        "Free SSL Certificates",
        "DDoS Protection",
        "24/7 Support",
        "Free Migration"
      ],
      popular: false
    },
    {
      name: "Professional Reseller",
      price: "$19.95",
      period: "/month",
      features: [
        "50 GB SSD Storage",
        "500 GB Bandwidth",
        "50 cPanel Accounts",
        "WHM Control Panel",
        "Free SSL Certificates",
        "DDoS Protection",
        "24/7 Priority Support",
        "Free Migration",
        "Custom Branding"
      ],
      popular: true
    },
    {
      name: "Business Reseller",
      price: "$39.95",
      period: "/month",
      features: [
        "100 GB SSD Storage",
        "1 TB Bandwidth",
        "100 cPanel Accounts",
        "WHM Control Panel",
        "Free SSL Certificates",
        "DDoS Protection",
        "24/7 Priority Support",
        "Free Migration",
        "Custom Branding",
        "Dedicated IP"
      ],
      popular: false
    },
    {
      name: "Enterprise Reseller",
      price: "$79.95",
      period: "/month",
      features: [
        "200 GB SSD Storage",
        "2 TB Bandwidth",
        "Unlimited cPanel Accounts",
        "WHM Control Panel",
        "Free SSL Certificates",
        "DDoS Protection",
        "24/7 Priority Support",
        "Free Migration",
        "Custom Branding",
        "Dedicated IP",
        "Private Nameservers"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Multiple cPanel Accounts",
      description: "Create and manage multiple hosting accounts for your clients with full WHM access and control."
    },
    {
      icon: <Building className="h-8 w-8 text-green-500" />,
      title: "Custom Branding",
      description: "Brand the hosting experience with your own logo, colors, and company name for a professional look."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-yellow-500" />,
      title: "High Profit Margins",
      description: "Earn significant profits by reselling our reliable hosting services to your clients at competitive prices."
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      title: "DDoS Protection",
      description: "All reseller accounts come with enterprise-grade DDoS protection to keep your clients' sites secure."
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-500" />,
      title: "Global Data Centers",
      description: "Choose from our data centers in Romania, Netherlands, and United States for optimal performance."
    },
    {
      icon: <Server className="h-8 w-8 text-red-500" />,
      title: "SSD Technology",
      description: "Lightning-fast SSD storage ensures your clients' websites load quickly and perform optimally."
    }
  ];

  const features = [
    {
      title: "WHM Control Panel",
      description: "Full Web Host Manager access to create, manage, and monitor all your client accounts from one central location."
    },
    {
      title: "Custom Branding",
      description: "White-label your hosting services with your own branding, logo, and company identity."
    },
    {
      title: "Free Migration",
      description: "We'll help you migrate your existing clients' websites to our platform at no additional cost."
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support to help you and your clients with any hosting-related issues."
    },
    {
      title: "DDoS Protection",
      description: "Enterprise-grade protection against DDoS attacks to keep your clients' websites secure and online."
    },
    {
      title: "SSL Certificates",
      description: "Free SSL certificates for all your client accounts to ensure secure, encrypted connections."
    }
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
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 text-green-600 bg-green-100">
              <Building className="h-4 w-4 mr-2" />
              Reseller Program
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Start Your Own Hosting Business
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Turn your hosting knowledge into a profitable business with our reseller hosting plans. 
              Create multiple hosting accounts, brand them as your own, and earn significant profits 
              while we handle the infrastructure and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                View Reseller Plans
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3">
                Learn More
              </Button>
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
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start your hosting business with our flexible reseller plans designed for entrepreneurs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-green-500 shadow-xl scale-105' : 'shadow-lg'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-green-600">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start your own hosting business with minimal investment and maximum potential for growth
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
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to run a successful hosting business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-green-600" />
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

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Reseller Hosting Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to start your hosting business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Choose Your Plan</h3>
              <p className="text-gray-600">Select the reseller plan that fits your business needs and budget.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Set Up Your Brand</h3>
              <p className="text-gray-600">Customize the hosting experience with your own branding and logo.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Start Selling</h3>
              <p className="text-gray-600">Create hosting accounts for your clients and start earning profits.</p>
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
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful resellers who've built profitable hosting businesses with HostSailor. 
            Get started today and turn your hosting knowledge into income.
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