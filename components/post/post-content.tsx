import { getReadingTime } from '@/lib/helpers'
import { Post } from '@/types/collection'
import { FaArrowRight } from 'react-icons/fa'

interface PostContentProps {
	post: Post
}

const PostContent = ({ post }: PostContentProps) => {
	return (
		<div className='space-y-2'>
			{/* Tags */}
			<div className='flex items-center gap-2 text-sm text-neutral-400'>
				<div
					className={`font-medium ${
						post.category.title === 'Anti Aging'
							? 'text-emerald-500'
							: 'text-indigo-600'
					}`}
				>
					{post.category.title}
				</div>
				<div className='w-2 h-2 rounded-full bg-neutral-200' />
				<div>{`${post.author.first_name} ${post.author.last_name}`}</div>
				<div className='w-2 h-2 rounded-full bg-neutral-200' />
				<div>{getReadingTime(post.body)}</div>
				<div className='w-2 h-2 rounded-full bg-neutral-200' />
				<div>{getReadingTime(post.date_created)}</div>
			</div>
			<h2 className='font-semibold text-3xl'>{post.title}</h2>
			<p className='leading-snug text-neutral-600'>{post.description}</p>
			<div className='flex items-center gap-2 pt-2'>
				Read More <FaArrowRight size='14' />
			</div>
		</div>
	)
}

export default PostContent
