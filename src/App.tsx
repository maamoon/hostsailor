import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

// Main pages
import Index from "./pages/main/Index";
import Services from "./pages/main/Services";
import Dashboard from "./pages/main/Dashboard";
import NotFound from "./pages/main/NotFound";

// Auth pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

// Hosting pages
import SSDSharedHosting from "./pages/hosting/SSDSharedHosting";
import ResellerHosting from "./pages/hosting/ResellerHosting";

// VPS pages
import VPSHosting from "./pages/vps/VPSHosting";
import KVMVPSHosting from "./pages/vps/KVMVPSHosting";
import StorageKVMVPS from "./pages/vps/StorageKVMVPS";
import OpenVZVPSHDD from "./pages/vps/OpenVZVPSHDD";
import OpenVZVPSSSD from "./pages/vps/OpenVZVPSSSD";
import KVMVPSNVMe from "./pages/vps/KVMVPSNVMe";
import VPSResellerProgram from "./pages/vps/VPSResellerProgram";

// Dedicated pages
import DedicatedServers from "./pages/dedicated/DedicatedServers";
import SupermicroRomaniaServers from "./pages/dedicated/SupermicroRomaniaServers";
import HPNetherlandsServers from "./pages/dedicated/HPNetherlandsServers";

// Data Centers pages
import DataCenterLosAngeles from "./pages/datacenters/DataCenterLosAngeles";
import DataCenterNetherlands from "./pages/datacenters/DataCenterNetherlands";
import DataCenterRomania from "./pages/datacenters/DataCenterRomania";

// Services pages
import SSLCertificates from "./pages/services/SSLCertificates";
import DomainRegistration from "./pages/services/DomainRegistration";
import Colocation from "./pages/services/Colocation";
import VLANNetwork from "./pages/services/VLANNetwork";

// Tools pages
import ToolsHub from "./pages/tools/ToolsHub";
import NetworkStatus from "./pages/tools/NetworkStatus";
import LookingGlass from "./pages/tools/LookingGlass";
import IPAnnouncement from "./pages/tools/IPAnnouncement";

// Support pages
import KnowledgeBase from "./pages/support/KnowledgeBase";
import FAQs from "./pages/support/FAQs";
import Contact from "./pages/support/Contact";

// Company pages
import AboutUs from "./pages/company/AboutUs";
import OurCompany from "./pages/company/OurCompany";
import Blog from "./pages/company/Blog";

// Legal pages
import TermsOfService from "./pages/legal/TermsOfService";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import AcceptableUsePolicy from "./pages/legal/AcceptableUsePolicy";
import ServiceLevelAgreement from "./pages/legal/ServiceLevelAgreement";

// Programs pages
import AffiliateProgram from "./pages/programs/AffiliateProgram";
import ResellerProgram from "./pages/programs/ResellerProgram";
import BugBountyProgramme from "./pages/programs/BugBountyProgramme";

// Deals pages
import HotDeals from "./pages/deals/HotDeals";
import WebhostingCouponsOffers from "./pages/deals/WebhostingCouponsOffers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {import.meta.env.PROD ? (
        <HashRouter>
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/main/home" element={<Index />} />
            <Route path="/main/services" element={<Services />} />
            <Route path="/main/dashboard" element={<Dashboard />} />
            
            {/* Auth Routes */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="/auth/reset-password" element={<ResetPassword />} />
            
            {/* Hosting Routes */}
            <Route path="/hosting/ssd-shared-hosting" element={<SSDSharedHosting />} />
            <Route path="/hosting/reseller-hosting" element={<ResellerHosting />} />
            
            {/* VPS Routes */}
            <Route path="/vps/hosting" element={<VPSHosting />} />
            <Route path="/vps/kvm-vps" element={<KVMVPSHosting />} />
            <Route path="/vps/storage-kvm-vps" element={<StorageKVMVPS />} />
            <Route path="/vps/openvz-vps-hdd" element={<OpenVZVPSHDD />} />
            <Route path="/vps/openvz-vps-ssd" element={<OpenVZVPSSSD />} />
            <Route path="/vps/kvm-vps-nvme" element={<KVMVPSNVMe />} />
            <Route path="/vps/reseller-program" element={<VPSResellerProgram />} />
            
            {/* Dedicated Routes */}
            <Route path="/dedicated/servers" element={<DedicatedServers />} />
            <Route path="/dedicated/supermicro-romania" element={<SupermicroRomaniaServers />} />
            <Route path="/dedicated/hp-netherlands" element={<HPNetherlandsServers />} />
            
            {/* Data Centers Routes */}
            <Route path="/datacenters/los-angeles" element={<DataCenterLosAngeles />} />
            <Route path="/datacenters/netherlands" element={<DataCenterNetherlands />} />
            <Route path="/datacenters/romania" element={<DataCenterRomania />} />
            
            {/* Services Routes */}
            <Route path="/services/ssl-certificates" element={<SSLCertificates />} />
            <Route path="/services/domain-registration" element={<DomainRegistration />} />
            <Route path="/services/colocation" element={<Colocation />} />
            <Route path="/services/vlan-network" element={<VLANNetwork />} />
            
            {/* Tools Routes */}
            <Route path="/tools/hub" element={<ToolsHub />} />
            <Route path="/tools/network-status" element={<NetworkStatus />} />
            <Route path="/tools/looking-glass" element={<LookingGlass />} />
            <Route path="/tools/ip-announcement" element={<IPAnnouncement />} />
            
            {/* Support Routes */}
            <Route path="/support/knowledge-base" element={<KnowledgeBase />} />
            <Route path="/support/faqs" element={<FAQs />} />
            <Route path="/support/contact" element={<Contact />} />
            
            {/* Company Routes */}
            <Route path="/company/about-us" element={<AboutUs />} />
            <Route path="/company/our-company" element={<OurCompany />} />
            <Route path="/company/blog" element={<Blog />} />
            
            {/* Legal Routes */}
            <Route path="/legal/terms-of-service" element={<TermsOfService />} />
            <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/legal/acceptable-use-policy" element={<AcceptableUsePolicy />} />
            <Route path="/legal/service-level-agreement" element={<ServiceLevelAgreement />} />
            
            {/* Programs Routes */}
            <Route path="/programs/affiliate" element={<AffiliateProgram />} />
            <Route path="/programs/reseller" element={<ResellerProgram />} />
            <Route path="/programs/bug-bounty" element={<BugBountyProgramme />} />
            
            {/* Deals Routes */}
            <Route path="/deals/hot-deals" element={<HotDeals />} />
            <Route path="/deals/coupons-offers" element={<WebhostingCouponsOffers />} />
            
            {/* Legacy Routes for backward compatibility */}
            <Route path="/ssd-shared-hosting" element={<SSDSharedHosting />} />
            <Route path="/reseller-hosting" element={<ResellerHosting />} />
            <Route path="/dedicated-servers" element={<DedicatedServers />} />
            <Route path="/vps/hosting" element={<VPSHosting />} />
            <Route path="/ssl-certificates" element={<SSLCertificates />} />
            <Route path="/vlan-network" element={<VLANNetwork />} />
            <Route path="/our-company" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/affiliate-program" element={<AffiliateProgram />} />
            <Route path="/dedicated/supermicro-romania" element={<SupermicroRomaniaServers />} />
            <Route path="/dedicated/hp-netherlands" element={<HPNetherlandsServers />} />
            <Route path="/vps/kvm-vps" element={<KVMVPSHosting />} />
            <Route path="/vps/storage-kvm-vps" element={<StorageKVMVPS />} />
            <Route path="/services/domain-registration" element={<DomainRegistration />} />
            <Route path="/services/colocation" element={<Colocation />} />
            <Route path="/services/vlan-network" element={<VLANNetwork />} />
            <Route path="/deals/hot-deals" element={<HotDeals />} />
            <Route path="/tools/network-status" element={<NetworkStatus />} />
            <Route path="/tools/looking-glass" element={<LookingGlass />} />
            <Route path="/support/knowledge-base" element={<KnowledgeBase />} />
            <Route path="/support/faqs" element={<FAQs />} />
            <Route path="/tools/ip-announcement" element={<IPAnnouncement />} />
            <Route path="/programs/reseller" element={<ResellerProgram />} />
            <Route path="/programs/bug-bounty" element={<BugBountyProgramme />} />
            <Route path="/company/blog" element={<Blog />} />
            <Route path="/deals/coupons-offers" element={<WebhostingCouponsOffers />} />
            <Route path="/legal/terms-of-service" element={<TermsOfService />} />
            <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/legal/acceptable-use-policy" element={<AcceptableUsePolicy />} />
            <Route path="/legal/service-level-agreement" element={<ServiceLevelAgreement />} />
            <Route path="/sla" element={<ServiceLevelAgreement />} />
            <Route path="/datacenters/los-angeles" element={<DataCenterLosAngeles />} />
            <Route path="/datacenters/netherlands" element={<DataCenterNetherlands />} />
            <Route path="/datacenters/romania" element={<DataCenterRomania />} />
            <Route path="/datacenters/los-angeles" element={<DataCenterLosAngeles />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/main/home" element={<Index />} />
            <Route path="/main/services" element={<Services />} />
            <Route path="/main/dashboard" element={<Dashboard />} />
            
            {/* Auth Routes */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="/auth/reset-password" element={<ResetPassword />} />
            
            {/* Hosting Routes */}
            <Route path="/hosting/ssd-shared-hosting" element={<SSDSharedHosting />} />
            <Route path="/hosting/reseller-hosting" element={<ResellerHosting />} />
            
            {/* VPS Routes */}
            <Route path="/vps/hosting" element={<VPSHosting />} />
            <Route path="/vps/kvm-vps" element={<KVMVPSHosting />} />
            <Route path="/vps/storage-kvm-vps" element={<StorageKVMVPS />} />
            <Route path="/vps/openvz-vps-hdd" element={<OpenVZVPSHDD />} />
            <Route path="/vps/openvz-vps-ssd" element={<OpenVZVPSSSD />} />
            <Route path="/vps/kvm-vps-nvme" element={<KVMVPSNVMe />} />
            <Route path="/vps/reseller-program" element={<VPSResellerProgram />} />
            
            {/* Dedicated Routes */}
            <Route path="/dedicated/servers" element={<DedicatedServers />} />
            <Route path="/dedicated/supermicro-romania" element={<SupermicroRomaniaServers />} />
            <Route path="/dedicated/hp-netherlands" element={<HPNetherlandsServers />} />
            
            {/* Data Centers Routes */}
            <Route path="/datacenters/los-angeles" element={<DataCenterLosAngeles />} />
            <Route path="/datacenters/netherlands" element={<DataCenterNetherlands />} />
            <Route path="/datacenters/romania" element={<DataCenterRomania />} />
            
            {/* Services Routes */}
            <Route path="/services/ssl-certificates" element={<SSLCertificates />} />
            <Route path="/services/domain-registration" element={<DomainRegistration />} />
            <Route path="/services/colocation" element={<Colocation />} />
            <Route path="/services/vlan-network" element={<VLANNetwork />} />
            
            {/* Tools Routes */}
            <Route path="/tools/hub" element={<ToolsHub />} />
            <Route path="/tools/network-status" element={<NetworkStatus />} />
            <Route path="/tools/looking-glass" element={<LookingGlass />} />
            <Route path="/tools/ip-announcement" element={<IPAnnouncement />} />
            
            {/* Support Routes */}
            <Route path="/support/knowledge-base" element={<KnowledgeBase />} />
            <Route path="/support/faqs" element={<FAQs />} />
            <Route path="/support/contact" element={<Contact />} />
            
            {/* Company Routes */}
            <Route path="/company/about-us" element={<AboutUs />} />
            <Route path="/company/our-company" element={<OurCompany />} />
            <Route path="/company/blog" element={<Blog />} />
            
            {/* Legal Routes */}
            <Route path="/legal/terms-of-service" element={<TermsOfService />} />
            <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/legal/acceptable-use-policy" element={<AcceptableUsePolicy />} />
            <Route path="/legal/service-level-agreement" element={<ServiceLevelAgreement />} />
            
            {/* Programs Routes */}
            <Route path="/programs/affiliate" element={<AffiliateProgram />} />
            <Route path="/programs/reseller" element={<ResellerProgram />} />
            <Route path="/programs/bug-bounty" element={<BugBountyProgramme />} />
            
            {/* Deals Routes */}
            <Route path="/deals/hot-deals" element={<HotDeals />} />
            <Route path="/deals/coupons-offers" element={<WebhostingCouponsOffers />} />
            
            {/* Legacy Routes for backward compatibility */}
            <Route path="/ssd-shared-hosting" element={<SSDSharedHosting />} />
            <Route path="/reseller-hosting" element={<ResellerHosting />} />
            <Route path="/dedicated-servers" element={<DedicatedServers />} />
            <Route path="/vps/hosting" element={<VPSHosting />} />
            <Route path="/ssl-certificates" element={<SSLCertificates />} />
            <Route path="/vlan-network" element={<VLANNetwork />} />
            <Route path="/our-company" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/affiliate-program" element={<AffiliateProgram />} />
            <Route path="/dedicated/supermicro-romania" element={<SupermicroRomaniaServers />} />
            <Route path="/dedicated/hp-netherlands" element={<HPNetherlandsServers />} />
            <Route path="/vps/kvm-vps" element={<KVMVPSHosting />} />
            <Route path="/vps/storage-kvm-vps" element={<StorageKVMVPS />} />
            <Route path="/services/domain-registration" element={<DomainRegistration />} />
            <Route path="/services/colocation" element={<Colocation />} />
            <Route path="/services/vlan-network" element={<VLANNetwork />} />
            <Route path="/deals/hot-deals" element={<HotDeals />} />
            <Route path="/tools/network-status" element={<NetworkStatus />} />
            <Route path="/tools/looking-glass" element={<LookingGlass />} />
            <Route path="/support/knowledge-base" element={<KnowledgeBase />} />
            <Route path="/support/faqs" element={<FAQs />} />
            <Route path="/tools/ip-announcement" element={<IPAnnouncement />} />
            <Route path="/programs/reseller" element={<ResellerProgram />} />
            <Route path="/programs/bug-bounty" element={<BugBountyProgramme />} />
            <Route path="/company/blog" element={<Blog />} />
            <Route path="/deals/coupons-offers" element={<WebhostingCouponsOffers />} />
            <Route path="/legal/terms-of-service" element={<TermsOfService />} />
            <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/legal/acceptable-use-policy" element={<AcceptableUsePolicy />} />
            <Route path="/legal/service-level-agreement" element={<ServiceLevelAgreement />} />
            <Route path="/sla" element={<ServiceLevelAgreement />} />
            <Route path="/datacenters/los-angeles" element={<DataCenterLosAngeles />} />
            <Route path="/datacenters/netherlands" element={<DataCenterNetherlands />} />
            <Route path="/datacenters/romania" element={<DataCenterRomania />} />
            <Route path="/datacenters/los-angeles" element={<DataCenterLosAngeles />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
