import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'loading-bar': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'border-travel': {
          '0%': {
            clipPath: 'inset(0 100% 100% 0)',
          },
          '25%': {
            clipPath: 'inset(0 0 100% 0)',
          },
          '50%': {
            clipPath: 'inset(0 0 0 0)',
          },
          '75%': {
            clipPath: 'inset(100% 0 0 0)',
          },
          '100%': {
            clipPath: 'inset(0 100% 100% 0)',
          }
        }
      },
      animation: {
        'loading-bar': 'loading-bar 1.5s ease-in-out infinite',
        'border-travel': 'border-travel 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
export default config 