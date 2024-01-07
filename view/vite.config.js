import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),viteCompression()],



  build: {
    // Other build options...
    

    chunkSizeWarningLimit: 1000, // Set your preferred chunk size limit (in kilobytes)

    rollupOptions: {
      // Configure dynamic imports to code-split the application
      output: {
        manualChunks(id) {
          // Customize manual chunks as needed
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
})
