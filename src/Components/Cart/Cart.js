import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import cn from 'classnames'
import {
  countIncrement,
  countDecrement,
  removeItem,
  removeArrayItems,
} from '../Redux/cartSlice'

import CartEmpty from '../CartEmpty/CartEmpty'

import styles from './Cart.module.scss'

const Cart = () => {
  const dispatch = useDispatch()
  const { item, maxPrice } = useSelector((state) => state.cart)

  const countMinus = (id, count) => {
    dispatch(countDecrement(id))
    if (count === 1) dispatch(removeItem(id))
  }

  const itemFurniture = item.map((el) => {
    const { image, title, price, id, count } = el
    return (
      <div className={styles.cart__item} key={id}>
        <div className={styles.cart__itemBlock}>
          <img src={image} alt="#" />
          <p> {title} </p>
        </div>
        <div className={styles.cart__itemInner}>
          <p> {price} $</p>
          <div className={styles.cart__itemButtons}>
            <button
              className={styles.cart__itemDecrement}
              onClick={() => countMinus(id, count)}
            >
              -
            </button>
            <span className={styles.cart__itemCounter}> {count} </span>
            <button
              className={styles.cart__itemIncrement}
              onClick={() => dispatch(countIncrement(id))}
            >
              +
            </button>
          </div>
          <p className={styles.cart__itemTotalPrice}> {count * price} $ </p>
        </div>
        <span
          className={cn('material-symbols-outlined', styles.cart__cancel)}
          onClick={() => dispatch(removeItem(id))}
        >
          cancel
        </span>
      </div>
    )
  })

  if (!item.length) return <CartEmpty />

  return (
    <div className={styles.cart}>
      <div className={styles.cart__wrapper}>
        <div className={styles.cart__wrapperName}>
          <Link to="/">House Furniture</Link>
        </div>
        <ul className={styles.cart__nav}>
          <li className={styles.cart__item}> c 08:00 до 22:00 </li>
          <li className={styles.cart__item}>
            <a href="tel: +74951537530">+7 (495) 153-75-30</a>
          </li>
        </ul>
      </div>
      <div className={styles.cart__content}>
        <div className={styles.cart__contentHeader}>
          <p className={styles.cart__contentTitle}> КОРЗИНА </p>
          <ul className={styles.cart__contentList}>
            <li className={styles.cart__contentItem}> Цена </li>
            <li className={styles.cart__contentItem}> Количество </li>
            <li className={styles.cart__contentItem}> Сумма </li>
          </ul>
        </div>
        {itemFurniture}
        <div className={styles.cart__order}>
          <span> Итого:</span>
          <span>{maxPrice} $ </span>
          <button
            className={styles.cart__clearCart}
            onClick={() => dispatch(removeArrayItems())}
          >
            Очистить корзину
          </button>
          <div className={styles.cart__orderButton}>
            <button>Оформить заказ</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cart
