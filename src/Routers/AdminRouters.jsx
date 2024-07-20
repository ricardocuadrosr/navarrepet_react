import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../admin/Components/Admin'

const AdminRouters = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<Admin/>}></Route>
      </Routes>
    </div>
  )
}

export default AdminRouters
