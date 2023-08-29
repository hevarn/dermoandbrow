import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
                        $bg: #eeece5;
                        $y: #a58725;
                        $b: #00eded;
                        $w: $bg;
                        $o: #fe4e01;
                        $p: #eb98b4;
                        $g: #08350e;
                        $elastic: cubic-bezier(0.175, 0.885, 0.32, 1.275);
                        $expo: cubic-bezier(1, 0.885, 0.32, 1);
        
                        `,
      },
    }
  },
})
