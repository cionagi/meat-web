// Dependency
import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import FooterCustom from '../footer/Index'

const BasicLayout = ({ children }) => {
  const { Header, Content } = Layout
  return (
    <Layout>
      <Header>Header</Header>
      <Content>{children}</Content>
      <FooterCustom />
    </Layout>
  )
}
BasicLayout.propTypes = {
  children: PropTypes.shape(undefined),
}

export default BasicLayout
