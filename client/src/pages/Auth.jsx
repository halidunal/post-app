import React, { useState } from 'react'
import { login, register } from '../redux/actions/authActions';
import { useDispatch} from "react-redux";

const Auth = () => {
	const [singUp, setSignUp] = useState(true);
	const [authData, setAuthData] = useState({username: "", email: "", password: ""})
	const dispatch = useDispatch()

	const onChangeForm = (e) => {
		setAuthData({...authData, [e.target.name] : e.target.value})
	}

	const handleSubmit = () => {
		singUp ? dispatch(register(authData)) : dispatch(login(authData))
	}

	return (
		<div className='w-full h-screen bg-gray-100 flex flex-col items-center justify-center'>
			<div className='w-1/5 bg-white p-3 rounded-lg'>
				<h1 className='text-2xl text-gray-700 font-bold'>{singUp ? "REGISTER" : "LOGIN"}</h1>
				<div className='flex flex-col space-y-3 my-4'>
					{singUp && <input value={authData.username} name='username' onChange={onChangeForm} placeholder="User Name" className="input"></input>}
					<input value={authData.email} name='email' onChange={onChangeForm} placeholder="Email" className="input" type='email'></input>
					<input value={authData.password} name='password' onChange={onChangeForm}placeholder="Password" className="input" type="password"></input>
					<div onClick={handleSubmit} className='w-full p-2 cursor-pointer hover:bg-indigo-800 text-center bg-indigo-600 text-white rounded-md'>{singUp ? "Sign Up" : "Log in"}</div>
				</div>
			</div>
			{singUp ?
			<div className='mt-2 text-sm'>Already have an account?<span className='text-blue-500 cursor-pointer' onClick={() => setSignUp(false)}> Log in</span></div>
			:
			<div className='mt-2 text-sm'>Don’t have an account?<span className='text-blue-500' onClick={() => setSignUp(true)}> Sign Up</span></div>
			}
		</div>
	)
}

export default Auth
