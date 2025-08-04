import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const PricingPlans = () => {
  const plans = [
    {
      name: "Starter",
      price: "$4.99",
      description: "Perfect for small websites",
      features: [
        "10 GB SSD Storage",
        "100 GB Bandwidth",
        "1 Website",
        "Free SSL Certificate",
        "24/7 Basic Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$9.99",
      description: "Great for growing businesses",
      features: [
        "50 GB SSD Storage",
        "500 GB Bandwidth",
        "5 Websites",
        "Free SSL Certificate",
        "24/7 Priority Support",
        "Free Domain"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$19.99",
      description: "For high-traffic websites",
      features: [
        "200 GB SSD Storage",
        "Unlimited Bandwidth",
        "Unlimited Websites",
        "Free SSL Certificate",
        "24/7 Premium Support",
        "Free Domain",
        "Daily Backups"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            All plans include our industry-leading performance and security features
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};