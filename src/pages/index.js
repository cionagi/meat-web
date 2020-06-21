// Dependency
import React from 'react'
import Head from 'next/head'
import { Col, Row, Typography } from 'antd'
import Carousel from '@brainhubeu/react-carousel'

// Componets
import BasicLayout from '../components/layout/BasicLayout'
import Container from '../components/layout/Container'
import Hero from '../components/Hero'
import MenuCategory from '../components/MenuCategory'
import Card from '../components/product/Card'
import MapCustom from '../components/Maps/MapCustom'

const { Title } = Typography

export default function Home() {
  return (
    <BasicLayout>
      <Head>
        <title>Carniceria Txileno - Inicio</title>
        <meta property="og:title" content="Carniceria Txileno" key="inicio" />
      </Head>
      <Hero title="LA MEJOR CALIDAD SIEMPRE" textBtn="Realizar pedido" />
      <MenuCategory />
      <Container>
        <Row>
          <Col xs={24}>
            <Title>Selección De Carnes De Primera</Title>
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Carousel slidesPerPage={3} arrows infinite>
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Title>Los mas vendidos</Title>
          </Col>
          <Col xs={24}>
            <Carousel slidesPerPage={3} arrows infinite>
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
            </Carousel>
          </Col>
        </Row>

        <Row>
          <Col xs={24}>
            <Title>Como comprar wizard</Title>
          </Col>
        </Row>

        <Row>
          <Col xs={24}>
            <Title>Zona de despacho</Title>
          </Col>

          <Col xs={24}>
            <MapCustom />
          </Col>
        </Row>
      </Container>
    </BasicLayout>
  )
}
