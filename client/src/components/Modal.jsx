import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'
import { createPost, updatePost } from '../redux/actions/postActions'

const Modal = () => {
	const {user} = JSON.parse(localStorage.getItem("auth"));
	const dispatch = useDispatch()
	const [postData, setPostData] = useState({title: "", description: "", tag: "", username: user.username})
	const {modal} = useSelector(state=>state.modal)

	const onChangeForm = (e) => {
		setPostData({...postData, [e.target.name]: e.target.value})
	}

	const handleShare = () => {
		modal?.id ? dispatch(updatePost(modal.id, postData)) : dispatch(createPost(postData))
		dispatch({type: "MODAL", payload: false})
	}

	const closeModal = () => {
		dispatch({type: "MODAL", payload: false})
	}
	return (
		<div className='flex items-center justify-center w-full h-screen bg-opacity-50 bg-black fixed top-0 left-0 right-0 bottom-0 z-50'>
			<div className='bg-white w-1/3 p-4 rounded-lg'>
				<div className='flex items-center justify-between mb-3'>
					<h1 className='font-bold text-2xl'>{modal?.id ? "Edit Post" : "New Post"}</h1>
					<AiOutlineClose onClick={closeModal} className='cursor-pointer' size={25}/>
				</div>
				<div className='flex flex-col space-y-4'>
					<input value={postData.title} name="title" placeholder='Title' className='input' onChange={onChangeForm}/>
					<textarea value={postData.description} name="description" placeholder='Description' className='input' onChange={onChangeForm}/>
					<input value={postData.tag} name="tag" placeholder='Tag(Only one tag is allowed)' className='input' onChange={onChangeForm}/>
					<div onClick={handleShare} className='w-full p-2 cursor-pointer hover:bg-indigo-800 text-center bg-indigo-600 text-white rounded-md'>Share</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
