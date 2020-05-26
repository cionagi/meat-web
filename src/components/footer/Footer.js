// Dependency
import React from 'react'
import { Col, Row } from 'antd'

// Components
import LinkList from './LinkList'
import Container from '../layout/Container'

const Footer = () => {
  return (
    <div className="footer-top">
      <Container>
        <Row>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <LinkList bold />
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <LinkList />
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8} />
        </Row>
      </Container>
    </div>
  )
}

export default Footer
