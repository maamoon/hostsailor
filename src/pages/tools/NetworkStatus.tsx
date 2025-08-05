import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Clock, Wifi, Server, Globe, Activity, AlertCircle } from "lucide-react";

const NetworkStatus = () => {
  const { t } = useTranslation();
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const dataCenters = [
    {
      name: "Los Angeles, USA",
      status: "operational",
      uptime: "99.99%",
      latency: "2ms",
      lastIncident: "2024-01-15",
      services: ["VPS Hosting", "Dedicated Servers", "Shared Hosting"]
    },
    {
      name: "Amsterdam, Netherlands",
      status: "operational",
      uptime: "99.98%",
      latency: "5ms",
      lastIncident: "2024-01-10",
      services: ["VPS Hosting", "Dedicated Servers", "Colocation"]
    },
    {
      name: "Bucharest, Romania",
      status: "operational",
      uptime: "99.97%",
      latency: "8ms",
      lastIncident: "2024-01-08",
      services: ["VPS Hosting", "Dedicated Servers"]
    }
  ];

  const services = [
    {
      name: "VPS Hosting",
      status: "operational",
      uptime: "99.99%",
      affected: "0 customers"
    },
    {
      name: "Dedicated Servers",
      status: "operational",
      uptime: "99.98%",
      affected: "0 customers"
    },
    {
      name: "Shared Hosting",
      status: "operational",
      uptime: "99.97%",
      affected: "0 customers"
    },
    {
      name: "Domain Registration",
      status: "operational",
      uptime: "99.99%",
      affected: "0 customers"
    },
    {
      name: "SSL Certificates",
      status: "operational",
      uptime: "99.99%",
      affected: "0 customers"
    },
    {
      name: "Colocation Services",
      status: "operational",
      uptime: "99.96%",
      affected: "0 customers"
    }
  ];

  const incidents = [
    {
      id: "INC-2024-001",
      title: "Scheduled Maintenance - Los Angeles",
      status: "resolved",
      severity: "low",
      startTime: "2024-01-15 02:00 UTC",
      endTime: "2024-01-15 04:00 UTC",
      description: "Routine maintenance completed successfully. No customer impact."
    },
    {
      id: "INC-2024-002",
      title: "Network Optimization - Amsterdam",
      status: "resolved",
      severity: "low",
      startTime: "2024-01-10 01:00 UTC",
      endTime: "2024-01-10 03:00 UTC",
      description: "Network optimization completed. Improved performance for all customers."
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <Check className="h-5 w-5 text-green-600" />;
      case "degraded":
        return <AlertCircle className="h-5 w-5 text-yellow-600" />;
      case "outage":
        return <X className="h-5 w-5 text-red-600" />;
      default:
        return <Clock className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "operational":
        return <Badge className="bg-green-100 text-green-800">Operational</Badge>;
      case "degraded":
        return <Badge className="bg-yellow-100 text-yellow-800">Degraded</Badge>;
      case "outage":
        return <Badge className="bg-red-100 text-red-800">Outage</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-700 opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800">
              <Activity className="h-4 w-4 mr-1" />
              All Systems Operational
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Network Status
            </h1>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto">
              Real-time status of our infrastructure and services. We're committed to providing 
              transparent information about our network performance and any ongoing issues.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Subscribe to Updates
              </Button>
              <Button size="lg" variant="outline">
                View History
              </Button>
            </div>

            {/* Overall Status */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">99.99%</div>
                <div className="text-sm text-gray-500">Overall Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">0</div>
                <div className="text-sm text-gray-500">Active Issues</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">3</div>
                <div className="text-sm text-gray-500">Data Centers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">&lt;5ms</div>
                <div className="text-sm text-gray-500">Avg Latency</div>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-500">
              Last updated: {lastUpdated.toLocaleString()}
            </div>
          </div>
        </div>
      </section>

      {/* Data Centers Status */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Data Center Status
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Real-time status of our global data centers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {dataCenters.map((dc, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{dc.name}</CardTitle>
                    {getStatusIcon(dc.status)}
                  </div>
                  {getStatusBadge(dc.status)}
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Uptime</span>
                      <span className="font-semibold">{dc.uptime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Latency</span>
                      <span className="font-semibold">{dc.latency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Last Incident</span>
                      <span className="font-semibold">{dc.lastIncident}</span>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold mb-2">Services</h4>
                      <div className="flex flex-wrap gap-1">
                        {dc.services.map((service, serviceIndex) => (
                          <Badge key={serviceIndex} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Status
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Current status of all our hosting services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    {getStatusIcon(service.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Status</span>
                      {getStatusBadge(service.status)}
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Uptime</span>
                      <span className="font-semibold">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Affected</span>
                      <span className="font-semibold">{service.affected}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recent Incidents
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Historical incidents and their resolutions
            </p>
          </div>
          
          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{incident.title}</CardTitle>
                      <p className="text-sm text-gray-500">Incident ID: {incident.id}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusBadge(incident.status)}
                      <Badge variant="outline" className="text-xs">
                        {incident.severity}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">{incident.description}</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Start Time:</span>
                        <span className="ml-2 font-semibold">{incident.startTime}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">End Time:</span>
                        <span className="ml-2 font-semibold">{incident.endTime}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Informed
          </h2>
          <p className="text-green-100 mb-8 text-base leading-relaxed font-light tracking-wide">
            Subscribe to our status page for real-time updates on our infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Subscribe to Updates
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NetworkStatus; 
