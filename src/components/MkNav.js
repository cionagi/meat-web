import React from 'react'
import { PhoneOutlined, MailOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'

function MkNav() {
  return (
    <div className="mk-nav">
      <div className="mk-nav__container">
        <Row justify="center" align="center">
          <Col xs={12} sm={12} md={8} lg={8}>
            <ul className="mk-nav__container-social">
              <li className="mk-nav__container-social-item">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/carnesokelan/">
                  <FacebookOutlined />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/carnesokelan/">
                  <InstagramOutlined />
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8}>
            <div className="mk-nav__container-col">
              <span className="mk-nav__container-item">
                <PhoneOutlined />
                <a href="tel:945142773">945 14 27 73</a>
              </span>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8}>
            <div className="mk-nav__container-col">
              <span className="mk-nav__container-item">
                <MailOutlined />
                <a href="mailto:contacto@txileno.com">contacto@txileno.com</a>
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

MkNav.propTypes = {}

export default MkNav
