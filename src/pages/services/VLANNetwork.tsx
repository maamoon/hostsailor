import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Globe, Shield, Zap, Server, Network, Users, Lock, Bitcoin, ArrowRight, HelpCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const VLANNetwork = () => {
  const { t } = useTranslation();

  const setupSteps = [
    {
      step: t('vlanNetwork.step1'),
      title: t('vlanNetwork.step1Title'),
      description: t('vlanNetwork.step1Description')
    },
    {
      step: t('vlanNetwork.step2'), 
      title: t('vlanNetwork.step2Title'),
      description: t('vlanNetwork.step2Description')
    },
    {
      step: t('vlanNetwork.step3'),
      title: t('vlanNetwork.step3Title'),
      description: t('vlanNetwork.step3Description')
    }
  ];

  const faqs = [
    {
      question: t('vlanNetwork.faq1Question'),
      answer: t('vlanNetwork.faq1Answer')
    },
    {
      question: t('vlanNetwork.faq2Question'),
      answer: t('vlanNetwork.faq2Answer')
    },
    {
      question: t('vlanNetwork.faq3Question'),
      answer: t('vlanNetwork.faq3Answer')
    },
    {
      question: t('vlanNetwork.faq4Question'),
      answer: t('vlanNetwork.faq4Answer')
    },
    {
      question: t('vlanNetwork.faq5Question'),
      answer: t('vlanNetwork.faq5Answer')
    },
    {
      question: t('vlanNetwork.faq6Question'),
      answer: t('vlanNetwork.faq6Answer')
    },
    {
      question: t('vlanNetwork.faq7Question'),
      answer: t('vlanNetwork.faq7Answer')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <Network className="h-4 w-4 mr-2" />
              {t('vlanNetwork.networkServices')}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('vlanNetwork.pageTitle')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('vlanNetwork.heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                {t('vlanNetwork.getStarted')}
              </Button>
              <Button size="lg" variant="outline">
                {t('vlanNetwork.learnMore')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Steps Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('vlanNetwork.setupTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('vlanNetwork.setupSubtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {setupSteps.map((step, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-xl text-blue-600">{step.step}</CardTitle>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Secure Private Networking Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('vlanNetwork.secureNetworkingTitle')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('vlanNetwork.secureNetworkingSubtitle')}
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-blue-900 mb-3">{t('vlanNetwork.howPvlanWorks')}</h3>
                <p className="text-gray-700">
                  {t('vlanNetwork.howPvlanWorksDescription')}
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-3">{t('vlanNetwork.perfectUseCase')}</h3>
                <p className="text-gray-700">
                  {t('vlanNetwork.perfectUseCaseDescription')}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-blue-100">{t('vlanNetwork.statsPrivate')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-blue-100">{t('vlanNetwork.statsSupport')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">3</div>
                    <div className="text-blue-100">{t('vlanNetwork.statsLocations')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">1 Day</div>
                    <div className="text-blue-100">{t('vlanNetwork.statsSetup')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Get Started Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('vlanNetwork.readyToStartTitle')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('vlanNetwork.readyToStartSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                {t('vlanNetwork.createAccount')}
              </Button>
              <Button size="lg" variant="outline">
                {t('vlanNetwork.openSupportTicket')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cryptocurrency Payments Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Bitcoin className="h-16 w-16 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('vlanNetwork.cryptoPaymentsTitle')}
            </h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              {t('vlanNetwork.cryptoPaymentsSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                {t('vlanNetwork.payWithCrypto')}
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-600">
                {t('vlanNetwork.learnMore')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('vlanNetwork.faqsTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('vlanNetwork.faqsSubtitle')}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-blue-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('vlanNetwork.ctaTitle')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('vlanNetwork.ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              {t('vlanNetwork.startNow')}
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              {t('vlanNetwork.contactUs')}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VLANNetwork; 