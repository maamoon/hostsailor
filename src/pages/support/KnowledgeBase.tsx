import React from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Search, Book, FileText, Video, Users, Star, ArrowRight, HelpCircle, Lightbulb, Settings, Server } from "lucide-react";

const KnowledgeBase = () => {
  const { t } = useTranslation();

  const categories = [
    {
      title: "Getting Started",
      icon: <Book className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600",
      articles: [
        "How to access your hosting control panel",
        "Setting up your first website",
        "Connecting your domain to hosting",
        "Basic email configuration"
      ]
    },
    {
      title: "Web Hosting",
      icon: <Server className="h-6 w-6" />,
      color: "bg-green-100 text-green-600",
      articles: [
        "Managing your hosting account",
        "Uploading files via FTP",
        "Creating databases",
        "Setting up SSL certificates"
      ]
    },
    {
      title: "VPS Hosting",
      icon: <Settings className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-600",
      articles: [
        "VPS server management",
        "Installing control panels",
        "Server security best practices",
        "Backup and recovery"
      ]
    },
    {
      title: "Domain Management",
      icon: <HelpCircle className="h-6 w-6" />,
      color: "bg-orange-100 text-orange-600",
      articles: [
        "Domain registration guide",
        "DNS management",
        "Domain transfer process",
        "Domain privacy protection"
      ]
    }
  ];

  const popularArticles = [
    {
      title: "How to Install WordPress on Your Hosting",
      category: "Web Hosting",
      views: "2.5k",
      rating: 4.8
    },
    {
      title: "Setting Up Email Accounts in cPanel",
      category: "Email",
      views: "1.8k",
      rating: 4.6
    },
    {
      title: "VPS Server Security Checklist",
      category: "VPS Hosting",
      views: "1.2k",
      rating: 4.9
    },
    {
      title: "Troubleshooting Common DNS Issues",
      category: "Domain Management",
      views: "950",
      rating: 4.7
    }
  ];

  const tutorials = [
    {
      title: "Complete WordPress Setup Guide",
      duration: "15 min",
      difficulty: "Beginner",
      type: "Video"
    },
    {
      title: "Advanced VPS Configuration",
      duration: "25 min",
      difficulty: "Advanced",
      type: "Article"
    },
    {
      title: "Email Server Configuration",
      duration: "20 min",
      difficulty: "Intermediate",
      type: "Video"
    },
    {
      title: "Security Hardening Guide",
      duration: "30 min",
      difficulty: "Advanced",
      type: "Article"
    }
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
                <Book className="h-4 w-4 mr-1" />
                Knowledge Base
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Find Answers to All Your Questions
              </h1>
              <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                Comprehensive guides, tutorials, and documentation to help you get the most out of your hosting services. 
                From basic setup to advanced configurations, we've got you covered.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto lg:mx-0">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search knowledge base..."
                    className="pl-10 pr-4 py-3 text-lg"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/hostsailor/service-images/knowledge-base.svg"
                alt="Knowledge Base"
                className="w-80 h-60 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Find the information you need organized by topic
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex} className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                        {article}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="mt-4 w-full" size="sm">
                    View All Articles
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Articles
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Most viewed and highly rated articles from our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">{article.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{article.views} views</span>
                    <Button variant="ghost" size="sm">
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Step-by-Step Tutorials
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              Follow our detailed tutorials to master your hosting setup
            </p>
          </div>
          
          <Tabs defaultValue="all" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="beginner">Beginner</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tutorials.map((tutorial, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-xs">
                          {tutorial.difficulty}
                        </Badge>
                        <div className="flex items-center space-x-2 text-gray-500">
                          {tutorial.type === "Video" ? (
                            <Video className="h-4 w-4" />
                          ) : (
                            <FileText className="h-4 w-4" />
                          )}
                          <span className="text-sm">{tutorial.duration}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600">
                        {tutorial.title}
                      </h3>
                      <Button variant="ghost" size="sm" className="mt-2">
                        Start Tutorial
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-blue-100 mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto">
            Our support team is here to help. Contact us for personalized assistance with any hosting-related questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="/contact">Contact Support</a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Live Chat
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KnowledgeBase; 
