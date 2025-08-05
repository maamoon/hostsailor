import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Shield, Cloud } from "lucide-react";

const HomeHero = () => {
  const { t } = useTranslation();

  const serviceCards = [
    {
      icon: <Server className="h-8 w-8 text-blue-600" />,
      title: t('home.dedicatedServerTitle'),
      description: t('home.dedicatedServerDesc'),
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: t('home.vpsHostingTitle'),
      description: t('home.vpsHostingDesc'),
    },
    {
      icon: <Cloud className="h-8 w-8 text-blue-600" />,
      title: t('home.ssdSharedTitle'),
      description: t('home.ssdSharedDesc'),
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/src/assets/hosting-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center text-white mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {t('home.heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
              {t('home.heroSubtitle')}
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {serviceCards.map((card, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {card.description}
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white group">
                    {t('home.learnMore')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero; 
