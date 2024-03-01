/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
		colors: {
			white: "hsl(180, 0%, 100%)",
			LightCyan: "hsl(193, 38%, 86%)",
			NeonGreen: "hsl(150, 100%, 66%)",
			GrayishBlue: " hsl(217, 19%, 38%)",
			DarkGrayishBlue: "hsl(217, 19%, 24%)",
			darkBlue: "hsl(218, 23%, 16%)",
		},
	},
	plugins: [],
}
