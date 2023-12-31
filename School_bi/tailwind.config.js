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
      {
        mytheme: {
          
          "primary": "#2563eb",
                   
          "secondary": "#eab308",
                   
          "accent": "#fff133",
                   
          "neutral": "#1a1a1a",
                   
          "base-100": "#ffffff",
                   
          "info": "#4aa8bf",
                   
          "success": "#84cc16",
                   
          "warning": "#ef8234",
                   
          "error": "#ea4034",
         },
       },
      ],
     },
  plugins: [require("daisyui")],
}

