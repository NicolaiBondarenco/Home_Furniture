import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFurniture } from '../Redux/getDataSlice'
import { addItem, counter } from '../Redux/cartSlice'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import Error from '../Error/Error'
import styles from './Item.module.scss'
import Pagination from '../Pagination/Pagination'

const Item = () => {
  const [error, setError] = useState(false)
  const { visibleItems } = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  const [currentPage, setCurrrentPage] = useState(1)
  const [numberOfItems] = useState(6)

  useEffect(() => {
    fetch('http://localhost:3000/furnitureData.json')
      .then((res) => res.json())
      .then((body) => dispatch(getFurniture(body.furniture)))
      .catch((err) => {
        setError(true)
      })
  }, [])

  const lastItemIndex = currentPage * numberOfItems
  const firstItemIndex = lastItemIndex - numberOfItems
  const currentFurn = visibleItems.slice(firstItemIndex, lastItemIndex)

  const togglePage = (number) => {
    setCurrrentPage(number)
  }

  const addItemInCart = (item) => {
    let itemProt = {
      id: item.id,
      image: item.image,
      price: item.price,
      title: item.title,
    }
    dispatch(addItem(itemProt))
    dispatch(counter(item.price))
  }

  const itemFurniture = currentFurn.map((el) => {
    return (
      <div className={styles.item__block} key={el.id}>
        <Link to={`/ItemFull/${el.id}`}>
          <img className={styles.item__image} src={el.image} alt={el.title} />
        </Link>
        <h2 className={styles.item__title}> {el.title} </h2>
        <p className={styles.item__price}> Цена: {el.price} $ </p>
        <button
          className={styles.item__button}
          onClick={() => addItemInCart(el)}
        >
          Добавить в корзину
        </button>
      </div>
    )
  })

  if (error) return <Error />

  return (
    <div>
      <div
        className={classnames(
          currentFurn.length <= 3 ? styles.itemGridChange : styles.item,
        )}
      >
        {itemFurniture}
      </div>
      <Pagination numberOfItems={numberOfItems} togglePage={togglePage} />
    </div>
  )
}
export default Item
