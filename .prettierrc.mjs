// .prettierrc.mjs
/** @type {import('prettier').Config} */
export default {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	semi: false,
	printWidth: 100,
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	tailwindStylesheet: './styles/root.css',
	tailwindFunctions: ['clsx', 'tw'],
	tailwindConfig: './tailwind.config.mjs',
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
	]
}
