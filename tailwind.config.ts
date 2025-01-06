import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        primary: "#E61C20",
        dark: "#474747",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
=======
        primary: "#E5202C",
        secondary: "#FF5555",
        dark: "#424242",
      },
    },
    fontFamily: {
      sans: ["montserrat", "sans-serif"],
>>>>>>> new-branch
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "2rem",
        xl: "2rem",
      },
      screens: {
        sm: "100%",
        md: "100%",
        lg: "950px",
        xl: "950px",
      },
    },
  },
  plugins: [],
};

export default config;
