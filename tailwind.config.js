/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#5AF4FF',
        'neon-magenta': '#FF3EA5',
        'terminal-bg': '#050608',
        // Neo-western colors
        'dust': '#8B7355',
        'sage': '#9CAF88',
        'rust': '#B87333',
        'desert-sand': '#EDC9AF',
        'sunset': '#D2691E',
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        western: ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}

