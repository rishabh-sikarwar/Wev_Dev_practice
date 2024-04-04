import React, { PureComponent } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'

export class Layout extends PureComponent {
  render() {
    return (
      <>
            <Header/>
            <Outlet/>


            <Footer/>



     </>
    )
  }
}

export default Layout