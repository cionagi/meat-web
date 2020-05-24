// Dependency
import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

const BasicLayout = ({ children }) => {
  const { Header, Content, Footer } = Layout
  return (
    <Layout>
      <Header>Header</Header>
      <Content>{children}</Content>
      <Footer />
    </Layout>
  )
}
BasicLayout.propTypes = {
  children: PropTypes.shape(undefined),
}

export default BasicLayout
