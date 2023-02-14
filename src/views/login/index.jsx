import React from 'react'
import { useAuth } from './hooks'

const Login = () => {
  const {
    data: { user, status },
    method: { handleChange, loginUser },
  } = useAuth()

  return (
    <div
      className={`w-full min-h-screen flex items-center justify-center ${
        status === 'loading' ? 'bg-gray-200' : 'bg-white'
      }`}
    >
      <form onSubmit={loginUser} className='flex items-center justify-center flex-col'>
        <input
          type='email'
          name='email'
          id='email'
          value={user.email}
          onChange={handleChange}
          className='outline-none border-none bg-blue-50 p-2 m-4 rounded-md'
        />
        <input
          type='password'
          name='password'
          id='password'
          value={user.password}
          onChange={handleChange}
          className='outline-none border-none bg-blue-50 p-2 m-4 rounded-md'
        />
        <input
          type='submit'
          value='Login'
          className='outline-none border-none bg-blue-500 p-2 m-4 rounded-md cursor-pointer w-[90%] text-white'
        />
      </form>
    </div>
  )
}

export default Login
