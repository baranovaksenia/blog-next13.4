import siteConfig from '@/config/site'
import Link from 'next/link'
import SocialLink from '../elements/social-link'
import PaddingContainer from '../layout/padding-container'

const Footer = () => {
	return (
		<footer className='py-8 mt-10 border-t'>
			<PaddingContainer>
				<div>
					<h2 className='text-3xl font-bold'>{siteConfig.siteName}</h2>
					<p className='max-w-md mt-2 text-lg text-neutral-700'>
						{siteConfig.description}
					</p>
				</div>

				<div className='flex justify-between flex-wrap gap-4 mt-6'>
					<div>
						<div className='font-medium text-lg'>#healthylifestyle</div>
						<div className='flex items-center gap-3 mt-2 text-neutral-600'>
							<SocialLink
								platform='twitter'
								link={siteConfig.socialLinks.twitter}
							/>
							<SocialLink
								platform='instagram'
								link={siteConfig.socialLinks.instagram}
							/>
							<SocialLink
								platform='github'
								link={siteConfig.socialLinks.github}
							/>
							<SocialLink
								platform='youtube'
								link={siteConfig.socialLinks.youtube}
							/>
							<SocialLink
								platform='linkedin'
								link={siteConfig.socialLinks.linkedin}
							/>
						</div>
					</div>
					<div>
						<div className='text-sm text-neutral-400'>Currently At</div>
						<div className='flex items-center gap-2 px-3 py-2 bg-white rounded-md shadow-md'>
							<div className='w-2 h-2 bg-emerald-400 rounded-full' />
							{siteConfig.currentlyAt}
						</div>
					</div>
				</div>

				<div className='flex flex-wrap justify-between items-center gap-4 py-3 border-t mt-16'>
					<div className='text-sm text-neutral-400'>
						&copy; {new Date().getFullYear()} {siteConfig.siteName}. All rights
						reserved.
					</div>
					<div className='text-sm'>
						Made{' '}
						<Link
							className='text-emerald-900 underline underline-thickness-thin underline-offset-small'
							href='/'
						>
							@XeniaBaranova
						</Link>
					</div>
				</div>
			</PaddingContainer>
		</footer>
	)
}

export default Footer
