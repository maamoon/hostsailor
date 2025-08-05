import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Shield, Globe, Database, Server } from "lucide-react";
import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";

const SSDSharedHosting = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: "Starter",
      price: "$0.95",
      period: "/month",
      features: [
        "5 GB SSD Storage",
        "Unlimited Bandwidth",
        "5 Email Accounts",
        "5 MySQL Databases",
        "Free SSL Certificate",
        "cPanel Control Panel",
        "Softaculous App Installer",
        "DDoS Protection"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$2.45",
      period: "/month",
      features: [
        "20 GB SSD Storage",
        "Unlimited Bandwidth",
        "Unlimited Email Accounts",
        "Unlimited MySQL Databases",
        "Free SSL Certificate",
        "cPanel Control Panel",
        "Softaculous App Installer",
        "DDoS Protection",
        "Free Domain (1st year)"
      ],
      popular: true
    },
    {
      name: "Business",
      price: "$4.45",
      period: "/month",
      features: [
        "50 GB SSD Storage",
        "Unlimited Bandwidth",
        "Unlimited Email Accounts",
        "Unlimited MySQL Databases",
        "Free SSL Certificate",
        "cPanel Control Panel",
        "Softaculous App Installer",
        "DDoS Protection",
        "Free Domain (1st year)",
        "Priority Support"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$6.95",
      period: "/month",
      features: [
        "100 GB SSD Storage",
        "Unlimited Bandwidth",
        "Unlimited Email Accounts",
        "Unlimited MySQL Databases",
        "Free SSL Certificate",
        "cPanel Control Panel",
        "Softaculous App Installer",
        "DDoS Protection",
        "Free Domain (1st year)",
        "Priority Support",
        "Dedicated IP"
      ],
      popular: false
    }
  ];

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Faster Speed",
      description: "Your site can load up to three times quicker than on traditional HDD servers. Speed isn't just a luxury—it's a necessity."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Higher Reliability",
      description: "SSDs handle read and write operations like a pro, even during traffic spikes. Plus, their lack of moving parts makes them more durable."
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      title: "Eco-Friendliness",
      description: "SSD hosting consumes less power compared to old-school HDDs, making it a greener choice for those who care about the environment."
    },
    {
      icon: <Server className="h-8 w-8 text-purple-500" />,
      title: "99.9% Uptime",
      description: "Our blazing-fast SSD hosting delivers a 99.9% uptime guarantee, so your site stays live and ready whenever your audience is."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <HomeHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('/ssd-hosting-bg.svg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Badge variant="secondary" className="mb-4 text-blue-600 bg-blue-100">
                <Zap className="h-4 w-4 mr-2" />
                SSD Technology
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                The Best SSD Shared Hosting Packages
              </h1>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                Looking for a hosting upgrade that's fast, reliable, and easy on your budget? 
                Our shared SSD hosting is a game-changer compared to old-school HDD hosting. 
                With lightning-fast performance and reduced load times, it's perfect for anyone tired of sluggish websites.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  View All Plans
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src="/service-images/shared-hosting.svg" 
                alt="SSD Shared Hosting" 
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
              Choose Your Perfect Plan
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Starting at just $0.95/month with all the features you need to succeed online
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-blue-500 shadow-xl scale-105' : 'shadow-lg'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
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

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose SSD Hosting?
            </h2>
            <p className="text-sm text-gray-500 max-w-3xl mx-auto font-light tracking-wide">
              SSD hosting isn't just fast—it's the gold standard. Unlike old-school HDDs with clunky spinning discs, 
              SSDs use sleek flash memory with no moving parts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
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

      {/* Data Centers Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Global Data Centers
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              All our servers are hosted in top-notch data centers ensuring global accessibility and reliable service
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Romania</h3>
              <p className="text-gray-600 mb-4">Bucharest Data Center</p>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Low Latency
              </Badge>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Netherlands</h3>
              <p className="text-gray-600 mb-4">Amsterdam Data Center</p>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                High Performance
              </Badge>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">United States</h3>
              <p className="text-gray-600 mb-4">Los Angeles Data Center</p>
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                Global Reach
              </Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Lightning-Fast Hosting?
          </h2>
          <p className="text-sm text-blue-100 mb-8 max-w-2xl mx-auto font-light tracking-wide">
            Join thousands of satisfied customers who've upgraded to our SSD hosting. 
            Get started today and see the difference speed makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              View All Plans
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SSDSharedHosting; 
