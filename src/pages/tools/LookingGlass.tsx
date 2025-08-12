import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Globe, Server, Wifi, Activity, ArrowRight, Copy, Download } from "lucide-react";

const LookingGlass = () => {
  const { t } = useTranslation();
  const [selectedLocation, setSelectedLocation] = useState("la");
  const [targetHost, setTargetHost] = useState("");
  const [testResults, setTestResults] = useState<Record<string, unknown> | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  const locations = [
    { id: "la", name: "Los Angeles, USA", ip: "192.168.1.1" },
    { id: "ams", name: "Amsterdam, Netherlands", ip: "192.168.1.2" },
    { id: "buch", name: "Bucharest, Romania", ip: "192.168.1.3" }
  ];

  const testTypes = [
    { id: "ping", name: "Ping", description: "Test latency and packet loss" },
    { id: "traceroute", name: "Traceroute", description: "View network path" },
    { id: "mtr", name: "MTR", description: "Continuous traceroute" },
    { id: "dns", name: "DNS Lookup", description: "Resolve domain names" }
  ];

  const runTest = async (testType: string) => {
    if (!targetHost) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockResults = {
        ping: {
          target: targetHost,
          location: locations.find(l => l.id === selectedLocation)?.name,
          results: [
            { hop: 1, ip: "192.168.1.1", latency: "1.2ms", loss: "0%" },
            { hop: 2, ip: "10.0.0.1", latency: "2.1ms", loss: "0%" },
            { hop: 3, ip: "8.8.8.8", latency: "15.3ms", loss: "0%" }
          ]
        },
        traceroute: {
          target: targetHost,
          location: locations.find(l => l.id === selectedLocation)?.name,
          results: [
            { hop: 1, ip: "192.168.1.1", hostname: "router.local", latency: "1.2ms" },
            { hop: 2, ip: "10.0.0.1", hostname: "gateway.local", latency: "2.1ms" },
            { hop: 3, ip: "8.8.8.8", hostname: "google-public-dns-a.google.com", latency: "15.3ms" }
          ]
        },
        dns: {
          target: targetHost,
          location: locations.find(l => l.id === selectedLocation)?.name,
          results: {
            A: ["192.168.1.100"],
            AAAA: ["2001:db8::1"],
            MX: ["mail.example.com"],
            NS: ["ns1.example.com", "ns2.example.com"]
          }
        }
      };
      
      setTestResults(mockResults[testType as keyof typeof mockResults]);
      setIsLoading(false);
    }, 2000);
  };

  const copyResults = () => {
    if (testResults) {
      navigator.clipboard.writeText(JSON.stringify(testResults, null, 2));
    }
  };

  const downloadResults = () => {
    if (testResults) {
      const blob = new Blob([JSON.stringify(testResults, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `lookingglass-${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              <Globe className="h-4 w-4 mr-1" />
              Network Testing Tool
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Looking Glass
            </h1>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto">
              Test network connectivity, latency, and routing from our global data centers. 
              Get real-time insights into network performance and troubleshoot connectivity issues.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Testing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">3</div>
                <div className="text-sm text-gray-500">Data Centers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">4</div>
                <div className="text-sm text-gray-500">Test Types</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-500">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">Real-time</div>
                <div className="text-sm text-gray-500">Results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Interface */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Network Testing Interface
              </h2>
              <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                Select a data center and test type to analyze network connectivity
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Test Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Data Center Location
                    </label>
                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location.id} value={location.id}>
                            {location.name} ({location.ip})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Target Host
                    </label>
                    <Input
                      placeholder="Enter IP address or domain name"
                      value={targetHost}
                      onChange={(e) => setTargetHost(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="ping" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                {testTypes.map((test) => (
                  <TabsTrigger key={test.id} value={test.id}>
                    {test.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {testTypes.map((test) => (
                <TabsContent key={test.id} value={test.id}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>{test.name}</CardTitle>
                          <p className="text-sm text-gray-500">{test.description}</p>
                        </div>
                        <Button 
                          onClick={() => runTest(test.id)}
                          disabled={!targetHost || isLoading}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          {isLoading ? (
                            <Activity className="h-4 w-4 animate-spin mr-2" />
                          ) : (
                            <Wifi className="h-4 w-4 mr-2" />
                          )}
                          Run Test
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {testResults && testResults.target === targetHost && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold">Test Results</h4>
                              <p className="text-sm text-gray-500">
                                From {testResults.location} to {testResults.target}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" onClick={copyResults}>
                                <Copy className="h-4 w-4 mr-1" />
                                Copy
                              </Button>
                              <Button variant="outline" size="sm" onClick={downloadResults}>
                                <Download className="h-4 w-4 mr-1" />
                                Download
                              </Button>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <pre className="text-sm overflow-x-auto">
                              {JSON.stringify(testResults, null, 2)}
                            </pre>
                          </div>
                        </div>
                      )}
                      
                      {!testResults && (
                        <div className="text-center py-8 text-gray-500">
                          <Server className="h-12 w-12 mx-auto mb-4 opacity-50" />
                          <p>Enter a target host and click "Run Test" to start</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Data Centers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Available Data Centers
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Test from our global network of data centers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    <Server className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{location.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">IP Address</span>
                      <span className="font-mono text-sm">{location.ip}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Status</span>
                      <Badge className="bg-green-100 text-green-800">Online</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Uptime</span>
                      <span className="font-semibold">99.99%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help with Network Issues?
          </h2>
          <p className="text-blue-100 mb-8 text-base leading-relaxed font-light tracking-wide">
            Our support team is available 24/7 to help you troubleshoot connectivity problems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Contact Support
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LookingGlass; 
