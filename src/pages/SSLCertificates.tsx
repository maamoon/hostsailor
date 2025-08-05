import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Shield, Lock, Globe, Award, Users, Clock, Zap, Database, Server } from "lucide-react";
import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";

const SSLCertificates = () => {
  const { t } = useTranslation();

  const sslTypes = [
    {
      name: "Domain Validated (DV)",
      description: "Basic SSL certificate for single domain",
      price: "Free",
      features: [
        "Domain Validation",
        "Padlock Icon",
        "HTTPS Encryption",
        "Basic Security",
        "Instant Issuance",
        "Single Domain",
        "Standard Support"
      ],
      popular: false
    },
    {
      name: "Organization Validated (OV)",
      description: "Business-grade SSL with organization verification",
      price: "$29.99",
      period: "/year",
      features: [
        "Organization Validation",
        "Company Information Display",
        "Enhanced Security",
        "Business Trust",
        "1-3 Day Issuance",
        "Single Domain",
        "Priority Support"
      ],
      popular: true
    },
    {
      name: "Extended Validation (EV)",
      description: "Highest level of SSL security and trust",
      price: "$99.99",
      period: "/year",
      features: [
        "Extended Validation",
        "Green Address Bar",
        "Maximum Security",
        "Highest Trust Level",
        "5-7 Day Issuance",
        "Single Domain",
        "Premium Support"
      ],
      popular: false
    },
    {
      name: "Wildcard SSL",
      description: "Secure unlimited subdomains",
      price: "$149.99",
      period: "/year",
      features: [
        "Unlimited Subdomains",
        "Wildcard Coverage",
        "Organization Validation",
        "High Security",
        "1-3 Day Issuance",
        "*.yourdomain.com",
        "Priority Support"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Enhanced Security",
      description: "Protect your website and customer data with military-grade encryption"
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-500" />,
      title: "Trust & Credibility",
      description: "Build customer confidence with visual security indicators"
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      title: "SEO Benefits",
      description: "Improve your search engine rankings with HTTPS"
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: "Compliance",
      description: "Meet industry standards and regulatory requirements"
    }
  ];

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-blue-500" />,
      title: "Instant Activation",
      description: "Get your SSL certificate activated immediately"
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: "256-bit Encryption",
      description: "Military-grade encryption for maximum security"
    },
    {
      icon: <Globe className="h-6 w-6 text-purple-500" />,
      title: "Global Recognition",
      description: "Trusted by all major browsers worldwide"
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      title: "24/7 Monitoring",
      description: "Continuous monitoring and automatic renewal"
    },
    {
      icon: <Users className="h-6 w-6 text-red-500" />,
      title: "Expert Support",
      description: "Technical support for installation and configuration"
    },
    {
      icon: <Server className="h-6 w-6 text-indigo-500" />,
      title: "Easy Installation",
      description: "Simple installation process with detailed guides"
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
            backgroundImage: "url('/hostsailor/ssl-certificates-bg.svg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-5"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
            <Shield className="h-4 w-4 mr-2" />
            SSL Security
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            SSL Certificates
          </h1>
          
          <p className="text-sm text-gray-500 mb-8 max-w-3xl mx-auto font-light tracking-wide">
            Protect your website and build customer trust with industry-leading SSL certificates. 
            Secure your data transmission and improve your search engine rankings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              View SSL Plans
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* SSL Types */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your SSL Certificate
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the perfect SSL certificate for your security needs and budget
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sslTypes.map((type, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${type.popular ? 'ring-2 ring-green-500' : ''}`}>
                {type.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-500 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{type.name}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-gray-900">{type.price}</span>
                    {type.period && <span className="text-gray-600">{type.period}</span>}
                  </div>
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
                  <Button className="w-full" variant={type.popular ? "default" : "outline"}>
                    Get Started
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
              Why SSL Certificates Matter?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              SSL certificates are essential for modern websites and online businesses
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
              SSL Certificate Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to secure your website and protect your customers
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
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Secure Your Website Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get your SSL certificate and protect your website in minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get SSL Certificate
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SSLCertificates; 