/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode using 'dark' class
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'muted-foreground': 'var(--muted-foreground)',
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        'primary-dark': 'var(--primary-dark)',
        'primary-foreground': 'var(--primary-foreground)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        'border-muted': 'var(--border-muted)',
        accent: 'var(--accent)',
      },
    },
  },
  plugins: [],
}