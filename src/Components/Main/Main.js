import React from 'react'
import Categories from '../Categories/Categories'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Item from '../Item/Item'
import styles from './Main.module.scss'

const Main = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Categories />
      <Item />
      <Footer />
    </div>
  )
}
export default Main
