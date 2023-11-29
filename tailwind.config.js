/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/js/script.js', './src/**/*.{html,js}'],
  theme: {
    extend: {
      screens:{
        x_sm : '375',
      },
      colors:{
        // Primary
        // (intro and email sign up background)
        Dark_Blue: 'hsl(217, 28%, 15%)',
        // (main background)
        Dark_Blue1: 'hsl(218, 28%, 13%)',
        // (footer background)
        Dark_Blue2 : 'hsl(216, 53%, 9%)',
        // (testimonials background)
        Dark_Blue3 : 'hsl(219, 30%, 18%)',
        // Accent
        // (inside call-to-action gradient)
        Cyan : 'hsl(176, 68%, 64%)',
        // (inside call-to-action gradient)
        Blue : 'hsl(198, 60%, 50%)',
        //  (error)
        Light_Red: 'hsl(0, 100%, 63%)',
        // Neutral
        White: 'hsl(0, 0%, 100%)',
      },
      fontFamily:{
        Open_sans: "'Open Sans', sans-serif",
        Raleway: "'Raleway', sans-serif"
      },
      backgroundImage:{
        desktop : "url('../../images/bg-curvy-desktop.svg')",
        mobile : "url('../../images/bg-curvy-mobile.svg')"
      }
    },
  },
  plugins: [],
}

