module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your file structure
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "Roboto", "Open Sans", "Arial", "sans-serif"],
        heading: ["Montserrat", "Poppins", "sans-serif"],
        body: ["Lato", "Open Sans", "sans-serif"], // You can define this for body text
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        primary: "#4F46E5",
        secondary: "#10B981",
        accent: "#FBBF24",
        neutralLight: "#F9FAFB",
        neutralDark: "#111827",
      },
      animation: {
        fadeIn: "fadeIn .5s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
