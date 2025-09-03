import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-sans)'],
				mono: ['var(--font-mono)'],
			},
			colors: {
				'refreshly-green': '#415228',
				'refreshly-neutral-green': '#ecede9',
				refreshlyStart: '#fcb415',
				refreshlyEnd: '#f6871f',
			},
			backgroundImage: {
				'refreshly-gradient': 'linear-gradient(to right, #fcb415, #f6871f)',
			},
		},
	},
	darkMode: 'class',
	plugins: [heroui()],
};

module.exports = config;
