import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import  { resolve , dirname} from 'path'
import { fileURLToPath} from 'url'

export default defineConfig({
  plugins: [
    tailwindcss(),
      react()
  ],
  resolve: {
    alias: {
      '@store':resolve(dirname(fileURLToPath(import.meta.url)),'src/store'),
      '@hoc':resolve(dirname(fileURLToPath(import.meta.url)),'src/hoc'),
      '@components':resolve(dirname(fileURLToPath(import.meta.url)),'src/components'),
      '@windows':resolve(dirname(fileURLToPath(import.meta.url)),'src/windows'),
      '@constants':resolve(dirname(fileURLToPath(import.meta.url)),'src/constants'),
    }
  }
})
