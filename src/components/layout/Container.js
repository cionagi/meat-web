// Dependency
import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'antd'

const Container = ({ children }) => {
  return (
    <Row justify="center">
      <Col xs={22} sm={20} md={20} lg={20} xl={20}>
        {children}
      </Col>
    </Row>
  )
}
Container.propTypes = {
  children: PropTypes.shape(undefined),
}

export default Container
