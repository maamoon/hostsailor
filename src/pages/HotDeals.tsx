import React from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Clock, Star, ArrowRight, Flame, Percent, Tag } from "lucide-react";

const HotDeals = () => {
  const { t } = useTranslation();

  const deals = [
    {
      name: "VPS Starter Pack",
      originalPrice: "$24.99",
      discountedPrice: "$12.99",
      discount: "48% OFF",
      period: "month",
      popular: true,
      expires: "3 days left",
      features: [
        "2 GB RAM",
        "20 GB SSD Storage",
        "1 CPU Core",
        "1 TB Bandwidth",
        "DDoS Protection",
        "24/7 Support"
      ],
      category: "VPS Hosting"
    },
    {
      name: "Shared Hosting Pro",
      originalPrice: "$19.99",
      discountedPrice: "$9.99",
      discount: "50% OFF",
      period: "month",
      popular: false,
      expires: "1 week left",
      features: [
        "Unlimited Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "cPanel Control Panel",
        "99.9% Uptime",
        "Free Domain"
      ],
      category: "Shared Hosting"
    },
    {
      name: "Dedicated Server",
      originalPrice: "$199.99",
      discountedPrice: "$149.99",
      discount: "25% OFF",
      period: "month",
      popular: false,
      expires: "5 days left",
      features: [
        "32 GB RAM",
        "2 TB SSD Storage",
        "8 CPU Cores",
        "Unlimited Bandwidth",
        "DDoS Protection",
        "Priority Support"
      ],
      category: "Dedicated Servers"
    },
    {
      name: "SSL Certificate Bundle",
      originalPrice: "$89.99",
      discountedPrice: "$44.99",
      discount: "50% OFF",
      period: "year",
      popular: false,
      expires: "2 weeks left",
      features: [
        "Wildcard SSL",
        "256-bit Encryption",
        "Trust Seal",
        "Mobile Compatible",
        "99.9% Browser Support",
        "Free Reissuance"
      ],
      category: "SSL Certificates"
    }
  ];

  const categories = [
    { name: "All Deals", count: deals.length },
    { name: "VPS Hosting", count: 1 },
    { name: "Shared Hosting", count: 1 },
    { name: "Dedicated Servers", count: 1 },
    { name: "SSL Certificates", count: 1 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-red-100 text-red-800">
                              <Flame className="h-4 w-4 mr-1" />
              Limited Time Offers
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hot Deals & Special Offers
            </h1>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto">
              Don't miss out on these exclusive deals! Limited time offers on our most popular 
              hosting services with massive discounts and premium features.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                View All Deals
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Subscribe to Deals
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">50%</div>
                <div className="text-sm text-gray-500">Max Discount</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">24/7</div>
                <div className="text-sm text-gray-500">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">Instant</div>
                <div className="text-sm text-gray-500">Activation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">Limited</div>
                <div className="text-sm text-gray-500">Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="outline"
                className="flex items-center gap-2"
              >
                {category.name}
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Deals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Exclusive Deals
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Limited time offers on premium hosting services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deals.map((deal, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-shadow ${deal.popular ? 'ring-2 ring-red-500' : ''}`}>
                {deal.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                
                <div className="absolute top-4 right-4">
                  <Badge variant="destructive" className="text-xs">
                    {deal.discount}
                  </Badge>
                </div>
                
                <CardHeader className="text-center pb-2">
                  <Badge variant="outline" className="mb-2 w-fit mx-auto">
                    {deal.category}
                  </Badge>
                  <CardTitle className="text-xl font-bold">{deal.name}</CardTitle>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-2xl font-bold text-red-600">{deal.discountedPrice}</span>
                    <span className="text-sm text-gray-500 line-through">{deal.originalPrice}</span>
                    <span className="text-sm text-gray-500">/{deal.period}</span>
                  </div>
                  <div className="flex items-center justify-center text-orange-600 text-sm">
                    <Clock className="h-3 w-3 mr-1" />
                    {deal.expires}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {deal.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-red-600 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${deal.popular ? 'bg-red-600 hover:bg-red-700' : ''}`}
                    variant={deal.popular ? 'default' : 'outline'}
                  >
                    Get Deal Now
                    <Zap className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Never Miss a Deal Again!
          </h2>
          <p className="text-red-100 mb-8 text-base leading-relaxed font-light tracking-wide">
            Subscribe to our newsletter and be the first to know about exclusive offers and discounts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-700 focus:outline-none"
            />
            <Button size="lg" variant="secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
            * All deals are limited time offers and subject to availability. Prices shown are for new customers only. 
            Some restrictions may apply. Contact our sales team for more details.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HotDeals; 
