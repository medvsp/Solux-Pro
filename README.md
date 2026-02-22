# Solux-Pro

تطبيق Node.js مع دعم Pi Network Validation Key.

## المتطلبات
- Node.js >= 18
- Replit أو أي استضافة تدعم Node.js
- Express.js

## خطوات التشغيل

1. استنساخ المشروع:
```bash
git clone https://github.com/username/Solux-Pro.git
cd Solux-Pro
```

2. تثبيت الاعتمادات:
```bash
npm install
```

3. إنشاء ملف `.env` وإضافة مفتاح التحقق:
```bash
VALIDATION_KEY=انسخ_المفتاح_هنا
```

4. تشغيل السيرفر:
```bash
node index.js
```

5. تحقق من الرابط المباشر للملف:
```
https://<project-name>.<username>.repl.co/validation-key.txt
```
- إذا ظهر المفتاح، اضغط على **Verify** في لوحة Pi Network للتحقق من ملكية الدومين.

## ملاحظات مهمة
- لا تشارك `.env` على GitHub.
- الملف `validation-key.txt` يتم إنشاؤه تلقائيًا عند تشغيل السيرفر.
- على Replit، تأكد من تشغيل السيرفر ليكون الملف متاح للويب.
