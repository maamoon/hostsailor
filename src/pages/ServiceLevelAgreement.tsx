import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, Clock, Server, Users, CheckCircle, AlertTriangle, Percent, Zap, Headphones, Mail, Phone } from "lucide-react";

const ServiceLevelAgreement = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Shield className="h-16 w-16 text-green-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              اتفاقية مستوى الخدمة (SLA)
            </h1>
            <p className="text-xl text-green-100 mb-8">
              ضمانات واضحة لوقت التشغيل والأداء والدعم الفني
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm">
                <Clock className="h-4 w-4 mr-2" />
                آخر تحديث: ديسمبر 2024
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Percent className="h-4 w-4 mr-2" />
                99.9% ضمان وقت التشغيل
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-green-600" />
                مقدمة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                اتفاقية مستوى الخدمة (SLA) هذه تحدد الالتزامات والضمانات التي نقدمها لعملائنا 
                فيما يتعلق بوقت التشغيل والأداء والدعم الفني لخدماتنا.
              </p>
              <p className="text-gray-700 leading-relaxed">
                نحن نلتزم بتوفير خدمة عالية الجودة وموثوقة، وفي حالة عدم تحقيق المستويات المتفق عليها، 
                سنقدم تعويضات مناسبة وفقاً لهذه الاتفاقية.
              </p>
            </CardContent>
          </Card>

          {/* Uptime Guarantee */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Percent className="h-6 w-6 text-blue-600" />
                ضمان وقت التشغيل
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                  <div className="text-lg text-blue-700">ضمان وقت التشغيل الشهري</div>
                </div>
                <p className="text-blue-800 text-center">
                  نضمن أن خدماتنا ستكون متاحة 99.9% من الوقت شهرياً. 
                  هذا يعني أقل من 43 دقيقة من التوقف غير المخطط له شهرياً.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">99.9%</div>
                  <div className="text-sm text-green-700">الضمان الأساسي</div>
                  <div className="text-xs text-green-600 mt-1">جميع الخدمات</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">99.95%</div>
                  <div className="text-sm text-blue-700">الضمان المميز</div>
                  <div className="text-xs text-blue-600 mt-1">الخوادم المخصصة</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">99.99%</div>
                  <div className="text-sm text-purple-700">الضمان المطلق</div>
                  <div className="text-xs text-purple-600 mt-1">حزم الأعمال</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Credits */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                تعويضات الخدمة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                في حالة عدم تحقيق ضمان وقت التشغيل، سنقدم تعويضات على شكل رصيد خدمة:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-right">وقت التشغيل الفعلي</th>
                      <th className="border border-gray-300 px-4 py-2 text-right">التعويض</th>
                      <th className="border border-gray-300 px-4 py-2 text-right">الحد الأقصى</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-center">99.0% - 99.9%</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">10% من الرسوم الشهرية</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">شهر واحد</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-center">95.0% - 99.0%</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">25% من الرسوم الشهرية</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">شهر واحد</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-center">90.0% - 95.0%</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">50% من الرسوم الشهرية</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">شهرين</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-center">أقل من 90.0%</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">100% من الرسوم الشهرية</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">3 أشهر</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 text-sm">
                  <strong>ملاحظة:</strong> التعويضات تُحسب تلقائياً وتُطبق على الفاتورة التالية. 
                  الحد الأقصى الإجمالي للتعويضات هو 100% من الرسوم الشهرية.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Support Response Times */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Headphones className="h-6 w-6 text-blue-600" />
                أوقات استجابة الدعم
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">الدعم عبر البريد الإلكتروني:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                      <span className="text-sm text-blue-700">الاستفسارات العامة</span>
                      <Badge variant="secondary">4 ساعات</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                      <span className="text-sm text-green-700">المشاكل التقنية</span>
                      <Badge variant="secondary">2 ساعة</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
                      <span className="text-sm text-orange-700">مشاكل الخدمة</span>
                      <Badge variant="secondary">1 ساعة</Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">الدعم المباشر:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-purple-50 rounded">
                      <span className="text-sm text-purple-700">المحادثة المباشرة</span>
                      <Badge variant="secondary">دقائق</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                      <span className="text-sm text-red-700">الطوارئ</span>
                      <Badge variant="secondary">فوري</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm text-gray-700">الهاتف</span>
                      <Badge variant="secondary">15 دقيقة</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Network Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-yellow-600" />
                أداء الشبكة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">1 Gbps</div>
                  <div className="text-sm text-blue-700">سرعة الشبكة</div>
                  <div className="text-xs text-blue-600 mt-1">ضمان الحد الأدنى</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">&lt; 1ms</div>
                  <div className="text-sm text-green-700">زمن الاستجابة</div>
                  <div className="text-xs text-green-600 mt-1">داخل مركز البيانات</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">99.99%</div>
                  <div className="text-sm text-purple-700">موثوقية الشبكة</div>
                  <div className="text-xs text-purple-600 mt-1">ضمان الشبكة</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">ضمانات الشبكة:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>اتصال مزدوج للشبكة مع مزودي الإنترنت</li>
                  <li>مراقبة مستمرة لأداء الشبكة</li>
                  <li>تحديثات تلقائية للبنية التحتية</li>
                  <li>حماية من هجمات DDoS</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Maintenance Windows */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-6 w-6 text-gray-600" />
                نوافذ الصيانة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">سياسة الصيانة:</h4>
                <p className="text-gray-700">
                  نقوم بإجراء الصيانة المجدولة خلال ساعات الليل (2:00 ص - 6:00 ص بتوقيت UTC) 
                  لتقليل التأثير على العملاء. سيتم إشعار العملاء قبل 72 ساعة من أي صيانة مجدولة.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">الصيانة المجدولة:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>إشعار مسبق 72 ساعة</li>
                    <li>خلال ساعات الليل</li>
                    <li>مدة أقصاها 4 ساعات</li>
                    <li>لا تؤثر على وقت التشغيل المضمون</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">الصيانة الطارئة:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>إشعار فوري عند الإمكان</li>
                    <li>لإصلاح مشاكل أمنية حرجة</li>
                    <li>مدة أقصاها ساعتين</li>
                    <li>تؤثر على حساب وقت التشغيل</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Exclusions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
                الاستثناءات
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                لا تنطبق ضمانات وقت التشغيل في الحالات التالية:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">أسباب خارجية:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>انقطاع الإنترنت العام</li>
                    <li>كوارث طبيعية</li>
                    <li>أعمال شغب أو إضرابات</li>
                    <li>أوامر حكومية</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">أسباب من جانب العميل:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>عدم الدفع في الوقت المحدد</li>
                    <li>انتهاك شروط الخدمة</li>
                    <li>مشاكل في التطبيقات المخصصة</li>
                    <li>إعدادات خاطئة من العميل</li>
                  </ul>
                </div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-orange-800 text-sm">
                  <strong>ملاحظة:</strong> في جميع الحالات، سنعمل على استعادة الخدمة في أسرع وقت ممكن 
                  وسنوفر تحديثات منتظمة للعملاء.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* How to Claim Credits */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                كيفية المطالبة بالتعويضات
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                للاستفادة من تعويضات الخدمة، يجب اتباع الخطوات التالية:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">تقديم الطلب</h4>
                    <p className="text-gray-600 text-sm">
                      أرسل طلب التعويض إلى sla@hostsailor.com خلال 30 يوماً من حدوث المشكلة
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">معلومات مطلوبة</h4>
                    <p className="text-gray-600 text-sm">
                      رقم الحساب، تاريخ ووقت المشكلة، وصف مفصل للمشكلة، أي رسائل خطأ
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">المراجعة</h4>
                    <p className="text-gray-600 text-sm">
                      سنراجع الطلب خلال 5 أيام عمل ونوافيك بالنتيجة
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">التطبيق</h4>
                    <p className="text-gray-600 text-sm">
                      إذا تم قبول الطلب، سيتم تطبيق التعويض على الفاتورة التالية
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-blue-600" />
                معلومات الاتصال
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                للاستفسارات حول اتفاقية مستوى الخدمة أو المطالبة بالتعويضات:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">طلبات التعويض:</h4>
                  <p className="text-blue-600">sla@hostsailor.com</p>
                  <p className="text-gray-600 text-sm">للمطالبة بالتعويضات</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">الدعم العام:</h4>
                  <p className="text-blue-600">support@hostsailor.com</p>
                  <p className="text-gray-600 text-sm">للاستفسارات العامة</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>وقت الاستجابة:</strong> نستجيب لطلبات التعويض خلال 5 أيام عمل، 
                  وللاستفسارات العامة خلال 24 ساعة.
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default ServiceLevelAgreement; 