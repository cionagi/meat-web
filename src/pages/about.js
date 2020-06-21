// Dependency
import React from 'react'
import { Col, Row } from 'antd'

// Componets
import BasicLayout from '../components/layout/BasicLayout'
import Container from '../components/layout/Container'

export default function About() {
  return (
    <BasicLayout>
      <Container>
        <Row>
          <Col xs={24} sm={24} md={16} lg={16} xl={16}>
            <h1 className="title">Quienes somos</h1>
            <p>
              {`Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
              el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona
              que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró
              hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de
              relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s
              con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente
              con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`}
            </p>
            <h2 className="title">BENEFICIOS DE COMPRAR CON NOSOTROS</h2>
            <p>
              {`Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
              el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona
              que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró
              hacer un`}
            </p>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <p>
              {`Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
              el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona
              que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró
              hacer un`}
            </p>
            <p>
              {`Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
              el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona
              que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró
              hacer un`}
            </p>
            <p>
              {`Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
              el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona
              que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró
              hacer un`}
            </p>
          </Col>
        </Row>
      </Container>
    </BasicLayout>
  )
}
