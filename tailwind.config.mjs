import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				serif: ['JetBrains Mono', ...defaultTheme.fontFamily.serif]
			},
			colors: {
				dark: {
					0: '#C9C9C9',
					1: '#b8b8b8',
					2: '#828282',
					3: '#696969',
					4: '#424242',
					5: '#3b3b3b',
					6: '#2e2e2e',
					7: '#242424',
					8: '#1f1f1f',
					9: '#141414'
				}
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme('colors.dark.7')
					}
				},
				dark: {
					css: [
						{
							color: theme('colors.stone.300')
						}
					]
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
