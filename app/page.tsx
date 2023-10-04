import CTACard from '@/components/elements/cta-card'
import PaddingContainer from '@/components/layout/padding-container'
import PostCard from '@/components/post/post-card'
import PostList from '@/components/post/post-list'
import { DUMMY_POSTS } from '@/data'

const Home = () => {
	return (
		<PaddingContainer>
			<div className='h-auto space-y-20'>
				<PostCard post={DUMMY_POSTS[0]} />
				<PostList
					posts={DUMMY_POSTS.filter((_post, index) => index > 0 && index < 3)}
				/>
				<CTACard />
				<PostCard post={DUMMY_POSTS[3]} reverse />
				<PostList
					posts={DUMMY_POSTS.filter((_post, index) => index > 3 && index < 6)}
				/>
			</div>
		</PaddingContainer>
	)
}

export default Home
