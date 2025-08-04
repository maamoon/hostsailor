import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url('/src/assets/hosting-bg.jpg')` }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Premium Web Hosting
              <span className="block text-accent">Solutions</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Fast, reliable, and secure hosting services for your websites and applications. 
              Join thousands of satisfied customers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="xl" variant="hero">
                Get Started Now
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                View Plans
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>SSL Included</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroIllustration} 
              alt="Hosting Infrastructure" 
              className="w-full max-w-lg mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};