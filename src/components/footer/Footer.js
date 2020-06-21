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
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <p>Formas de pago</p>
            <p>+34 945 14 27 73</p>
            <a href="http://maps.google.com/?q=Domingo Beltran 31, Vitoria" target="_blank" rel="noreferrer">
              Domingo Beltran 31 - Vitoria-Gazteiz
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
