import HomeHeader from "@/components/HomeHeader";
import HomeHero from "@/components/HomeHero";
import { PricingPlans } from "@/components/PricingPlans";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Newsletter } from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { useOrchardPage } from "@/hooks/useOrchardPage";

const Index = () => {
  const { data } = useOrchardPage("home")

  return (
    <div className="min-h-screen">
      <HomeHeader />
      {data?.HtmlBodyPart?.html && (
        <div
          className="prose mx-auto p-4"
          dangerouslySetInnerHTML={{
            __html: data.HtmlBodyPart.html as string,
          }}
        />
      )}
      <HomeHero />
      <Features />
      <PricingPlans />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
};

export default Index;
