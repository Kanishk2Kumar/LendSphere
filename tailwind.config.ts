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
  			background: '#FFFFFF',
  			foreground: '#0a2540',
  			card: {
  				DEFAULT: '#B4D4FF',
  				foreground: '#0a2540'
  			},
  			popover: {
  				DEFAULT: '#86B6F6',
  				foreground: '#FFFFFF'
  			},
  			primary: {
  				DEFAULT: '#86B6F6',
  				foreground: '#FFFFFF'
  			},
  			secondary: {
  				DEFAULT: '#B4D4FF',
  				foreground: '#001F3F'
  			},
  			muted: {
  				DEFAULT: '#F0F5FF',
  				foreground: '#86B6F6'
  			},
  			accent: {
  				DEFAULT: '#86B6F6',
  				foreground: '#FFFFFF'
  			},
  			destructive: {
  				DEFAULT: '#FF6961',
  				foreground: '#FFFFFF'
  			},
  			border: '#B4D4FF',
  			input: '#E6F0FF',
  			ring: '#86B6F6',
  			chart: {
  				'1': '#86B6F6',
  				'2': '#B4D4FF',
  				'3': '#001F3F',
  				'4': '#F0F5FF',
  				'5': '#FF6961'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
