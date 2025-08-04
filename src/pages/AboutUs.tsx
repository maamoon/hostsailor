import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Globe, Award, Clock, Shield, Zap, Building, MapPin, Phone, Mail } from "lucide-react";
import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";

const AboutUs = () => {
  const { t } = useTranslation();

  const stats = [
    {
      number: "10+",
      label: "Years Experience",
      description: "Serving customers worldwide"
    },
    {
      number: "50,000+",
      label: "Happy Customers",
      description: "Trusted by businesses globally"
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable hosting infrastructure"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Expert technical assistance"
    }
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Reliability",
      description: "We provide rock-solid hosting solutions with guaranteed uptime and performance"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Innovation",
      description: "Constantly evolving our technology to provide cutting-edge hosting solutions"
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Customer Focus",
      description: "Your success is our priority. We're here to support your growth every step of the way"
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      title: "Global Reach",
      description: "Multiple data centers worldwide to ensure optimal performance for your audience"
    }
  ];

  const team = [
    {
      name: "Technical Team",
      description: "Expert engineers ensuring optimal performance and security",
      members: "15+ Engineers"
    },
    {
      name: "Support Team",
      description: "Dedicated support specialists available 24/7",
      members: "20+ Support Agents"
    },
    {
      name: "Sales Team",
      description: "Professional sales representatives to help you choose the right solution",
      members: "10+ Sales Representatives"
    }
  ];

  const dataCenters = [
    {
      location: "United States, Los Angeles",
      features: ["High-speed connectivity", "DDoS protection", "Redundant power", "24/7 monitoring"],
      status: "Active"
    },
    {
      location: "Netherlands, Amsterdam",
      features: ["Low latency", "EU compliance", "Advanced security", "Backup systems"],
      status: "Active"
    },
    {
      location: "Romania, Bucharest",
      features: ["Cost-effective", "High performance", "Local support", "Scalable infrastructure"],
      status: "Active"
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
        
        <div className="relative max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            <Building className="h-4 w-4 mr-2" />
            About HostSailor
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Company
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            HostSailor is a leading web hosting provider committed to delivering exceptional 
            hosting solutions with personalized attention and outstanding service. 
            We set high standards in the hosting industry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Learn More
            </Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at HostSailor
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to your success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription>{member.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {member.members}
                  </div>
                  <Button variant="outline" className="w-full">
                    Meet the Team
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Centers */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Data Centers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strategic locations worldwide for optimal performance and reliability
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {dataCenters.map((center, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{center.location}</CardTitle>
                    <Badge className="bg-green-500 text-white">{center.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {center.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to start your hosting journey? Contact us today!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 mb-2" />
              <h3 className="font-semibold mb-1">Address</h3>
              <p className="text-sm opacity-90">
                Suite No: 1605, Churchill Executive Tower,<br />
                Burj Khalifa Area, Dubai P.O. Box 98362,<br />
                United Arab Emirates
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 mb-2" />
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-sm opacity-90">+164 6 518 9099</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 mb-2" />
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-sm opacity-90">sales@hostsailor.com</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Contact Sales
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Support Chat
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs; 