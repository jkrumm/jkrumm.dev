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
