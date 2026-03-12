import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red:   '#E8381A',
          gold:  '#F5A623',
          green: '#1DB954',
          ink:   '#0D0D0D',
          dark:  '#141414',
          card:  '#1C1C1C',
          cream: '#F5F0E8',
          muted: '#888888',
        },
      },
      fontFamily: {
        sans: ['var(--font-bevietnam)', 'sans-serif'],
        display: ['var(--font-syne)', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        micPulse: {
          '0%, 100%': { boxShadow: '0 0 0 8px rgba(232,56,26,0.2), 0 0 0 16px rgba(232,56,26,0.06)' },
          '50%':      { boxShadow: '0 0 0 14px rgba(232,56,26,0.1), 0 0 0 26px rgba(232,56,26,0.03)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.4' },
        },
      },
      animation: {
        'fade-up':   'fadeUp 0.8s ease both',
        'mic-pulse': 'micPulse 2.5s ease-in-out infinite',
        'blink':     'blink 1s infinite',
        'pulse-dot': 'pulse 2s infinite',
      },
    },
  },
  plugins: [],
}
export default config
