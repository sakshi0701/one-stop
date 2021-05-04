import React, { useState } from "react"
import Sidebar from './Sidebar/Sidebar'
import ProductList from './product/product-list/ProductList'
import Modal from './product/modal/Modal'
// import './dash.css'

export default function Dashboard() {

  return (
    <>
      <Sidebar />
      <ProductList />
      <Modal />
    </>
  )
}