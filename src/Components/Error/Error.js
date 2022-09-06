import React from 'react'
import '../Error/Error.css'

const Error = () => {
  return (
    <div className="Error">
      <img
        className="Error__img"
        src="https://thumbs.dreamstime.com/b/%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0-%D0%BD%D0%B5-%D0%BD%D0%B0%D1%88%D0%BB%D0%B0-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D0%B8-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%BE%D1%88%D0%B8%D0%B1%D0%BA%D0%B8-%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B3%D0%BE-142684135.jpg"
        alt="Error"
      />
      <p className="Error__text">
        Приносим свои извинения за доставленные неудобства.
      </p>
    </div>
  )
}
export default Error
