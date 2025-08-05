import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Shield, Users, Globe, Server, Lock, Mail, Phone, Clock, CheckCircle, XCircle } from "lucide-react";

const AcceptableUsePolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <AlertTriangle className="h-16 w-16 text-red-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              سياسة الاستخدام المقبول
            </h1>
            <p className="text-xl text-red-100 mb-8">
              إرشادات واضحة لاستخدام خدماتنا بطريقة آمنة ومقبولة
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm">
                <Clock className="h-4 w-4 mr-2" />
                آخر تحديث: ديسمبر 2024
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Shield className="h-4 w-4 mr-2" />
                إلزامي لجميع العملاء
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
                <AlertTriangle className="h-6 w-6 text-red-600" />
                مقدمة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                سياسة الاستخدام المقبول هذه تحدد القواعد والإرشادات التي يجب على جميع عملاء HostSailor 
                الالتزام بها عند استخدام خدماتنا. هذه السياسة مكملة لشروط الخدمة وتطبق على جميع الخدمات.
              </p>
              <p className="text-gray-700 leading-relaxed">
                انتهاك هذه السياسة قد يؤدي إلى تعليق أو إنهاء خدماتك فوراً، دون إشعار مسبق. 
                نحتفظ بالحق في تعديل هذه السياسة في أي وقت.
              </p>
            </CardContent>
          </Card>

          {/* Prohibited Content */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <XCircle className="h-6 w-6 text-red-600" />
                المحتوى المحظور
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-3">يحظر تماماً استضافة أو نشر:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h5 className="font-medium text-red-700">محتوى غير قانوني:</h5>
                    <ul className="list-disc list-inside space-y-1 text-red-600 text-sm">
                      <li>المواد الإباحية أو المسيئة</li>
                      <li>المحتوى الذي يشجع على العنف</li>
                      <li>المواد التي تنتهك حقوق الملكية الفكرية</li>
                      <li>المواقع التي تحاكي المؤسسات المالية</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium text-red-700">برمجيات ضارة:</h5>
                    <ul className="list-disc list-inside space-y-1 text-red-600 text-sm">
                      <li>الفيروسات والبرمجيات الخبيثة</li>
                      <li>أدوات الاختراق غير المصرح بها</li>
                      <li>برامج التشفير الضارة</li>
                      <li>أدوات إرسال الرسائل غير المرغوب فيها</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Prohibited Activities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-6 w-6 text-orange-600" />
                الأنشطة المحظورة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">أنشطة الشبكة المحظورة:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>إرسال رسائل غير مرغوب فيها (Spam) أو رسائل جماعية غير مصرح بها</li>
                  <li>تنفيذ هجمات DDoS أو محاولات الاختراق</li>
                  <li>استخدام الخوادم كوسيط للأنشطة غير القانونية</li>
                  <li>إرسال بريد إلكتروني مزيف أو خادع</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">استخدام الموارد:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>استخدام موارد الخادم بشكل مفرط يؤثر على العملاء الآخرين</li>
                  <li>تشغيل عمليات تعدين العملات المشفرة دون إذن</li>
                  <li>استخدام الخادم كوسيط للأنشطة التجارية غير المصرح بها</li>
                  <li>إعادة بيع الخدمات دون ترخيص مناسب</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">انتهاكات الأمان:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>محاولات الوصول غير المصرح به للأنظمة</li>
                  <li>استخدام حسابات مزيفة أو معلومات مزورة</li>
                  <li>محاولات اختراق حسابات المستخدمين الآخرين</li>
                  <li>نشر معلومات شخصية للآخرين دون موافقتهم</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Acceptable Use */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                الاستخدام المقبول
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">الاستخدام التجاري:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>مواقع الشركات والمنظمات</li>
                    <li>متاجر التجارة الإلكترونية</li>
                    <li>تطبيقات الويب التجارية</li>
                    <li>خدمات البريد الإلكتروني التجارية</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">الاستخدام الشخصي:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>المواقع الشخصية والمدونات</li>
                    <li>مشاريع التطوير والاختبار</li>
                    <li>تطبيقات التعلم والتدريب</li>
                    <li>خدمات النسخ الاحتياطي الشخصية</li>
                  </ul>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 text-sm">
                  <strong>ملاحظة:</strong> جميع الاستخدامات يجب أن تكون قانونية ومتوافقة مع 
                  شروط الخدمة وسياسة الخصوصية الخاصة بنا.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Resource Limits */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-blue-600" />
                حدود الموارد
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">حدود الاستخدام العادل:</h4>
                <p className="text-blue-700">
                  نحن نطبق سياسة "الاستخدام العادل" لضمان تجربة جيدة لجميع العملاء. 
                  الاستخدام المفرط للموارد قد يؤدي إلى تقييد أو تعليق الخدمة.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">CPU</div>
                  <div className="text-sm text-orange-700">استخدام معقول للمعالج</div>
                  <div className="text-xs text-orange-600 mt-1">لا تزيد عن 80% لمدة طويلة</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">RAM</div>
                  <div className="text-sm text-green-700">استخدام الذاكرة العشوائية</div>
                  <div className="text-xs text-green-600 mt-1">ضمن الحد المخصص للحزمة</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">Bandwidth</div>
                  <div className="text-sm text-purple-700">استهلاك النطاق الترددي</div>
                  <div className="text-xs text-purple-600 mt-1">لا تزيد عن الحد الشهري</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">إرشادات إضافية:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>تجنب تشغيل عمليات ثقيلة خلال ساعات الذروة</li>
                  <li>استخدم أدوات مراقبة الأداء لتتبع استخدام الموارد</li>
                  <li>قم بتحديث التطبيقات بانتظام لتجنب الثغرات الأمنية</li>
                  <li>احتفظ بنسخ احتياطية منتظمة من بياناتك</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Security Requirements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-6 w-6 text-red-600" />
                متطلبات الأمان
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">حماية الحساب:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>استخدام كلمات مرور قوية وفريدة</li>
                    <li>تفعيل المصادقة الثنائية</li>
                    <li>تحديث معلومات الاتصال بانتظام</li>
                    <li>عدم مشاركة بيانات تسجيل الدخول</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">حماية الخادم:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>تثبيت تحديثات الأمان بانتظام</li>
                    <li>تكوين جدران الحماية بشكل صحيح</li>
                    <li>مراقبة سجلات الأمان</li>
                    <li>استخدام شهادات SSL صالحة</li>
                  </ul>
                </div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-800 text-sm">
                  <strong>تحذير:</strong> عدم الامتثال لمتطلبات الأمان قد يؤدي إلى تعليق الخدمة 
                  لحماية البنية التحتية والعملاء الآخرين.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Reporting Violations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-6 w-6 text-blue-600" />
                الإبلاغ عن الانتهاكات
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                إذا كنت تعتقد أن هناك انتهاكاً لسياسة الاستخدام المقبول، يرجى الإبلاغ عنه فوراً:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">البريد الإلكتروني:</h4>
                  <p className="text-blue-600">abuse@hostsailor.com</p>
                  <p className="text-gray-600 text-sm">للإبلاغ عن الانتهاكات الجادة</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">الدعم الفني:</h4>
                  <p className="text-blue-600">support@hostsailor.com</p>
                  <p className="text-gray-600 text-sm">للاستفسارات العامة</p>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">معلومات مطلوبة في البلاغ:</h4>
                <ul className="list-disc list-inside space-y-1 text-blue-700 text-sm">
                  <li>عنوان URL أو IP للموقع المخالف</li>
                  <li>وصف مفصل للانتهاك</li>
                  <li>تاريخ ووقت حدوث الانتهاك</li>
                  <li>أي أدلة أو لقطات شاشة ذات صلة</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Consequences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
                عواقب الانتهاك
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">تحذير</div>
                  <div className="text-sm text-yellow-700">الانتهاكات البسيطة</div>
                  <div className="text-xs text-yellow-600 mt-1">إشعار كتابي</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">تعليق</div>
                  <div className="text-sm text-orange-700">الانتهاكات المتكررة</div>
                  <div className="text-xs text-orange-600 mt-1">تعليق مؤقت للخدمة</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">إنهاء</div>
                  <div className="text-sm text-red-700">الانتهاكات الجادة</div>
                  <div className="text-xs text-red-600 mt-1">إنهاء فوري للحساب</div>
                </div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-orange-800 text-sm">
                  <strong>ملاحظة:</strong> نحتفظ بالحق في اتخاذ الإجراءات المناسبة حسب طبيعة الانتهاك. 
                  قد يتم الإبلاغ عن الانتهاكات الجادة للسلطات المختصة.
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
                إذا كان لديك أي أسئلة حول سياسة الاستخدام المقبول، يرجى الاتصال بنا:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">للاستفسارات العامة:</h4>
                  <p className="text-blue-600">support@hostsailor.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">للانتهاكات الجادة:</h4>
                  <p className="text-blue-600">abuse@hostsailor.com</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>وقت الاستجابة:</strong> نحاول الرد على جميع الاستفسارات في غضون 24 ساعة، 
                  وعلى البلاغات العاجلة في غضون 4 ساعات.
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default AcceptableUsePolicy; 