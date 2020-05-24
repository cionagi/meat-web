import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

function Hero({ title, textBtn }) {
  return (
    <section className="masthead" role="img" aria-label="Image Description">
      <h1>{title}</h1>
      <Button value="large" type="primary">
        {textBtn}
      </Button>
    </section>
  )
}
Hero.propTypes = {
  title: PropTypes.string,
  textBtn: PropTypes.string,
}
export default Hero
