import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import styles from './itemFull.module.scss'

const ItemFull = () => {
  const { items } = useSelector((state) => state.furniture)
  const { id } = useParams()
  const findItem = items.filter((el) => el.id == id)

  const nacessaryItem = findItem.map((el) => {
    return (
      <div key={el.id} className={styles.itemFull__inner}>
        <div className={styles.itemFull__foto}>
          <img src={el.image} alt="Foto" />
        </div>
        <div className={styles.itemFull__information}>
          <p className={styles.itemFull__title}>{el.title}</p>
          <p className={styles.itemFull__price}> Стоимость: {el.price} $</p>
          <p className={styles.itemFull__description}>Описание:</p>
          <p className={styles.itemFull__text}>{el.text}</p>
        </div>
      </div>
    )
  })

  if (!items) {
    return <div> Загрузка ... </div>
  }

  return (
    <div className={styles.itemFull}>
      <div className={styles.itemFull__wrapper}>
        <div className={styles.itemFull__wrapperName}>
          <Link to="/">House Furniture</Link>
        </div>
        <ul className={styles.itemFull__nav}>
          <li className={styles.itemFull__item}> c 08:00 до 22:00 </li>
          <li className={styles.itemFull__item}>
            <a href="tel: +74951537530">+7 (495) 153-75-30</a>
          </li>
        </ul>
      </div>
      {nacessaryItem}
    </div>
  )
}
export default ItemFull
