import React from 'react'
import BasicLayout from '../components/layout/BasicLayout'
import Hero from '../components/Hero'
import MenuCategory from '../components/MenuCategory'

export default function Home() {
  return (
    <BasicLayout>
      <Hero title="Lorem Ipsum" textBtn="Mas Info" />
      <MenuCategory />
    </BasicLayout>
  )
}
