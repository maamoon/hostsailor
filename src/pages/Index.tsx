import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PricingPlans } from "@/components/PricingPlans";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <PricingPlans />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
