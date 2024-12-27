import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF', // White background
        foreground: '#0a2540', // Dark blue text
        card: {
          DEFAULT: '#B4D4FF', // Light blue card background
          foreground: '#0a2540', // Dark blue text on cards
        },
        popover: {
          DEFAULT: '#86B6F6', // Medium blue for popovers
          foreground: '#FFFFFF', // White text on popovers
        },
        primary: {
          DEFAULT: '#86B6F6', // Medium blue for primary actions
          foreground: '#FFFFFF', // White text on primary elements
        },
        secondary: {
          DEFAULT: '#B4D4FF', // Light blue for secondary actions
          foreground: '#001F3F', // Dark text for secondary actions
        },
        muted: {
          DEFAULT: '#F0F5FF', // A very light blue for muted elements
          foreground: '#86B6F6', // Subdued blue text
        },
        accent: {
          DEFAULT: '#86B6F6', // Medium blue for accents
          foreground: '#FFFFFF', // White text on accents
        },
        destructive: {
          DEFAULT: '#FF6961', // Red for destructive actions
          foreground: '#FFFFFF', // White text on destructive elements
        },
        border: '#B4D4FF', // Light blue for borders
        input: '#E6F0FF', // Slightly tinted blue for input backgrounds
        ring: '#86B6F6', // Medium blue for focus rings
        chart: {
          '1': '#86B6F6',
          '2': '#B4D4FF',
          '3': '#001F3F',
          '4': '#F0F5FF',
          '5': '#FF6961',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
