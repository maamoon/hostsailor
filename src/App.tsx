import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Services from "./pages/Services";
import SSDSharedHosting from "./pages/SSDSharedHosting";
import ResellerHosting from "./pages/ResellerHosting";
import DedicatedServers from "./pages/DedicatedServers";
import VPSHosting from "./pages/VPSHosting";
import SSLCertificates from "./pages/SSLCertificates";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import AffiliateProgram from "./pages/AffiliateProgram";
import SupermicroRomaniaServers from "./pages/SupermicroRomaniaServers";
import HPNetherlandsServers from "./pages/HPNetherlandsServers";
import KVMVPSHosting from "./pages/KVMVPSHosting";
import StorageKVMVPS from "./pages/StorageKVMVPS";
import DomainRegistration from "./pages/DomainRegistration";
import OpenVZVPSHDD from "./pages/OpenVZVPSHDD";
import OpenVZVPSSSD from "./pages/OpenVZVPSSSD";
import KVMVPSNVMe from "./pages/KVMVPSNVMe";
import Colocation from "./pages/Colocation";
import HotDeals from "./pages/HotDeals";
import VPSResellerProgram from "./pages/VPSResellerProgram";
import NetworkStatus from "./pages/NetworkStatus";
import LookingGlass from "./pages/LookingGlass";
import KnowledgeBase from "./pages/KnowledgeBase";
import FAQs from "./pages/FAQs";
import IPAnnouncement from "./pages/IPAnnouncement";
import VLANNetwork from "./pages/VLANNetwork";
import NotFound from "./pages/NotFound";
import ResellerProgram from "./pages/ResellerProgram";
import BugBountyProgramme from "./pages/BugBountyProgramme";
import OurCompany from "./pages/OurCompany";
import Blog from "./pages/Blog";
import WebhostingCouponsOffers from "./pages/WebhostingCouponsOffers";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AcceptableUsePolicy from "./pages/AcceptableUsePolicy";
import ServiceLevelAgreement from "./pages/ServiceLevelAgreement";
import DataCenterLosAngeles from "./pages/DataCenterLosAngeles";
import DataCenterNetherlands from "./pages/DataCenterNetherlands";
import DataCenterRomania from "./pages/DataCenterRomania";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ssd-shared-hosting" element={<SSDSharedHosting />} />
          <Route path="/reseller-hosting" element={<ResellerHosting />} />
          <Route path="/dedicated-servers" element={<DedicatedServers />} />
          <Route path="/vps-hosting" element={<VPSHosting />} />
          <Route path="/ssl-certificates" element={<SSLCertificates />} />
          <Route path="/our-company" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/affiliate-program" element={<AffiliateProgram />} />
          <Route path="/dedicated-servers/supermicro-romania-dedicated-servers" element={<SupermicroRomaniaServers />} />
          <Route path="/dedicated-servers/hp-netherlands-dedicated-servers" element={<HPNetherlandsServers />} />
          <Route path="/vps-hosting/kvm-vps" element={<KVMVPSHosting />} />
          <Route path="/vps-hosting/storage-kvm-vps" element={<StorageKVMVPS />} />
          <Route path="/domain-registration" element={<DomainRegistration />} />
          <Route path="/openvz-vps-hdd" element={<OpenVZVPSHDD />} />
          <Route path="/openvz-vps-ssd" element={<OpenVZVPSSSD />} />
          <Route path="/kvm-vps-nvme" element={<KVMVPSNVMe />} />
          <Route path="/colocation" element={<Colocation />} />
          <Route path="/hot-deals" element={<HotDeals />} />
          <Route path="/vps-reseller-program" element={<VPSResellerProgram />} />
          <Route path="/network-status" element={<NetworkStatus />} />
          <Route path="/looking-glass" element={<LookingGlass />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/ip-announcement" element={<IPAnnouncement />} />
          <Route path="/vlan-network" element={<VLANNetwork />} />
          <Route path="/reseller-program" element={<ResellerProgram />} />
          <Route path="/bug-bounty-programme" element={<BugBountyProgramme />} />
          <Route path="/our-company" element={<OurCompany />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/webhosting-coupons-offers" element={<WebhostingCouponsOffers />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/acceptable-use-policy" element={<AcceptableUsePolicy />} />
          <Route path="/service-level-agreement" element={<ServiceLevelAgreement />} />
          <Route path="/sla" element={<ServiceLevelAgreement />} />
          <Route path="/data-center/los-angeles" element={<DataCenterLosAngeles />} />
          <Route path="/data-center/netherlands" element={<DataCenterNetherlands />} />
          <Route path="/data-center/romania" element={<DataCenterRomania />} />
          <Route path="/data-centers-in-lax-los-angeles" element={<DataCenterLosAngeles />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
