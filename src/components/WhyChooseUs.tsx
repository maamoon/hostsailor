import { Card, CardContent } from "@/components/ui/card";
import { Check, Zap, Shield, Settings, Gauge, Globe, Headphones, TrendingUp } from "lucide-react";
import hostingBg from "@/assets/hosting-bg.jpg";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Zap,
      text: "Get your server live instantly with automated quick deployment service."
    },
    {
      icon: Settings,
      text: "Manage everything easily using our user-friendly control panel interface."
    },
    {
      icon: Gauge,
      text: "Enjoy faster performance with NVMe and RAID0 storage technology."
    },
    {
      icon: Shield,
      text: "Protect your site with built-in advanced DDoS attack protection."
    },
    {
      icon: TrendingUp,
      text: "Experience stable speed with DDR5 RAM and EPYC processor."
    },
    {
      icon: Globe,
      text: "Root access gives you full customization and configuration control."
    },
    {
      icon: TrendingUp,
      text: "Upgrade server resources anytime to match your growing needs."
    },
    {
      icon: Headphones,
      text: "Top-tier VPS hosting without the premium price tag."
    },
    {
      icon: Check,
      text: "Reach out anytime—our support team is always available."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose HostSailor as Your KVM VPS Server Provider?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Features */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <feature.icon className="w-4 h-4 text-primary" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src={hostingBg} 
                  alt="Professional hosting infrastructure" 
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Industry Recognition</h3>
            <p className="text-muted-foreground">Trusted by industry leaders and recognized for excellence</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <div className="text-lg font-bold text-primary">TOP 10</div>
              <div className="text-xs text-muted-foreground">Best Hosts</div>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <div className="text-lg font-bold text-primary">2018</div>
              <div className="text-xs text-muted-foreground">Rising Star Award</div>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <div className="text-lg font-bold text-primary">TOP 10</div>
              <div className="text-xs text-muted-foreground">Web Hosts</div>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <div className="text-lg font-bold text-primary">CERTIFIED</div>
              <div className="text-xs text-muted-foreground">2014</div>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <div className="text-lg font-bold text-primary">GREAT</div>
              <div className="text-xs text-muted-foreground">User Experience</div>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <div className="text-lg font-bold text-primary">UPTIME</div>
              <div className="text-xs text-muted-foreground">99.9%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;