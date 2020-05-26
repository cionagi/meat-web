// Dependency
import React from 'react'
import PropTypes from 'prop-types'

const LinkList = ({ items, bold }) => {
  const renderItems = () => {
    return items.map((item) => {
      return (
        <li key={item.id}>
          <a className={`footer-top__list${bold ? '-bold' : '-normal'}`} href={item.url}>
            {item.name}
          </a>
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
      id: 1,
      name: 'Category',
      url: 'Category',
    },
    {
      id: 11,
      name: 'Category',
      url: 'Category',
    },
    {
      id: 111,
      name: 'Category',
      url: 'Category',
    },
    {
      id: 1111,
      name: 'Category',
      url: 'Category',
    },
    {
      id: 1111113,
      name: 'Category',
      url: 'Category',
    },
    {
      id: 1111112,
      name: 'Category',
      url: 'Category',
    },
  ],
  bold: false,
}

export default LinkList
