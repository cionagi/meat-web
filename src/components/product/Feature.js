// Dependency
import React from 'react'

// Components

const Feature = () => {
  return (
    <div className="product-detail__feature">
      <div className="product-detail__feature_icon">ICONO</div>
      <div className="product-detail__feature_detail">
        <span className="product-detail__feature_title">TITULIO</span>
        <span className="product-detail__feature_description">description</span>
      </div>
    </div>
  )
}

Feature.defaultProps = {}

Feature.propTypes = {}

export default Feature
