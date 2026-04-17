/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      "colors": {
          "error-container": "#9f0519",
          "inverse-surface": "#f9f9ff",
          "on-secondary-fixed": "#58007a",
          "on-tertiary": "#002e52",
          "on-primary-fixed-variant": "#005e64",
          "surface": "#050608",
          "background": "#050608",
          "on-primary": "#050608",
          "tertiary": "#65afff",
          "secondary-container": "#9800d0",
          "surface-container": "#0a0c10",
          "surface-container-highest": "#11141a",
          "surface-tint": "#00F0FF",
          "on-primary-container": "#005359",
          "surface-container-high": "#0d0f14",
          "error": "#ff716c",
          "on-error-container": "#ffa8a3",
          "primary-fixed-dim": "#00deec",
          "outline": "#4a4b50",
          "on-surface": "#f6f6fc",
          "tertiary-fixed-dim": "#51a7fe",
          "on-background": "#f6f6fc",
          "on-primary-fixed": "#003f43",
          "primary": "#00F0FF",
          "on-tertiary-container": "#00213e",
          "inverse-primary": "#006a71",
          "primary-fixed": "#00eefc",
          "tertiary-container": "#4aa2f9",
          "surface-variant": "#11141a",
          "on-error": "#490006",
          "surface-bright": "#1a1d24",
          "on-secondary-container": "#fff5fc",
          "on-tertiary-fixed-variant": "#003b68",
          "error-dim": "#d7383b",
          "surface-dim": "#050608",
          "primary-container": "#00F0FF",
          "on-secondary-fixed-variant": "#8300b4",
          "tertiary-fixed": "#72b5ff",
          "secondary": "#a2a5b0",
          "secondary-fixed": "#f0c1ff",
          "secondary-dim": "#b90afc",
          "on-surface-variant": "#8a8b90",
          "secondary-fixed-dim": "#eaaeff",
          "on-tertiary-fixed": "#001930",
          "primary-dim": "#00deec",
          "surface-container-lowest": "#000000",
          "on-secondary": "#390050",
          "inverse-on-surface": "#53555a",
          "surface-container-low": "#08090c",
          "outline-variant": "#2a2b30",
          "tertiary-dim": "#4aa2f9"
      },
      "borderRadius": {
          "DEFAULT": "0.25rem",
          "lg": "0.5rem",
          "xl": "0.75rem",
          "2xl": "1rem",
          "3xl": "1.5rem",
          "full": "9999px"
      },
      "fontFamily": {
          "headline": ["Space Grotesk", "sans-serif"],
          "body": ["Inter", "sans-serif"],
          "label": ["Manrope", "sans-serif"]
      },
      "animation": {
          'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      "keyframes": {
          'gradient-xy': {
              '0%, 100%': {
                  'background-size': '400% 400%',
                  'background-position': 'left center'
              },
              '50%': {
                  'background-size': '200% 200%',
                  'background-position': 'right center'
              }
          }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
