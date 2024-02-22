
import './App.css'
import CardsFeatures from './components/CardsFeatures/CardsFeatures'
import Brands from './components/brandlogo/Brands'
import Darkmod from './components/darkmode/Darkmod'
import Facts from './components/facts/Facts'
import Foter from './components/foter/Foter'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import News from './components/news/News'
import Portfolio from './components/portfolio/Portfolio'
import Customer from './components/customergallery/Customer'
import Team from './components/team/Team'

function App() {


  return (
    <>
      <div className='relative'>
        <section className='bg-black '>
          <Navbar />
          <Header />

        </section>
        <section className='bg-[#fff] dark:bg-[#191919] '>
          <CardsFeatures />

        </section>
        <section className='bg-[#f8f9fc] dark:bg-[#101010] pb-10 '>
          <Portfolio />

        </section>
        <section className='bg-[#191919] '>
          <Facts />

        </section>
        <section className='bg-[#f8f9fc] '>
          <Team />

        </section>
        <section className='bg-white '>
          <Customer />

        </section>
        <section className='bg-[#f8f9fc]'>
          <News />

        </section>
        <section className='bg-[#fff]'>
          <Brands />

        </section>
        <section className='bg-[#1c1d23]'>
          <Foter />

        </section>
        <div className='fixed bottom-10'>
          <Darkmod />
        </div>

      </div>

    </>
  )
}

export default App