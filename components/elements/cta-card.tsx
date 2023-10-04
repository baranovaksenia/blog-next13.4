import Image from 'next/image'

const CTACard = () => {
	return (
		<div className='relative px-6 py-10 overflow-hidden rounded-md bg-slate-100'>
			{/* Overlay */}
			<div className='absolute inset-0 z-10 bg-gradient-to-br from-white/95 via-white/70 to-white/30' />
			<Image
				fill
				alt='CTA Card Image'
				className='object-cover object-center'
				src='https://images.unsplash.com/photo-1538159021332-8f28e9eca2fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80'
			/>
			<div className='relative z-20'>
				<div className='text-lg font-medium text-green-800'>
					#DiscoverHealthierWorld
				</div>
				<h3 className='mt-3 text-4xl font-semibold'>
					Join Me in Pursuit of a Healthy Life
				</h3>
				<p className='max-w-lg mt-2 text-lg'>
					Join me in the pursuit of a healthier, happier life. Explore tips,
					recipes, and inspiration for your wellness journey.
				</p>
				{/* form */}
				<form
					// key={subscribersCount + 'subscribers-form'}
					// action={formAction}
					className='flex items-center w-full gap-2 mt-6'
				>
					<input
						type='email'
						name='email'
						placeholder='Write your email'
						className='w-full md:w-auto px-3 py-2 text-base rounded-md outline-none  placeholder:text-sm bg-white/80 focus:ring-2 ring-neutral-600'
					/>
					<button className='px-3 py-2 rounded-md whitespace-nowrap bg-neutral-900 text-neutral-200'>
						Sign Up
					</button>
				</form>

				{/* subscribers */}
				<div className='mt-5 text-neutral-700'>
					Join our
					<span className='mx-2 px-2 py-1 rounded-md bg-green-700 text-sm text-neutral-100 font-semibold'>
						20000+
					</span>
					subscribers
				</div>
			</div>
		</div>
	)
}

export default CTACard
