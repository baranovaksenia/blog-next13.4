import Link from 'next/link'
import PaddingContainer from '../layout/padding-container'

// Define an array of link objects
const links = [
	{ title: 'Anti Aging', href: '/anti-aging' },
	{ title: 'Children Nutrition', href: '/children-nutrition' },
	// Add more links as needed
]

const Navigation = () => {
	return (
		<div className='sticky z-[999] top-0 left-0 right-0 border-b bg-opacity-50 backdrop-blur-md'>
			<PaddingContainer>
				<div className='flex items-center justify-between py-4 '>
					<Link className='text-lg font-bold' href='/'>
						HealthyLife🥗
					</Link>
					{/* category links */}
					<nav>
						<ul className='flex items-center gap-4 text-neutral-600'>
							{links.map((link, index) => (
								<li key={index}>
									{/* TODO: add underline hover */}
									<Link
										className='text-neutral-600 hover:text-green-900 active:text-green-900'
										href={link.href}
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</PaddingContainer>
		</div>
	)
}

export default Navigation
