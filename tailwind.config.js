/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-white": "#Ffff",
        "secondary-light-blue": "#21529a",
        "third-blue": "#160959",
        "frouth-red": "#FF0000",
        "fifth-purple":"#8f2393"
      },
      fontFamily: {
        primary_poppins: ["Poppins", "sans-seri"],
        secondary_roboto: ["Roboto", "sans-seri"],
      },
      fontSize:{
        font15:"15px",
        font20: "20px",
        font30:"30px",
        font40:"40px"
      },
      fontWeight:{
        normal:"400",
        medium:"600",
        bold:"700",
        extabold:"900"
      },
      textTransform:{
        capitalize: "capitalize",
        uppercase: "uppercase",
        lowercase: "lowercase"
      },
      backgroundImage: {
        'hero-pattern': "url('./public/gp2.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      boxShadow:{
        shadow:"shadow-[0px 0px 5px 1px rgba(173,167,167,0.76)]"
      }
    },
  },
  plugins: [],
};
