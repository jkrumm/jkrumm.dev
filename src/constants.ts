import avatar from '../public/avatar.png'

type Metadata = {
	TITLE: string
	DESCRIPTION: string
}

export const HOME: Metadata = {
	TITLE: 'Home',
	DESCRIPTION: 'Welcome to my personal website!'
}

export const PERSON = {
	name: 'Johannes Krumm',
	email: 'jkrumm@pm.me',
	url: 'jkrumm.dev',
	birthDate: new Date('1997-05-29'),
	image: `https://jkrumm.dev/${avatar.src}`,
	socials: {
		github: 'https://github.com/jkrumm',
		linkedin: 'https://www.linkedin.com/in/johannes-krumm/'
	},
	work: {
		title: 'Senior Fullstack Software Engineer and Tech Lead',
		company: 'Grafana',
		companyUrl: 'https://grafana.com'
	},
	age: (() => {
		const today = new Date()
		const birthDate = new Date('1997-05-29')
		let age = today.getFullYear() - birthDate.getFullYear()
		const monthDifference = today.getMonth() - birthDate.getMonth()
		if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
			age--
		}
		return age
	})()
} as const

export const PROJECTS: (
	| {
			size: 'large'
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
	  }
	| {
			size: 'small'
			title: string
			url: string
			technologies: string[]
			description: string
	  }
)[] = [
	{
		size: 'large',
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
		size: 'large',
		title: 'SnowFinder',
		image: {
			src: '/snow-finder.png',
			alt: 'SnowFinder showcase',
			loading: 'eager',
			width: 662,
			height: 442
		},
		url: 'https://snow-finder.jkrumm.dev',
		technologies: ['TypeScript', 'Bun', 'React', 'ChatGPT', 'Webscraping'],
		description:
			'SnowFinder is a chatbot that helps you find the best ski resorts for your next winter vacation. It uses ChatGPT to provide you with the best recommendations.'
	},
	{
		size: 'small',
		title: 'Anna Kowal Hautkonzept',
		url: 'https://anna-kowal.de/',
		technologies: ['Shopify', 'Liquid'],
		description:
			'A Shopify store for a beauty salon. It allows customers to book appointments and purchase beauty products.'
	},
	{
		size: 'small',
		title: 'Bitcoin Payment System',
		url: 'https://github.com/jkrumm/btc-payment-system',
		technologies: ['Java', 'Spring Boot', 'bitcoinj', 'SQL', 'React'],
		description:
			'An application that allows you to pay with Bitcoin. It generates a QR code with the payment information.'
	},
	{
		size: 'small',
		title: 'SY Serendipity',
		url: 'https://sy-serendipity.org/',
		technologies: ['Typescript', 'Gatsby', 'React'],
		description:
			'A blog about my sailing trip around the world. I share my experiences and adventures with the world.'
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
