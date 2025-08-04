import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Server, Zap, Shield } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary to-primary-hover overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItYTEyIDEyIDAgMCAwIDI0IDB2LTJhMTIgMTIgMCAwIDAtMjQgMHptMC0yYTEwIDEwIDAgMCAxIDIwIDB2MmExMCAxMCAwIDAgMS0yMCAwdi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="container relative z-10 pt-20 pb-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                KVM VPS NVMe
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Maximize the performance of your virtual servers with ultra-fast NVMe storage and full KVM virtualization.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-sm">No Hidden Fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-sm">Stable Pricing for 5+ Years</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-sm">Trusted by Thousands</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-sm">99.9% Uptime Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-sm">24/7 Rock-Solid Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-sm">Free SSL & Security Updates</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" variant="hero" className="bg-white text-primary hover:bg-white/90">
                Get Started
              </Button>
              <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                View All Plans
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8 border-t border-white/20">
              <div>
                <div className="text-2xl font-bold">99%</div>
                <div className="text-sm text-white/80">Speed Benchmark</div>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div>
                <div className="text-2xl font-bold">$4.99</div>
                <div className="text-sm text-white/80">Starting Price</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <img 
                src={heroIllustration} 
                alt="Professional hosting illustration" 
                className="w-full h-auto rounded-lg"
              />
            </Card>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">Trusted Worldwide</div>
                  <div className="text-gray-600">SSL certificates included</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">Ultra Fast</div>
                  <div className="text-gray-600">NVMe SSD Storage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;