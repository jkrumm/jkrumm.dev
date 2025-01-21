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

export const JOBS: {
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
      They have established an enterprise-level software department and industry-leading software solutions and academic offerings.
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
