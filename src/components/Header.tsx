import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-xl font-bold text-primary">HostSailor</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Hosting</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">VPS</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Dedicated</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Domains</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Support</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">Login</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
};