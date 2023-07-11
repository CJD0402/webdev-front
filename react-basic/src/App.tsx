import React from 'react'
import SignIn from './views/Authentication/SignIn'
import { Route, Routes } from 'react-router-dom'
import SignUp from './views/Authentication/SignUp'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/sign-in'element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </div>
  )
}
