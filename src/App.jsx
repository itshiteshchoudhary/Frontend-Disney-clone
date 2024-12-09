import { useState } from "react"
import "./App.css"
import GenerateMovies from "./components/GenerateMovies"
import Header from "./components/Header"
import ProductionHouse from "./components/ProductionHouse"
import Slider from "./components/Slider"
import MovieList from "./components/MovieList"


const App = () => {
  const [searchText, setSearchText] = useState("")
  return (
    <div className="w-full">
      <Header setSearchText={setSearchText} />
      {searchText.length > 0 ? (<MovieList />) : (
        <div>
          <Slider />
          <ProductionHouse />
        </div>
      )}
      <GenerateMovies searchText={searchText} />
    </div>
  )
}

export default App