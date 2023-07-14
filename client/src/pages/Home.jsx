import React from 'react'
import { useSelector } from 'react-redux'
import PostCard from '../components/PostCard'

const Home = () => {
	const {posts} = useSelector(state => state.post)

	console.log(posts)
	return (
		<div className='flex items-center m-5 flex-col'>
			{posts?.map((post, key) => (
				<PostCard key={key} post={post} />
			))}
		</div>
	)
}

export default Home
