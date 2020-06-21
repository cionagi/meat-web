// Dependency
import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

// Components
import FooterCustom from '../footer/Index'
import MkNav from '../MkNav'

const BasicLayout = ({ children }) => {
  const { Header, Content } = Layout
  return (
    <Layout>
      <MkNav />
      <Header className="custom-nav-header">
        <Link href="/">Carniceria Txileno</Link>
      </Header>
      <Content>
        <div className="custom-height">{children}</div>
      </Content>
      <FooterCustom />
    </Layout>
  )
}
BasicLayout.propTypes = {
  children: PropTypes.shape(undefined),
}

export default BasicLayout
