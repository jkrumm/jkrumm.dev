import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', ...defaultTheme.fontFamily.sans],
				manrope: ['Manrope', ...defaultTheme.fontFamily.sans],
				mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono]
			},
			fontSize: {
				'heading-1': ['2.75rem', { lineHeight: '1.2' }], // ~44px
				'heading-2': ['2.25rem', { lineHeight: '1.2' }], // ~36px
				'heading-3': ['1.75rem', { lineHeight: '1.2' }], // ~28px
				'heading-4': ['1.5rem', { lineHeight: '1.3' }], // ~24px
				'heading-5': ['1.25rem', { lineHeight: '1.4' }], // ~20px
				'heading-6': ['1.125rem', { lineHeight: '1.4' }] // ~18px
			},
			colors: {
				stone: {
					350: 'oklch(0.789 0.0075 56.313)'
				},
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
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						color: theme('colors.stone.600'),
						fontSize: '1.0625rem', // ~17px
						lineHeight: '1.65',
						maxWidth: 'none',

						'--heading-font-family': theme('fontFamily.manrope').join(', '),
						'--heading-tracking': '-0.01em',
						'--small-heading-font-family': theme('fontFamily.inter').join(', '),
						'--small-heading-font-weight': '600',

						'h1, h2, h3, h4, h5, h6': {
							margin: '0',
							color: theme('colors.stone.700'),
							fontWeight: 'var(--small-heading-font-weight)'
						},
						'h1, h2, h3, h4': {
							fontFamily: 'var(--heading-font-family)',
							letterSpacing: 'var(--heading-tracking)'
						},
						'h5, h6': {
							fontFamily: 'var(--small-heading-font-family)'
						},
						h1: { fontSize: theme('fontSize.heading-1[0]') },
						h2: { fontSize: theme('fontSize.heading-2[0]') },
						h3: { fontSize: theme('fontSize.heading-3[0]') },
						h4: { fontSize: theme('fontSize.heading-4[0]') },
						h5: { fontSize: theme('fontSize.heading-5[0]') },
						h6: { fontSize: theme('fontSize.heading-6[0]') },
						'h1, h2': { marginBottom: '1.5em' },
						'h3, h4': { marginBottom: '1.2em' },
						'h5, h6': { marginBottom: '1em' },
						a: {
							fontFamily: theme('fontFamily.inter').join(', '),
							textDecorationLine: 'underline',
							textUnderlineOffset: '2px',
							textDecorationColor: 'rgb(0 0 0 / 0.15)',
							transition: 'all 300ms ease-in-out',
							'&:hover': {
								color: 'rgb(0 0 0 / 1)',
								textDecorationColor: 'rgb(0 0 0 / 0.25)'
							}
						},
						table: {
							fontSize: '0.9375rem' // Slightly smaller than body text
						},
						'ul, ol': {
							paddingLeft: '1.5em',
							marginTop: '0.75em',
							marginBottom: '0.75em'
						},
						blockquote: {
							fontStyle: 'normal',
							borderLeftColor: theme('colors.stone.300')
						},
						lead: {
							color: theme('colors.stone.600')
						},
						hr: {
							borderColor: theme('colors.stone.400')
						}
					}
				},
				dark: {
					css: {
						color: theme('colors.stone.350'),
						'h1, h2, h3, h4, h5, h6': {
							color: theme('colors.stone.300')
						},
						a: {
							color: theme('colors.stone.300'),
							textDecorationColor: 'rgb(255 255 255 / 0.3)',
							'&:hover': {
								color: 'rgb(255 255 255 / 1)',
								textDecorationColor: 'rgb(255 255 255 / 0.5)'
							}
						},
						blockquote: {
							borderLeftColor: theme('colors.dark.4')
						},
						lead: {
							color: theme('colors.stone.300')
						},
						hr: {
							borderColor: theme('colors.stone.600')
						}
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
