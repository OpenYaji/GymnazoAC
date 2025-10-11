import React from 'react'
import Header from '../common/loginHeader'
import Footer from '../common/footer'
import Login from '../common/login'
const loginpage = () => {
  return (
    <> 
            <Header/>
    <main className=' min-h-screen'>
    <section id="home">
     <Login/>
    </section>
    </main>    
    <Footer/>
    </>

  )
}

export default loginpage