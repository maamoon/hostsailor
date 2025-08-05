import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, Eye, Lock, Users, Clock, Mail, Phone, Globe, Database } from "lucide-react";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Shield className="h-16 w-16 text-green-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              سياسة الخصوصية
            </h1>
            <p className="text-xl text-green-100 mb-8">
              نحن نحمي خصوصيتك ونلتزم بحماية بياناتك الشخصية
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm">
                <Clock className="h-4 w-4 mr-2" />
                آخر تحديث: ديسمبر 2024
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Lock className="h-4 w-4 mr-2" />
                حماية البيانات
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
                في HostSailor، نعتبر خصوصيتك أولوية قصوى. هذه السياسة توضح كيف نجمع ونستخدم 
                ونحمي معلوماتك الشخصية عندما تستخدم خدماتنا.
              </p>
              <p className="text-gray-700 leading-relaxed">
                باستخدام خدماتنا، فإنك توافق على جمع واستخدام المعلومات وفقاً لهذه السياسة. 
                نحن لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة لأغراض تجارية.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-6 w-6 text-blue-600" />
                المعلومات التي نجمعها
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">المعلومات الشخصية:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>الاسم الكامل وعنوان البريد الإلكتروني</li>
                  <li>رقم الهاتف وعنوان الفواتير</li>
                  <li>معلومات الدفع (معالجتها بشكل آمن)</li>
                  <li>معلومات الحساب وكلمات المرور</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">معلومات الاستخدام:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>عنوان IP وموقعك الجغرافي</li>
                  <li>نوع المتصفح ونظام التشغيل</li>
                  <li>صفحات الويب التي تزورها</li>
                  <li>وقت وتاريخ زياراتك</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">معلومات الخادم:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>سجلات الخادم وبيانات الأداء</li>
                  <li>معلومات عن المواقع المستضافة</li>
                  <li>بيانات النسخ الاحتياطي</li>
                  <li>سجلات الأمان والمراقبة</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-6 w-6 text-purple-600" />
                كيف نستخدم المعلومات
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">لتحسين الخدمات:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>توفير خدمات الاستضافة</li>
                    <li>معالجة المدفوعات والفواتير</li>
                    <li>إرسال إشعارات مهمة</li>
                    <li>تحسين تجربة المستخدم</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">للأمان والدعم:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>حماية من الاحتيال</li>
                    <li>دعم العملاء الفني</li>
                    <li>مراقبة الأمان</li>
                    <li>الامتثال القانوني</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-6 w-6 text-red-600" />
                حماية البيانات
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">إجراءات الأمان:</h4>
                <p className="text-green-700">
                  نستخدم تقنيات تشفير متقدمة لحماية بياناتك الشخصية وبيانات الدفع. 
                  جميع البيانات تنتقل عبر اتصالات مشفرة (SSL/TLS).
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Lock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-blue-800">تشفير SSL/TLS</div>
                  <div className="text-xs text-blue-600">حماية البيانات في النقل</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-green-800">جدران الحماية</div>
                  <div className="text-xs text-green-600">حماية من الهجمات</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Database className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-purple-800">نسخ احتياطية</div>
                  <div className="text-xs text-purple-600">حماية من فقدان البيانات</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-orange-600" />
                مشاركة البيانات
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                نحن لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة، إلا في الحالات التالية:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>مع موافقتك الصريحة</li>
                <li>لتوفير الخدمات المطلوبة (مثل معالجات الدفع)</li>
                <li>للامتثال للقوانين واللوائح المعمول بها</li>
                <li>لحماية حقوقنا وممتلكاتنا</li>
                <li>في حالات الطوارئ أو السلامة العامة</li>
              </ul>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-orange-800 text-sm">
                  <strong>ملاحظة:</strong> جميع الشركاء الذين نشارك معهم البيانات ملتزمون 
                  بنفس معايير حماية البيانات الصارمة.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-blue-600" />
                حقوقك
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">حقوق الوصول:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>الوصول إلى بياناتك الشخصية</li>
                    <li>تصحيح المعلومات غير الدقيقة</li>
                    <li>حذف بياناتك الشخصية</li>
                    <li>تقييد معالجة البيانات</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">حقوق إضافية:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>الاعتراض على المعالجة</li>
                    <li>حمل البيانات</li>
                    <li>سحب الموافقة</li>
                    <li>تقديم شكوى</li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>للممارسة هذه الحقوق:</strong> اتصل بنا على privacy@hostsailor.com 
                  وسنستجيب لطلبك في غضون 30 يوماً.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-green-600" />
                ملفات تعريف الارتباط (Cookies)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. أنواع ملفات تعريف الارتباط التي نستخدمها:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">ضرورية</h4>
                  <p className="text-green-700 text-sm">
                    مطلوبة لتشغيل الموقع والخدمات الأساسية
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">تحليلية</h4>
                  <p className="text-blue-700 text-sm">
                    لتحليل حركة المرور وتحسين الأداء
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">وظيفية</h4>
                  <p className="text-purple-700 text-sm">
                    لتذكر تفضيلاتك وتحسين التجربة
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات المتصفح. 
                إلغاء بعض ملفات تعريف الارتباط قد يؤثر على وظائف الموقع.
              </p>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-gray-600" />
                الاحتفاظ بالبيانات
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                نحتفظ ببياناتك الشخصية طالما كان ذلك ضرورياً لتوفير الخدمات أو للامتثال للالتزامات القانونية:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">بيانات الحساب:</h4>
                  <p className="text-gray-600 text-sm">
                    نحتفظ بها طالما كان الحساب نشطاً، ولفترة محدودة بعد الإلغاء للامتثال القانوني.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">بيانات الدفع:</h4>
                  <p className="text-gray-600 text-sm">
                    نحتفظ بها لمدة 7 سنوات للامتثال للقوانين الضريبية والمحاسبية.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">سجلات الخادم:</h4>
                  <p className="text-gray-600 text-sm">
                    نحتفظ بها لمدة 12 شهراً للأمان والمراقبة.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">بيانات النسخ الاحتياطي:</h4>
                  <p className="text-gray-600 text-sm">
                    نحتفظ بها لمدة 30 يوماً بعد إلغاء الخدمة.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-6 w-6 text-blue-600" />
                معلومات الاتصال
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">مسؤول حماية البيانات:</h4>
                  <p className="text-blue-600">privacy@hostsailor.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">الدعم العام:</h4>
                  <p className="text-blue-600">support@hostsailor.com</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>العنوان:</strong> HostSailor, [عنوان الشركة], [المدينة], [البلد]
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 