import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from '../components/header/Header'
import Home from '../pages/home/Home'
import Products from '../pages/products/Products'
import Basket from '../pages/basket/Basket'
import ProductsMore from '../pages/productsMore/ProductsMore'

function Layout() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductsMore/>} />
        <Route path='/basket' element={<Basket/> }/>

        <Route path='*' element={<Navigate to={'/'}/>}/>
      </Routes>
    </div>
  )
}

export default Layout
