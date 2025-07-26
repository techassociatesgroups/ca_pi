import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Modern Fintech-Inspired Palette
				primary: {
					DEFAULT: "#0033cc", // Deep Blue
					light: "#3366ff",
					dark: "#001a66",
					foreground: "#ffffff"
				},
				secondary: {
					DEFAULT: "#00bfae", // Teal Accent
					light: "#5eead4",
					dark: "#008c7a",
					foreground: "#ffffff"
				},
				background: {
					DEFAULT: "#f4f7fa", // Light Neutral
					dark: "#e5e9ef"
				},
				foreground: {
					DEFAULT: "#1a202c", // Cool Grey for text
					muted: "#6b7280"
				},
				border: "#e2e8f0", // Cool Grey border
				input: "#f1f5f9", // Slightly darker neutral for inputs
				ring: "#00bfae", // Teal accent for focus rings
				card: {
					DEFAULT: "#ffffff",
					foreground: "#1a202c"
				},
				muted: {
					DEFAULT: "#e5e9ef",
					foreground: "#6b7280"
				},
				accent: {
					DEFAULT: "#00bfae",
					foreground: "#ffffff"
				},
				popover: {
					DEFAULT: "#ffffff",
					foreground: "#1a202c"
				},
				destructive: {
					DEFAULT: "#e53e3e",
					foreground: "#ffffff"
				},
				sidebar: {
					DEFAULT: "#f4f7fa",
					foreground: "#0033cc",
					primary: "#0033cc",
					'primary-foreground': "#ffffff",
					accent: "#00bfae",
					'accent-foreground': "#ffffff",
					border: "#e2e8f0",
					ring: "#00bfae"
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
	plugins: [tailwindcssAnimate],
} satisfies Config;