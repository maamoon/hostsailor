import React from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Search, Globe, Server, Wifi, Database, Shield, Clock, Users, Star, ArrowRight, Activity, FileText, Settings, Zap, Network } from "lucide-react";

const ToolsHub = () => {
  const { t } = useTranslation();

  const networkTools = [
    {
      title: "Looking Glass",
      description: "Test network connectivity and routing from our data centers",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600",
      href: "/looking-glass"
    },
    {
      title: "Network Status",
      description: "Real-time status of our infrastructure and services",
      icon: <Activity className="h-6 w-6" />,
      color: "bg-green-100 text-green-600",
      href: "/network-status"
    },
    {
      title: "Ping Test",
      description: "Test latency to our servers from your location",
      icon: <Wifi className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-600",
      href: "#"
    },
    {
      title: "Traceroute",
      description: "Trace the network path to our servers",
      icon: <Network className="h-6 w-6" />,
      color: "bg-orange-100 text-orange-600",
      href: "#"
    }
  ];

  const hostingTools = [
    {
      title: "DNS Lookup",
      description: "Check DNS records and propagation",
      icon: <Database className="h-6 w-6" />,
      color: "bg-indigo-100 text-indigo-600",
      href: "#"
    },
    {
      title: "SSL Checker",
      description: "Verify SSL certificate status and configuration",
      icon: <Shield className="h-6 w-6" />,
      color: "bg-emerald-100 text-emerald-600",
      href: "#"
    },
    {
      title: "Website Speed Test",
      description: "Test your website loading speed and performance",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-yellow-100 text-yellow-600",
      href: "#"
    },
    {
      title: "Server Status",
      description: "Check the status of your hosting servers",
      icon: <Server className="h-6 w-6" />,
      color: "bg-red-100 text-red-600",
      href: "#"
    }
  ];

  const developmentTools = [
    {
      title: "Code Editor",
      description: "Online code editor for quick file modifications",
      icon: <FileText className="h-6 w-6" />,
      color: "bg-slate-100 text-slate-600",
      href: "#"
    },
    {
      title: "Database Manager",
      description: "Manage your databases through web interface",
      icon: <Database className="h-6 w-6" />,
      color: "bg-cyan-100 text-cyan-600",
      href: "#"
    },
    {
      title: "File Manager",
      description: "Upload, edit, and manage your website files",
      icon: <Settings className="h-6 w-6" />,
      color: "bg-pink-100 text-pink-600",
      href: "#"
    },
    {
      title: "Backup Manager",
      description: "Create and restore backups of your data",
      icon: <Shield className="h-6 w-6" />,
      color: "bg-teal-100 text-teal-600",
      href: "#"
    }
  ];

  const popularTools = [
    {
      title: "Looking Glass",
      usage: "2.5k",
      rating: 4.9,
      category: "Network"
    },
    {
      title: "SSL Checker",
      usage: "1.8k",
      rating: 4.8,
      category: "Security"
    },
    {
      title: "DNS Lookup",
      usage: "1.5k",
      rating: 4.7,
      category: "Network"
    },
    {
      title: "Website Speed Test",
      usage: "1.2k",
      rating: 4.6,
      category: "Performance"
    }
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
                <Settings className="h-4 w-4 mr-1" />
                Tools Hub
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Professional Hosting Tools
              </h1>
              <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                Access a comprehensive suite of tools designed to help you manage, monitor, and optimize your hosting services. 
                From network diagnostics to performance testing, everything you need is here.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <a href="#tools">Explore Tools</a>
                </Button>
                <Button size="lg" variant="outline">
                  View Documentation
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/service-images/tools-hub.svg"
                alt="Tools Hub"
                className="w-80 h-60 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tools Categories */}
      <section id="tools" className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Tools Suite
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Choose from our comprehensive collection of hosting and network tools
            </p>
          </div>
          
          <Tabs defaultValue="network" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="network">Network Tools</TabsTrigger>
              <TabsTrigger value="hosting">Hosting Tools</TabsTrigger>
              <TabsTrigger value="development">Development Tools</TabsTrigger>
            </TabsList>
            
            <TabsContent value="network" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {networkTools.map((tool, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${tool.color}`}>
                          {tool.icon}
                        </div>
                        <CardTitle className="text-lg">{tool.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        {tool.description}
                      </p>
                      <Button variant="ghost" className="w-full" size="sm" asChild>
                        <a href={tool.href}>
                          Launch Tool
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="hosting" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {hostingTools.map((tool, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${tool.color}`}>
                          {tool.icon}
                        </div>
                        <CardTitle className="text-lg">{tool.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        {tool.description}
                      </p>
                      <Button variant="ghost" className="w-full" size="sm" asChild>
                        <a href={tool.href}>
                          Launch Tool
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="development" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {developmentTools.map((tool, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${tool.color}`}>
                          {tool.icon}
                        </div>
                        <CardTitle className="text-lg">{tool.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        {tool.description}
                      </p>
                      <Button variant="ghost" className="w-full" size="sm" asChild>
                        <a href={tool.href}>
                          Launch Tool
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Popular Tools */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Most Popular Tools
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Tools most frequently used by our customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularTools.map((tool, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {tool.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">{tool.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-indigo-600">
                    {tool.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{tool.usage} uses</span>
                    <Button variant="ghost" size="sm">
                      Use Tool
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Tools?
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Professional-grade tools designed for hosting professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast & Reliable</h3>
              <p className="text-base text-gray-500 leading-relaxed font-light tracking-wide">
                All tools are optimized for speed and reliability, ensuring quick results every time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure</h3>
              <p className="text-base text-gray-500 leading-relaxed font-light tracking-wide">
                Built with security in mind, protecting your data and privacy at all times.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">User-Friendly</h3>
              <p className="text-base text-gray-500 leading-relaxed font-light tracking-wide">
                Intuitive interfaces designed for both beginners and advanced users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Custom Tools?
          </h2>
          <p className="text-indigo-100 mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto">
            Contact our development team for custom tool development tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-600">
              Request Custom Tool
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ToolsHub; 
