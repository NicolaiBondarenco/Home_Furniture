import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CartEmpty.module.scss'

const CartEmpty = () => {
  return (
    <div className={styles.cartEmpty}>
      <div className={styles.cartEmpty__wrapper}>
        <div className={styles.cartEmpty__wrapperName}>
          <Link to="/">House Furniture</Link>
        </div>
        <ul className={styles.cartEmpty__nav}>
          <li className={styles.cartEmpty__item}> c 08:00 до 22:00 </li>
          <li className={styles.cartEmpty__item}>
            <a href="tel: +74951537530">+7 (495) 153-75-30</a>
          </li>
        </ul>
      </div>
      <div className={styles.cartEmpty__content}>
        <h2 className={styles.cartEmpty__title}>Моя корзина</h2>
        <img
          className={styles.cartEmpty__image}
          src="https://cdn.mebelvia.ru/local/templates/mebelvia-adaptive/build/img/checkout/cart-empty-girl.png?165882383915450"
          alt="CartIsEmpty"
        />
        <p className={styles.cartEmpty__text}>
          К СОЖАЛЕНИЮ, В ВАШЕЙ КОРЗИНЕ ПУСТО
        </p>
        <p className={styles.cartEmpty__lookBack}>
          Посмотрите наш каталог, у нас огромный ассортимент и самые низкие цены
          на рынке. Вы обязательно найдете то, что придется вам по вкусу.
        </p>
        <button className={styles.cartEmpty__button}>
          <Link to="/" className={styles.cartEmpty__linkBack}>
            Вернуться в католог
          </Link>
        </button>
      </div>
    </div>
  )
}
export default CartEmpty
