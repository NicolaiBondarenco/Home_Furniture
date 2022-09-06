import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Pagination.module.scss'

const Pagination = ({ numberOfItems, togglePage }) => {
  const { visibleItems } = useSelector((state) => state.filter)

  const arrButton = []

  for (let i = 0; i <= Math.floor(visibleItems.length / numberOfItems); i++) {
    arrButton.push(i)
  }

  const buttons = (
    <ul className={styles.pagination__list}>
      {arrButton.map((el) => (
        <li
          className={styles.pagination__listItem}
          key={el}
          onClick={() => togglePage(el + 1)}
        >
          <a className={styles.pagination__listItemLink}>{el + 1}</a>
        </li>
      ))}
    </ul>
  )

  if (arrButton.length <= 1) return

  return <div className={styles.pagination}> {buttons} </div>
}
export default Pagination
