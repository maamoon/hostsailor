import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Server, 
  Globe, 
  Shield, 
  Activity, 
  Settings, 
  LogOut, 
  Plus,
  Users,
  CreditCard,
  FileText,
  HelpCircle
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const mockData = {
    services: [
      {
        id: 1,
        name: "VPS Hosting",
        status: "active",
        plan: "Basic VPS",
        location: "Netherlands",
        ip: "192.168.1.100",
        uptime: "99.9%"
      },
      {
        id: 2,
        name: "Shared Hosting",
        status: "active",
        plan: "Premium",
        location: "United States",
        ip: "10.0.0.50",
        uptime: "99.8%"
      }
    ],
    domains: [
      { id: 1, name: "example.com", status: "active", expires: "2025-12-31" },
      { id: 2, name: "mysite.net", status: "active", expires: "2025-10-15" }
    ],
    invoices: [
      { id: 1, amount: "$29.99", status: "paid", date: "2024-01-15", description: "VPS Hosting - January" },
      { id: 2, amount: "$19.99", status: "pending", date: "2024-02-01", description: "Shared Hosting - February" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-xl font-bold text-primary">HostSailor</div>
            <Badge variant="secondary">لوحة التحكم</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              الإعدادات
            </Button>
            <Button variant="ghost" size="sm">
              <HelpCircle className="h-4 w-4 mr-2" />
              المساعدة
            </Button>
            <Button variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              تسجيل الخروج
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">مرحباً بك في لوحة التحكم</h1>
          <p className="text-gray-600">إدارة خدمات الاستضافة والنطاقات الخاصة بك</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Server className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">الخدمات النشطة</p>
                  <p className="text-2xl font-bold text-gray-900">{mockData.services.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Globe className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">النطاقات</p>
                  <p className="text-2xl font-bold text-gray-900">{mockData.domains.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Activity className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">متوسط الوقت</p>
                  <p className="text-2xl font-bold text-gray-900">99.9%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">الحالة</p>
                  <p className="text-2xl font-bold text-gray-900">ممتازة</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
            <TabsTrigger value="services">الخدمات</TabsTrigger>
            <TabsTrigger value="domains">النطاقات</TabsTrigger>
            <TabsTrigger value="billing">الفواتير</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Services Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Server className="h-5 w-5 mr-2" />
                    الخدمات النشطة
                  </CardTitle>
                  <CardDescription>آخر تحديث للخدمات الخاصة بك</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockData.services.map((service) => (
                      <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{service.name}</h4>
                          <p className="text-sm text-gray-600">{service.plan} - {service.location}</p>
                        </div>
                        <Badge variant={service.status === "active" ? "default" : "secondary"}>
                          {service.status === "active" ? "نشط" : "غير نشط"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 mr-2" />
                    النشاط الأخير
                  </CardTitle>
                  <CardDescription>آخر التحديثات والإجراءات</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">تم تحديث VPS بنجاح</p>
                        <p className="text-xs text-gray-600">منذ ساعتين</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">تم إنشاء نسخة احتياطية</p>
                        <p className="text-xs text-gray-600">منذ 5 ساعات</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">تنبيه: استخدام عالي للذاكرة</p>
                        <p className="text-xs text-gray-600">منذ يوم واحد</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="services" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">الخدمات</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                إضافة خدمة جديدة
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockData.services.map((service) => (
                <Card key={service.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{service.name}</CardTitle>
                        <CardDescription>{service.plan}</CardDescription>
                      </div>
                      <Badge variant={service.status === "active" ? "default" : "secondary"}>
                        {service.status === "active" ? "نشط" : "غير نشط"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">الموقع:</span>
                        <span className="text-sm font-medium">{service.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">عنوان IP:</span>
                        <span className="text-sm font-medium">{service.ip}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">متوسط الوقت:</span>
                        <span className="text-sm font-medium">{service.uptime}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button variant="outline" size="sm">إدارة</Button>
                      <Button variant="outline" size="sm">مراقبة</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="domains" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">النطاقات</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                تسجيل نطاق جديد
              </Button>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {mockData.domains.map((domain) => (
                    <div key={domain.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{domain.name}</h4>
                        <p className="text-sm text-gray-600">ينتهي في: {domain.expires}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={domain.status === "active" ? "default" : "secondary"}>
                          {domain.status === "active" ? "نشط" : "غير نشط"}
                        </Badge>
                        <Button variant="outline" size="sm">إدارة</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">الفواتير والمدفوعات</h2>
              <Button>
                <CreditCard className="h-4 w-4 mr-2" />
                إضافة طريقة دفع
              </Button>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {mockData.invoices.map((invoice) => (
                    <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{invoice.description}</h4>
                        <p className="text-sm text-gray-600">{invoice.date}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{invoice.amount}</span>
                        <Badge variant={invoice.status === "paid" ? "default" : "secondary"}>
                          {invoice.status === "paid" ? "مدفوع" : "معلق"}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          عرض
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard; 