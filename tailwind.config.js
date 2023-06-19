/** @type {import('tailwindcss').Config} */
export const content = [
  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      body: {
        primary: "#0f172a",
        secondary: "#15203B"
      },
      primary: {
        10: "#2563eb",
      }
    },
    maxWidth: {
      'mxs': '15rem',
    },
    fontSize: {
      h1: ['3.5rem', {fontWeight: '600'}],
      h2: ['3.2rem', {fontWeight: '600'}],
      h3: ['2.5rem', {fontWeight: '600'}],
      h4: ['2.0rem', {fontWeight: '700'}],
      h6: ['1.2rem', {fontWeight: '700'}],
    },
    borderWidth: {
      '6': '6px',
    },
    blur: {
      full: '194px',
    },
  },
};
export const plugins = [];