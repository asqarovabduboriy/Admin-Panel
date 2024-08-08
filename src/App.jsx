import React from 'react'
import "./App.scss"
import Login from "./pages/login/Login"
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/not-found/NotFound'
import Admin from './pages/admin/Admin'
import Auth from './pages/auth/Auth'
import CreateProduct from './pages/admin/create-product/CreateProduct'
import ManageProducts from './pages/admin/manage-product/ManageProducts'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/admin/Dashboard/Dashboard'
import Chart from './pages/admin/chart/Chart'

const App = () => {
  return (
    <>
        <Routes>
          <Route path='/register' element={<Login/>}/>
          <Route path='/' element={<Auth/>}>
            <Route path='admin' element={<Admin/>}>
            <Route path='dashboard' element={<Dashboard/>}/>
              <Route path='create' element={<CreateProduct/>}/>
              <Route path='manage' element={<ManageProducts/>}/>
              <Route path='chart' element={<Chart/>}/>
            </Route>
          </Route>

          <Route path='*' element={<NotFound/>}/>
        </Routes>
      <ToastContainer />
    </>
  )
}

export default App