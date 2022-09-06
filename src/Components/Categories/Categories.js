import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterItem } from '../Redux/filterSlice'
import styles from './Categories.module.scss'

const Categories = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state) => state.furniture)

  useEffect(() => {
    dispatch(filterItem(items))
  }, [items])

  const categoriesArr = [
    {
      key: 'all',
      name: 'Все',
    },
    {
      key: 'armchair',
      name: 'Кресла',
    },
    {
      key: 'sofa',
      name: 'Диваны',
    },
    {
      key: 'poof',
      name: 'Пуфы',
    },
    {
      key: 'wardrobe',
      name: 'Шкафы',
    },
    {
      key: 'table',
      name: 'Столы',
    },
    {
      key: 'chair',
      name: 'Стулья',
    },
  ]

  let newItems = []

  const filterItems = (key) => {
    if (key === 'all') {
      newItems = items.map((el) => el)
      dispatch(filterItem(newItems))
    } else {
      newItems = items.filter((el) => el.categories === key)
      dispatch(filterItem(newItems))
    }
  }

  const showCategories = categoriesArr.map((el) => {
    return (
      <li
        className={styles.categories__listItem}
        key={el.key}
        onClick={() => filterItems(el.key)}
      >
        {el.name}
      </li>
    )
  })

  return (
    <div className={styles.categories}>
      <ul className={styles.categories__list}>{showCategories}</ul>
    </div>
  )
}
export default Categories
