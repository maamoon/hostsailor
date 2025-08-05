const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
          <img src="/hostsailor/logo.svg" alt="HOSTSAILOR" className="h-8 w-auto" />
        </div>
            <p className="text-white/80 mb-4">
              Premium web hosting solutions for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/hostsailor" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Twitter</a>
              <a href="https://www.facebook.com/HostSailor" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Facebook</a>
              <a href="https://www.instagram.com/hostsailor/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Instagram</a>
              <a href="https://www.linkedin.com/company/hostsailor" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Hosting</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Shared Hosting</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">VPS Hosting</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Dedicated Servers</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Cloud Hosting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">System Status</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 HostSailor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;