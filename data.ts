import { Category, Post } from './types/collection'

export const DUMMY_POSTS: Post[] = [
	{
		id: '1',
		title: 'Top Foods for Anti-Aging',
		description:
			'Discover the best foods that can help you maintain youthful skin and health.',
		category: { id: '1', title: 'Anti Aging' },
		author: {
			id: '1',
			first_name: 'Jane',
			last_name: 'Smith',
		},
		slug: 'top-foods-for-anti-aging',
		image: 'https://example.com/anti-aging-image1.jpg',
		body: 'Aging is a natural process, but certain foods can help slow down the aging effects on your skin and body. Learn about the superfoods that can keep you looking and feeling youthful.',
		date_created: '2023-10-02T00:00:00.000Z',
		date_updated: '2023-10-02T00:00:00.000Z',
	},
	{
		id: '2',
		title: 'Nutrition Tips for Children: Building Healthy Habits',
		description:
			'Ensure your children get the right nutrition they need for growth and development.',
		category: { id: '2', title: 'Children Nutrition' },
		author: { id: '1', first_name: 'Jane', last_name: 'Smith' },
		slug: 'nutrition-tips-for-children',
		image: 'https://example.com/children-nutrition-image1.jpg',
		body: 'Proper nutrition is crucial for childrens physical and cognitive development. Learn how to create balanced meals for your kids and establish healthy eating habits from a young age.',
		date_created: '2023-10-02T00:00:00.000Z',
		date_updated: '2023-10-02T00:00:00.000Z',
	},
	{
		id: '3',
		title: 'The Role of Antioxidants in Anti-Aging',
		description:
			'Explore how antioxidants can combat the effects of aging and promote longevity.',
		category: { id: '1', title: 'Anti Aging' },
		author: { id: '1', first_name: 'Jane', last_name: 'Smith' },
		slug: 'role-of-antioxidants-in-anti-aging',
		image: 'https://example.com/anti-aging-image2.jpg',
		body: 'Antioxidants are powerful compounds that can help protect your cells from oxidative damage and slow down the aging process. Discover the sources and benefits of antioxidants in your diet.',
		date_created: '2023-10-02T00:00:00.000Z',
		date_updated: '2023-10-02T00:00:00.000Z',
	},
	{
		id: '4',
		title: 'Balancing Nutrients for Growing Kids',
		description:
			'Learn how to provide essential nutrients to support the growth and development of children.',
		category: { id: '2', title: 'Children Nutrition' },
		author: { id: '1', first_name: 'Jane', last_name: 'Smith' },
		slug: 'balancing-nutrients-for-growing-kids',
		image: 'https://example.com/children-nutrition-image2.jpg',
		body: 'Children have unique nutritional needs to support their growth, learning, and energy levels. Explore the key nutrients kids need and how to incorporate them into their diet.',
		date_created: '2023-10-02T00:00:00.000Z',
		date_updated: '2023-10-02T00:00:00.000Z',
	},
	{
		id: '5',
		title: 'Skincare Routine for Ageless Beauty',
		description:
			'Discover a skincare routine that can help you maintain youthful and radiant skin.',
		category: { id: '1', title: 'Anti Aging' },
		author: { id: '1', first_name: 'Jane', last_name: 'Smith' },
		slug: 'skincare-routine-for-ageless-beauty',
		image: 'https://example.com/anti-aging-image3.jpg',
		body: 'In addition to nutrition, a proper skincare routine plays a significant role in anti-aging. Learn about the steps and products to include in your daily skincare regimen.',
		date_created: '2023-10-02T00:00:00.000Z',
		date_updated: '2023-10-02T00:00:00.000Z',
	},
	{
		id: '6',
		title: 'Healthy Snacks for Kids: Tasty and Nutritious',
		description:
			'Explore delicious and nutritious snack ideas to keep your children satisfied and healthy.',
		category: { id: '2', title: 'Children Nutrition' },
		author: { id: '1', first_name: 'Jane', last_name: 'Smith' },
		slug: 'healthy-snacks-for-kids',
		image: 'https://example.com/children-nutrition-image3.jpg',
		body: 'Finding the right snacks for kids can be challenging. Discover a variety of healthy and tasty snack options that children will love and parents can feel good about.',
		date_created: '2023-10-02T00:00:00.000Z',
		date_updated: '2023-10-02T00:00:00.000Z',
	},
]

export const DUMMY_CATEGORIES: Category[] = [
	{
		id: '1',
		title: 'Anti Aging',
		slug: 'anti-aging',
		description:
			'Explore strategies and tips for maintaining youthful health and appearance.',
	},
	{
		id: '2',
		title: 'Children Nutrition',
		slug: 'children-nutrition',
		description:
			'Learn how to provide balanced nutrition for growing kids and promote their well-being.',
	},
]
