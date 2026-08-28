import './App.css'

import Navbar from './Components/Navbar/navbar'
import Hero from './Components/Hero/hero'
import Services from './Components/Services/services'
import About from './Components/About/about'
import Testimonials from './Components/Testimonials/testimonials'
import CTA from './Components/CTA/cta'
import Contact from './Components/Contact/contact'
import Quote from './Components/Quote/quote'
import Appointment from './Components/Appointment/appointment'
import Footer from './Components/Footer/footer'

function App() {
  return (
    <>
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <CTA />
        <Quote />
        <Appointment />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App