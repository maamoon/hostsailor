import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Network, Server, Shield, Zap, Users, ArrowRight, Mail, Phone, Settings, Plus, Trash2, Edit } from "lucide-react";

const VLANNetwork = () => {
  const { t } = useTranslation();
  const [selectedVLAN, setSelectedVLAN] = useState("");

  const vlanNetworks = [
    {
      id: "vlan100",
      name: "Production Network",
      vlanId: 100,
      subnet: "10.0.100.0/24",
      gateway: "10.0.100.1",
      status: "Active",
      servers: 12,
      type: "Production"
    },
    {
      id: "vlan200",
      name: "Development Network",
      vlanId: 200,
      subnet: "10.0.200.0/24",
      gateway: "10.0.200.1",
      status: "Active",
      servers: 8,
      type: "Development"
    },
    {
      id: "vlan300",
      name: "DMZ Network",
      vlanId: 300,
      subnet: "10.0.300.0/24",
      gateway: "10.0.300.1",
      status: "Active",
      servers: 4,
      type: "DMZ"
    },
    {
      id: "vlan400",
      name: "Management Network",
      vlanId: 400,
      subnet: "10.0.400.0/24",
      gateway: "10.0.400.1",
      status: "Active",
      servers: 6,
      type: "Management"
    }
  ];

  const features = [
    {
      title: "Network Segmentation",
      description: "Isolate different types of traffic and services for enhanced security and performance.",
      icon: <Network className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Security Isolation",
      description: "Separate sensitive data and services from public-facing applications.",
      icon: <Shield className="h-6 w-6" />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Traffic Management",
      description: "Optimize network performance with dedicated bandwidth allocation per VLAN.",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Scalable Architecture",
      description: "Easily add new VLANs and expand your network infrastructure as needed.",
      icon: <Server className="h-6 w-6" />,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const benefits = [
    "Enhanced network security through traffic isolation",
    "Improved performance with dedicated bandwidth",
    "Simplified network management and troubleshooting",
    "Flexible resource allocation and scaling",
    "Compliance with security standards and regulations",
    "24/7 network monitoring and support"
  ];

  const vlanTypes = [
    { value: "production", label: "Production", description: "For live applications and services" },
    { value: "development", label: "Development", description: "For testing and development environments" },
    { value: "dmz", label: "DMZ", description: "For public-facing services" },
    { value: "management", label: "Management", description: "For administrative access and monitoring" },
    { value: "storage", label: "Storage", description: "For storage networks and backups" },
    { value: "custom", label: "Custom", description: "For specific business requirements" }
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
                VLAN Network
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Professional VLAN Network Management
              </h1>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                Secure, scalable, and efficient network segmentation with our professional VLAN management services. 
                Isolate traffic, enhance security, and optimize performance for your infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2">
                  Manage VLANs
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Settings className="h-4 w-4" />
                  Network Config
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/hostsailor/service-images/vlan-network.svg"
                alt="VLAN Network"
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
              Why Choose Our VLAN Network Services?
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Professional network engineering and advanced segmentation ensure optimal performance and security.
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

      {/* VLAN Management Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              VLAN Network Management
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Manage your VLAN networks, configure routing, and monitor traffic across all segments.
            </p>
          </div>
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="create">Create VLAN</TabsTrigger>
              <TabsTrigger value="configure">Configure</TabsTrigger>
              <TabsTrigger value="monitor">Monitor</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid gap-4">
                {vlanNetworks.map((vlan) => (
                  <Card key={vlan.id} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {vlan.name}
                            </h3>
                            <Badge variant="outline">VLAN {vlan.vlanId}</Badge>
                            <Badge variant={vlan.status === "Active" ? "default" : "secondary"}>
                              {vlan.status}
                            </Badge>
                            <Badge variant="outline" className="text-blue-600 border-blue-600">
                              {vlan.type}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                            <div>
                              <span className="font-medium">Subnet:</span> {vlan.subnet}
                            </div>
                            <div>
                              <span className="font-medium">Gateway:</span> {vlan.gateway}
                            </div>
                            <div>
                              <span className="font-medium">Servers:</span> {vlan.servers}
                            </div>
                            <div>
                              <span className="font-medium">Status:</span> {vlan.status}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            <Settings className="h-4 w-4 mr-1" />
                            Config
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="create">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Create New VLAN</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="vlanName">VLAN Name</Label>
                        <Input id="vlanName" placeholder="Enter VLAN name" />
                      </div>
                      <div>
                        <Label htmlFor="vlanId">VLAN ID</Label>
                        <Input id="vlanId" placeholder="Enter VLAN ID (1-4094)" />
                      </div>
                      <div>
                        <Label htmlFor="vlanType">VLAN Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select VLAN type" />
                          </SelectTrigger>
                          <SelectContent>
                            {vlanTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                <div>
                                  <div className="font-medium">{type.label}</div>
                                  <div className="text-sm text-gray-500">{type.description}</div>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="subnet">Subnet</Label>
                        <Input id="subnet" placeholder="e.g., 10.0.500.0/24" />
                      </div>
                      <div>
                        <Label htmlFor="gateway">Gateway</Label>
                        <Input id="gateway" placeholder="e.g., 10.0.500.1" />
                      </div>
                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Input id="description" placeholder="Optional description" />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Button className="gap-2">
                      <Plus className="h-4 w-4" />
                      Create VLAN
                    </Button>
                    <Button variant="outline">Cancel</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="configure">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>VLAN Configuration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <Label>Select VLAN to Configure</Label>
                      <Select value={selectedVLAN} onValueChange={setSelectedVLAN}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a VLAN" />
                        </SelectTrigger>
                        <SelectContent>
                          {vlanNetworks.map((vlan) => (
                            <SelectItem key={vlan.id} value={vlan.id}>
                              {vlan.name} (VLAN {vlan.vlanId})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {selectedVLAN && (
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold">Network Settings</h4>
                          <div>
                            <Label>Subnet Mask</Label>
                            <Input placeholder="255.255.255.0" />
                          </div>
                          <div>
                            <Label>DNS Servers</Label>
                            <Input placeholder="8.8.8.8, 8.8.4.4" />
                          </div>
                          <div>
                            <Label>MTU</Label>
                            <Input placeholder="1500" />
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-semibold">Security Settings</h4>
                          <div>
                            <Label>Access Control</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select access level" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="restricted">Restricted</SelectItem>
                                <SelectItem value="standard">Standard</SelectItem>
                                <SelectItem value="open">Open</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label>Firewall Rules</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select firewall policy" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="strict">Strict</SelectItem>
                                <SelectItem value="moderate">Moderate</SelectItem>
                                <SelectItem value="permissive">Permissive</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="monitor">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>VLAN Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">4</div>
                      <div className="text-sm text-gray-600">Active VLANs</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">30</div>
                      <div className="text-sm text-gray-600">Total Servers</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">99.9%</div>
                      <div className="text-sm text-gray-600">Uptime</div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-semibold mb-4">Recent Activity</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span>VLAN 100 - Server added</span>
                        <span className="text-gray-500">2 minutes ago</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span>VLAN 200 - Configuration updated</span>
                        <span className="text-gray-500">15 minutes ago</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span>VLAN 300 - Traffic spike detected</span>
                        <span className="text-gray-500">1 hour ago</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits of VLAN Network Management
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Optimize your network performance and security with professional VLAN management.
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
            Contact our network engineering team to discuss your VLAN requirements and get a custom solution.
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

export default VLANNetwork; 