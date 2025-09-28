import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // إعدادات الخادم لتجاوز CORS باستخدام Proxy
  server: {
    proxy: {
      // عندما يحاول التطبيق طلب مسار يبدأ بـ /api/
      '/api': {
        // يتم توجيه الطلب إلى عنوان API الحقيقي
        target: 'https://api.devmmnd.com',
        // هذا ضروري للسيرفرات التي تستخدم HTTPS
        changeOrigin: true,
        // إعادة كتابة المسار: إزالة /api/ من الطلب قبل إرساله إلى السيرفر
        // مثلاً: /api/products/1/ يصبح products/1/
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
