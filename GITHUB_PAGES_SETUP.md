# دليل إعداد GitHub Pages - حل مشاكل حماية البيئة

## 🚨 المشكلة
```
Branch "main" is not allowed to deploy to github-pages due to environment protection rules.
The deployment was rejected or didn't satisfy other protection rules.
```

## 🔧 الحلول المتاحة

### الحل الأول: إعداد GitHub Pages يدوياً

#### 1. إعداد GitHub Pages في إعدادات المستودع

1. اذهب إلى مستودع GitHub
2. انتقل إلى `Settings` > `Pages`
3. في قسم `Source`، اختر `Deploy from a branch`
4. اختر الفرع `gh-pages` (إذا لم يكن موجوداً، سيتم إنشاؤه تلقائياً)
5. احفظ الإعدادات

#### 2. النشر اليدوي

```bash
# بناء المشروع
npm run build:gh-pages

# إنشاء فرع gh-pages (إذا لم يكن موجوداً)
git checkout -b gh-pages

# حذف الملفات القديمة
git rm -rf .

# نسخ ملفات البناء
cp -r dist/* .

# إضافة الملفات الجديدة
git add .

# حفظ التغييرات
git commit -m "Deploy to GitHub Pages"

# رفع التغييرات
git push origin gh-pages

# العودة إلى الفرع الرئيسي
git checkout main
```

### الحل الثاني: استخدام GitHub Actions (مُوصى به)

#### 1. إعداد GitHub Pages للـ Actions

1. اذهب إلى `Settings` > `Pages`
2. في قسم `Source`، اختر `GitHub Actions`
3. احفظ الإعدادات

#### 2. اختيار ملف Workflow المناسب

لدينا 3 ملفات workflow مختلفة:

##### أ) `deploy-simple.yml` - للنشر التلقائي
```yaml
# يعمل عند كل push إلى الفرع main
# يستخدم إعدادات GitHub Pages الجديدة
# يتطلب إعداد GitHub Pages للـ Actions
```

##### ب) `deploy-manual.yml` - للنشر اليدوي
```yaml
# يعمل فقط عند تشغيله يدوياً
# لا يتطلب إعدادات خاصة
# يحل مشكلة حماية البيئة
```

##### ج) `pages.yml` - للنشر التلقائي (بديل)
```yaml
# يعمل عند كل push إلى الفرع main
# يستخدم إعدادات GitHub Pages الجديدة
```

#### 3. كيفية تشغيل النشر اليدوي

1. اذهب إلى تبويب `Actions` في مستودع GitHub
2. اختر `Deploy to GitHub Pages (Manual)`
3. انقر على `Run workflow`
4. اختر الفرع `main`
5. انقر على `Run workflow`

### الحل الثالث: إزالة حماية البيئة

#### 1. إعدادات البيئة

1. اذهب إلى `Settings` > `Environments`
2. ابحث عن `github-pages`
3. انقر على `Configure`
4. في قسم `Deployment branches`:
   - أضف `main` إلى قائمة الفروع المسموح لها بالنشر
   - أو احذف جميع القيود

#### 2. إعدادات الحماية

1. في نفس صفحة البيئة
2. في قسم `Protection rules`:
   - احذف جميع قواعد الحماية
   - أو أضف استثناءات للفرع `main`

## 📋 قائمة التحقق

### قبل النشر
- [ ] تم بناء المشروع بنجاح: `npm run build:gh-pages`
- [ ] جميع المسارات صحيحة في `vite.config.ts`
- [ ] ملف `_redirects` موجود في مجلد `public`
- [ ] ملف `sw.js` يستخدم المسارات الصحيحة
- [ ] ملف `manifest.json` يستخدم المسارات الصحيحة

### إعداد GitHub Pages
- [ ] تم إعداد GitHub Pages في إعدادات المستودع
- [ ] تم اختيار مصدر النشر الصحيح (Actions أو Branch)
- [ ] تم إعداد البيئة `github-pages` (إذا لزم الأمر)
- [ ] تم إزالة قيود الحماية (إذا لزم الأمر)

### بعد النشر
- [ ] الموقع يعمل على `https://username.github.io/repo-name/`
- [ ] جميع الملفات تحمل بدون أخطاء 404
- [ ] Service Worker يسجل بنجاح
- [ ] الترجمة تعمل بشكل صحيح
- [ ] جميع الروابط تعمل

## 🐛 استكشاف الأخطاء

### خطأ: "Branch is not allowed to deploy"
**الحل**: استخدم `deploy-manual.yml` أو أزل قيود الحماية

### خطأ: "Environment protection rules"
**الحل**: أضف الفرع `main` إلى قائمة الفروع المسموح لها أو استخدم النشر اليدوي

### خطأ: "Workflow not found"
**الحل**: تأكد من وجود ملفات workflow في مجلد `.github/workflows/`

### خطأ: "Permission denied"
**الحل**: تأكد من إعداد الصلاحيات الصحيحة في إعدادات المستودع

## 🔄 خطوات النشر السريع

### للنشر الفوري (بدون إعدادات خاصة):
```bash
# 1. بناء المشروع
npm run build:gh-pages

# 2. رفع ملفات البناء
git add dist -f
git commit -m "Deploy website"
git push origin main

# 3. تشغيل النشر اليدوي من GitHub Actions
```

### للنشر التلقائي (يتطلب إعدادات):
```bash
# 1. إعداد GitHub Pages للـ Actions
# 2. رفع التغييرات
git add .
git commit -m "Update website"
git push origin main

# 3. مراقبة النشر التلقائي
```

## 📞 الدعم

إذا استمرت المشكلة:
1. تحقق من إعدادات GitHub Pages
2. راجع سجلات GitHub Actions
3. تأكد من الصلاحيات
4. أنشئ issue في GitHub مع تفاصيل المشكلة

---

**ملاحظة**: الحل الأسرع هو استخدام `deploy-manual.yml` لأنه لا يتطلب إعدادات خاصة ويحل مشكلة حماية البيئة. 