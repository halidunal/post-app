import React, { useState } from 'react'
import {BsThreeDotsVertical} from "react-icons/bs"
import { useDispatch } from 'react-redux';
import { deletePost } from '../redux/actions/postActions';

const PostCard = ({post}) => {
	const [showHide, setShowHide] = useState(false);
	const dispatch = useDispatch();

	const update = (id) => {
		setShowHide(false)
		dispatch({type: "MODAL", payload: {open: true, id}})
	}

	const remove = (id) => {
		setShowHide(false)
		dispatch(deletePost(post._id))
	}
	return (
		<div className='relative w-1/3 m-3 border p-3 rounded-md bg-gray-100 space-y-3'>
			<div className='flex justify-between items-end border-b-2 pb-2'>
				<div className='font-bold text-xl text-gray-700 cursor-pointer'>@{post?.username}</div>
				<BsThreeDotsVertical onClick={() => setShowHide(!showHide)} className='text-gray-500 cursor-pointer' size={20}/>
				{ showHide &&
				<ul className='absolute top-12 right-3 flex flex-col bg-white'>
					<li onClick={() => update(post._id)} className='p-1 pr-2 pl-2 cursor-pointer hover:bg-gray-300'>Edit</li>
					<li onClick={() => remove(post._id)} className='p-1 pr-2 pl-2 cursor-pointer hover:bg-gray-300'>Remove</li>
					<li className='p-1 pr-2 pl-2 cursor-pointer hover:bg-gray-300'>Report</li>
					<li className='p-1 pr-2 pl-2 cursor-pointer hover:bg-gray-300'>Fallow</li>
				</ul>}
			</div>
			<div className='font-bold text-xl'>{post?.title}</div>
			<div className='text-gray-700 text-l'>{post?.description}</div>
			<div className='flex justify-between border-t-2 pt-2'>
				<div className='font-bold text-sm text-gray-700'>{(post?.date)?.substring(0,10)}</div>
				<div className='font-bold text-sm text-gray-700 text-right'>#{post?.tag}</div>
			</div>
		</div>
	)
}

export default PostCard
