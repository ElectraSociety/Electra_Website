'use client'
import LightninigBold from "@/components/3d-models/lightning-bolt"
import Events from "@/components/Events/Events"
import Header from "@/components/header/Header"
import Landing from "@/components/landing-page/Landing"
import AboutUs from "@/components/aboutUs/About"
import Footer from "@/components/footer/Footer"
const Home = () => {
  return (
    <main>
    <Header/>
      <Landing/>
      <AboutUs/>
      <Events/>
      <Footer/>
    </main>
  )
}

export default Home
