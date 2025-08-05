import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FileText, Shield, Users, Clock, AlertTriangle, CheckCircle } from "lucide-react";

const TermsOfService = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <FileText className="h-16 w-16 text-blue-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              شروط الخدمة
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm">
                <Clock className="h-4 w-4 mr-2" />
                آخر تحديث: ديسمبر 2024
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Shield className="h-4 w-4 mr-2" />
                حماية قانونية
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
                <FileText className="h-6 w-6 text-blue-600" />
                مقدمة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                مرحباً بك في HostSailor. من خلال الوصول إلى موقعنا الإلكتروني واستخدام خدماتنا، 
                فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، 
                يرجى عدم استخدام خدماتنا.
              </p>
              <p className="text-gray-700 leading-relaxed">
                نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطارك بأي تغييرات جوهرية 
                من خلال موقعنا الإلكتروني أو عبر البريد الإلكتروني.
              </p>
            </CardContent>
          </Card>

          {/* Definitions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-blue-600" />
                التعريفات
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">"الخدمات"</h4>
                  <p className="text-gray-600 text-sm">
                    جميع خدمات الاستضافة والاستضافة الافتراضية والخوادم المخصصة 
                    والخدمات ذات الصلة التي نقدمها.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">"العميل"</h4>
                  <p className="text-gray-600 text-sm">
                    أي شخص أو كيان يستخدم خدماتنا أو يملك حساباً معنا.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">"الموقع"</h4>
                  <p className="text-gray-600 text-sm">
                    موقع HostSailor الإلكتروني وجميع صفحاته الفرعية.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">"المحتوى"</h4>
                  <p className="text-gray-600 text-sm">
                    جميع البيانات والمعلومات والملفات المخزنة على خوادمنا.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                شروط الخدمة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">1. استخدام الخدمات</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>يجب استخدام خدماتنا لأغراض قانونية فقط</li>
                  <li>يحظر استخدام الخدمات لإيذاء الآخرين أو انتهاك حقوقهم</li>
                  <li>يجب الامتثال لجميع القوانين واللوائح المعمول بها</li>
                  <li>يحظر إرسال رسائل غير مرغوب فيها أو محتوى ضار</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">2. الدفع والفوترة</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>جميع الأسعار بالدولار الأمريكي ما لم يذكر خلاف ذلك</li>
                  <li>يتم تجديد الخدمات تلقائياً ما لم يتم إلغاؤها</li>
                  <li>الدفع المتأخر قد يؤدي إلى تعليق الخدمة</li>
                  <li>لا توجد استردادات للخدمات المستخدمة</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">3. الخصوصية والأمان</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>نحترم خصوصيتك ونحمي بياناتك الشخصية</li>
                  <li>نستخدم تقنيات تشفير متقدمة لحماية البيانات</li>
                  <li>لا نشارك معلوماتك مع أطراف ثالثة دون موافقتك</li>
                  <li>أنت مسؤول عن الحفاظ على أمان كلمة المرور الخاصة بك</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Prohibited Activities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                الأنشطة المحظورة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">المحتوى المحظور:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>المحتوى الإباحي أو المسيء</li>
                    <li>البرمجيات الخبيثة أو الفيروسات</li>
                    <li>المحتوى الذي ينتهك حقوق الملكية الفكرية</li>
                    <li>المواقع التي تحاكي البنوك أو المؤسسات المالية</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">الأنشطة المحظورة:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>إرسال رسائل غير مرغوب فيها</li>
                    <li>هجمات DDoS أو محاولات الاختراق</li>
                    <li>استخدام موارد الخادم بشكل مفرط</li>
                    <li>بيع أو إعادة بيع الخدمات دون إذن</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Level Agreement */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-blue-600" />
                اتفاقية مستوى الخدمة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">ضمان وقت التشغيل:</h4>
                <p className="text-blue-700">
                  نضمن 99.9% من وقت التشغيل لجميع خدماتنا. في حالة عدم تحقيق هذا المستوى، 
                  سنقدم تعويضات وفقاً لسياسة الخدمة الخاصة بنا.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">99.9%</div>
                  <div className="text-sm text-green-700">ضمان وقت التشغيل</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-blue-700">الدعم الفني</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">30 يوم</div>
                  <div className="text-sm text-purple-700">ضمان استرداد الأموال</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
                إنهاء الخدمة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                يحق لنا إنهاء خدماتك في أي وقت للأسباب التالية:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>انتهاك هذه الشروط والأحكام</li>
                <li>عدم الدفع في الوقت المحدد</li>
                <li>استخدام الخدمات لأغراض غير قانونية</li>
                <li>إلحاق الضرر بباقي العملاء أو البنية التحتية</li>
              </ul>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-orange-800 text-sm">
                  <strong>ملاحظة:</strong> في حالة إنهاء الخدمة، ستحتفظ بنسخة احتياطية من بياناتك 
                  لمدة 30 يوماً. يرجى التأكد من نقل بياناتك قبل انتهاء هذه الفترة.
                </p>
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
                إذا كان لديك أي أسئلة حول هذه الشروط والأحكام، يرجى الاتصال بنا:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">البريد الإلكتروني:</h4>
                  <p className="text-blue-600">legal@hostsailor.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">الدعم الفني:</h4>
                  <p className="text-blue-600">support@hostsailor.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 