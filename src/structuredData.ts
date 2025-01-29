import { type Article, type Person, type WebSite, type WithContext } from 'schema-dts'
import avatar from '../public/avatar.png'
import { PERSON } from '@constants'
import type { CollectionEntry } from 'astro:content'

export const blogWebsite: WithContext<WebSite> = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	url: `https://${PERSON.url}/blog`,
	name: `${PERSON.name} - Blog`,
	description: 'Fullstack development with Typescript insights',
	inLanguage: 'en_US'
}

export const mainWebsite: WithContext<WebSite> = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	url: `https://${PERSON.url}`,
	name: `${PERSON.name} - Personal page`,
	description: `${PERSON.name}'s contact page, portfolio and blog`,
	inLanguage: 'en_US'
}

export const personSchema: WithContext<Person> = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: PERSON.name,
	email: PERSON.email,
	url: PERSON.url,
	birthDate: PERSON.birthDate.toISOString(),
	image: PERSON.image,
	sameAs: [PERSON.socials.github, PERSON.socials.linkedin],
	jobTitle: PERSON.work.title,
	worksFor: {
		'@type': 'Organization',
		name: PERSON.work.company,
		url: PERSON.work.companyUrl
	}
}

export function getArticleSchema(post: CollectionEntry<'blog'>) {
	const articleStructuredData: WithContext<Article> = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: post.data.title,
		url: `${import.meta.env.SITE}/blog/${post.slug}/`,
		image: {
			'@type': 'ImageObject',
			url: `${import.meta.env.SITE}${post.data.cover.src}/`
		},
		description: post.data.excerpt,
		datePublished: post.data.date.toString(),
		publisher: {
			'@type': 'Person',
			name: 'Dzmitry Kozhukh',
			url: import.meta.env.SITE,
			image: import.meta.env.SITE + avatar.src
		},
		author: {
			'@type': 'Person',
			name: 'Dzmitry Kozhukh',
			url: import.meta.env.SITE,
			image: import.meta.env.SITE + avatar.src
		}
	}
	return articleStructuredData
}
