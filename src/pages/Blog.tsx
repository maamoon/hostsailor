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
  Search,
  Filter,
  Tag,
  User,
  Eye,
  MessageCircle,
  Share2,
  Bookmark
} from "lucide-react";

const Blog = () => {
  const { t } = useTranslation();

  const categories = [
    { name: "All Posts", count: 12, active: true },
    { name: "Hosting Tips", count: 4 },
    { name: "Technology", count: 3 },
    { name: "Security", count: 2 },
    { name: "Company News", count: 3 }
  ];

  const featuredPost = {
    title: "Complete Guide to Choosing the Right Web Hosting Plan",
    excerpt: "Learn how to select the perfect hosting plan for your website based on traffic, performance needs, and budget considerations.",
    author: "HostSailor Team",
    date: "March 15, 2024",
    category: "Hosting Tips",
    readTime: "8 min read",
    image: "/blog/featured-post.jpg",
    views: "2.5K",
    comments: 24
  };

  const blogPosts = [
    {
      title: "10 Essential Security Practices for Your Website",
      excerpt: "Protect your website from cyber threats with these proven security measures and best practices.",
      author: "Security Team",
      date: "March 12, 2024",
      category: "Security",
      readTime: "6 min read",
      image: "/blog/security-practices.jpg",
      views: "1.8K",
      comments: 15,
      featured: false
    },
    {
      title: "Understanding VPS vs Shared Hosting: Which is Right for You?",
      excerpt: "Compare VPS and shared hosting to understand the differences and choose the best option for your needs.",
      author: "Technical Team",
      date: "March 10, 2024",
      category: "Hosting Tips",
      readTime: "7 min read",
      image: "/blog/vps-vs-shared.jpg",
      views: "3.2K",
      comments: 31,
      featured: false
    },
    {
      title: "New Data Center Launch: Amsterdam Location Now Live",
      excerpt: "We're excited to announce the launch of our new data center in Amsterdam, providing better connectivity for European customers.",
      author: "Company News",
      date: "March 8, 2024",
      category: "Company News",
      readTime: "4 min read",
      image: "/blog/amsterdam-datacenter.jpg",
      views: "4.1K",
      comments: 42,
      featured: false
    },
    {
      title: "Optimizing Website Performance: Speed Up Your Site",
      excerpt: "Discover proven techniques to improve your website's loading speed and overall performance.",
      author: "Performance Team",
      date: "March 5, 2024",
      category: "Technology",
      readTime: "9 min read",
      image: "/blog/performance-optimization.jpg",
      views: "2.9K",
      comments: 28,
      featured: false
    },
    {
      title: "SSL Certificates: Why Every Website Needs HTTPS",
      excerpt: "Learn why SSL certificates are crucial for website security and how they impact SEO and user trust.",
      author: "Security Team",
      date: "March 3, 2024",
      category: "Security",
      readTime: "5 min read",
      image: "/blog/ssl-certificates.jpg",
      views: "2.1K",
      comments: 19,
      featured: false
    },
    {
      title: "Backup Strategies: Protecting Your Digital Assets",
      excerpt: "Implement effective backup strategies to ensure your data is always safe and recoverable.",
      author: "Technical Team",
      date: "March 1, 2024",
      category: "Hosting Tips",
      readTime: "6 min read",
      image: "/blog/backup-strategies.jpg",
      views: "1.6K",
      comments: 12,
      featured: false
    },
    {
      title: "Cloud Hosting vs Traditional Hosting: A Comprehensive Comparison",
      excerpt: "Explore the differences between cloud hosting and traditional hosting solutions.",
      author: "Cloud Team",
      date: "February 28, 2024",
      category: "Technology",
      readTime: "8 min read",
      image: "/blog/cloud-vs-traditional.jpg",
      views: "3.5K",
      comments: 35,
      featured: false
    },
    {
      title: "Customer Success Story: How We Helped StartupXYZ Scale",
      excerpt: "Read about how HostSailor helped a growing startup scale their infrastructure efficiently.",
      author: "Customer Success",
      date: "February 25, 2024",
      category: "Company News",
      readTime: "5 min read",
      image: "/blog/customer-success.jpg",
      views: "2.8K",
      comments: 26,
      featured: false
    },
    {
      title: "WordPress Hosting: Optimized Solutions for Your CMS",
      excerpt: "Discover our specialized WordPress hosting solutions designed for optimal performance and security.",
      author: "WordPress Team",
      date: "February 22, 2024",
      category: "Hosting Tips",
      readTime: "7 min read",
      image: "/blog/wordpress-hosting.jpg",
      views: "2.3K",
      comments: 21,
      featured: false
    }
  ];

  const popularTags = [
    "Hosting", "Security", "Performance", "WordPress", "VPS", "SSL", "Backup", "Cloud", "Technology", "Tips"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <HomeHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('/blog-bg.svg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 text-blue-600 bg-blue-100">
              <Bookmark className="h-4 w-4 mr-2" />
              HostSailor Blog
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Latest Insights & Updates
            </h1>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto">
              Stay informed with the latest hosting tips, technology insights, security updates, and company news 
              from the HostSailor team.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
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

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Article
            </h2>
          </div>
          
          <Card className="max-w-4xl mx-auto overflow-hidden hover:shadow-xl transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary" className="text-blue-600 bg-blue-100">
                    {featuredPost.category}
                  </Badge>
                  <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {featuredPost.views}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {featuredPost.comments}
                    </div>
                  </div>
                </div>
                <Button className="w-full">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="text-blue-600 bg-blue-100">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Eye className="h-4 w-4" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8">
              Load More Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Tags
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Explore articles by topic
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {popularTags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-blue-100 mb-8 text-base leading-relaxed font-light tracking-wide max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest hosting tips, security updates, and industry insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-700 focus:outline-none"
            />
            <Button size="lg" variant="secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog; 