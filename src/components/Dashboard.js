import React from "react"
import Sidebar from './Sidebar/Sidebar'
import ProductList from './product/product-list/ProductList'
import Modal from './product/modal/Modal'

export default function Dashboard() {

  return (
    <>
      <Sidebar />
      <ProductList />
      <Modal />
    </>
  )
}