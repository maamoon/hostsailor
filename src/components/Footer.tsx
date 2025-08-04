import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Acceptable Use Policy</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Products</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-primary transition-colors">Dedicated Servers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cloud Hosting</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shared Hosting</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">WordPress Hosting</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">cPanel VPS</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">OpenVZ VPS</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">KVM VPS</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Storage VPS</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-primary transition-colors">Licenses</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">SSL Certificates</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Domain Registration</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">IP Addresses</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Announcement</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">VoIP Network</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AS-ONE</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Reg. Nr: RC751N/1502</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <div>
                  <div>Suite No: 1005, Churchill</div>
                  <div>Executive Tower, Business</div>
                  <div>Bay, Al Marsa St. Doha,</div>
                  <div>United Arab Emirates</div>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+971 7 242 1010</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>sales@hostsailor.com</span>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Payment Methods</h4>
            <div className="grid grid-cols-4 gap-2">
              {/* Payment icons - simplified representation */}
              <div className="w-10 h-6 bg-blue-600 rounded text-xs flex items-center justify-center">PayPal</div>
              <div className="w-10 h-6 bg-orange-500 rounded text-xs flex items-center justify-center">MC</div>
              <div className="w-10 h-6 bg-blue-700 rounded text-xs flex items-center justify-center">Visa</div>
              <div className="w-10 h-6 bg-purple-600 rounded text-xs flex items-center justify-center">Skrill</div>
              <div className="w-10 h-6 bg-gray-700 rounded text-xs flex items-center justify-center">BTC</div>
              <div className="w-10 h-6 bg-blue-500 rounded text-xs flex items-center justify-center">AE</div>
              <div className="w-10 h-6 bg-red-600 rounded text-xs flex items-center justify-center">WU</div>
              <div className="w-10 h-6 bg-green-600 rounded text-xs flex items-center justify-center">MG</div>
              <div className="w-10 h-6 bg-orange-600 rounded text-xs flex items-center justify-center">Bitcoin</div>
              <div className="w-10 h-6 bg-gray-600 rounded text-xs flex items-center justify-center">PP</div>
              <div className="w-10 h-6 bg-red-500 rounded text-xs flex items-center justify-center">UCP</div>
            </div>
            
            <div className="space-y-2 mt-6">
              <h5 className="font-semibold">Follow us on</h5>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
                <Youtube className="w-5 h-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-slate-700" />
      
      <div className="container py-6">
        <div className="text-center text-sm text-slate-400">
          <p>All Rights Reserved to HostSailor © {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;