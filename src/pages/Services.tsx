import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Server, 
  Globe, 
  Shield, 
  Zap, 
  Check, 
  Star,
  ArrowRight,
  Database,
  HardDrive,
  Cpu,
  Wifi
} from "lucide-react";
import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";

const Services = () => {
  const [activeTab, setActiveTab] = useState("shared");

  const services = {
    shared: [
      {
        id: 1,
        name: "SSD Shared Hosting",
        price: "$2.99",
        period: "شهرياً",
        description: "استضافة مشتركة سريعة مع SSD",
        features: [
          "10 GB مساحة تخزين SSD",
          "نطاق واحد مجاني",
          "5 قواعد بيانات",
          "دعم فني 24/7",
          "شهادة SSL مجانية",
          "نسخ احتياطي يومي"
        ],
        popular: false
      },
      {
        id: 2,
        name: "Premium Shared Hosting",
        price: "$4.99",
        period: "شهرياً",
        description: "استضافة مشتركة متقدمة مع أداء محسن",
        features: [
          "25 GB مساحة تخزين SSD",
          "نطاقات غير محدودة",
          "قواعد بيانات غير محدودة",
          "دعم فني 24/7",
          "شهادة SSL مجانية",
          "نسخ احتياطي يومي",
          "CDN مجاني"
        ],
        popular: true
      },
      {
        id: 3,
        name: "Business Shared Hosting",
        price: "$8.99",
        period: "شهرياً",
        description: "استضافة مشتركة للمؤسسات",
        features: [
          "50 GB مساحة تخزين SSD",
          "نطاقات غير محدودة",
          "قواعد بيانات غير محدودة",
          "دعم فني 24/7",
          "شهادة SSL مجانية",
          "نسخ احتياطي يومي",
          "CDN مجاني",
          "حماية من DDoS"
        ],
        popular: false
      }
    ],
    vps: [
      {
        id: 1,
        name: "KVM VPS NVMe",
        price: "$9.99",
        period: "شهرياً",
        description: "VPS سريع مع NVMe SSD",
        specs: {
          cpu: "1 vCPU",
          ram: "1 GB RAM",
          storage: "20 GB NVMe SSD",
          bandwidth: "1 TB"
        },
        features: [
          "إدارة كاملة",
          "نسخ احتياطي مجاني",
          "DDoS Protection",
          "IPv4/IPv6"
        ],
        popular: false
      },
      {
        id: 2,
        name: "KVM VPS SSD",
        price: "$19.99",
        period: "شهرياً",
        description: "VPS متقدم مع SSD",
        specs: {
          cpu: "2 vCPU",
          ram: "4 GB RAM",
          storage: "50 GB SSD",
          bandwidth: "2 TB"
        },
        features: [
          "إدارة كاملة",
          "نسخ احتياطي مجاني",
          "DDoS Protection",
          "IPv4/IPv6",
          "مراقبة الأداء"
        ],
        popular: true
      },
      {
        id: 3,
        name: "KVM VPS Storage",
        price: "$29.99",
        period: "شهرياً",
        description: "VPS مع مساحة تخزين كبيرة",
        specs: {
          cpu: "4 vCPU",
          ram: "8 GB RAM",
          storage: "200 GB SSD",
          bandwidth: "5 TB"
        },
        features: [
          "إدارة كاملة",
          "نسخ احتياطي مجاني",
          "DDoS Protection",
          "IPv4/IPv6",
          "مراقبة الأداء",
          "دعم مخصص"
        ],
        popular: false
      }
    ],
    dedicated: [
      {
        id: 1,
        name: "Supermicro Dedicated Server",
        price: "$99.99",
        period: "شهرياً",
        description: "خادم مخصص Supermicro في رومانيا",
        specs: {
          cpu: "Intel Xeon E3-1230",
          ram: "16 GB DDR4",
          storage: "2x 1TB HDD",
          bandwidth: "10 TB"
        },
        features: [
          "إدارة كاملة",
          "نسخ احتياطي مجاني",
          "DDoS Protection",
          "IPv4/IPv6",
          "مراقبة 24/7"
        ],
        popular: false
      },
      {
        id: 2,
        name: "HP Dedicated Server",
        price: "$149.99",
        period: "شهرياً",
        description: "خادم مخصص HP في هولندا",
        specs: {
          cpu: "Intel Xeon E5-2620",
          ram: "32 GB DDR4",
          storage: "2x 2TB HDD",
          bandwidth: "20 TB"
        },
        features: [
          "إدارة كاملة",
          "نسخ احتياطي مجاني",
          "DDoS Protection",
          "IPv4/IPv6",
          "مراقبة 24/7",
          "دعم مخصص"
        ],
        popular: true
      }
    ]
  };

  const renderSharedHosting = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.shared.map((plan) => (
        <Card key={plan.id} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
          {plan.popular && (
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
              الأكثر شعبية
            </Badge>
          )}
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center">
              <Server className="h-5 w-5 mr-2" />
              {plan.name}
            </CardTitle>
            <CardDescription>{plan.description}</CardDescription>
            <div className="mt-4">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-gray-600">/{plan.period}</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full">
              اختيار الخطة
              <ArrowRight className="h-4 w-4 mr-2" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderVPSHosting = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.vps.map((plan) => (
        <Card key={plan.id} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
          {plan.popular && (
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
              الأكثر شعبية
            </Badge>
          )}
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center">
              <Zap className="h-5 w-5 mr-2" />
              {plan.name}
            </CardTitle>
            <CardDescription>{plan.description}</CardDescription>
            <div className="mt-4">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-gray-600">/{plan.period}</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Cpu className="h-4 w-4 text-blue-500 mr-2" />
                <span className="text-sm">{plan.specs.cpu}</span>
              </div>
              <div className="flex items-center">
                <Database className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">{plan.specs.ram}</span>
              </div>
              <div className="flex items-center">
                <HardDrive className="h-4 w-4 text-purple-500 mr-2" />
                <span className="text-sm">{plan.specs.storage}</span>
              </div>
              <div className="flex items-center">
                <Wifi className="h-4 w-4 text-orange-500 mr-2" />
                <span className="text-sm">{plan.specs.bandwidth}</span>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full">
              اختيار الخطة
              <ArrowRight className="h-4 w-4 mr-2" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderDedicatedHosting = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.dedicated.map((plan) => (
        <Card key={plan.id} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
          {plan.popular && (
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
              الأكثر شعبية
            </Badge>
          )}
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center">
              <Shield className="h-5 w-5 mr-2" />
              {plan.name}
            </CardTitle>
            <CardDescription>{plan.description}</CardDescription>
            <div className="mt-4">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-gray-600">/{plan.period}</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Cpu className="h-4 w-4 text-blue-500 mr-2" />
                <span className="text-sm">{plan.specs.cpu}</span>
              </div>
              <div className="flex items-center">
                <Database className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">{plan.specs.ram}</span>
              </div>
              <div className="flex items-center">
                <HardDrive className="h-4 w-4 text-purple-500 mr-2" />
                <span className="text-sm">{plan.specs.storage}</span>
              </div>
              <div className="flex items-center">
                <Wifi className="h-4 w-4 text-orange-500 mr-2" />
                <span className="text-sm">{plan.specs.bandwidth}</span>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full">
              اختيار الخطة
              <ArrowRight className="h-4 w-4 mr-2" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <HomeHeader />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">خدمات الاستضافة المتاحة</h1>
          <p className="text-sm text-gray-500 max-w-3xl mx-auto font-light tracking-wide">
            اختر من بين مجموعة واسعة من خدمات الاستضافة المصممة لتناسب احتياجاتك
          </p>
        </div>

        {/* Services Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="shared">الاستضافة المشتركة</TabsTrigger>
            <TabsTrigger value="vps">VPS</TabsTrigger>
            <TabsTrigger value="dedicated">الخوادم المخصصة</TabsTrigger>
          </TabsList>

          <TabsContent value="shared" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">الاستضافة المشتركة</h2>
              <p className="text-gray-600">حلول استضافة مشتركة اقتصادية ومناسبة للمواقع الصغيرة والمتوسطة</p>
            </div>
            {renderSharedHosting()}
          </TabsContent>

          <TabsContent value="vps" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">VPS Hosting</h2>
              <p className="text-gray-600">خوادم افتراضية خاصة مع أداء عالي ومرونة في الإدارة</p>
            </div>
            {renderVPSHosting()}
          </TabsContent>

          <TabsContent value="dedicated" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">الخوادم المخصصة</h2>
              <p className="text-gray-600">خوادم مخصصة بالكامل للأداء الأقصى والتحكم الكامل</p>
            </div>
            {renderDedicatedHosting()}
          </TabsContent>
        </Tabs>

        {/* Features Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">لماذا تختار HostSailor؟</h2>
            <p className="text-gray-600">نقدم أفضل الخدمات مع ضمان الجودة والأداء</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">أداء عالي</h3>
                <p className="text-sm text-gray-600">خوادم سريعة مع SSD ومراقبة مستمرة للأداء</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">أمان متقدم</h3>
                <p className="text-sm text-gray-600">حماية من DDoS وشهادات SSL مجانية</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">دعم فني 24/7</h3>
                <p className="text-sm text-gray-600">فريق دعم متخصص متاح على مدار الساعة</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">ضمان الجودة</h3>
                <p className="text-sm text-gray-600">ضمان 99.9% للوقت المتاح واسترداد الأموال</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services; 