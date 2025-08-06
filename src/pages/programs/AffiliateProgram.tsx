import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Building, DollarSign, Shield, Globe, Server, Zap, Award, Clock, Headphones, Rocket, Database, Cpu, HardDrive, Network, Lock, Mail, Phone, Link, TrendingUp, Gift, Target, BarChart3 } from "lucide-react";
import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";

const AffiliateProgram = () => {
  const { t } = useTranslation();

  const commissionStructure = [
    {
      service: "Shared Hosting",
      commission: "30%",
      description: "Recurring commission on all shared hosting plans",
      icon: <Server className="h-6 w-6 text-blue-600" />
    },
    {
      service: "VPS Hosting",
      commission: "30%",
      description: "Recurring commission on all VPS hosting plans",
      icon: <Cpu className="h-6 w-6 text-green-600" />
    },
    {
      service: "Dedicated Servers",
      commission: "5%",
      description: "Recurring commission every month the customer remains active",
      icon: <HardDrive className="h-6 w-6 text-purple-600" />
    }
  ];

  const benefits = [
    {
      icon: <Link className="h-8 w-8 text-blue-500" />,
      title: "Pre-designed Banners",
      description: "Ready-to-use promotional materials including banners, link formats, and branded assets for effortless setup."
    },
    {
      icon: <Headphones className="h-8 w-8 text-green-500" />,
      title: "Responsive Support",
      description: "Dedicated support for our affiliates via email and chat to help you succeed in your promotional efforts."
    },
    {
      icon: <Clock className="h-8 w-8 text-yellow-500" />,
      title: "180-Day Cookie Duration",
      description: "Extended referral window means more commission potential and higher earning opportunities."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-purple-500" />,
      title: "Transparent Payouts",
      description: "Timely monthly payouts with simple terms and secure payment methods when you reach the minimum threshold."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-indigo-500" />,
      title: "Recurring Commissions",
      description: "Earn commissions every month as long as your referrals remain active customers."
    },
    {
      icon: <Gift className="h-8 w-8 text-red-500" />,
      title: "Bonus Rewards",
      description: "Extra incentives for high-performing affiliates with bonus rewards for achieving sign-up milestones."
    }
  ];

  const ambassadorBonuses = [
    {
      target: "100",
      bonus: "$50",
      description: "Achieve 100 sign-ups and earn a $50 bonus reward",
      color: "blue"
    },
    {
      target: "200",
      bonus: "$100",
      description: "Achieve 200 sign-ups and earn a $100 bonus reward",
      color: "green"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Sign Up",
      description: "Complete a secure registration form. After approval, you'll receive a unique affiliate link to share.",
      icon: <Target className="h-6 w-6" />
    },
    {
      step: "2",
      title: "Promote Us",
      description: "Use the link or banners on your blog, social media, or website—every click that leads to a sale earns you credit.",
      icon: <Rocket className="h-6 w-6" />
    },
    {
      step: "3",
      title: "Get Paid",
      description: "Withdraw earnings monthly once you reach the minimum payout threshold, via secure and flexible payment methods.",
      icon: <DollarSign className="h-6 w-6" />
    }
  ];

  const stats = [
    { number: "30%", label: "Shared & VPS Commission", icon: <BarChart3 className="h-6 w-6" /> },
    { number: "180", label: "Days Cookie Duration", icon: <Clock className="h-6 w-6" /> },
    { number: "$10", label: "Minimum Payout", icon: <DollarSign className="h-6 w-6" /> },
    { number: "Monthly", label: "Payout Frequency", icon: <TrendingUp className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <HomeHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
                          backgroundImage: "url('/hostsailor/affiliate-bg.svg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Badge variant="secondary" className="mb-4 text-purple-600 bg-purple-100">
                <Users className="h-4 w-4 mr-2" />
                Affiliate Program
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Join Our Affiliate Program & Earn Recurring Commissions
              </h1>
              <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                As a HostSailor affiliate, you'll promote our services using shareable banners and trackable links. 
                Each visitor referred who makes a purchase earns you a commission—and you get paid every 30 days 
                when your balance reaches at least $10.
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
                  Sign Up Now
                </Button>
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src="/hostsailor/service-images/affiliate-program.svg" 
                alt="Affiliate Program" 
                className="w-80 h-60 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Simple steps to start earning commissions with our affiliate program
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold text-purple-600">{step.step}</div>
                </div>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Structure Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Commission Structure
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Earn competitive commissions on all our hosting services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {commissionStructure.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow border-0">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.service}</h3>
                <div className="text-3xl font-bold text-purple-600 mb-3">{service.commission}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Card className="p-6 bg-purple-50 border-purple-200">
              <p className="text-lg text-gray-700">
                <strong>Note:</strong> Earnings calculated on net product price—e.g. you can earn up to 20% on every $100 of profit in commission payouts.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Join HostSailor?
            </h2>
            <p className="text-sm text-gray-500 max-w-3xl mx-auto font-light tracking-wide">
              Everything you need to succeed as an affiliate partner
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambassador Bonuses Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Brand Ambassador Perks
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Extra incentives for high-performing affiliates and community ambassadors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ambassadorBonuses.map((bonus, index) => (
              <Card key={index} className={`p-8 text-center hover:shadow-xl transition-shadow border-2 border-${bonus.color}-200`}>
                <div className={`w-20 h-20 bg-${bonus.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <Gift className={`h-10 w-10 text-${bonus.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {bonus.target} Sign-ups
                </h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">
                  {bonus.bonus}
                </div>
                <p className="text-gray-600 leading-relaxed">{bonus.description}</p>
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
              Program Summary
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Everything you need to know about our affiliate program
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Commission Rates</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Shared Hosting: <strong>30%</strong></span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">VPS Hosting: <strong>30%</strong></span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Dedicated Servers: <strong>5%</strong> recurring</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Program Details</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Cookie Duration: <strong>180 days</strong></span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Minimum Payout: <strong>$10</strong></span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Payout Frequency: <strong>Monthly</strong></span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Bonuses: <strong>Up to $100</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notes Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-yellow-200 bg-yellow-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Important Notes</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Commission applies only when referrals come through your affiliate route—<strong>direct traffic won't earn commissions</strong>.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Applicants with low/no content on their site may face approval delays—ensure you have a live URL for best results.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>All promotional materials and tracking links will be provided after approval.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Earning Commissions?
          </h2>
                      <p className="text-base text-purple-100 mb-8 max-w-2xl mx-auto font-light tracking-wide">
              Join our affiliate program today and start earning recurring commissions on every sale. 
              With competitive rates, extended cookie duration, and bonus rewards, there's never been a better time to partner with HostSailor.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
              Join Affiliate Program
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AffiliateProgram; 
