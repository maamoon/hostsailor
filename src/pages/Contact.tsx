import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, Globe, Building } from "lucide-react";
import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";

const Contact = () => {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: t('contact.phoneSupport'),
      description: t('contact.phoneSupportDesc'),
      contact: "+164 6 518 9099",
      availability: t('contact.support247')
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: t('contact.emailSupport'),
      description: t('contact.emailSupportDesc'),
      contact: "sales@hostsailor.com",
      availability: "Response within 2 hours"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: t('contact.liveChat'),
      description: t('contact.liveChatDesc'),
      contact: t('contact.startChat'),
      availability: t('contact.support247')
    }
  ];

  const officeInfo = [
    {
      icon: <Building className="h-6 w-6" />,
      title: t('contact.headOffice'),
      address: "Suite No: 1605, Churchill Executive Tower, Burj Khalifa Area, Dubai P.O. Box 98362, United Arab Emirates",
      phone: "+164 6 518 9099",
      email: "sales@hostsailor.com"
    }
  ];

  const supportHours = [
    {
      day: t('contact.mondayFriday'),
      hours: t('contact.support247')
    },
    {
      day: t('contact.saturdaySunday'),
      hours: t('contact.support247')
    },
    {
      day: t('contact.holidays'),
      hours: t('contact.support247')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <HomeHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('/contact-bg.svg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-gray-600 opacity-5"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            <MessageSquare className="h-4 w-4 mr-2" />
            {t('contact.title')}
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('contact.heroTitle')}
          </h1>
          
          <p className="text-sm text-gray-500 mb-8 max-w-3xl mx-auto font-light tracking-wide">
            {t('contact.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('contact.howCanWeHelp')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('contact.howCanWeHelpSubtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      {method.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-semibold text-blue-600 mb-2">
                    {method.contact}
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    {method.availability}
                  </div>
                  <Button className="w-full">
                    {method.title === t('contact.liveChat') ? t('contact.startChat') : t('contact.contactNow')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('contact.sendMessage')}
              </h2>
              <p className="text-gray-600 mb-8">
                {t('contact.sendMessageSubtitle')}
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.firstName')}
                    </label>
                    <Input placeholder={t('contact.firstNamePlaceholder')} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.lastName')}
                    </label>
                    <Input placeholder={t('contact.lastNamePlaceholder')} />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.emailAddress')}
                  </label>
                  <Input type="email" placeholder={t('contact.emailAddressPlaceholder')} />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.phoneNumber')}
                  </label>
                  <Input placeholder={t('contact.phoneNumberPlaceholder')} />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.subject')}
                  </label>
                  <Input placeholder={t('contact.subjectPlaceholder')} />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.message')}
                  </label>
                  <Textarea 
                    placeholder={t('contact.messagePlaceholder')}
                    rows={5}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  {t('contact.sendMessageButton')}
                </Button>
              </form>
            </div>
            
            {/* Office Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('contact.officeInformation')}
              </h2>
              
              {officeInfo.map((office, index) => (
                <Card key={index} className="mb-8">
                  <CardHeader>
                    <div className="flex items-center">
                      <div className="p-2 bg-blue-100 rounded-full mr-3">
                        {office.icon}
                      </div>
                      <CardTitle>{office.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">{t('contact.address')}</p>
                        <p className="text-gray-600 text-sm">{office.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">{t('contact.phone')}</p>
                        <p className="text-gray-600 text-sm">{office.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">{t('contact.email')}</p>
                        <p className="text-gray-600 text-sm">{office.email}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {/* Support Hours */}
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <div className="p-2 bg-green-100 rounded-full mr-3">
                      <Clock className="h-5 w-5 text-green-600" />
                    </div>
                    <CardTitle>{t('contact.supportHours')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {supportHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{schedule.day}</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {schedule.hours}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('contact.faqTitle')}
            </h2>
            <p className="text-gray-600">
              {t('contact.faqSubtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t('contact.responseTime')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('contact.responseTimeAnswer')}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t('contact.whatInformation')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('contact.whatInformationAnswer')}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t('contact.technicalSupport')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('contact.technicalSupportAnswer')}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t('contact.scheduleCall')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('contact.scheduleCallAnswer')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact; 
