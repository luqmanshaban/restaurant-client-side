import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
        <header>
            <Header />
        </header>
        <main>
            <Main />
        </main>
        <footer>
          <Footer />
        </footer>
    </div>
  )
}

export default Home