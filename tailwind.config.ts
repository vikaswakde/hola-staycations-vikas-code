import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {  // Corrected 'font-Family' to 'fontFamily'
        cinzel: ["var(--font-cinzel)"],
      },
    },
  },
  plugins: [],
};

// Add custom styles
const customStyles = {
  '.no-scrollbar::-webkit-scrollbar': {
    display: 'none',
  },
  '.no-scrollbar': {
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
  },
};

const finalConfig = {
  ...config,
  theme: {
    ...(config?.theme ?? {}),
    extend: {
      ...(config?.theme?.extend ?? {}),
    },
  },
  plugins: [
    function({ addUtilities }: { addUtilities: (styles: object) => void }) {
      addUtilities(customStyles);
    },
    ...(config?.plugins ?? []),
  ],
};

export default finalConfig;
