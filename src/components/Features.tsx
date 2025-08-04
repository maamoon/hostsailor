import { Shield, Zap, Clock, Headphones, Globe, Database } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "SSD storage and optimized servers ensure your website loads in milliseconds"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Safe",
      description: "Advanced security features and SSL certificates protect your data"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "99.9% Uptime",
      description: "Our reliable infrastructure guarantees maximum availability"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Expert technical support available around the clock"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global CDN",
      description: "Content delivery network for faster loading worldwide"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Daily Backups",
      description: "Automatic daily backups keep your data safe and recoverable"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose HostSailor?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need for a successful online presence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};