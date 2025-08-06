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
  Heart,
  Lightbulb,
  MapPin,
  Calendar,
  BarChart3,
  Copy,
  Tag,
  Percent,
  Gift,
  Timer,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const WebhostingCouponsOffers = () => {
  const { t } = useTranslation();

  const featuredOffers = [
    {
      title: "New Customer Special",
      discount: "50% OFF",
      code: "NEW50",
      description: "Get 50% off your first year of hosting with any plan",
      validUntil: "December 31, 2024",
      category: "Shared Hosting",
      popular: true
    },
    {
      title: "VPS Launch Discount",
      discount: "30% OFF",
      code: "VPS30",
      description: "Special launch pricing for all VPS hosting plans",
      validUntil: "March 31, 2024",
      category: "VPS Hosting",
      popular: false
    },
    {
      title: "Dedicated Server Deal",
      discount: "25% OFF",
      code: "DEDICATED25",
      description: "Premium dedicated servers at discounted rates",
      validUntil: "April 15, 2024",
      category: "Dedicated Servers",
      popular: false
    }
  ];

  const allOffers = [
    {
      title: "Shared Hosting Starter",
      discount: "40% OFF",
      code: "SHARED40",
      description: "Perfect for small websites and blogs",
      validUntil: "March 31, 2024",
      category: "Shared Hosting",
      originalPrice: "$9.99",
      discountedPrice: "$5.99"
    },
    {
      title: "WordPress Hosting Pro",
      discount: "35% OFF",
      code: "WP35",
      description: "Optimized hosting for WordPress websites",
      validUntil: "April 30, 2024",
      category: "WordPress Hosting",
      originalPrice: "$14.99",
      discountedPrice: "$9.74"
    },
    {
      title: "VPS Performance Plan",
      discount: "20% OFF",
      code: "VPS20",
      description: "High-performance VPS with SSD storage",
      validUntil: "May 15, 2024",
      category: "VPS Hosting",
      originalPrice: "$29.99",
      discountedPrice: "$23.99"
    },
    {
      title: "SSL Certificate Bundle",
      discount: "60% OFF",
      code: "SSL60",
      description: "Secure your website with SSL certificates",
      validUntil: "June 30, 2024",
      category: "SSL Certificates",
      originalPrice: "$89.99",
      discountedPrice: "$35.99"
    },
    {
      title: "Domain Registration",
      discount: "Free First Year",
      code: "FREEDOMAIN",
      description: "Get a free domain with any hosting plan",
      validUntil: "December 31, 2024",
      category: "Domain Services",
      originalPrice: "$12.99",
      discountedPrice: "$0.00"
    },
    {
      title: "Reseller Hosting",
      discount: "45% OFF",
      code: "RESELLER45",
      description: "Start your hosting business with reseller plans",
      validUntil: "July 31, 2024",
      category: "Reseller Hosting",
      originalPrice: "$24.99",
      discountedPrice: "$13.74"
    }
  ];

  const categories = [
    { name: "All Offers", count: allOffers.length, active: true },
    { name: "Shared Hosting", count: 2 },
    { name: "VPS Hosting", count: 2 },
    { name: "Dedicated Servers", count: 1 },
    { name: "WordPress Hosting", count: 1 },
    { name: "SSL Certificates", count: 1 },
    { name: "Domain Services", count: 1 },
    { name: "Reseller Hosting", count: 1 }
  ];

  const terms = [
    "Offers are valid for new customers only",
    "Cannot be combined with other promotions",
    "Valid until the specified expiration date",
    "Subject to availability and terms of service",
    "One coupon per customer per order",
    "Applies to first billing cycle only"
  ];

  const stats = [
    { number: "50%", label: "Max Discount", icon: <Percent className="h-6 w-6" /> },
    { number: "24/7", label: "Support", icon: <Headphones className="h-6 w-6" /> },
    { number: "Instant", label: "Activation", icon: <Rocket className="h-6 w-6" /> },
    { number: "30-Day", label: "Money Back", icon: <Shield className="h-6 w-6" /> }
  ];

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    // You can add a toast notification here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <HomeHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
                          backgroundImage: "url('/hostsailor/coupons-bg.svg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Badge variant="secondary" className="mb-4 text-green-600 bg-green-100">
                <Gift className="h-4 w-4 mr-2" />
                Special Offers
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Webhosting Coupons & Offers
              </h1>
              <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                Save big on premium hosting services with our exclusive coupons and special offers. 
                Get the best deals on shared hosting, VPS, dedicated servers, and more.
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
                  View All Offers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3">
                  How to Use
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src="/hostsailor/service-images/coupons-offers.svg" 
                alt="Coupons & Offers" 
                className="w-80 h-60 object-contain"
              />
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
                variant={category.active ? "default" : "outline"}
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

      {/* Featured Offers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Offers
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Our most popular deals and limited-time offers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredOffers.map((offer, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${offer.popular ? 'ring-2 ring-green-500 shadow-xl scale-105' : 'shadow-lg'}`}>
                {offer.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <Badge variant="outline" className="mb-2 w-fit mx-auto">
                    {offer.category}
                  </Badge>
                  <CardTitle className="text-xl font-bold text-gray-900">{offer.title}</CardTitle>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-green-600">{offer.discount}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-center">{offer.description}</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Coupon Code:</span>
                      <div className="flex items-center gap-2">
                        <code className="bg-white px-3 py-1 rounded border font-mono text-green-600 font-bold">
                          {offer.code}
                        </code>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => copyToClipboard(offer.code)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center text-orange-600 text-sm">
                    <Timer className="h-3 w-3 mr-1" />
                    Valid until {offer.validUntil}
                  </div>
                  
                  <Button className="w-full" variant={offer.popular ? "default" : "outline"}>
                    Get This Offer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Offers Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              All Available Offers
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Browse through all our current promotions and find the perfect deal for your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allOffers.map((offer, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {offer.category}
                    </Badge>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 line-through">{offer.originalPrice}</div>
                      <div className="text-lg font-bold text-green-600">{offer.discountedPrice}</div>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{offer.title}</CardTitle>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-green-600">{offer.discount}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">{offer.description}</p>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">Code:</span>
                      <div className="flex items-center gap-2">
                        <code className="bg-white px-2 py-1 rounded border text-xs font-mono text-green-600 font-bold">
                          {offer.code}
                        </code>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => copyToClipboard(offer.code)}
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-orange-600 text-xs">
                    <Timer className="h-3 w-3 mr-1" />
                    Valid until {offer.validUntil}
                  </div>
                  
                  <Button className="w-full" size="sm">
                    Use This Offer
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Use Your Coupon
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Simple steps to redeem your discount
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Choose Your Plan</h3>
              <p className="text-gray-600">Select the hosting plan that best fits your needs and budget.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Apply Coupon Code</h3>
              <p className="text-gray-600">Enter the coupon code during checkout to get your discount.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Complete Purchase</h3>
              <p className="text-gray-600">Complete your order and enjoy your discounted hosting service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Terms & Conditions
              </h2>
              <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
                Important information about our offers and promotions
              </p>
            </div>
            
            <Card className="p-8">
              <div className="space-y-4">
                {terms.map((term, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{term}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Save on Hosting?
          </h2>
          <p className="text-green-100 mb-8 text-base leading-relaxed font-light tracking-wide max-w-2xl mx-auto">
            Don't miss out on these amazing deals. Choose your plan and start saving today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
              View All Plans
              <ArrowRight className="ml-2 h-4 w-4" />
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

export default WebhostingCouponsOffers; 