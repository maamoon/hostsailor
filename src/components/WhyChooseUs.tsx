import { CheckCircle } from "lucide-react";

export const WhyChooseUs = () => {
  const benefits = [
    "Enterprise-grade infrastructure",
    "Free website migration service",
    "Money-back guarantee",
    "Scalable hosting solutions",
    "Advanced security features",
    "One-click app installations"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Built for Performance, Designed for Success
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our hosting platform is engineered to deliver exceptional performance, 
              reliability, and security for websites of all sizes.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-primary rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="mb-6 opacity-90">
              Join over 50,000 websites already hosted on our platform. 
              Experience the difference today.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Setup Time:</span>
                <span className="font-semibold">Instant</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Migration:</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Support:</span>
                <span className="font-semibold">24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};