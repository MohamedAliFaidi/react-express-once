



import { useEffect, useState } from 'react'
import List from "./components/List"
import Navbar from './components/Navbar'
import New from './components/New'
import Filter from './components/Filter'
import { Routes, Route  ,useLocation} from "react-router-dom"
import Movie from './components/Movie'
function App() {
  const [movies, setMovies] = useState([])
  const [filtred, setFiltred] = useState([])
  const location = useLocation()

  const getMovies = async () => {
    const response = await fetch('http://localhost:3000/movies', {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      },
    })
    if (response.ok) {
      const data = await response.json()
      setMovies(data)
    }
  }


  useEffect(() => {
    getMovies()
    console.log(location)
  },
    [])

  return (
    <div>
      <Navbar />
     { !location.pathname.split('/').includes('movie') && <Filter movies={movies} setFiltred={setFiltred} />}

      <Routes>
        <Route path='/' element={<List movies={filtred.length > 0 ? filtred : movies} />} />
        <Route path='/new' element={<New setMovies={setMovies} />} />
        <Route path='/movie/:id' element={<Movie />} />



      </Routes>

    </div>
  )
}

export default App  