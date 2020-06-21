import React from 'react'
import { PhoneOutlined, MailOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons'

function MkNav() {
  return (
    <div className="mk-nav">
      <div className="mk-nav__container">
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
        <span className="mk-nav__container-item">
          <PhoneOutlined />
          <a href="tel:945142773">945 14 27 73</a>
        </span>
        <span className="mk-nav__container-item">
          <MailOutlined />
          <a href="mailto:contacto@txileno.com">contacto@txileno.com</a>
        </span>
      </div>
    </div>
  )
}

MkNav.propTypes = {}

export default MkNav
