/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EB4034",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slideInLeft: {
          "0%": { opacity: 0, transform: "translateX(-30vw)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: 0, transform: "translateX(30vw)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },

          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(20vh)" },

          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideUpSmall: {
          "0%": { opacity: 0, transform: "translateY(5vh)" },

          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        textTransform: {
          "0%": {
            transform: " translateZ(0px)  ",
          },
          "100%": {
            transform: " translateZ(-50vh) ",
          },
        },
        "text-reveal": {
          "0%": {
            transform: "translate(0, 100%)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
        rotate1: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        rotate2: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
        "radar-spin": {
          from: {
            transform: "rotate(20deg)",
          },
          to: {
            transform: "rotate(380deg)",
          },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        wave: {
          "0%": { transform: "rotate(-30deg)" },
          "50%": { transform: "rotate(-15deg)" },
          "100%": { transform: "rotate(-30deg)" },
        },
      },
      animation: {
        rotate: "rotate 6s linear infinite",
        slideUp: "slideUp 1s ease-in-out forwards",
        slideUpSlow: "slideUp 2s ease-in-out forwards",
        slideUpSmall: "slideUpSmall 0.5s ease-in-out forwards",
        textTransform: "textTransform 2s ease-in-out forwards",
        "text-reveal": "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
        "radar-spin": "radar-spin 4s linear infinite",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        rotate1: "rotate1 18s linear infinite",
        rotate2: "rotate2 18s linear infinite",
        slideInLeft: "slideInLeft 1.5s ease-in-out forwards",
        slideInRight: "slideInRight 1.5s ease-in-out forwards",
        infinitescroll: "infinite-scroll 25s linear infinite",
        infinitescrollFast: "infinite-scroll 5s linear infinite",
        wave: "wave 2s infinite",
      },
    },
  },
  plugins: [],
};
