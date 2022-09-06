import React from 'react'
import styles from './MainLayout.scss'

import { Outlet } from 'react-router-dom'

import Header from '../Header/Header'

const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}
export default MainLayout
