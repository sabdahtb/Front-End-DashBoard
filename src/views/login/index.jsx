import React from 'react'
import Lottie from 'lottie-react'

import { useAuth } from './hooks'
import Loading from './loading.json'

const Login = () => {
  const {
    data: { user, status },
    method: { handleChange, loginUser },
  } = useAuth()

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
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
        <div className='w-full'>
          {status != 'loading' ? (
            <div className='w-full flex justify-center h-24'>
              <input
                type='submit'
                value='Login'
                className='outline-none border-none bg-blue-500 h-12 p-2 m-4 rounded-md cursor-pointer w-[90%] text-white'
              />
            </div>
          ) : (
            <div className='w-full relative h-24'>
              <div className='w-full flex justify-center absolute top-[-18px]'>
                <Lottie animationData={Loading} loop={true} autoPlay={true} className='h-24 w-24' />
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default Login
