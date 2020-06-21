// Dependency
import React from 'react'

const FooterBottom = () => {
  const date = new Date()
  return (
    <div className="footer-bottom">
      <p className="footer-bottom__text">
        {date.getFullYear()}
        &nbsp; ©Txileno.com Todos los derechos reservados
      </p>
    </div>
  )
}

export default FooterBottom
