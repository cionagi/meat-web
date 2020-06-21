// Dependency
import React from 'react'
import { Col, Row } from 'antd'

// Componets
import BasicLayout from '../../components/layout/BasicLayout'
import Container from '../../components/layout/Container'
import Feature from '../../components/product/Feature'

export default function ProductPage() {
  return (
    <BasicLayout>
      <Container>
        <div className="product-detail">
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="row d-flex align-items-center">
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <div className="product-detail__name">NAME</div>
                  <div className="product-detail__description-short">description</div>
                  <div className="product-detail__price_value">price</div>
                  <div className="product-detail__price_ref">Precio Referencial: priceRef</div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <img src="imgSrc" alt="name" className="product-detail__image" />
                </Col>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Row justify="center">
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <div className="product-detail__description-long">descriptionLong</div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Feature
                    icon="start"
                    title="Lugar de Origen"
                    description="Chivas Brothers Ltd Distillers, Keith, Escocia"
                  />
                  <Feature
                    icon="start"
                    title="Lugar de Origen"
                    description="Chivas Brothers Ltd Distillers, Keith, Escocia"
                  />
                  <Feature
                    icon="start"
                    title="Lugar de Origen"
                    description="Chivas Brothers Ltd Distillers, Keith, Escocia"
                  />
                  <Feature
                    icon="start"
                    title="Lugar de Origen"
                    description="Chivas Brothers Ltd Distillers, Keith, Escocia"
                  />
                  <Feature
                    icon="start"
                    title="Lugar de Origen"
                    description="Chivas Brothers Ltd Distillers, Keith, Escocia"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </BasicLayout>
  )
}
