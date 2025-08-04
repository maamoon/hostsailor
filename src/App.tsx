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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/hostsailor">
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
