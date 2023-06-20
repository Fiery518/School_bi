/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  theme: {
    extend: {},
  },
  daisyui: {
    base: false,  //Set the backgound color to black in mytheme thing that we can create
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      {
        mytheme: {
        
          "primary": "#000000",
        
          "secondary": "#e9498c",
        
          "accent": "#fff133",
        
          "neutral": "#1a1a1a",
        
          "base-100": "#ffffff",
        
          "info": "#4aa8bf",
        
          "success": "#81328f",
        
          "warning": "#ef8234",
        
          "error": "#ea4034",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

