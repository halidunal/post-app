import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { logout } from '../redux/actions/authActions'
import { useDispatch } from 'react-redux'

const Navbar = () => {
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logout())
	}
	const openModal = () => {
		dispatch({type: "MODAL", payload: true})
	}
	return (
		<div className='h-20 bg-indigo-600 flex items-center justify-between px-5'>
			<div className='text-white font-bold text-2xl cursor-pointer'>PostApp</div>
			<div className='flex items-center space-x-5'>
				<input placeholder='Search...' className='rounded-md outline-none p-2' />
				<div onClick={openModal} className='w-36 font-bold border p-2 rounded-md text-center text-white cursor-pointer hover:bg-white hover:text-indigo-600'>New Post</div>
				<BiLogOut onClick={handleLogout} size={25} className='text-white cursor-pointer'/>
			</div>
		</div>
	)
}

export default Navbar
