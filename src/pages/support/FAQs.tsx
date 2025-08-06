import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, HelpCircle, Server, Globe, Shield, CreditCard, Users, FileText, ArrowRight, Mail, Phone } from "lucide-react";

const FAQs = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      title: "General Hosting",
      icon: <Server className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600",
      items: [
        {
          question: "What is web hosting?",
          answer: "Web hosting is a service that allows individuals and organizations to make their website accessible on the internet. It involves storing your website files on servers that are connected to the internet 24/7."
        },
        {
          question: "What types of hosting do you offer?",
          answer: "We offer shared hosting, VPS hosting, dedicated servers, and colocation services. Each type is designed for different needs and budgets, from small personal websites to large enterprise applications."
        },
        {
          question: "How do I choose the right hosting plan?",
          answer: "Consider your website's traffic, storage needs, and technical requirements. Shared hosting is great for beginners, VPS for growing sites, and dedicated servers for high-traffic applications."
        },
        {
          question: "Do you offer a money-back guarantee?",
          answer: "Yes, we offer a 30-day money-back guarantee on all our hosting plans. If you're not satisfied with our service, you can request a full refund within 30 days of purchase."
        }
      ]
    },
    {
      title: "Domain Management",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-green-100 text-green-600",
      items: [
        {
          question: "How do I register a domain name?",
          answer: "You can register a domain through our domain registration service. Simply search for your desired domain name, choose from available extensions (.com, .net, .org, etc.), and complete the registration process."
        },
        {
          question: "Can I transfer my domain to HostSailor?",
          answer: "Yes, you can transfer your domain to us from another registrar. The process typically takes 5-7 days and requires an authorization code from your current registrar."
        },
        {
          question: "What is DNS management?",
          answer: "DNS (Domain Name System) management allows you to control how your domain points to your hosting server. You can set up A records, CNAME records, MX records, and other DNS settings."
        },
        {
          question: "How long does domain propagation take?",
          answer: "DNS changes typically propagate within 24-48 hours, though it can sometimes take up to 72 hours for changes to be visible worldwide."
        }
      ]
    },
    {
      title: "Security & SSL",
      icon: <Shield className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-600",
      items: [
        {
          question: "Do you provide SSL certificates?",
          answer: "Yes, we offer free Let's Encrypt SSL certificates with all hosting plans, as well as premium SSL certificates from trusted Certificate Authorities."
        },
        {
          question: "How do I install an SSL certificate?",
          answer: "SSL certificates are automatically installed on our hosting plans. For custom certificates, you can install them through your hosting control panel or contact our support team."
        },
        {
          question: "What security measures do you have?",
          answer: "We implement DDoS protection, malware scanning, firewall protection, and regular security updates to keep your hosting environment secure."
        },
        {
          question: "Do you offer backup services?",
          answer: "Yes, we provide automated daily backups for all hosting plans. You can also create manual backups through your control panel."
        }
      ]
    },
    {
      title: "Billing & Payments",
      icon: <CreditCard className="h-6 w-6" />,
      color: "bg-orange-100 text-orange-600",
      items: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept major credit cards, PayPal, bank transfers, and various cryptocurrencies including Bitcoin, Ethereum, and others."
        },
        {
          question: "How does billing work?",
          answer: "We offer monthly, quarterly, and annual billing cycles. Annual plans come with discounts. Invoices are sent via email before the due date."
        },
        {
          question: "Can I upgrade or downgrade my plan?",
          answer: "Yes, you can upgrade or downgrade your hosting plan at any time. Upgrades are immediate, while downgrades take effect at the next billing cycle."
        },
        {
          question: "What happens if my payment is late?",
          answer: "We provide a grace period for late payments. If payment is not received, your hosting service may be temporarily suspended until payment is made."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: <Users className="h-6 w-6" />,
      color: "bg-indigo-100 text-indigo-600",
      items: [
        {
          question: "What support channels do you offer?",
          answer: "We provide 24/7 support through live chat, email tickets, and phone support. Our technical team is always available to help with any issues."
        },
        {
          question: "How quickly do you respond to support requests?",
          answer: "We aim to respond to all support requests within 2 hours. Critical issues are prioritized and typically resolved within 30 minutes."
        },
        {
          question: "Do you offer managed hosting services?",
          answer: "Yes, we offer managed hosting services where our team handles server maintenance, updates, and technical issues for you."
        },
        {
          question: "Can you help with website migration?",
          answer: "Yes, we offer free website migration services. Our team will help you move your website from your current host to our servers."
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

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
                <HelpCircle className="h-4 w-4 mr-1" />
                Frequently Asked Questions
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Find Answers to Common Questions
              </h1>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                Get quick answers to the most frequently asked questions about our hosting services, 
                domain management, security, billing, and technical support.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto lg:mx-0">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 text-lg"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/hostsailor/service-images/faqs.svg"
                alt="FAQs"
                className="w-80 h-60 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid gap-8">
            {filteredCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((item, itemIndex) => (
                      <AccordionItem key={itemIndex} value={`item-${index}-${itemIndex}`}>
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="font-medium text-gray-900">{item.question}</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our support team is here to help 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2">
              <Mail className="h-4 w-4" />
              Contact Support
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-white border-white hover:bg-white hover:text-blue-600">
              <Phone className="h-4 w-4" />
              Call Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQs; 