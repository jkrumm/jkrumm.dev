export const SITE = {
	NAME: 'jkrumm.dev',
	EMAIL: 'jkrumm@pm.me',
	BIRTHDAY: new Date('1997-05-29'),
	get AGE() {
		const today = new Date()
		let age = today.getFullYear() - this.BIRTHDAY.getFullYear()
		const monthDifference = today.getMonth() - this.BIRTHDAY.getMonth()
		if (
			monthDifference < 0 ||
			(monthDifference === 0 && today.getDate() < this.BIRTHDAY.getDate())
		) {
			age--
		}
		return age
	}
} as const

type Metadata = {
	TITLE: string
	DESCRIPTION: string
}

export const HOME: Metadata = {
	TITLE: 'Home',
	DESCRIPTION: 'Welcome to my personal website!'
}

export const PROJECTS: {
	colSpan: number
	title: string
	image: {
		src: string
		alt: string
		loading: 'lazy' | 'eager'
		width: number
		height: number
	}
	url: string
	technologies: string[]
	technologiesTwo?: string[]
	description: string
}[] = [
	{
		colSpan: 2,
		title: 'Free-Planning-Poker.com',
		image: {
			src: 'https://raw.githubusercontent.com/jkrumm/planning-poker/master/public/recording.gif',
			alt: 'Free-Planning-Poker.com showcase',
			loading: 'eager',
			width: 662,
			height: 414
		},
		url: 'https://free-planning-poker.com?source=jkrumm.dev',
		technologies: ['TypeScript', 'Next.js', 'ElysiaJS', 'Python', 'SQL', 'Websockets', 'SEO'],
		technologiesTwo: ['Users: +3.300', 'Estimations: +16.000'],
		description:
			'Free-Planning-Poker.com is a free online planning poker tool for distributed teams. It provides a simple and easy-to-use interface for estimating user stories.'
	},
	{
		colSpan: 2,
		title: 'SnowFinder',
		image: {
			src: '/snow-finder.png',
			alt: 'SnowFinder showcase',
			loading: 'lazy',
			width: 662,
			height: 442
		},
		url: 'https://snow-finder.jkrumm.dev',
		technologies: ['TypeScript', 'Bun', 'React', 'ChatGPT', 'Webscraping'],
		description:
			'SnowFinder is a chatbot that helps you find the best ski resorts for your next winter vacation. It uses ChatGPT to provide you with the best recommendations.'
	}
]

export const EXPERIENCES: {
	company: string
	location: string
	description: string
	positions: {
		title: string
		duration: string
		technologies: string[]
		description: string
	}[]
}[] = [
	{
		company: 'IU - International University',
		location: 'Munich, Germany',
		description: `
      With over 160,000 active students, the IU is the largest private university in Europe.
      They transitioned to be a tech company to enable their exponential growth.
      They have established an enterprise-level software department and industry-leading software solutions.
    `,
		positions: [
			{
				title: 'Tech Lead',
				duration: '2020 - Now',
				technologies: ['Domain-Driven-Design', 'Technical Leadership', 'Agile Mythologies'],
				description: `
          Let's make the necessary adjustments to your Tailwind CSS stepper component to align everything
          in the 3/4 column, eliminate extra backgrounds and colors, and ensure multiple connector circles
          are properly aligned.
        `
			},
			{
				title: 'Senior Fullstack Software Engineer',
				duration: '2019 - 2020',
				technologies: ['TypeScript', 'NestJS', 'Vue.js', 'Kafka', 'SQL', 'AWS'],
				description: `
          Leading a team to develop full-stack applications using modern frameworks and libraries.
          Focusing on scalable architecture and clean code principles.
        `
			},
			{
				title: 'Fullstack Software Engineer',
				duration: '2019 - 2020',
				technologies: ['TypeScript', 'NestJS', 'Vue.js', 'Kafka', 'SQL', 'AWS'],
				description: `
          Leading a team to develop full-stack applications using modern frameworks and libraries.
          Focusing on scalable architecture and clean code principles.
        `
			}
		]
	},
	{
		company: 'SquareTrade',
		location: 'San Francisco, USA',
		description: `
      With over 160,000 active students, the IU is the largest private university in Europe.
      They transitioned to be a tech company to enable their exponential growth.
      They have established an enterprise-level software department and industry-leading software solutions.
    `,
		positions: [
			{
				title: 'Data Engineer',
				duration: '2020 - Now',
				technologies: ['Java', 'Spring Boot', 'Informatica', 'SQL'],
				description: `
          Let's make the necessary adjustments to your Tailwind CSS stepper component to align everything
          in the 3/4 column, eliminate extra backgrounds and colors, and ensure multiple connector circles
          are properly aligned.
        `
			},

			{
				title: 'Data Engineer Intern',
				duration: '2020 - Now',
				technologies: ['Java', 'Spring Boot', 'AngularJS', 'SQL'],
				description: `
          Let's make the necessary adjustments to your Tailwind CSS stepper component to align everything
          in the 3/4 column, eliminate extra backgrounds and colors, and ensure multiple connector circles
          are properly aligned.
        `
			}
		]
	}
]
