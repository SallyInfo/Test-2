import axios from "axios";

const api = axios.create({
    // قاعدة رابط الطلب الأساسي: الآن نشير إلى Proxy الذي يغلف العنوان الحقيقي
    // Vite سيرسل الطلب إلى /api، ثم سيقوم Proxy بتوجيهه إلى https://api.devmmnd.com
    baseURL:"/api",
    // تحديد نوع البيانات يكون json
    headers:{
        "Content-type":"application/json"
    },
    // تحديد مهلة الانتظار قبل قطع الاتصال
    timeout:10000
});
// هون رح نضيف بعدين كود تحقق وكشف أخطاء

export default api;

// https://api.devmmnd.com/products/