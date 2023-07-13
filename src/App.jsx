import React from 'react'
import { Header,Nav,About,Contact, Experience, Footer, Portfolio, Services, Testimonials,Qualification } from './components'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Qualification/>
    <Services/>
    <Portfolio/>
    {/* <Testimonials/> */}
    <Contact/>
    <Footer/>

    </>
  )
}

export default App