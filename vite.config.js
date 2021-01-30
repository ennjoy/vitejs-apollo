import vue from '@vitejs/plugin-vue'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  optimizeDeps: {
    include: [
      '@apollo/client/core',
      '@apollo/client/cache'
    ]
  },
  rollupInputOptions: {
    external: [
      'react'
    ]
  }
}
