/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#312983',
				secondary: '#C63633',
				text_light: '#C3C2CA',
				bg: '#FAFAFC',
			},
		},
	},
	plugins: [],
}
