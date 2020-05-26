// Dependency
import React from 'react'
import { Col, Row } from 'antd'

// Componets
import BasicLayout from '../components/layout/BasicLayout'
import Container from '../components/layout/Container'
import Hero from '../components/Hero'
import MenuCategory from '../components/MenuCategory'
import Card from '../components/product/Card'

export default function Home() {
  return (
    <BasicLayout>
      <Hero title="Lorem Ipsum" textBtn="Mas Info" />
      <MenuCategory />
      <Container>
        <Row gutter={16}>
          <Col xs={12} sm={12} md={8} lg={6} xl={6}>
            <Card />
          </Col>
          <Col xs={12} sm={12} md={8} lg={6} xl={6}>
            <Card />
          </Col>
          <Col xs={12} sm={12} md={8} lg={6} xl={6}>
            <Card />
          </Col>
          <Col xs={12} sm={12} md={8} lg={6} xl={6}>
            <Card />
          </Col>
          <Col xs={12} sm={12} md={8} lg={6} xl={6}>
            <Card />
          </Col>
          <Col xs={12} sm={12} md={8} lg={6} xl={6}>
            <Card />
          </Col>
          <Col xs={12} sm={12} md={8} lg={6} xl={6}>
            <Card />
          </Col>
          <Col xs={12} sm={12} md={8} lg={6} xl={6}>
            <Card />
          </Col>
        </Row>
      </Container>
    </BasicLayout>
  )
}
