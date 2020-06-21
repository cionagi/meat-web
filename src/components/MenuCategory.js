import React, { useState } from 'react'
import { Menu } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import Link from 'next/link'

function MenuCategory() {
  const [selectedKeys, setSelectedKeys] = useState('category1')
  const handleClick = (event) => {
    setSelectedKeys(event.key)
  }
  return (
    <Menu onClick={(e) => handleClick(e)} selectedKeys={[selectedKeys]} mode="horizontal">
      <Menu.Item key="category1" icon={<MailOutlined />}>
        <Link href="/catalog">
          <a>Vacuno</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="category2" icon={<MailOutlined />}>
        <Link href="/catalog">
          <a>Pollo</a>
        </Link>
      </Menu.Item>

      <Menu.Item key="category3" icon={<MailOutlined />}>
        <Link href="/catalog">
          <a>Otros</a>
        </Link>
      </Menu.Item>
    </Menu>
  )
}

MenuCategory.propTypes = {}

export default MenuCategory
