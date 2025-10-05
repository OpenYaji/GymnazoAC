import React from 'react'
import Header from '../common/header'
import Hero from '../common/hero'
import Update from '../common/updatesection'
import About from '../common/about'
import Announcement from '../common/announcement'
import Footer from '../common/footer'
const homepage = () => {
  return (
    <>
    <Header/>
    <main className=' min-h-screen'>
        <section id="home">
         <Hero/>
        </section>
        <section id="about-us">
            <About/>
        </section>
        <Update/>
        <section id="announcement" className="min-h-screen bg-gray-100 pt-10">
            <Announcement/>
        </section>
        
        <section id="contact-us" className="min-h-screen bg-white p-20">
          <h2 className="text-3xl font-bold mb-6">CONTACT US</h2>
          <p>Contact form, map, and school details for inquiries.</p>
        </section>
    </main>    
        <Footer/>
    </>
  )
}

export default homepage