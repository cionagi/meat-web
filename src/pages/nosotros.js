// Dependency
import React from 'react'
import Head from 'next/head'
import { Col, Row } from 'antd'

// Componets
import BasicLayout from '../components/layout/BasicLayout'
import Container from '../components/layout/Container'
import Hero from '../components/Hero'

export default function Us() {
  return (
    <BasicLayout>
      <Head>
        <title>Nosotros - Carniceria Txileno</title>
        <meta property="og:title" content="Nosotros - Carniceria Txileno" key="Nosotros" />
      </Head>
      <Hero title="Quienes somos" />
      <Container>
        <Row justify="center">
          <Col xs={24} md={18} lg={16}>
            <h2>Sobre nosotros</h2>
            <p>
              Nuestra carnicería abre sus puertas en el año 2020 dentro del mercado “El Ensanche” en el casco antiguo de
              nuestra ciudad.
            </p>

            <p>
              El proyecto nace de la fusión vasco-chilena, incorporando producto y tradición nacional y diferentes
              cortes latinos (Argentino, Chileno, Paraguayo, Brasileño, etc).
            </p>

            <p>
              Nuestra filosofía de trabajo se basa en la atención y la dedicación a nuestros clientes, proporcionándoles
              productos de alta calidad a precios asequibles, controlan, nuestra materia prima durante todo el proceso,
              obteniendo productos de elaboración artesanal con el mayor de los cuidados y productos especializados
              libres de gluten, además de una gran variedad de productos de la tierra.
            </p>

            <p>
              con el cierre del mercado en febrero de 2020 trasladamos nuestra carnicería a pie de la calle, situándonos
              en Domingo beltran 30. Añadiendo, además , de productos cárnicos, la sección de charcutería y
              actualizandonos para poder dar un mayor servicio por medio del sistema online.
            </p>
          </Col>
        </Row>
      </Container>
    </BasicLayout>
  )
}
