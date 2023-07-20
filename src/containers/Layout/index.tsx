/* eslint-disable import/extensions */
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

const Layout: React.FC<{
  children: React.JSX.Element | React.JSX.Element[]
}> = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
)

export default Layout
