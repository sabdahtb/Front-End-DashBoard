import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { incrementAsync } from '~/stores/slices/counter'

const Home = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)
  const status = useSelector((state) => state.counter.status)

  useEffect(() => {
    console.log('status', status)
  }, [status])

  return (
    <div>
      <p className='text-3xl font-bold m-14'>{status == 'loading' ? status : count}</p>
      <button onClick={() => dispatch(incrementAsync(7))}>- 1</button>
      <button onClick={() => dispatch(incrementAsync(7))}>+ 1</button>
    </div>
  )
}

export default Home
