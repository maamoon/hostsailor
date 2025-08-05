# HostSailor - Premium Web Hosting Solutions

موقع ويب احترافي لخدمات الاستضافة مع واجهة مستخدم حديثة ومتجاوبة.

## 🚀 المميزات

- واجهة مستخدم حديثة ومتجاوبة
- دعم متعدد اللغات (العربية، الإنجليزية، الصينية، الروسية)
- تصميم متجاوب لجميع الأجهزة
- صفحات متعددة للخدمات المختلفة
- نظام كوبونات وعروض خاصة
- لوحة تحكم للمستخدمين

## 🛠️ التقنيات المستخدمة

- **React 18** - مكتبة واجهة المستخدم
- **TypeScript** - لكتابة كود آمن ومنظم
- **Vite** - أداة البناء السريعة
- **Tailwind CSS** - إطار عمل CSS
- **Shadcn/ui** - مكونات واجهة المستخدم
- **React Router** - إدارة التنقل
- **i18next** - الترجمة متعددة اللغات

## 📦 التثبيت والتشغيل

### المتطلبات
- Node.js 18 أو أحدث
- npm أو yarn

### خطوات التثبيت

1. استنساخ المشروع:
```bash
git clone https://github.com/maamoon/sail-web-launch.git
cd sail-web-launch
```

2. تثبيت التبعيات:
```bash
npm install
```

3. تشغيل خادم التطوير:
```bash
npm run dev
```

4. فتح المتصفح على `http://localhost:8080`

## 🏗️ البناء والنشر

### البناء للتطوير
```bash
npm run build:dev
```

### البناء للإنتاج
```bash
npm run build
```

### البناء لـ GitHub Pages
```bash
npm run build:gh-pages
```

## 🌐 النشر على GitHub Pages

### الطريقة التلقائية (مُوصى بها)

1. تأكد من أن المشروع موجود في مستودع GitHub
2. اذهب إلى إعدادات المستودع (Settings)
3. انتقل إلى "Pages" في القائمة الجانبية
4. اختر "GitHub Actions" كمصدر للنشر
5. ادفع التغييرات إلى الفرع `main`
6. سيتم النشر تلقائياً عبر GitHub Actions

### الطريقة اليدوية

1. بناء المشروع:
```bash
npm run build:gh-pages
```

2. رفع محتويات مجلد `dist` إلى فرع `gh-pages`

## 📁 هيكل المشروع

```
sail-web-launch/
├── src/
│   ├── components/     # مكونات React
│   ├── pages/         # صفحات التطبيق
│   ├── locales/       # ملفات الترجمة
│   ├── hooks/         # React Hooks
│   └── lib/           # مكتبات مساعدة
├── public/            # الملفات الثابتة
├── .github/           # إعدادات GitHub Actions
└── dist/              # مجلد البناء (يتم إنشاؤه)
```

## 🌍 اللغات المدعومة

- العربية (ar)
- الإنجليزية (en)
- الصينية (cn)
- الروسية (ru)

## 🔧 الإعدادات

### تغيير المسار الأساسي

للتطوير المحلي:
```javascript
// vite.config.ts
base: '/'
```

لـ GitHub Pages:
```javascript
// vite.config.ts
base: '/sail-web-launch/'
```

### إضافة لغات جديدة

1. أنشئ ملف ترجمة جديد في `src/locales/`
2. أضف اللغة إلى `src/i18n.ts`
3. أضف زر تبديل اللغة في `LanguageSwitcher.tsx`

## 🐛 استكشاف الأخطاء

### مشاكل شائعة

1. **خطأ 404 في GitHub Pages**:
   - تأكد من إعداد `base` الصحيح في `vite.config.ts`
   - تأكد من وجود ملف `_redirects` في مجلد `public`

2. **مشاكل في الترجمة**:
   - تأكد من وجود جميع ملفات الترجمة
   - تحقق من صحة مفاتيح الترجمة

3. **مشاكل في البناء**:
   - احذف مجلد `node_modules` وأعد التثبيت
   - تأكد من إصدار Node.js

## 📝 المساهمة

1. Fork المشروع
2. أنشئ فرع جديد للميزة (`git checkout -b feature/AmazingFeature`)
3. ادفع التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. ادفع إلى الفرع (`git push origin feature/AmazingFeature`)
5. أنشئ Pull Request

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - انظر ملف [LICENSE](LICENSE) للتفاصيل.

## 📞 الدعم

إذا واجهت أي مشاكل أو لديك أسئلة، يرجى إنشاء issue في GitHub أو التواصل معنا.

---

**HostSailor** - حلول الاستضافة الاحترافية 🌐
