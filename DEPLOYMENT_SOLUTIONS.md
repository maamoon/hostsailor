# حلول مشاكل Service Worker و Manifest

## المشاكل الشائعة

### 1. خطأ MIME Type للـ Service Worker
```
SecurityError: Failed to register a ServiceWorker: The script has an unsupported MIME type ('text/html')
```

### 2. خطأ في ملف Manifest
```
Manifest: Line: 1, column: 1, Syntax error
```

## الحلول حسب نوع الخادم

### IIS (Internet Information Services)

#### ملف web.config
```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <!-- MIME Types -->
    <staticContent>
      <remove fileExtension=".js" />
      <mimeMap fileExtension=".js" mimeType="application/javascript" />
      <remove fileExtension=".json" />
      <mimeMap fileExtension=".json" mimeType="application/json" />
      <remove fileExtension=".svg" />
      <mimeMap fileExtension=".svg" mimeType="image/svg+xml" />
      <mimeMap fileExtension=".webmanifest" mimeType="application/manifest+json" />
    </staticContent>
    
    <!-- URL Rewrite -->
    <rewrite>
      <rules>
        <!-- Static files - serve directly -->
        <rule name="Static Files" stopProcessing="true">
          <match url="^(hostsailor/sw\.js|hostsailor/manifest\.json|hostsailor/favicon\.ico|hostsailor/logo\.svg|hostsailor/favicon\.svg|hostsailor/.*\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot))$" />
          <conditions>
            <add input="{REQUEST_FILENAME}" matchType="IsFile" />
          </conditions>
          <action type="None" />
        </rule>
        
        <!-- API routes - don't rewrite -->
        <rule name="API Routes" stopProcessing="true">
          <match url="^api/" />
          <action type="None" />
        </rule>
        
        <!-- SPA Routes - rewrite to index.html -->
        <rule name="SPA Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/hostsailor/" />
        </rule>
      </rules>
    </rewrite>
    
    <!-- Security headers -->
    <httpProtocol>
      <customHeaders>
        <add name="X-Content-Type-Options" value="nosniff" />
        <add name="X-Frame-Options" value="DENY" />
        <add name="X-XSS-Protection" value="1; mode=block" />
        <add name="Referrer-Policy" value="strict-origin-when-cross-origin" />
      </customHeaders>
    </httpProtocol>
    
    <!-- Compression -->
    <urlCompression doStaticCompression="true" doDynamicCompression="true" />
    <httpCompression>
      <staticTypes>
        <add mimeType="application/javascript" enabled="true" />
        <add mimeType="application/json" enabled="true" />
        <add mimeType="text/css" enabled="true" />
      </staticTypes>
    </httpCompression>
  </system.webServer>
</configuration>
```

#### متطلبات IIS
- URL Rewrite Module مثبت
- إعادة تشغيل IIS بعد إضافة web.config

### Apache

#### ملف .htaccess
```apache
# MIME Types
AddType application/javascript .js
AddType application/json .json
AddType image/svg+xml .svg
AddType application/manifest+json .webmanifest

# Security Headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"

# SPA Routing
RewriteEngine On
RewriteBase /hostsailor/
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /hostsailor/index.html [L]

# Cache Control
<FilesMatch "\.(js|css|png|jpg|jpeg|gif|ico|svg)$">
    ExpiresActive On
    ExpiresDefault "access plus 1 year"
</FilesMatch>
```

### Nginx

#### ملف nginx.conf
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    # Security headers
    add_header X-Frame-Options DENY;
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options nosniff;
    add_header Referrer-Policy "strict-origin-when-cross-origin";

    # Service Worker - correct MIME type
    location = /hostsailor/sw.js {
        add_header Content-Type "application/javascript";
        add_header Cache-Control "public, max-age=0, must-revalidate";
        try_files $uri =404;
    }

    # Manifest - correct MIME type
    location = /hostsailor/manifest.json {
        add_header Content-Type "application/json";
        add_header Cache-Control "public, max-age=0, must-revalidate";
        try_files $uri =404;
    }

    # SPA routing - fallback to index.html
    location /hostsailor/ {
        try_files $uri $uri/ /hostsailor/index.html;
    }
}
```

### Netlify

#### ملف _headers
```
/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

/hostsailor/sw.js
  Content-Type: application/javascript
  Cache-Control: public, max-age=0, must-revalidate

/hostsailor/manifest.json
  Content-Type: application/json
  Cache-Control: public, max-age=0, must-revalidate
```

#### ملف _redirects
```
# Static files - serve directly
/hostsailor/sw.js    /hostsailor/sw.js   200
/hostsailor/manifest.json    /hostsailor/manifest.json   200

# Redirect all routes to index.html for SPA routing
/hostsailor/*    /hostsailor/index.html   200
```

### Vercel

#### ملف vercel.json
```json
{
  "headers": [
    {
      "source": "/hostsailor/sw.js",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/javascript"
        }
      ]
    },
    {
      "source": "/hostsailor/manifest.json",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/json"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/hostsailor/sw.js",
      "destination": "/hostsailor/sw.js"
    },
    {
      "source": "/hostsailor/manifest.json",
      "destination": "/hostsailor/manifest.json"
    },
    {
      "source": "/hostsailor/(.*)",
      "destination": "/hostsailor/index.html"
    }
  ]
}
```

### Firebase

#### ملف firebase.json
```json
{
  "hosting": {
    "public": "dist",
    "headers": [
      {
        "source": "/hostsailor/sw.js",
        "headers": [
          {
            "key": "Content-Type",
            "value": "application/javascript"
          }
        ]
      },
      {
        "source": "/hostsailor/manifest.json",
        "headers": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ]
      }
    ],
    "rewrites": [
      {
        "source": "/hostsailor/sw.js",
        "destination": "/hostsailor/sw.js"
      },
      {
        "source": "/hostsailor/manifest.json",
        "destination": "/hostsailor/manifest.json"
      },
      {
        "source": "/hostsailor/**",
        "destination": "/hostsailor/index.html"
      }
    ]
  }
}
```

## خطوات التحقق

### 1. فحص نوع MIME
```bash
curl -I https://maamoon.github.io/hostsailor/sw.js
```
يجب أن يعطي:
```
Content-Type: application/javascript
```

### 2. فحص ملف Manifest
```bash
curl -I https://maamoon.github.io/hostsailor/manifest.json
```
يجب أن يعطي:
```
Content-Type: application/json
```

### 3. فحص Service Worker في المتصفح
```javascript
// في وحدة تحكم المتصفح
navigator.serviceWorker.getRegistrations().then(registrations => {
  console.log('Service Workers:', registrations);
});
```

## حلول إضافية

### 1. استخدام ملف Service Worker بديل
إذا استمرت المشكلة، يمكن استخدام `service-worker.js` بدلاً من `sw.js`:

```javascript
// في index.html
navigator.serviceWorker.register('/hostsailor/service-worker.js')
```

### 2. تعطيل Service Worker مؤقتاً
```javascript
// في index.html - تعليق تسجيل Service Worker
// navigator.serviceWorker.register('/hostsailor/sw.js')
```

### 3. فحص إعدادات الخادم
- تأكد من أن الخادم يدعم أنواع MIME المطلوبة
- تحقق من إعدادات التوجيه (URL Rewrite)
- تأكد من عدم وجود قواعد تعارض

## ملاحظات مهمة

1. **إعادة تشغيل الخادم**: بعد إضافة ملفات التكوين، أعد تشغيل الخادم
2. **مسح التخزين المؤقت**: امسح ذاكرة التخزين المؤقت للمتصفح
3. **فحص وحدة التحكم**: راقب وحدة تحكم المتصفح للأخطاء
4. **اختبار على متصفحات مختلفة**: تأكد من التوافق مع جميع المتصفحات

## روابط مفيدة

- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [IIS URL Rewrite](https://docs.microsoft.com/en-us/iis/extensions/url-rewrite-module/)
- [Netlify Headers](https://docs.netlify.com/configure-builds/file-based-configuration/#headers) 