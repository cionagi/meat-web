/* eslint-disable no-template-curly-in-string */
// Dependency
import React from 'react'
import Head from 'next/head'
import { Col, Row, Card, Typography } from 'antd'
import { ScheduleOutlined, PushpinOutlined, PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

// Componets
import BasicLayout from '../components/layout/BasicLayout'
import Container from '../components/layout/Container'
import FormContact from '../components/Contact/FormContact'

const { Title } = Typography
const containerStyle = {
  width: '100%',
  height: '300px',
}
const center = {
  lat: parseFloat(process.env.NEXT_PUBLIC_LONG),
  lng: parseFloat(process.env.NEXT_PUBLIC_LAT),
}

export default function Contact() {
  return (
    <BasicLayout>
      <Head>
        <title>Contacto | Carniceria Txileno</title>
        <meta property="og:title" content="Carniceria Txileno" key="contacto" />
      </Head>
      <Container>
        <Row gutter={[24, 24]} justify="space-around" align="top">
          <Col xs={24} sm={24} md={16} lg={16} xl={16}>
            <Card>
              <Title>NOS INTERESA SABER TU OPINIÓN</Title>
              <p> Envia tus sugerencias, críticas y comentarios a través del siguiente formulario.</p>
              <FormContact />
            </Card>
          </Col>

          <Col xs={24} sm={24} md={8} lg={6} xl={6}>
            <Card>
              <Title level={3}>Contactanos</Title>
              <div>
                <ScheduleOutlined />
                8:00 a 14:00 hrs
              </div>
              <div>
                <PhoneOutlined />
                <a href="tel:945142773">945 14 27 73</a>
              </div>
              <div>
                <WhatsAppOutlined />
                <a href="https://wa.me/34667956405?text=Hola%20quiero%20comprar" target="_blank" rel="noreferrer">
                  667 95 64 05
                </a>
              </div>
            </Card>
            <Card>
              <Title level={3}>Donde estamos</Title>

              <div>
                <address>
                  <PushpinOutlined />
                  <a href="http://maps.google.com/?q=Domingo Beltran 31, Vitoria" target="_blank" rel="noreferrer">
                    Domingo Beltran 31 - Vitoria-Gazteiz
                  </a>
                </address>
                <div>
                  <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GMAPS_API_KEY}>
                    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
                      {/* Child components, such as markers, info windows, etc. */}
                      <></>
                    </GoogleMap>
                  </LoadScript>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </BasicLayout>
  )
}
