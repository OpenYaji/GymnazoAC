import React from 'react'
import Header from '../common/enrollHeader'
import Enroll from '../common/enroll'
import Footer from '../common/footer'
const admissionpage = () => {
  return (
    <> 
    <Header/>
    <main className=' min-h-screen'>
    <section id="home">
     <Enroll/>
    </section>
      </main>    
    <Footer/>
    </>

  )
}

export default admissionpage