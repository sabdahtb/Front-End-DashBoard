import React from 'react'
import { Provider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import Home from '~/views/home'
import { store } from '~/stores'

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Provider>
  )
}

export default App
