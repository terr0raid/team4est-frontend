/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/stories/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: ['class', '[data-mode="dark"]'],
	theme: {
		extend: {
			colors: {
				primary: '#ecf2fd',
				secondary: '#030d21',
				primaryButton: '#4882ef',
				secondaryButton: '#000205',
				accent: {
					DEFAULT: '#5f92f1',
					600: '#3d78d8',
				},
			},
		},
	},
	plugins: [],
}
