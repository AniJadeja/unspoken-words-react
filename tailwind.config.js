/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        reef: ['reef', 'sans'],
        inter:['Inter','sans-serif']
        // 'CustomFont' is the name you assigned in the @font-face declaration
        // 'sans' is the fallback font stack
      },
      screens: {
        'sm': '300px',
        // => @media (min-width: 300px) { ... }
  
        'md': '600px',
        // => @media (min-width: 640px) { ... }
  
        'lg': '768px',
        // => @media (min-width: 768px) { ... }
  
        'xl': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        '2xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '3xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        'sm350': '350px',
        // => @media (min-width: 350px) { ... }
        'sm450': '450px',
        // => @media (min-width: 350px) { ... }
        'sm500': '500px',
        // => @media (min-width: 500px) { ... }
       
        'md700': '700px',
        // => @media (min-width: 700px) { ... }
       
        'md750': '750px',
        // => @media (min-width: 750px) { ... }
        'lg900': '900px',
        // => @media (min-width: 768px) { ... }
      }
    },
  },
  plugins: [],
}

