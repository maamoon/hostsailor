# دليل النشر - HostSailor

## 🌐 النشر على GitHub Pages

### المتطلبات الأساسية

1. **مستودع GitHub**: تأكد من أن المشروع موجود في مستودع GitHub
2. **GitHub Actions**: تأكد من تفعيل GitHub Actions في المستودع
3. **إعدادات Pages**: تأكد من إعداد GitHub Pages في إعدادات المستودع

### خطوات النشر التلقائي

#### 1. إعداد GitHub Pages

1. اذهب إلى مستودع GitHub
2. انقر على "Settings" في شريط التنقل العلوي
3. انتقل إلى "Pages" في القائمة الجانبية
4. في قسم "Source"، اختر "GitHub Actions"
5. احفظ الإعدادات

#### 2. دفع التغييرات

```bash
# إضافة جميع التغييرات
git add .

# إنشاء commit جديد
git commit -m "Fix GitHub Pages deployment configuration"

# دفع التغييرات إلى الفرع الرئيسي
git push origin main
```

#### 3. مراقبة النشر

1. اذهب إلى تبويب "Actions" في مستودع GitHub
2. ستجد workflow جديد يعمل
3. انتظر حتى يكتمل النشر (عادةً 2-3 دقائق)
4. ستظهر رسالة "Deploy to GitHub Pages" عند اكتمال النشر

### النشر اليدوي

إذا كنت تفضل النشر اليدوي:

#### 1. بناء المشروع

```bash
# تثبيت التبعيات
npm install

# بناء المشروع لـ GitHub Pages
npm run build:gh-pages
```

#### 2. رفع الملفات

```bash
# الانتقال إلى فرع gh-pages
git checkout gh-pages

# حذف الملفات القديمة
git rm -rf .

# نسخ ملفات البناء
cp -r dist/* .

# إضافة الملفات الجديدة
git add .

# إنشاء commit
git commit -m "Update website"

# دفع التغييرات
git push origin gh-pages

# العودة إلى الفرع الرئيسي
git checkout main
```

## 🔧 إعدادات الإنتاج

### ملف vite.config.ts

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  // المسار الأساسي للإنتاج
  base: mode === 'production' ? '/sail-web-launch/' : '/',
  
  server: {
    host: "::",
    port: 8080,
  },
  
  plugins: [react()],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
```

### ملف _redirects

يجب أن يحتوي ملف `public/_redirects` على:

```
/*    /index.html   200
```

هذا يضمن أن جميع المسارات تعيد توجيه إلى `index.html` للتعامل مع React Router.

### ملف 404.html

يجب أن يحتوي ملف `public/404.html` على:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Not Found - HostSailor</title>
    <!-- ... CSS styles ... -->
</head>
<body>
    <div class="container">
        <h1>404</h1>
        <p>الصفحة التي تبحث عنها غير موجودة</p>
        <a href="/" class="btn">العودة للصفحة الرئيسية</a>
    </div>
    <script>
        // إعادة توجيه تلقائي بعد 5 ثوانٍ
        setTimeout(() => {
            window.location.href = '/';
        }, 5000);
    </script>
</body>
</html>
```

## 🐛 استكشاف الأخطاء

### مشاكل شائعة وحلولها

#### 1. خطأ 404 في الملفات الثابتة

**المشكلة**: 
```
GET https://maamoon.github.io/assets/index-DUImoesE.js net::ERR_ABORTED 404
```

**الحل**:
- تأكد من إعداد `base` الصحيح في `vite.config.ts`
- تأكد من بناء المشروع باستخدام `npm run build:gh-pages`
- تحقق من وجود ملف `_redirects` في مجلد `public`

#### 2. مشاكل في React Router

**المشكلة**: الصفحات لا تعمل عند تحديث الصفحة

**الحل**:
- تأكد من وجود ملف `_redirects` مع المحتوى الصحيح
- تأكد من إعداد `BrowserRouter` مع `basename` صحيح

#### 3. مشاكل في الترجمة

**المشكلة**: النصوص لا تظهر باللغة المطلوبة

**الحل**:
- تحقق من وجود جميع ملفات الترجمة في `src/locales/`
- تأكد من صحة مفاتيح الترجمة
- تحقق من إعدادات `i18n.ts`

#### 4. مشاكل في البناء

**المشكلة**: فشل في بناء المشروع

**الحل**:
```bash
# حذف مجلد node_modules
rm -rf node_modules

# حذف ملف package-lock.json
rm package-lock.json

# إعادة تثبيت التبعيات
npm install

# محاولة البناء مرة أخرى
npm run build:gh-pages
```

## 📊 مراقبة الأداء

### أدوات مفيدة

1. **Google PageSpeed Insights**: لقياس سرعة الموقع
2. **Lighthouse**: لتحليل الأداء والوصول
3. **WebPageTest**: لاختبار الأداء من مواقع مختلفة

### تحسينات الأداء

1. **ضغط الصور**: استخدم صور مضغوطة
2. **تحميل كسول**: استخدم lazy loading للصور
3. **تحسين CSS/JS**: تأكد من ضغط الملفات
4. **CDN**: استخدم شبكة توصيل المحتوى

## 🔒 الأمان

### إعدادات الأمان

1. **HTTPS**: تأكد من تفعيل HTTPS
2. **CSP**: إضافة Content Security Policy
3. **HSTS**: تفعيل HTTP Strict Transport Security

### مثال لملف _headers

```http
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

## 📈 التحليلات

### إضافة Google Analytics

1. احصل على معرف التتبع من Google Analytics
2. أضف الكود إلى `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📞 الدعم

إذا واجهت أي مشاكل في النشر:

1. تحقق من سجلات GitHub Actions
2. راجع ملف `README.md` للحصول على تعليمات إضافية
3. أنشئ issue في GitHub مع تفاصيل المشكلة
4. تواصل مع فريق الدعم الفني

---

**ملاحظة**: تأكد من اختبار الموقع بعد النشر للتأكد من أن جميع الميزات تعمل بشكل صحيح. 