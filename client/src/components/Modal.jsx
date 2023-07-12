import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = () => {
	const dispatch = useDispatch()
	const [postData, setPostData] = useState({title: "", description: "", tag: ""})

	const onChangeForm = (e) => {
		setPostData({...postData, [e.target.name]: e.target.value})
	}

	const handleShare = () => {

	}

	const closeModal = () => {
		dispatch({type: "MODAL", payload: false})
	}
	return (
		<div className='flex items-center justify-center w-full h-screen bg-opacity-50 bg-black fixed top-0 left-0 right-0 bottom-0 z-50'>
			<div className='bg-white w-1/3 p-2 rounded-lg'>
				<div className='flex items-center justify-between mb-3'>
					<h1 className='font-bold text-2xl'>New Post</h1>
					<AiOutlineClose onClick={closeModal} className='cursor-pointer' size={25}/>
				</div>
				<div className='flex flex-col space-y-4'>
					<input value={postData.title} name="title" placeholder='Title' className='input' onChange={onChangeForm}/>
					<input value={postData.description} name="description" placeholder='Description' className='input' onChange={onChangeForm}/>
					<input value={postData.tag} name="tag" placeholder='Tag(Only one tag is allowed)' className='input' onChange={onChangeForm}/>
					<div onClick={handleShare} className='w-full p-2 cursor-pointer hover:bg-indigo-800 text-center bg-indigo-600 text-white rounded-md'>Share</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
