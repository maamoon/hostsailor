# دليل النشر - HostSailor

## 🚀 النشر على GitHub Pages

### المتطلبات المسبقة
- حساب GitHub
- مستودع GitHub للمشروع
- Node.js 18+ مثبت

### خطوات النشر

#### 1. إعداد المشروع
```bash
# استنساخ المشروع
git clone https://github.com/maamoon/hostsailor.git
cd hostsailor

# تثبيت التبعيات
npm install
```

#### 2. بناء المشروع
```bash
# بناء المشروع لـ GitHub Pages
npm run build:gh-pages
```

#### 3. النشر التلقائي (مُوصى به)

##### إعداد GitHub Actions
1. اذهب إلى مستودع GitHub
2. انتقل إلى `Settings` > `Pages`
3. اختر `GitHub Actions` كمصدر للنشر
4. ادفع التغييرات إلى الفرع `main`

##### ملف GitHub Actions
أنشئ ملف `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build project
      run: npm run build:gh-pages
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

#### 4. النشر اليدوي
```bash
# بناء المشروع
npm run build:gh-pages

# رفع محتويات مجلد dist إلى فرع gh-pages
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

## 🔧 إعدادات مهمة

### 1. إعدادات Vite
```typescript
// vite.config.ts
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/hostsailor/' : '/',
  // ... باقي الإعدادات
}))
```

### 2. ملف _redirects
```bash
# public/_redirects
/*    /index.html   200
```

### 3. ملف CNAME (اختياري)
```bash
# public/CNAME
# إذا كنت تريد استخدام نطاق مخصص، أضف اسم النطاق هنا
# مثال: hostsailor.com
# اترك هذا الملف فارغاً إذا كنت تريد استخدام النطاق الافتراضي لـ GitHub Pages
```

## 🐛 حل المشاكل الشائعة

### 1. خطأ 404 في JavaScript/CSS
**المشكلة**: `GET https://username.github.io/hostsailor/assets/index-xxx.js net::ERR_ABORTED 404`

**الحل**:
- تأكد من إعداد `base` الصحيح في `vite.config.ts`
- تأكد من أن جميع المسارات في `index.html` تستخدم المسار الصحيح
- أعد بناء المشروع: `npm run build:gh-pages`

### 2. Service Worker لا يعمل
**المشكلة**: Service Worker لا يسجل أو لا يعمل بشكل صحيح

**الحل**:
- تأكد من أن ملف `sw.js` يستخدم المسارات الصحيحة
- تأكد من أن `manifest.json` يستخدم المسارات الصحيحة
- امسح ذاكرة التخزين المؤقت للمتصفح

### 3. الروابط لا تعمل
**المشكلة**: الروابط الداخلية تعطي خطأ 404

**الحل**:
- تأكد من وجود ملف `_redirects` في مجلد `public`
- تأكد من إعداد React Router بشكل صحيح
- تأكد من أن جميع المسارات تستخدم المسار الأساسي الصحيح

### 4. مشاكل في الترجمة
**المشكلة**: الترجمة لا تعمل أو تظهر مفاتيح الترجمة

**الحل**:
- تأكد من وجود جميع ملفات الترجمة في `src/locales/`
- تأكد من إعداد i18next بشكل صحيح
- تحقق من صحة مفاتيح الترجمة

## 📋 قائمة التحقق قبل النشر

- [ ] تم تثبيت جميع التبعيات: `npm install`
- [ ] المشروع يعمل محلياً: `npm run dev`
- [ ] البناء يعمل بدون أخطاء: `npm run build:gh-pages`
- [ ] جميع المسارات في `vite.config.ts` صحيحة
- [ ] ملف `_redirects` موجود في مجلد `public`
- [ ] ملف `sw.js` يستخدم المسارات الصحيحة
- [ ] ملف `manifest.json` يستخدم المسارات الصحيحة
- [ ] جميع الصور والملفات الثابتة موجودة
- [ ] تم اختبار الترجمة متعددة اللغات
- [ ] تم اختبار التجاوب على الأجهزة المختلفة

## 🔄 تحديث الموقع

### بعد إجراء تغييرات
```bash
# إضافة التغييرات
git add .

# حفظ التغييرات
git commit -m "Update website"

# رفع التغييرات
git push origin main
```

### إعادة بناء ونشر يدوي
```bash
# بناء المشروع
npm run build:gh-pages

# رفع التغييرات
git add dist -f
git commit -m "Rebuild and deploy"
git push origin gh-pages
```

## 📞 الدعم

إذا واجهت أي مشاكل في النشر:
1. تحقق من قائمة التحقق أعلاه
2. راجع سجلات GitHub Actions
3. تحقق من إعدادات GitHub Pages
4. أنشئ issue في GitHub مع تفاصيل المشكلة

---

**ملاحظة**: تأكد دائماً من اختبار الموقع محلياً قبل النشر للتأكد من أن كل شيء يعمل بشكل صحيح. 