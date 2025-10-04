import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  // تحديد نوع البيانات يكون json
  headers: {
    "Content-type": "application/json",
  },
  // تحديد مهلة الانتظار قبل قطع الاتصال
  timeout: 10000,
});
// هون رح نضيف بعدين كود تحقق وكشف أخطاء

export default api;

// https://api.devmmnd.com/products/
