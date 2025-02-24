/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    // container:{center:true},
    container:{center:true}
  },
  plugins: ["./src/**/*.{html,ts}"],
}

