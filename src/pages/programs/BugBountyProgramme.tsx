import React from "react";
import { useTranslation } from "react-i18next";
import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Check, 
  Shield, 
  Award, 
  Clock, 
  Mail, 
  Phone, 
  ArrowRight,
  Star,
  Target,
  TrendingUp,
  Users,
  Building,
  DollarSign,
  Globe,
  Server,
  Zap,
  Headphones,
  Rocket,
  Database,
  Cpu,
  HardDrive,
  Network,
  Lock,
  Wifi,
  Settings,
  Activity,
  Wrench,
  Monitor,
  ShoppingCart,
  Code,
  AlertTriangle,
  Eye,
  Lock as SecurityLock,
  FileText,
  Heart,
  Gift
} from "lucide-react";

const BugBountyProgramme = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "Earn Rewards",
      description: "Get monetary compensation for valid security findings based on severity and impact."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Legal Protection",
      description: "Safe harbor policy protects ethical researchers from legal claims when following guidelines."
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Join Security Community",
      description: "Become part of our security research community and help protect our users."
    },
    {
      icon: <Star className="h-8 w-8 text-purple-500" />,
      title: "Recognition",
      description: "Get acknowledged for your contributions to improving platform security."
    },
    {
      icon: <Target className="h-8 w-8 text-red-500" />,
      title: "Clear Guidelines",
      description: "Well-defined scope and reporting process for efficient vulnerability disclosure."
    },
    {
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      title: "Make a Difference",
      description: "Help safeguard client data and strengthen our security infrastructure."
    }
  ];

  const disclosurePolicy = [
    {
      icon: <Eye className="h-6 w-6 text-blue-600" />,
      title: "Respect Privacy",
      description: "Respect user privacy and avoid interfering with services or data not authorized for testing."
    },
    {
      icon: <Lock className="h-6 w-6 text-green-600" />,
      title: "Follow Laws",
      description: "Follow all relevant laws. Unauthorized access or data misuse is strictly prohibited."
    },
    {
      icon: <FileText className="h-6 w-6 text-purple-600" />,
      title: "Testing Only",
      description: "Use security findings solely for testing—no public disclosure before HostSailor resolution."
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      title: "Allow Time",
      description: "Allow HostSailor reasonable time to address reported issues before sharing them publicly."
    }
  ];

  const rewardGuidelines = [
    {
      title: "Severity-Based Rewards",
      description: "Rewards are discretionary and based on vulnerability severity, exploitability, and report quality.",
      icon: <TrendingUp className="h-6 w-6 text-green-600" />
    },
    {
      title: "First Submission Priority",
      description: "Primary rewards are given to the first valid submission, with possible shared rewards if additional context arises.",
      icon: <Award className="h-6 w-6 text-yellow-600" />
    },
    {
      title: "Minor Findings",
      description: "Minor or informational findings may receive gratitude but not monetary compensation.",
      icon: <Gift className="h-6 w-6 text-blue-600" />
    }
  ];

  const faqs = [
    {
      question: "What qualifies for a bug bounty reward?",
      answer: "Valid security vulnerabilities that pose a real risk to our systems or user data qualify for rewards. The reward amount depends on severity, exploitability, and report quality."
    },
    {
      question: "Is my safety guaranteed when participating?",
      answer: "Yes, researchers acting in good faith under the program's terms will not face legal action from HostSailor. Our safe harbor policy protects ethical security testing."
    },
    {
      question: "Can I disclose vulnerabilities publicly later?",
      answer: "You must allow HostSailor reasonable time to address reported issues before sharing them publicly. This ensures we can fix vulnerabilities before they become public knowledge."
    },
    {
      question: "What systems are eligible for testing?",
      answer: "Our main hosting infrastructure, web applications, and client-facing services are eligible. Always check our scope and avoid testing systems not explicitly included."
    },
    {
      question: "How long does it take to receive a response?",
      answer: "We aim to acknowledge reports within 24-48 hours and provide updates on our assessment and resolution timeline."
    },
    {
      question: "Are there any restrictions on testing methods?",
      answer: "Yes, testing must be conducted responsibly without disrupting services or accessing unauthorized data. Follow our disclosure policy and applicable laws."
    }
  ];

  const summaryTable = [
    {
      topic: "Eligibility",
      info: "Follow browser-safe testing rules; avoid disruption or data misuse."
    },
    {
      topic: "Reporting",
      info: "Email reports to: security@hostsailor.com"
    },
    {
      topic: "Reward Decision",
      info: "Based on risk, impact, clarity, and first submission priority."
    },
    {
      topic: "Safe Harbor Terms",
      info: "Legitimate researchers are protected from legal claims."
    },
    {
      topic: "Disclosure Policy",
      info: "Controlled reporting and delayed public reveal mandatory."
    }
  ];

  const stats = [
    { number: "24-48h", label: "Response Time", icon: <Clock className="h-6 w-6" /> },
    { number: "100%", label: "Safe Harbor", icon: <Shield className="h-6 w-6" /> },
    { number: "First", label: "Submission Priority", icon: <Award className="h-6 w-6" /> },
    { number: "Ethical", label: "Testing Only", icon: <Lock className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <HomeHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('/bug-bounty-bg.svg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Badge variant="secondary" className="mb-4 text-purple-600 bg-purple-100">
                <Shield className="h-4 w-4 mr-2" />
                Bug Bounty Programme
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Join HostSailor's Bug Bounty Programme & Be a Security Hero
              </h1>
              <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                HostSailor invites ethical security researchers to help discover vulnerabilities and earn rewards 
                by responsibly reporting them. Enhance our platform's safety while earning recognition.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-purple-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                  Report a Vulnerability
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3">
                  View Guidelines
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src="/service-images/bug-bounty.svg" 
                alt="Bug Bounty Programme" 
                className="w-80 h-60 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About the Programme
            </h2>
            <p className="text-sm text-gray-500 max-w-3xl mx-auto font-light tracking-wide">
              We value external input to strengthen our security—vulnerability researchers play a critical role 
              in safeguarding client data.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclosure Policy Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Disclosure Policy
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              When reporting vulnerabilities, researchers must follow these essential guidelines
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {disclosurePolicy.map((policy, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      {policy.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{policy.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{policy.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safe Harbor Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Safe Harbor
              </h2>
              <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
                Legal protection for ethical security researchers
              </p>
            </div>
            
            <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-green-100 rounded-lg">
                    <SecurityLock className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Protection Guaranteed</h3>
                  <div className="space-y-3 text-gray-700">
                    <p className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Researchers acting in good faith under the program's terms <strong>will not</strong> face legal action from HostSailor or authorities such as claims under CFAA or DMCA.
                    </p>
                    <p className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Unintentional or well-intentioned security testing is protected under this policy.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Reward Guidelines Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Reward Guidelines
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Understanding how rewards are determined and distributed
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {rewardGuidelines.map((guideline, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-0">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    {guideline.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{guideline.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{guideline.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Table Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Programme Summary
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Quick reference guide for participants
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-xl">Programme Overview</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-200">
                  {summaryTable.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:items-center p-6 hover:bg-gray-50 transition-colors">
                      <div className="md:w-1/3 mb-2 md:mb-0">
                        <h4 className="font-semibold text-gray-900">{item.topic}</h4>
                      </div>
                      <div className="md:w-2/3">
                        <p className="text-gray-600">{item.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Common questions about our bug bounty programme
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Report a Vulnerability?
          </h2>
          <p className="text-base text-purple-100 mb-8 max-w-2xl mx-auto font-light tracking-wide">
            Submit your security findings and help us improve our platform's security
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <Mail className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Report</h3>
              <p className="text-2xl font-bold text-purple-600 mb-2">security@hostsailor.com</p>
              <p className="text-gray-600">Submit vulnerability reports</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <Phone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Need Help?</h3>
              <p className="text-gray-600 mb-4">Contact our security team</p>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Contact Us
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
              Report Vulnerability
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3">
              View Full Guidelines
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BugBountyProgramme; 