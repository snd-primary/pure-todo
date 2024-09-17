import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	// Whether to use css reset
	preflight: true,
	jsxFramework: "react",

	// Where to look for your css declarations
	include: [
		"./components/**/*.{js,jsx,ts,tsx}",
		"./app/**/*.{js,jsx,ts,tsx}",
		"./stories/**/*.{js,jsx,ts,tsx}",
	],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			tokens: {
				fonts: {
					gaistMono: {
						value:
							"var(--font-geist-mono),ui-monospace,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,SFMono-Regular,Roboto Mono,Menlo,Monaco,Liberation Mono,DejaVu Sans Mono,Courier New,monospace",
					},
					gaistSans: {
						value:
							"var(--font-geist-sans),Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,arial",
					},
				},
			},
		},
	},

	// The output directory for your css system
	outdir: "styled-system",
});
