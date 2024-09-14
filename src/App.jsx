import "./App.css"
import GenerateMovies from "./components/GenerateMovies"
import Header from "./components/Header"
import ProductionHouse from "./components/ProductionHouse"
import Slider from "./components/Slider"

const App = () => {
  return (
    <div>
      <Header/>
      <Slider/>
      <ProductionHouse/>
      <GenerateMovies/>
    </div>
  )
}

export default App