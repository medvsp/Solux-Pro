require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// قراءة مفتاح Pi Network من .env
const validationKey = process.env.VALIDATION_KEY;

// تأكد من وجود مجلد public
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

// إنشاء ملف validation-key.txt داخل public
fs.writeFileSync(path.join(publicDir, 'validation-key.txt'), validationKey);

// تقديم الملفات الثابتة من مجلد public
app.use(express.static(publicDir));

// صفحة رئيسية تعرض المفتاح (اختياري)
app.get('/', (req, res) => {
  res.send(`Pi Validation Key is: ${validationKey}`);
});

// تشغيل السيرفر على المنفذ 3000 أو المنفذ الافتراضي من Replit
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Pi Validation Key: ${validationKey}`);
  console.log(`Access the validation file at: http://localhost:${PORT}/validation-key.txt`);
});
