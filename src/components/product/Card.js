// Dependency
import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

// Components

const Card = ({ product, horizontalView }) => {
  const { name, description, offer, price, priceRef, imgSrc, quantityStock } = product
  return (
    <div className="product-card">
      <div className={`product-card__container ${horizontalView && 'horizontal-view'}`}>
        <div className="product-card__offer_box">
          <div className="product-card__offer_label">
            <span className="num">{offer}</span>
            <span className="text">DE DCTO</span>
          </div>
        </div>
        <div className="product-card__box">
          <div className="product-card__image_container">
            <div className="product-card__image">
              <a href="/" className="">
                <img src={imgSrc} alt={name} />
              </a>
            </div>
          </div>
          <div className="product-card__info">
            <div className="product-card__detail">
              <div className="product-card__detail_name">{name}</div>
              <div className="product-card__detail_info">{description}</div>
            </div>
            <div className="product-card__price">
              <div className="product-card__price_value">{price}</div>
              <div className="product-card__price_ref">
                Precio Referencial:
                {priceRef}
              </div>
            </div>
            <div className="product-card__stock">
              <span>
                Stock Disponible:
                {quantityStock}
              </span>
            </div>
            <div className="product-card__buy">
              <div className="product-card__buy_add_to_bag">
                <Button>Agregar</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Card.defaultProps = {
  product: {
    name: 'ESCUDO',
    description: '24 botellas de 355 cc',
    descriptionLong:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    offer: '40%',
    price: '$9.990',
    priceRef: '$16.600',
    imgSrc: 'https://magazine.medlineplus.gov/images/uploads/main_images/red-meat.png',
    quantityStock: '100',
  },
}

Card.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    offer: PropTypes.string,
    price: PropTypes.string,
    priceRef: PropTypes.string,
    imgSrc: PropTypes.string,
    quantityStock: PropTypes.string,
  }),
  horizontalView: PropTypes.bool,
}

export default Card
