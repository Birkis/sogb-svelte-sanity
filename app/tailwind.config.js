export default {
  content: [
    "./src/**/*.{js,ts,svelte}",
    "./src/**/**/*.{js,ts,svelte}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'serif': ['Times New Roman', 'serif'],
      'mono': ['Courier New', 'monospace'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: 'jit',
}
