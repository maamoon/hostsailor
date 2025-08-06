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
  Users as Team,
  Globe as World,
  Shield as Security,
  Zap as Innovation
} from "lucide-react";

const OurCompany = () => {
  const { t } = useTranslation();

  const companyStats = [
    { number: "10+", label: "Years Experience", icon: <Calendar className="h-6 w-6" /> },
    { number: "50K+", label: "Happy Customers", icon: <Users className="h-6 w-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="h-6 w-6" /> },
    { number: "24/7", label: "Support", icon: <Headphones className="h-6 w-6" /> }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Customer First",
      description: "We prioritize our customers' success and satisfaction above everything else."
    },
    {
      icon: <Innovation className="h-8 w-8 text-blue-500" />,
      title: "Innovation",
      description: "Constantly evolving and adopting the latest technologies to provide cutting-edge solutions."
    },
    {
      icon: <Security className="h-8 w-8 text-green-500" />,
      title: "Reliability",
      description: "Building trust through consistent, secure, and dependable hosting services."
    },
    {
      icon: <Team className="h-8 w-8 text-purple-500" />,
      title: "Excellence",
      description: "Striving for excellence in every aspect of our service delivery and customer support."
    }
  ];

  const milestones = [
    {
      year: "2014",
      title: "Company Founded",
      description: "HostSailor was established with a vision to provide reliable hosting solutions."
    },
    {
      year: "2016",
      title: "First Data Center",
      description: "Opened our first data center in Los Angeles, expanding our global presence."
    },
    {
      year: "2018",
      title: "European Expansion",
      description: "Launched data centers in Netherlands and Romania to serve European customers."
    },
    {
      year: "2020",
      title: "10K Customers",
      description: "Reached a major milestone of serving 10,000 satisfied customers worldwide."
    },
    {
      year: "2022",
      title: "Advanced Services",
      description: "Introduced advanced VPS and dedicated server solutions with cutting-edge technology."
    },
    {
      year: "2024",
      title: "Global Leader",
      description: "Established as a leading hosting provider with 50K+ customers across the globe."
    }
  ];

  const team = [
    {
      name: "Technical Team",
      description: "Expert engineers and system administrators ensuring optimal performance and security.",
      icon: <Server className="h-12 w-12 text-blue-600" />
    },
    {
      name: "Support Team",
      description: "24/7 customer support specialists ready to help with any hosting-related questions.",
      icon: <Headphones className="h-12 w-12 text-green-600" />
    },
    {
      name: "Sales Team",
      description: "Dedicated sales professionals helping customers find the perfect hosting solution.",
      icon: <Users className="h-12 w-12 text-purple-600" />
    }
  ];

  const dataCenters = [
    {
      location: "Los Angeles, USA",
      description: "Strategic location for North American customers with low latency connections.",
      icon: <MapPin className="h-6 w-6 text-blue-600" />
    },
    {
      location: "Amsterdam, Netherlands",
      description: "European hub providing excellent connectivity across the continent.",
      icon: <MapPin className="h-6 w-6 text-green-600" />
    },
    {
      location: "Bucharest, Romania",
      description: "Eastern European data center offering cost-effective hosting solutions.",
      icon: <MapPin className="h-6 w-6 text-purple-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <HomeHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
                          backgroundImage: "url('/hostsailor/about-us-bg.svg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Badge variant="secondary" className="mb-4 text-blue-600 bg-blue-100">
                <Building className="h-4 w-4 mr-2" />
                About HostSailor
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Our Company
              </h1>
              <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                HostSailor is a leading web hosting provider with over 10 years of experience in delivering 
                reliable, secure, and high-performance hosting solutions to businesses and individuals worldwide.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {companyStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  View Services
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src="/hostsailor/service-images/about-us.svg" 
                alt="Our Company" 
                className="w-80 h-60 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                To provide reliable, secure, and high-performance hosting solutions that empower businesses 
                and individuals to succeed in the digital world. We strive to deliver exceptional customer 
                service and innovative technology solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Reliable hosting infrastructure</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">24/7 customer support</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Advanced security measures</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                To become the most trusted and preferred hosting provider globally, known for our commitment 
                to innovation, customer satisfaction, and technological excellence.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Global market leadership</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Innovation className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Technology innovation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Customer-centric approach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow border border-gray-100 bg-white">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Key milestones in our company's growth and development
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-2">
                        <Badge variant="secondary" className="mr-2">{milestone.year}</Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Dedicated professionals committed to your success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-0">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    {member.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{member.name}</h3>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Centers Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Global Data Centers
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Strategic locations worldwide for optimal performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {dataCenters.map((center, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3">
                    {center.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{center.location}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{center.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-base text-blue-100 mb-8 max-w-2xl mx-auto font-light tracking-wide">
            Join thousands of satisfied customers who trust HostSailor for their hosting needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              View Hosting Plans
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurCompany; 