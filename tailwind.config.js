module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          'jerma-deep-blue': '#012846',
          'jerma-pink': '#F4516F',
          'jerma-light-blue': '#A5C5C8',
          'jerma-bright-blue': '#4EC8BD',
      },
      screens: {
                'm': {'raw': '(hover: hover)'},
            }
    },
  },
  plugins: [],
}