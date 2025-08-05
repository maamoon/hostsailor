import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Mail, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // هنا سيتم إضافة منطق إعادة تعيين كلمة المرور الفعلي
      // في الوقت الحالي سنقوم بمحاكاة العملية
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast({
        title: "تم إرسال رابط إعادة التعيين",
        description: "تحقق من بريدك الإلكتروني للحصول على التعليمات",
      });
    } catch (err) {
      setError("حدث خطأ أثناء إرسال رابط إعادة التعيين");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="shadow-xl border-0">
            <CardHeader className="space-y-1 text-center">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-2xl font-bold">تم إرسال الرابط</CardTitle>
              <CardDescription>
                تحقق من بريدك الإلكتروني للحصول على رابط إعادة تعيين كلمة المرور
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600 mb-6">
                إذا لم تجد الرسالة، تحقق من مجلد الرسائل غير المرغوب فيها
              </p>
              <Link to="/login">
                <Button variant="outline" className="w-full">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  العودة لتسجيل الدخول
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-xl border-0">
          <CardHeader className="space-y-1 text-center">
            <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <CardTitle className="text-2xl font-bold">نسيت كلمة المرور؟</CardTitle>
            <CardDescription>
              أدخل بريدك الإلكتروني وسنرسل لك رابطاً لإعادة تعيين كلمة المرور
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "جاري الإرسال..." : "إرسال رابط إعادة التعيين"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link
                to="/login"
                className="text-sm text-primary hover:underline font-medium flex items-center justify-center"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                العودة لتسجيل الدخول
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword; 
