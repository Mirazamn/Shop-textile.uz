import './App.css'

import SwiperSect from "./components/swiper/swiper"
import Products from "./components/Products/header"
import Header from "./components/Header/app"
import Footer from './components/Footer/App'

function App() {
  return (
        <>
          <Header />
          <SwiperSect />
          <Products />        
          <Footer />
        </>
  )
}

export default App