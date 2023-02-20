import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { login, resetUser } from '~/stores/slices/auth'

export function useAuth() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const status = useSelector((state) => state.auth.status)

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  function loginUser(e) {
    e.preventDefault()
    dispatch(login(user))
  }

  function handleStatus() {
    if (status === 'idle') {
      navigate('/')
      return
    }

    if (status === 'rejected') {
      alert('failed login')
      return
    }
  }

  useEffect(() => {
    handleStatus()
  }, [status])

  useEffect(() => {
    dispatch(resetUser())
  }, [])

  return {
    data: {
      user,
      status,
    },
    method: {
      handleChange,
      loginUser,
    },
  }
}
