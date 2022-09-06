import React from 'react'
import { Routes, Route } from 'react-router-dom'

import styles from './App.module.scss'

import Cart from '../Cart/Cart'
import Main from '../Main/Main'
import ItemFull from '../ItemFull/itemFull'

function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ItemFull/:id" element={<ItemFull />} />
      </Routes>
    </div>
  )
}

export default App
