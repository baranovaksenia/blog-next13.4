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
		image:
			'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
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
		image:
			'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
		body: 'Proper nutrition is crucial for childrens physical and cognitive development. Learn how to create balanced meals for your kids and establish healthy eating habits from a young age. Proper nutrition is crucial for childrens physical and cognitive development. Learn how to create balanced meals for your kids and establish healthy eating habits from a young age. Proper nutrition is crucial for childrens physical and cognitive development. Learn how to create balanced meals for your kids and establish healthy eating habits from a young age. Proper nutrition is crucial for childrens physical and cognitive development. Learn how to create balanced meals for your kids and establish healthy eating habits from a young age. Proper nutrition is crucial for childrens physical and cognitive development. Learn how to create balanced meals for your kids and establish healthy eating habits from a young age. Proper nutrition is crucial for childrens physical and cognitive development. Learn how to create balanced meals for your kids and establish healthy eating habits from a young age. Proper nutrition is crucial for childrens physical and cognitive development. Learn how to create balanced meals for your kids and establish healthy eating habits from a young age. Proper nutrition is crucial for childrens physical and cognitive development. Learn how to create balanced meals for your kids and establish healthy eating habits from a young age. Proper nutrition is crucial for childrens physical and cognitive development. Learn how to create balanced meals for your kids and establish healthy eating habits from a young age.',
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
		image:
			'https://images.unsplash.com/photo-1521986329282-0436c1f1e212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80',
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
		image:
			'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
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
		image:
			'https://images.unsplash.com/photo-1606756790138-261d2b21cd75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80',
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
		image:
			'https://images.unsplash.com/photo-1521986329282-0436c1f1e212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80',
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
