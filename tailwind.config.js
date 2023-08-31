/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        reef: ['reef', 'sans'],
        // 'CustomFont' is the name you assigned in the @font-face declaration
        // 'sans' is the fallback font stack
      },
    },
  },
  plugins: [],
}

