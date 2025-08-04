import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Updated with HostSailor
        </h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Get the latest hosting tips, industry news, and exclusive offers delivered to your inbox
        </p>
        
        <div className="max-w-md mx-auto flex gap-4">
          <Input 
            placeholder="Enter your email" 
            className="bg-white text-foreground border-0"
          />
          <Button variant="secondary" className="whitespace-nowrap">
            Subscribe
          </Button>
        </div>
        
        <p className="text-sm opacity-75 mt-4">
          No spam, unsubscribe at any time
        </p>
      </div>
    </section>
  );
};