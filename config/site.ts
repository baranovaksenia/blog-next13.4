export type SiteConfig = {
	siteName: string
	description: string
	currentlyAt: string
	currentlyAtFlag: string
	currentlyAtDescription: string
	currentlyAtImage: string
	currentlyAtImageAlt: string
	socialLinks: {
		twitter: string
		youtube: string
		github: string
		instagram: string
		linkedin: string
	}
}

const siteConfig = {
	siteName: 'Explorer Nutrition World',
	description:
		'Explore the world of nutrition in the UK! 🇬🇧 Discover healthy eating habits and more.',
	currentlyAt: 'London',
	currentlyAtFlag: '🇬🇧',
	currentlyAtDescription:
		'Nutrition in the UK is a very important topic. The UK has a very diverse population and a lot of people are interested in healthy eating habits. This website will help you explore the world of nutrition in the UK',
	currentlyAtImage:
		'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Tower_Bridge_and_Tower_of_London_2019.jpg/1920px-Tower_Bridge_and_Tower_of_London_2019.jpg',
	currentlyAtImageAlt: 'London',
	socialLinks: {
		twitter: 'https://twitter.com/nutritionuk',
		youtube: 'https://youtube.com/nutritionuk',
		github: 'https://github.com',
		instagram: 'https://instagram.com/nutritionuk',
		linkedin: 'https://linkedin.com/nutritionuk',
	},
}

export default siteConfig
