import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Server, MapPin, Shield, Zap, Wifi, Clock, Users, Globe, Building, CheckCircle } from "lucide-react";

const DataCenterRomania = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Building className="h-16 w-16 text-green-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              مركز البيانات - رومانيا
            </h1>
            <p className="text-xl text-green-100 mb-8">
              البوابة الشرقية لأوروبا للخدمات السحابية والاستضافة المتقدمة
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm">
                <MapPin className="h-4 w-4 mr-2" />
                بوخارست، رومانيا
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Zap className="h-4 w-4 mr-2" />
                Tier III معتمد
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-green-600" />
                نظرة عامة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                يقع مركز البيانات في رومانيا في موقع استراتيجي في شرق أوروبا، مما يجعله الموقع المثالي 
                للعملاء الذين يبحثون عن أداء عالي وانخفاض في زمن الاستجابة للأسواق الأوروبية الشرقية.
              </p>
              <p className="text-gray-700 leading-relaxed">
                تم تصميم المركز وفقاً لأعلى معايير الصناعة مع ضمان 99.99% من وقت التشغيل، 
                وتقنيات الأمان المتقدمة، والبنية التحتية المزدوجة للطاقة والتبريد.
              </p>
            </CardContent>
          </Card>

          {/* Location Benefits */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-6 w-6 text-green-600" />
                مزايا الموقع
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">الوصول الأوروبي الشرقي:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>موقع استراتيجي في شرق أوروبا</li>
                    <li>وصول سريع لأوروبا الشرقية</li>
                    <li>اتصال مباشر بآسيا الوسطى</li>
                    <li>شبكة ألياف ضوئية متقدمة</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">البنية التحتية:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>مركز تجاري رئيسي</li>
                    <li>بنية تحتية للطاقة موثوقة</li>
                    <li>اتصالات إنترنت متعددة</li>
                    <li>خدمات دعم محلية</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Infrastructure */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-6 w-6 text-purple-600" />
                البنية التحتية
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">60,000</div>
                  <div className="text-sm text-green-700">متر مربع</div>
                  <div className="text-xs text-green-600 mt-1">مساحة المركز</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">2N</div>
                  <div className="text-sm text-blue-700">نظام الطاقة</div>
                  <div className="text-xs text-blue-600 mt-1">مزدوج ومتاح</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">N+1</div>
                  <div className="text-sm text-purple-700">نظام التبريد</div>
                  <div className="text-xs text-purple-600 mt-1">مضاعف ومتاح</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">المعايير والاعتمادات:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">Tier III معتمد</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">ISO 27001 للأمان</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">SOC 2 Type II</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">PCI DSS متوافق</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">GDPR متوافق</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">ISO 14001 البيئة</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Power & Cooling */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-yellow-600" />
                الطاقة والتبريد
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">نظام الطاقة:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>مولدات ديزل احتياطية متعددة</li>
                    <li>أنظمة UPS متقدمة</li>
                    <li>توزيع طاقة مزدوج</li>
                    <li>مراقبة مستمرة للطاقة</li>
                    <li>صيانة دورية للمعدات</li>
                    <li>طاقة خضراء متجددة</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">نظام التبريد:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>وحدات تبريد مزدوجة</li>
                    <li>تحكم في درجة الحرارة والرطوبة</li>
                    <li>مراقبة بيئية مستمرة</li>
                    <li>صيانة وقائية منتظمة</li>
                    <li>أنظمة إنذار متقدمة</li>
                    <li>تبريد طبيعي موفر للطاقة</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">الاستدامة:</h4>
                <p className="text-yellow-700">
                  نلتزم بالاستدامة البيئية من خلال استخدام الطاقة المتجددة وتقنيات التبريد الموفرة للطاقة، 
                  مما يساعد في تقليل البصمة الكربونية.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Network */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wifi className="h-6 w-6 text-blue-600" />
                الشبكة والاتصالات
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">12+</div>
                  <div className="text-sm text-blue-700">مزودي الإنترنت</div>
                  <div className="text-xs text-blue-600 mt-1">اتصال مزدوج</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">150 Gbps</div>
                  <div className="text-sm text-green-700">سعة الشبكة</div>
                  <div className="text-xs text-green-600 mt-1">إجمالي السعة</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">&lt; 3ms</div>
                  <div className="text-sm text-purple-700">زمن الاستجابة</div>
                  <div className="text-xs text-purple-600 mt-1">لأوروبا الشرقية</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">مزودو الشبكة:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">RCS & RDS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">Telekom Romania</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">Orange Romania</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">Telia Carrier</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">Cogent Communications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">Level 3 Communications</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-red-600" />
                الأمان والحماية
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">الأمان المادي:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>مراقبة فيديو 24/7</li>
                    <li>أنظمة تحكم في الوصول</li>
                    <li>حراس أمن مدربين</li>
                    <li>أقفال بيومترية</li>
                    <li>أنظمة إنذار متقدمة</li>
                    <li>حماية من الكوارث الطبيعية</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">الأمان السيبراني:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>جدران حماية متعددة الطبقات</li>
                    <li>كشف التسلل والمنع</li>
                    <li>مراقبة الشبكة المستمرة</li>
                    <li>تشفير البيانات</li>
                    <li>اختبارات الاختراق الدورية</li>
                    <li>امتثال GDPR للأمان</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">حماية متعددة المستويات:</h4>
                <p className="text-red-700">
                  نطبق استراتيجية أمان شاملة تشمل الحماية المادية والسيبرانية، 
                  مع مراقبة مستمرة وتحديثات دورية لضمان أعلى مستويات الأمان.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Support */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-blue-600" />
                الدعم والخدمات
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">الدعم المحلي:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>فريق دعم فني محلي</li>
                    <li>مهندسون متخصصون</li>
                    <li>دعم 24/7/365</li>
                    <li>استجابة سريعة للطوارئ</li>
                    <li>صيانة وقائية مجدولة</li>
                    <li>دعم متعدد اللغات</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">الخدمات الإضافية:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>إدارة الخوادم</li>
                    <li>خدمات النسخ الاحتياطي</li>
                    <li>مراقبة الأداء</li>
                    <li>خدمات الأمان</li>
                    <li>استشارات تقنية</li>
                    <li>خدمات الامتثال القانوني</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">وقت الاستجابة:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">15 دقيقة</div>
                    <div className="text-sm text-blue-700">الطوارئ</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">1 ساعة</div>
                    <div className="text-sm text-blue-700">مشاكل الخدمة</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">4 ساعات</div>
                    <div className="text-sm text-blue-700">الاستفسارات العامة</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-green-600" />
                معلومات الاتصال
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                للاستفسارات حول مركز البيانات في رومانيا أو لزيارة المركز:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">الدعم الفني:</h4>
                  <p className="text-blue-600">support@hostsailor.com</p>
                  <p className="text-gray-600 text-sm">للمساعدة التقنية</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">المبيعات:</h4>
                  <p className="text-blue-600">sales@hostsailor.com</p>
                  <p className="text-gray-600 text-sm">للاستفسارات التجارية</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>العنوان:</strong> [عنوان مركز البيانات]، بوخارست، رومانيا
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>ملاحظة:</strong> يرجى الاتصال مسبقاً لترتيب زيارة المركز.
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default DataCenterRomania; 