// tailwind.config.js
module.exports = {
    content: [
      "./screens/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        boxShadow: {
          '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        }
      }
    }
    // ...
  };