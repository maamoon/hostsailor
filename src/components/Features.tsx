import { Card, CardContent } from "@/components/ui/card";
import { Server, Globe, GamepadIcon, Code } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: "Websites & Blogs",
      description: "Host personal blogs or business websites with unlimited fast speed and reliable performance guaranteed."
    },
    {
      icon: Server,
      title: "E-commerce Stores", 
      description: "Power your online store with scalable resources, secure transactions, and unmatched high-speed performance worldwide."
    },
    {
      icon: GamepadIcon,
      title: "Game Servers",
      description: "Run multiplayer game servers smoothly with low latency, custom control and consistent uptime for all users."
    },
    {
      icon: Code,
      title: "Development & Testing Environments",
      description: "Build, test and deploy your applications in isolated environments with full root access and instant scalability."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What is VPS KVM Suitable For?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our KVM VPS solutions are perfect for a wide range of applications and use cases.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;