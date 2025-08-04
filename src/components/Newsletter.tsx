import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="container">
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Text */}
              <div className="text-white space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Subscribe to Stay up to date with News & Discount offers
                </h3>
                <p className="text-slate-300">
                  Get the latest updates on new features, special promotions, and hosting tips delivered straight to your inbox.
                </p>
              </div>

              {/* Right side - Newsletter signup and illustration */}
              <div className="space-y-6">
                {/* Email signup form */}
                <div className="flex gap-3">
                  <Input 
                    type="email" 
                    placeholder="Your email address" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 flex-1"
                  />
                  <Button className="bg-primary hover:bg-primary-hover px-6">
                    Subscribe Now
                  </Button>
                </div>

                {/* Illustration */}
                <div className="relative">
                  <div className="bg-white/10 rounded-lg p-6 flex items-center justify-center min-h-[200px]">
                    <div className="text-center text-white/80">
                      <Mail className="w-16 h-16 mx-auto mb-4 text-primary" />
                      <div className="text-sm">
                        Join thousands of satisfied customers
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500 rounded-lg opacity-80"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-primary rounded opacity-80"></div>
                  <div className="absolute top-1/2 left-8 w-4 h-4 bg-green-500 rounded-full opacity-60"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;