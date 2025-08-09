import React from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, Zap, Shield, Clock, ArrowRight, TrendingUp, Building } from "lucide-react";

const VPSResellerProgram = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: t('vpsResellerProgram.plans.starter.name'),
      price: '$99',
      period: t('vpsResellerProgram.plans.period'),
      popular: false,
      specs: {
        vps: t('vpsResellerProgram.plans.starter.specs.vps'),
        storage: t('vpsResellerProgram.plans.starter.specs.storage'),
        bandwidth: t('vpsResellerProgram.plans.starter.specs.bandwidth'),
        support: t('vpsResellerProgram.plans.starter.specs.support')
      },
      features: t('vpsResellerProgram.plans.starter.features', { returnObjects: true }) as string[]
    },
    {
      name: t('vpsResellerProgram.plans.professional.name'),
      price: '$199',
      period: t('vpsResellerProgram.plans.period'),
      popular: true,
      specs: {
        vps: t('vpsResellerProgram.plans.professional.specs.vps'),
        storage: t('vpsResellerProgram.plans.professional.specs.storage'),
        bandwidth: t('vpsResellerProgram.plans.professional.specs.bandwidth'),
        support: t('vpsResellerProgram.plans.professional.specs.support')
      },
      features: t('vpsResellerProgram.plans.professional.features', { returnObjects: true }) as string[]
    },
    {
      name: t('vpsResellerProgram.plans.enterprise.name'),
      price: '$399',
      period: t('vpsResellerProgram.plans.period'),
      popular: false,
      specs: {
        vps: t('vpsResellerProgram.plans.enterprise.specs.vps'),
        storage: t('vpsResellerProgram.plans.enterprise.specs.storage'),
        bandwidth: t('vpsResellerProgram.plans.enterprise.specs.bandwidth'),
        support: t('vpsResellerProgram.plans.enterprise.specs.support')
      },
      features: t('vpsResellerProgram.plans.enterprise.features', { returnObjects: true }) as string[]
    }
  ];

  const features = [
    {
      icon: <Building className="h-6 w-6" />,
      title: t('vpsResellerProgram.featureSection.whiteLabel.title'),
      description: t('vpsResellerProgram.featureSection.whiteLabel.description')
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: t('vpsResellerProgram.featureSection.instantProvisioning.title'),
      description: t('vpsResellerProgram.featureSection.instantProvisioning.description')
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: t('vpsResellerProgram.featureSection.security.title'),
      description: t('vpsResellerProgram.featureSection.security.description')
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: t('vpsResellerProgram.featureSection.management.title'),
      description: t('vpsResellerProgram.featureSection.management.description')
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: t('vpsResellerProgram.featureSection.support.title'),
      description: t('vpsResellerProgram.featureSection.support.description')
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: t('vpsResellerProgram.featureSection.scalable.title'),
      description: t('vpsResellerProgram.featureSection.scalable.description')
    }
  ];

  const benefits = [
    {
      title: t('vpsResellerProgram.benefits.highProfit.title'),
      description: t('vpsResellerProgram.benefits.highProfit.description')
    },
    {
      title: t('vpsResellerProgram.benefits.noInfrastructure.title'),
      description: t('vpsResellerProgram.benefits.noInfrastructure.description')
    },
    {
      title: t('vpsResellerProgram.benefits.fullControl.title'),
      description: t('vpsResellerProgram.benefits.fullControl.description')
    },
    {
      title: t('vpsResellerProgram.benefits.brandRecognition.title'),
      description: t('vpsResellerProgram.benefits.brandRecognition.description')
    }
  ];

  const metrics = [
    { value: '40-60%', label: t('vpsResellerProgram.stats.profitMargin') },
    { value: '24h', label: t('vpsResellerProgram.stats.setupTime') },
    { value: '99.9%', label: t('vpsResellerProgram.stats.uptimeSla') },
    { value: '24/7', label: t('vpsResellerProgram.stats.support') }
  ];

  const metricsSection = t('vpsResellerProgram.metrics.items', { returnObjects: true }) as { label: string; value: string }[];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Badge variant="secondary" className="mb-4">
                {t('vpsResellerProgram.badge')}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t('vpsResellerProgram.heroTitle')}
              </h1>
              <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                {t('vpsResellerProgram.heroDescription')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  {t('vpsResellerProgram.buttons.getStarted')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  {t('vpsResellerProgram.buttons.viewPlans')}
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">{metric.value}</div>
                    <div className="text-sm text-gray-500">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/hostsailor/service-images/vps-reseller.svg"
                alt={t('vpsResellerProgram.badge')}
                className="w-80 h-60 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('vpsResellerProgram.plans.title')}
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              {t('vpsResellerProgram.plans.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-shadow ${plan.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600">
                    {t('vpsResellerProgram.plans.mostPopular')}
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-indigo-600">
                    {plan.price}
                    <span className="text-sm text-gray-500 font-normal">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{t('vpsResellerProgram.plans.labels.vpsInstances')}</span>
                      <span className="font-semibold">{plan.specs.vps}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{t('vpsResellerProgram.plans.labels.totalStorage')}</span>
                      <span className="font-semibold">{plan.specs.storage}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{t('vpsResellerProgram.plans.labels.totalBandwidth')}</span>
                      <span className="font-semibold">{plan.specs.bandwidth}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{t('vpsResellerProgram.plans.labels.supportLevel')}</span>
                      <span className="font-semibold">{plan.specs.support}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-indigo-600 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    className={`w-full ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {t('vpsResellerProgram.buttons.startReselling')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('vpsResellerProgram.featureSection.title')}
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              {t('vpsResellerProgram.featureSection.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('vpsResellerProgram.benefits.title')}
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              {t('vpsResellerProgram.benefits.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('vpsResellerProgram.metrics.title')}
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light tracking-wide">
              {t('vpsResellerProgram.metrics.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metricsSection.map((metric, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{metric.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-indigo-600">{metric.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('vpsResellerProgram.cta.title')}
          </h2>
          <p className="text-indigo-100 mb-8 text-base leading-relaxed font-light tracking-wide">
            {t('vpsResellerProgram.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              {t('vpsResellerProgram.buttons.getStarted')}
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-600">
              {t('vpsResellerProgram.cta.contactSales')}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VPSResellerProgram; 
