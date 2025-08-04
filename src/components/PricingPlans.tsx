import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const PricingPlans = () => {
  const plans = [
    {
      name: "Mini Sailor KVM",
      price: "$1.99",
      period: "per month",
      popular: false,
      features: [
        "RAM 256MB",
        "Virtualization KVM",
        "RAID Storage 5 GB NVMe",
        "NL Processor Core1",
        "IPv4 Address(es) 1",
        "IPv6 Address(es) /64",
        "Bandwidth 256GB",
        "Network Speed 1Gbit",
        "Hypervisor KVM"
      ]
    },
    {
      name: "Sailor KVM", 
      price: "$2.99",
      period: "per month",
      popular: true,
      features: [
        "RAM 512MB",
        "Virtualization KVM", 
        "RAID Storage 10 GB NVMe",
        "NL Processor Core1",
        "IPv4 Address(es) 1",
        "IPv6 Address(es) /64",
        "Bandwidth 512GB",
        "Network Speed 1Gbit",
        "Hypervisor KVM"
      ]
    },
    {
      name: "Seaman KVM",
      price: "$4.99", 
      period: "per month",
      popular: false,
      features: [
        "RAM 1GB",
        "Virtualization KVM",
        "RAID Storage 15 GB NVMe", 
        "NL Processor Core1",
        "IPv4 Address(es) 1",
        "IPv6 Address(es) /64",
        "Bandwidth 1TB",
        "Network Speed 1Gbit",
        "Hypervisor KVM"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-accent/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect VPS plan for your needs. All plans include free SSL certificates and 24/7 support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-primary">
                  {plan.price}
                  <span className="text-sm font-normal text-muted-foreground ml-1">
                    {plan.period}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include Linux by default. Windows is available at an extra cost.
          </p>
          <Button variant="ghost" className="text-primary">
            View All Plans →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;