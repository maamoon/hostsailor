import React from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, Zap, Shield, Clock, Star, ArrowRight, DollarSign, TrendingUp, Building } from "lucide-react";

const VPSResellerProgram = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: "Starter Reseller",
      price: "$99",
      period: "month",
      popular: false,
      specs: {
        vps: "10 VPS Instances",
        storage: "500 GB Total",
        bandwidth: "10 TB Total",
        support: "Email Support"
      },
      features: [
        "White-label Control Panel",
        "Custom Branding",
        "Automated Provisioning",
        "24/7 Infrastructure Support",
        "API Access"
      ]
    },
    {
      name: "Professional Reseller",
      price: "$199",
      period: "month",
      popular: true,
      specs: {
        vps: "25 VPS Instances",
        storage: "1.5 TB Total",
        bandwidth: "25 TB Total",
        support: "Priority Support"
      },
      features: [
        "White-label Control Panel",
        "Custom Branding",
        "Automated Provisioning",
        "24/7 Infrastructure Support",
        "API Access",
        "Dedicated Account Manager",
        "Custom Pricing"
      ]
    },
    {
      name: "Enterprise Reseller",
      price: "$399",
      period: "month",
      popular: false,
      specs: {
        vps: "50 VPS Instances",
        storage: "3 TB Total",
        bandwidth: "50 TB Total",
        support: "24/7 Phone Support"
      },
      features: [
        "White-label Control Panel",
        "Custom Branding",
        "Automated Provisioning",
        "24/7 Infrastructure Support",
        "API Access",
        "Dedicated Account Manager",
        "Custom Pricing",
        "Custom SLA",
        "Advanced Analytics"
      ]
    }
  ];

  const features = [
    {
      icon: <Building className="h-6 w-6" />,
      title: "White-Label Solution",
      description: "Brand the entire platform with your company name and logo"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Provisioning",
      description: "VPS instances are deployed automatically within minutes"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Infrastructure Security",
      description: "Enterprise-grade security with DDoS protection included"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Customer Management",
      description: "Full control over your customers and their resources"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Round-the-clock infrastructure support for your business"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scalable Growth",
      description: "Easily scale your reseller business as you grow"
    }
  ];

  const benefits = [
    {
      title: "High Profit Margins",
      description: "Earn significant profits with competitive wholesale pricing and retail markups"
    },
    {
      title: "No Infrastructure Costs",
      description: "Focus on sales and marketing while we handle all technical infrastructure"
    },
    {
      title: "Full Control",
      description: "Complete control over pricing, customer management, and service delivery"
    },
    {
      title: "Brand Recognition",
      description: "Build your own brand in the hosting industry with white-label solutions"
    }
  ];

  const successMetrics = [
    { metric: "Average Profit Margin", value: "40-60%" },
    { metric: "Setup Time", value: "< 24 hours" },
    { metric: "Uptime SLA", value: "99.9%" },
    { metric: "Support Response", value: "< 2 hours" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Badge variant="secondary" className="mb-4">
                VPS Reseller Program
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Start Your Hosting Business Today
              </h1>
              <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                Launch your own VPS hosting business with our comprehensive reseller program. 
                White-label solutions, automated provisioning, and 24/7 infrastructure support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View Plans
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">40-60%</div>
                  <div className="text-sm text-gray-500">Profit Margin</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">24h</div>
                  <div className="text-sm text-gray-500">Setup Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">99.9%</div>
                  <div className="text-sm text-gray-500">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">24/7</div>
                  <div className="text-sm text-gray-500">Support</div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/hostsailor/service-images/vps-reseller.svg"
                alt="VPS Reseller Program"
                className="w-80 h-60 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Reseller Plans
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Choose the perfect plan to start your hosting business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-shadow ${plan.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-indigo-600">
                    {plan.price}
                    <span className="text-sm text-gray-500 font-normal">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">VPS Instances</span>
                      <span className="font-semibold">{plan.specs.vps}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Total Storage</span>
                      <span className="font-semibold">{plan.specs.storage}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Total Bandwidth</span>
                      <span className="font-semibold">{plan.specs.bandwidth}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Support Level</span>
                      <span className="font-semibold">{plan.specs.support}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-indigo-600 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Start Reselling
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Reseller Program?
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Everything you need to build a successful hosting business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Business Benefits
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Maximize your profits and grow your hosting business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Metrics
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Proven results from our successful reseller partners
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{metric.metric}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-indigo-600">{metric.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Hosting Business?
          </h2>
          <p className="text-indigo-100 mb-8 text-base leading-relaxed font-light tracking-wide">
            Join successful resellers who trust HostSailor for their infrastructure needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VPSResellerProgram; 
