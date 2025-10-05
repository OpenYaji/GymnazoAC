import React from 'react'
import Header from '../common/header'
import Hero from '../common/hero'
import Update from '../common/updatesection'
import About from '../common/about'
import Announcement from '../common/announcement'
import Footer from '../common/footer'
import Contact from '../common/contact' // Assuming common/contact.jsx
import FAQ from '../common/faq'     // Assuming common/faq.jsx

const Homepage = () => {
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
        <section id="announcement" className="min-h-screen ">
            <Announcement/>
        </section>
        

        <section id="contact-us" className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-white dark:bg-gray-900 transition-colors duration-300 p-4 md:p-8" 
        >
          <div className="col-span-1 h-full pt-10">
          <FAQ/>
          </div>
          <div className="col-span-1 h-full pt-10">
            <Contact/>
          </div>
        </section>
    </main> 
        <Footer/>
    </>
  )
}

export default Homepage