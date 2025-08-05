import React from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Globe, Server, Network, Shield, Zap, Users, ArrowRight, Mail, Phone, Download, Upload } from "lucide-react";

const IPAnnouncement = () => {
  const { t } = useTranslation();

  const ipRanges = [
    {
      range: "185.199.108.0/22",
      location: "Netherlands (AMS)",
      status: "Active",
      type: "IPv4",
      asn: "AS12345"
    },
    {
      range: "2a01:4f8::/32",
      location: "Netherlands (AMS)",
      status: "Active",
      type: "IPv6",
      asn: "AS12345"
    },
    {
      range: "185.199.112.0/22",
      location: "United States (LA)",
      status: "Active",
      type: "IPv4",
      asn: "AS12345"
    },
    {
      range: "2a01:4f9::/32",
      location: "United States (LA)",
      status: "Active",
      type: "IPv6",
      asn: "AS12345"
    },
    {
      range: "185.199.116.0/22",
      location: "Romania (Bucharest)",
      status: "Active",
      type: "IPv4",
      asn: "AS12345"
    },
    {
      range: "2a01:4fa::/32",
      location: "Romania (Bucharest)",
      status: "Active",
      type: "IPv6",
      asn: "AS12345"
    }
  ];

  const features = [
    {
      title: "Global IP Distribution",
      description: "Our IP addresses are announced from multiple strategic locations worldwide for optimal routing and redundancy.",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "BGP Optimization",
      description: "Advanced Border Gateway Protocol configuration ensures the best possible routing paths and network performance.",
      icon: <Network className="h-6 w-6" />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "DDoS Protection",
      description: "All announced IP ranges are protected by our advanced DDoS mitigation systems.",
      icon: <Shield className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "High Availability",
      description: "99.9% uptime guarantee with redundant announcements and failover mechanisms.",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const benefits = [
    "Improved network performance and reduced latency",
    "Enhanced reliability through redundant announcements",
    "Better geographic distribution for global users",
    "Advanced DDoS protection on all IP ranges",
    "Professional network engineering and optimization",
    "24/7 network monitoring and support"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Badge variant="secondary" className="mb-4">
                <Network className="h-4 w-4 mr-1" />
                IP Announcement
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Professional IP Address Announcement Services
              </h1>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                Optimize your network routing with our professional IP announcement services. 
                We provide global IP distribution, BGP optimization, and advanced DDoS protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2">
                  View IP Ranges
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download BGP Config
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/service-images/ip-announcement.svg"
                alt="IP Announcement"
                className="w-80 h-60 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our IP Announcement Services?
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Professional network engineering and global infrastructure ensure optimal performance for your services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className={`p-3 rounded-lg w-fit mb-4 ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IP Ranges Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our IP Address Ranges
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              View our announced IP ranges across different locations and data centers.
            </p>
          </div>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="all">All Ranges</TabsTrigger>
              <TabsTrigger value="ipv4">IPv4</TabsTrigger>
              <TabsTrigger value="ipv6">IPv6</TabsTrigger>
              <TabsTrigger value="netherlands">Netherlands</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid gap-4">
                {ipRanges.map((range, index) => (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-mono font-semibold text-gray-900">
                              {range.range}
                            </h3>
                            <Badge variant={range.type === "IPv4" ? "default" : "secondary"}>
                              {range.type}
                            </Badge>
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              {range.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">
                            Location: {range.location} | ASN: {range.asn}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            Config
                          </Button>
                          <Button variant="outline" size="sm">
                            <Upload className="h-4 w-4 mr-1" />
                            Test
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="ipv4">
              <div className="grid gap-4">
                {ipRanges.filter(range => range.type === "IPv4").map((range, index) => (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-mono font-semibold text-gray-900">
                              {range.range}
                            </h3>
                            <Badge variant="default">IPv4</Badge>
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              {range.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">
                            Location: {range.location} | ASN: {range.asn}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            Config
                          </Button>
                          <Button variant="outline" size="sm">
                            <Upload className="h-4 w-4 mr-1" />
                            Test
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="ipv6">
              <div className="grid gap-4">
                {ipRanges.filter(range => range.type === "IPv6").map((range, index) => (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-mono font-semibold text-gray-900">
                              {range.range}
                            </h3>
                            <Badge variant="secondary">IPv6</Badge>
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              {range.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">
                            Location: {range.location} | ASN: {range.asn}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            Config
                          </Button>
                          <Button variant="outline" size="sm">
                            <Upload className="h-4 w-4 mr-1" />
                            Test
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="netherlands">
              <div className="grid gap-4">
                {ipRanges.filter(range => range.location.includes("Netherlands")).map((range, index) => (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-mono font-semibold text-gray-900">
                              {range.range}
                            </h3>
                            <Badge variant={range.type === "IPv4" ? "default" : "secondary"}>
                              {range.type}
                            </Badge>
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              {range.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">
                            Location: {range.location} | ASN: {range.asn}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            Config
                          </Button>
                          <Button variant="outline" size="sm">
                            <Upload className="h-4 w-4 mr-1" />
                            Test
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits of Professional IP Announcement
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Optimize your network performance and reliability with our professional services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-green-100 text-green-600 mt-1">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your Network?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our network engineering team to discuss your IP announcement requirements and get a custom solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2">
              <Mail className="h-4 w-4" />
              Contact Network Team
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-white border-white hover:bg-white hover:text-blue-600">
              <Phone className="h-4 w-4" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IPAnnouncement; 