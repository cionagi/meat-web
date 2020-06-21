// Dependency
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const LinkList = ({ items, bold }) => {
  const renderItems = () => {
    return items.map((item) => {
      return (
        <li key={item.id}>
          <Link href={item.url} as={item.name.toLowerCase()}>
            <a className={`footer-top__list${bold ? '-bold' : '-normal'}`}>{item.name}</a>
          </Link>
        </li>
      )
    })
  }

  return (
    <div className="footer-top__list">
      <ul>{renderItems()}</ul>
    </div>
  )
}

LinkList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  bold: PropTypes.bool,
}

LinkList.defaultProps = {
  items: [
    {
      id: 3,
      name: 'Contacto',
      url: '/contact',
    },
    {
      id: 5,
      name: 'Catalogo',
      url: '/catalog',
    },
    {
      id: 7,
      name: 'Politica de privacidad',
      url: '#',
    },
  ],
  bold: false,
}

export default LinkList
