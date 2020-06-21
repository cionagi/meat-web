// Dependency
import React from 'react'
import Head from 'next/head'
import { Col, Row } from 'antd'
import PRODUCTS from '../config/products'

// Componets
import BasicLayout from '../components/layout/BasicLayout'
import Container from '../components/layout/Container'
import Card from '../components/product/Card'

export default function Catalog() {
  const renderProducts = () => {
    return PRODUCTS.map((item) => {
      return (
        <Col xs={12} sm={12} md={8} lg={6} xl={6}>
          <Card key={item.name} product={item} />
        </Col>
      )
    })
  }

  return (
    <BasicLayout>
      <Head>
        <title>Cerdo - Carniceria Txileno</title>
        <meta property="og:title" content="Carniceria Txileno" key="inicio" />
      </Head>
      <Container>
        <Row gutter={16}>{renderProducts()}</Row>
      </Container>
    </BasicLayout>
  )
}
